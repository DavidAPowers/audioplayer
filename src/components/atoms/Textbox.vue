<template>
  <p>{{tracknum}}. {{track.artist}} - <b>{{track.title}}</b></p>
</template>

<script>

export default {
  props: ['track','tracknum']
}
</script>

<style>

</style>