<template>
  <Play v-if="playing" />
  <Pause v-else />  

</template>

<script>
import Pause from './Pause.vue'
import Play from './Play.vue'
export default {
  props: ['playing'],
  components: {
    Play,
    Pause
  }
}
</script>

<style>

</style>