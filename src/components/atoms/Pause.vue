<template>
  <svg @click="$emit('pause')" class="playBtn"
    width="30" height="30" viewBox="0 0 60 60" fill="none" 
    stroke="black" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="14" width="9" height="32" fill="black" stroke="none" />
    <rect x="33" y="14" width="9" height="32" fill="black" stroke="none" />
    <circle cx="30" cy="30" r="28.5" fill="none" stroke-width="3"/>
  </svg>
</template>
