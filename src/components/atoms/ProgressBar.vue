<template>
  <div class="progressContainer">
    <input
      @input="handleChange"
      :value="currentPos"
      :max="duration"
      type="range"
      min="0"
      class="slider"
      id="position"
      name="position"
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentPos:0,
    }
  }, 
  props: ['position','duration'],
  methods: {
    handleChange(e) {
      this.$emit('seek',e.target.value)
    }
  },
  
  watch: {
    /* Throttle position changes so that slider events can get out*/
    position(newValue) {
      if(Math.abs(newValue - this.currentPos) > 0.99) {
        this.currentPos = newValue;
      }
    }
  }  
  
}
</script>

<style>

</style>