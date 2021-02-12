<template>
  <div>
    <PlayPause v-bind:playing="playing" v-on:pause="handleClick('pause')" v-on:play="handleClick('play')"  />
    <Rewind v-on:rewind="handleClick('rewind')" />
    <Stop v-on:stop="handleClick('stop')" />
    <FastFwd v-on:ffwd="handleClick('ffwd')" />  
  </div>
</template>

<script>
import PlayPause from '../atoms/PlayPause.vue'
import Rewind from '../atoms/Rewind.vue'
import Stop from '../atoms/Stop.vue'
import FastFwd from '../atoms/FastFwd.vue'

export default {
  props: ['playing'],
  emits: ['audioclick'],

  components: {
    PlayPause,
    Rewind,
    Stop,
    FastFwd
  },
  methods: {
    handleClick(event) {
      this.$emit("audioclick", event)
    }
    
  }  
}
</script>

<style>
  svg.audioBtn {
    width: 32px;
  }
  svg.audioBtn:hover {
    stroke: #DA4567;
  }
</style>