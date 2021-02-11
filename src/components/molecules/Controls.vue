<template>
  <h4>Controls</h4>
  <PlayPause v-bind:playing="true" />
  <Rewind />
  <Stop />
  <FastFwd />  
</template>

<script>
import PlayPause from '../atoms/PlayPause.vue'
import Rewind from '../atoms/Rewind.vue'
import Stop from '../atoms/Stop.vue'
import FastFwd from '../atoms/FastFwd.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    PlayPause,
    Rewind,
    Stop,
    FastFwd
  }  
}
</script>

<style>
  svg {
    width: 60px;
  }
</style>