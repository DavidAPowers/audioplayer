<template>
  <li class='tracklist-item' :class="{ currentTrack: isCurrent }">
    {{tracknum}}. {{track.artist}} - <b>{{track.title}}</b>
  </li>
</template>

<script>

export default {
  props: ['track','tracknum','isCurrent']
}
</script>

<style>

</style>