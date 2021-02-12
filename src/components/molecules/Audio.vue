<template>
  <audio controls ref="htmlAudio" id="htmlAudio" >
    <source :src="source" type="audio/ogg">
  </audio>
</template>

<script>

export default {
  props: ['source','state'],

  watch: {
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
    }
  },


}
</script>

<style>

</style>