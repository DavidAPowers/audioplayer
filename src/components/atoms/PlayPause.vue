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
  methods: {
    handlePause() {
      this.$emit('pause')
    },
    handlePlay() {
      this.$emit('play')
    },
  }
}
</script>

<style>

</style>