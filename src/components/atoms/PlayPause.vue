<template>
  <Pause v-if="playing" v-on:pause="handlePause" />
  <Play v-else v-on:play="handlePlay" />  

</template>

<script>
import Pause from './Pause.vue'
import Play from './Play.vue'
export default {
  props: ['playing'],
  components: {
    Play,
    Pause
  },
  setup(props, { emit })  {
    const handlePause = () => {
      emit('pause')
    }
    const handlePlay = () => {
      emit('play')
    }
    return {
      handlePause, handlePlay
    }
  }    
}
</script>

<style>

</style>