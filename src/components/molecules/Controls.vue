<template>
  <div class="audioControls">
    <ProgressBar :position="position" :duration="duration" @seek="handleSeek" />
    <Rewind @rewind="$emit('audioclick', 'rewind')" :rewindInactive="rewindInactive" />
    &nbsp; 
    <PlayPause v-bind:playing="playing" @pause="$emit('audioclick', 'pause')" @play="$emit('audioclick', 'play')"  />   
    &nbsp; 
    <FastFwd @ffwd="$emit('audioclick', 'ffwd')" :ffwdInactive="ffwdInactive"/>  
  </div>
</template>

<script>
import PlayPause from '../atoms/PlayPause.vue'
import Rewind from '../atoms/Rewind.vue'
import FastFwd from '../atoms/FastFwd.vue'
import ProgressBar from '../atoms/ProgressBar.vue'

/*
const emit = defineEmits<{
  change: [id: number] // named tuple syntax
  update: [value: string]
}>()
*/

export default {
  props: ['playing','rewindInactive','ffwdInactive','position','duration'],
  emits: ['audioclick'],

  components: {
    PlayPause,
    Rewind,
    FastFwd,
    ProgressBar,
  },
  methods: {
    handleSeek(payload) {
      this.$emit("seek", payload)
    }
  }  
}
</script>

<style>
  div.audioControls {
    text-align: center;
  }
  svg.playBtn {
    width: 32px;
  }
  svg.audioBtn {
    width: 32px;
    margin: auto 0;
  }
  svg.audioBtn:hover {
    fill: #fd8e32;
  }
  svg.playBtn:hover {
    stroke: #fd8e32;
  }
  svg.playBtn:hover rect, svg.playBtn:hover path {
    fill: #fd8e32;

  }
  svg.inactive, svg.inactive:hover {
    stroke: #ccc;
    fill: #ccc;
  }
  div.progressContainer {
    border: 1px solid #ccc;
    margin: 0 0 6px 0;
    padding: 0;
    height: 16px;
    border-radius: 8px;
  }
  input[type="range"] {
    margin: auto;
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    width: 100%;
    cursor: pointer;
    outline: none;
    border-radius: 0; /* iOS */
    background: transparent;
  }
  input[type="range"]:focus {
    outline: none;
  }
</style>