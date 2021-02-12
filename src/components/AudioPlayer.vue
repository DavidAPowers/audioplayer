<template>
  <h2>Audio Player</h2>
  <TrackInfo />
  <Controls v-on:audioclick="handleClick" v-bind:playing="playing" />
  <Playlist />
  <Audio source="https://www.davidapowers.com/audio/07__Fallout%20Blues.mp3" v-bind:state="audioState" />

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
      playing: false
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
          alert('rewind');
          break;
        case "ffwd":
          alert('ffwd');
          break;
      }
    }
  }
}
</script>

<style>

</style>
