<template>
  <ul class="tracklist">
    <template v-for="(track, itemObjKey) in tracklist" :key="track.title">
      <ListItem :track="track" :tracknum="itemObjKey+1" :isCurrent="current==itemObjKey" />
    </template>
  </ul>
</template>

<script>
import ListItem from '../atoms/ListItem.vue'

export default {
  props: ['tracklist','current'],
  components: {
    ListItem
  }  
}
</script>

<style>
ul.tracklist {
  width: 100%;
  border: 2px solid #000000;
  padding: 0;
  margin: 0;
}
li.tracklist-item {
  text-align: left;
  list-style-type: none;
  background: #ccc;
  padding: 2px 6px;
}
li.currentTrack {
  background: #eee;
}
</style>