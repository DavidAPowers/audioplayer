<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h2>Atoms</h2>
  <Textbox text="01. Cyborg K: The Prophecy" />
  <PlayPause v-bind:playing="true" />
  <PlayPause v-bind:playing="false" />

  <Rewind />
  <Stop />
  <FastFwd />
  <ListItem text="01. Cyborg K: The Prophecy"/>

  <h2>Molecules</h2>
  <TrackInfo />
  <Controls />
  <Playlist />

</template>

<script>
import Textbox from './components/atoms/Textbox.vue'
import PlayPause from './components/atoms/PlayPause.vue'
import Rewind from './components/atoms/Rewind.vue'
import Stop from './components/atoms/Stop.vue'
import FastFwd from './components/atoms/FastFwd.vue'
import ListItem from './components/atoms/ListItem.vue'

import TrackInfo from './components/molecules/TrackInfo.vue'
import Controls from './components/molecules/Controls.vue'
import Playlist from './components/molecules/Playlist.vue'

export default {
  name: 'App',
  components: {
    Textbox,
    PlayPause,
    Rewind,
    Stop,
    FastFwd,
    ListItem,
    TrackInfo,
    Controls,
    Playlist
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
