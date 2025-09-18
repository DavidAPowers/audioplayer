<script setup>
import Pause from './Pause.vue'
import Play from './Play.vue'
const props = defineProps({
  playing: Boolean,
})
</script>
<template>
  <Pause v-if="playing" @click="$emit('pause')" />
  <Play v-else @click="$emit('play')" />  

</template>

<style>

</style>