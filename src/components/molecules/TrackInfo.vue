<template>
  <div class="currentTrackInfo">
    <Textbox :title="track.artist" :artist="track.title" :tracknum="tracknum" />
    &nbsp;
    &nbsp;
    &nbsp;
    <span>{{position}} / {{duration}}</span>
  </div>
</template>

<script>
import Textbox from '../atoms/Textbox.vue'

export default {
  props: ['track','tracknum','position','duration'],
  data() {
    return {
      
    }
  },
  components: {
    Textbox
  }

}
</script>

<style>
div.currentTrackInfo {
  text-align: left;
  border: 1px solid #fd8e32;
  padding: 2px 6px;
  margin: 12px auto;
  font-size: 10px;
}
</style>