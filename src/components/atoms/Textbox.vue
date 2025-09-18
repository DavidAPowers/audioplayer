<template>
  <span>{{tracknum}}. {{artist}} - <b>{{title}}</b></span>
</template>

<script>

export default {
  props: ['title','artist','tracknum']
}
</script>

<style>

</style>