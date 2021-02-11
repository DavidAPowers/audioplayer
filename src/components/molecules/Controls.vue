<template>
  <h4>Controls</h4>
  <Pause />
  <Play />
  <Rewind />
  <Stop />
  <FastFwd />  
</template>

<script>
import Pause from '../atoms/Pause.vue'
import Play from '../atoms/Play.vue'
import Rewind from '../atoms/Rewind.vue'
import Stop from '../atoms/Stop.vue'
import FastFwd from '../atoms/FastFwd.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    Pause,
    Play,
    Rewind,
    Stop,
    FastFwd
  }  
}
</script>

<style>

</style>