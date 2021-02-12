<template>
  <Textbox :track="track" :tracknum="tracknum" />
</template>

<script>
import Textbox from '../atoms/Textbox.vue'

export default {
  props: ['track','tracknum'],
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

</style>