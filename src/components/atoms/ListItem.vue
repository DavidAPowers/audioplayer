<script setup>
const props = defineProps({
  isCurrent: Boolean,
  tracknum: Number,
  title: String,
  artist: String
})
</script>

<template>
  <li class='tracklist-item' :class="{ currentTrack: isCurrent }">
    {{tracknum}}. {{artist}} - <b>{{title}}</b>
  </li>
</template>


