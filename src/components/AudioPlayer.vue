<template>
  <div class="audio-player">
      <TrackInfo :track="track" :tracknum="tracknum" />
      <Controls v-on:audioclick="handleClick" v-bind:playing="playing" />
      <Playlist class="playlist" :tracklist="tracklist" :current="currentIndex" />
      <Audio :source="track.url" v-bind:state="audioState" />

  </div>

</template>

<script>
import TrackInfo from './molecules/TrackInfo.vue'
import Controls from './molecules/Controls.vue'
import Playlist from './molecules/Playlist.vue'
import Audio from './molecules/Audio.vue'

export default {
  name: 'App',
  
  data() {
    return {
      // Initialized to zero to begin
      audioState: "stop",
      playing: false,
      tracklist: [
        {url: "https://www.davidapowers.com/audio/01__TheProphecy.mp3", artist: "David A Powers", title: "The Prophecy"},
        {url: "https://www.davidapowers.com/audio/07__Fallout%20Blues.mp3", artist: "David A Powers", title: "Fallout Blues"},
        {url: "https://www.davidapowers.com/audio/08__ChildrenOfTheRuins.mp3", artist: "David A Powers", title: "Children of the Ruins"},
      ],
      currentIndex: 0
    }
  },  
  computed: {
    track() {
      return this.tracklist[this.currentIndex];
    },
    tracknum() {
      return this.currentIndex + 1;
    }
  },
  components: {
    TrackInfo,
    Controls,
    Playlist,
    Audio
  },
  methods: {
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
          if(this.currentIndex===0) {this.currentIndex=this.tracklist.length-1}
          else {this.currentIndex = this.currentIndex - 1; }
          this.audioState = "stop";
          this.playing = false;
          break;
        case "ffwd":
          this.currentIndex = (this.currentIndex+1)%this.tracklist.length;
          this.audioState = "stop";
          this.playing = false;
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
  font-size: 10px;
}

</style>
