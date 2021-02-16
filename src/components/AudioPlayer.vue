<template>
  <div v-if="!tracklist" class="audio-player">Loading Playlist...</div>
  <div v-else class="audio-player">
      <TrackInfo :track="track" :tracknum="tracknum" :position="prettyPosition" :duration="prettyDuration" />
      <Controls @audioclick="handleClick" @seek="handleSeek" :playing="playing" :rewindInactive="rewindInactive" 
        :ffwdInactive="ffwdInactive" :position="currentTime" :duration="duration" />
      <Playlist class="playlist" :tracklist="tracklist" :current="currentIndex" />
      <Audio :source="track.url" v-bind:state="audioState" @currentTime="updateTime" 
        @trackLength="updateDuration" @trackEnd="trackEnd" :position="currentTime" :seekTime="seekTime" />
  </div>
</template>

<script>
import axios from 'axios';
import TrackInfo from './molecules/TrackInfo.vue'
import Controls from './molecules/Controls.vue'
import Playlist from './molecules/Playlist.vue'
import Audio from './molecules/Audio.vue'

export default {
  name: 'AudioPlayer',
  async created() {
    const tracklist = await axios.get(`https://www.davidapowers.com/api/playlist`)
    if (tracklist.data) {
      this.tracklist = tracklist.data;
    }
  },  
  data() {
    return {
      // Initialized to zero to begin
      audioState: "stop",
      playing: false,
      tracklist: null,
      currentIndex: 0,
      currentTime: 0,
      seekTime: 0,
      duration: 0
    }
  },
  computed: {
    track() {
      return (this.tracklist ? this.tracklist[this.currentIndex] : {url: '',artist:'',title:''});
    },
    tracknum() {
      return this.currentIndex + 1;
    },

    prettyDuration() {
      return this.prettyTime(this.duration)
    },
    prettyPosition() {
      return this.prettyTime(this.currentTime)
    },
    rewindInactive() {
      return (this.currentIndex===0)
    },
    ffwdInactive() {
      return (this.currentIndex===this.tracklist.length-1)
    }
  },
  components: {
    TrackInfo,
    Controls,
    Playlist,
    Audio
  },
  methods: {
    handleSeek(position) {
      this.seekTime = position;
    },
    trackEnd() {
      this.duration = 0;
      this.currentTime = 0;
      if(this.currentIndex < this.tracklist.length-1) {
        this.currentIndex = this.currentIndex+1;
      }
    },
    prettyTime(rawtime) {
      let seconds = String(Math.floor(rawtime % 60))
      if(seconds.length===1) {seconds = "0" + seconds}
      let minutes = String(Math.floor(rawtime / 60))
      return minutes + ":" + seconds;
    },    
    updateDuration(newDuration) {
      this.duration = newDuration;
    },
    updateTime(newTime) {
      this.currentTime = newTime;
    },
    handleClick(payload) {
      switch(payload) {
        case "play":
          //alert("play");
          this.audioState = "play";
          this.playing = true;
          break;
        case "pause":
          this.audioState = "pause";
          this.playing = false;
          break;
        case "stop":
          this.audioState = "stop";
          this.playing = false;
          break;
        case "rewind":
          if(this.currentIndex>0) {this.currentIndex=this.currentIndex-1}
          break;
        case "ffwd":
          if(this.currentIndex<this.tracklist.length-1) {this.currentIndex=this.currentIndex+1}
          break;
      }
    }
  }
}
</script>

<style>
div.audio-player {
  max-width: 300px;
  margin: 0 auto;
}

</style>
