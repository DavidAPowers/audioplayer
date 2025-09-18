<script setup>
import axios from 'axios';
import { onMounted, ref, reactive, computed } from 'vue'
import TrackInfo from './molecules/TrackInfo.vue'
import Controls from './molecules/Controls.vue'
import Playlist from './molecules/Playlist.vue'
import Audio from './molecules/Audio.vue'

const state = reactive({
  audioState: "stop",
  playing: false,
  tracklist: null,
  currentIndex: 0,
  currentTime: 0,
  seekTime: 0,
  duration: 0,
  tracklistUrl: `https://www.davidapowers.com/api/playlist`
})

onMounted(async () => {
    const fetchedTracklist = await axios.get(state.tracklistUrl)
    state.tracklist = await fetchedTracklist.data;
    console.log(state.tracklist);
})

const track = computed(() => {
  return (state.tracklist ? state.tracklist[state.currentIndex] : {url: '',artist:'',title:''});
})
const tracknum = computed(() => {
  return state.currentIndex + 1;
})
const prettyDuration = computed(() => {
  return prettyTime(state.duration)
})
const prettyPosition = computed(() => {
  return prettyTime(state.currentTime)
})
const rewindInactive = computed(() => {
  return (state.currentIndex===0)
})
const ffwdInactive = computed(() => {
  return (state.currentIndex===state.tracklist.length-1)
})


const handleSeek = (position) => {
  state.seekTime = position;
}
const trackEnd = () => {
  state.duration = 0;
  state.currentTime = 0;
  if(state.currentIndex < state.tracklist.length-1) {
    state.currentIndex = state.currentIndex+1;
  } else {
    state.currentIndex = 0;
    state.audioState = "stop";
    state.playing = false;
  }

}
const prettyTime = (rawtime)  => {
  let seconds = String(Math.floor(rawtime % 60))
  if(seconds.length===1) {seconds = "0" + seconds}
  let minutes = String(Math.floor(rawtime / 60))
  return minutes + ":" + seconds;
}    
const updateDuration = (newDuration)  => {
  state.duration = newDuration;
}
const updateTime = (newTime)  => {
  state.currentTime = newTime;
}
const handleClick = (payload)  => {
switch(payload) {
  case "play":
    //alert("play");
    state.audioState = "play";
    state.playing = true;
    break;
  case "pause":
    state.audioState = "pause";
    state.playing = false;
    break;
  case "stop":
    state.audioState = "stop";
    state.playing = false;
    break;
  case "rewind":
    if(state.currentIndex>0) {state.currentIndex=state.currentIndex-1}
    break;
  case "ffwd":
    if(state.currentIndex<state.tracklist.length-1) {state.currentIndex=state.currentIndex+1}
    break;
  }
}

</script>

<template>
  <div v-if="!state.tracklist" class="audio-player">Loading Playlist...</div>
  <div v-else class="audio-player">
      <TrackInfo :title="track.title" :artist="track.artist" :tracknum="tracknum" :position="prettyPosition" :duration="prettyDuration" />
      <Controls @audioclick="handleClick" @seek="handleSeek" :playing="state.playing" :rewindInactive="state.rewindInactive" 
        :ffwdInactive="state.ffwdInactive" :position="state.currentTime" :duration="state.duration" />
      <Playlist :tracklist="state.tracklist" :current="state.currentIndex" />
      <Audio :source="track.url" v-bind:state="state.audioState" @currentTime="updateTime" 
        @trackLength="updateDuration" @trackEnd="trackEnd" :position="state.currentTime" :seekTime="state.seekTime" />
  </div>
</template>

<style>
div.audio-player {
  max-width: 300px;
  margin: 0 auto;
}

</style>
