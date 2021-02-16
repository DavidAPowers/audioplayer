<template>
  <audio ref="htmlAudio" id="htmlAudio" @timeupdate="updateCurrentTime" @loadedmetadata="finishedLoading" @ended="trackEnded">
    <source :src="source" type="audio/mp3">
  </audio>
</template>

<script>

export default {
  props: ['source','state','position','seekTime'],
  watch: {
    position(newTime) {
      /* Throttle the emission of position change to improve performance */
      if(Math.abs(newTime - this.$refs.htmlAudio.currentTime) > 0.1) {
        this.$refs.htmlAudio.currentTime = newTime;
      }
    },
    state(newValue) {
      if(newValue==="play") {
        this.$refs.htmlAudio.play();
      } else if(newValue==="pause") {
        this.$refs.htmlAudio.pause();
      } else if(newValue==="stop") {
        this.$refs.htmlAudio.pause();        
        this.$refs.htmlAudio.currentTime = 0;      
      }
    },
    source() {
      this.$refs.htmlAudio.load();   
      if(this.state==="play") {
        this.$refs.htmlAudio.play();
      }
    },
    seekTime(newTime) {
      this.$refs.htmlAudio.currentTime = newTime;
    }
  },
  methods: {
    updateCurrentTime() {
      this.$emit('currentTime',this.$refs.htmlAudio.currentTime)
    },
    finishedLoading() {
      this.$emit('trackLength',this.$refs.htmlAudio.duration)
    },
    trackEnded() {
      this.$emit('trackEnd')
    }
  }

}
</script>

<style>

</style>