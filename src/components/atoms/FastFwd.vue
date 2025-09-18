<script setup>
const props = defineProps({
  ffwdInactive: Boolean,
})
</script>

<template>
  <svg @click="$emit('ffwd')" class="audioBtn ffwd" :class="{ inactive: ffwdInactive }" 
    width="48" height="25" viewBox="0 0 96 50" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M87 25L49.5 3.34937V46.6506L87 25Z" />
    <path d="M50 25L12.5 3.34937V46.6506L50 25Z" />
    <rect width="9" height="46" transform="matrix(-1 0 0 1 96 2)" />
  </svg>

</template>
