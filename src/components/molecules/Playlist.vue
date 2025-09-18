<script setup>
import ListItem from '../atoms/ListItem.vue'
const props = defineProps({
  tracklist: Array,
  current: Number
})
</script>

<template>
  <div class="playlist-heading">Playlist</div>
  <ul class="tracklist">
    <template v-for="(track, itemObjKey) in tracklist" :key="track.title">
      <ListItem :artist="track.artist" :title="track.title" :tracknum="itemObjKey+1" :isCurrent="current==itemObjKey" />
    </template>
  </ul>
</template>

<style>
ul.tracklist {
  width: 100%;
  border: 2px solid #000000;
  padding: 0;
  margin: 0;
  font-size: 10px;

}
li.tracklist-item {
  text-align: left;
  list-style-type: none;
  background: #db9053;
  padding: 2px 6px;
}
li.currentTrack {
  background: #eee;
}
div.playlist-heading {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
}
</style>