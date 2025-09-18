<script setup>
import Textbox from '../atoms/Textbox.vue'
const props = defineProps({
  title: String,
  artist: String,
  tracknum: Number,
  position: String,
  duration: String
})
</script>
<template>
  <div class="currentTrackInfo">
    <Textbox :title="artist" :artist="title" :tracknum="tracknum" />
    &nbsp;
    &nbsp;
    &nbsp;
    <span>{{position}} / {{duration}}</span>
  </div>
</template>

<style>
div.currentTrackInfo {
  text-align: left;
  border: 1px solid #fd8e32;
  padding: 2px 6px;
  margin: 12px auto;
  font-size: 10px;
}
</style>