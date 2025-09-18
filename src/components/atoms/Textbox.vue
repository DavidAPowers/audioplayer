<script setup>
const props = defineProps({
  tracknum: Number,
  title: String,
  artist: String
})
</script>

<template>
  <span>{{tracknum}}. {{artist}} - <b>{{title}}</b></span>
</template>
