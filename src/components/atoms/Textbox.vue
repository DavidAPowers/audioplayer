<template>
  <span>{{tracknum}}. {{track.artist}} - <b>{{track.title}}</b></span>
</template>

<script>

export default {
  props: ['track','tracknum']
}
</script>

<style>

</style>