<script setup>
import { useTemplateRef, watch } from 'vue'
const props = defineProps({
  source: String,
  state: String,
  position: Number,
  seekTime: Number,
})
const emit = defineEmits(['currentTime','trackLength','trackEnd'])
useTemplateRef('htmlAudio')

watch(() => props.position, (newTime, oldTime) => {
  if(Math.abs(newTime - htmlAudio.currentTime) > 0.1) {
    htmlAudio.currentTime = newTime
  }
})
watch(() => props.state, (newValue, oldValue) => {
  if(newValue==="play") {
    htmlAudio.play()
  } else if(newValue==="pause") {
    htmlAudio.pause()
  } else if(newValue==="stop") {
    htmlAudio.pause()      
    htmlAudio.currentTime = 0
  }
})
watch(() => props.source, (newValue, oldValue) => {
  htmlAudio.load()
  if(props.state==="play") {
    htmlAudio.play()
  }    
})
watch(() => props.seekTime, (newTime, oldTime) => {
  htmlAudio.currentTime = newTime
})

const updateCurrentTime = () => {
  emit('currentTime',htmlAudio.currentTime)
}
const finishedLoading = () => {
  console.log(htmlAudio.duration)
  emit('trackLength',htmlAudio.duration)
}
const trackEnded = () => {
  emit('trackEnd')
}
</script>

<template>
  <audio ref="htmlAudio" id="htmlAudio" @timeupdate="updateCurrentTime" @loadedmetadata="finishedLoading" @ended="trackEnded">
    <source :src="source" type="audio/mp3">
  </audio>
</template>

