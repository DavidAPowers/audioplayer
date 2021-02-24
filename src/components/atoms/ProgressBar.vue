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
import { ref, watch, toRefs } from 'vue'
export default {
  props: ['position','duration','onSeek'],
  emits: ['seek'],
  setup(props, { emit })  {
    const { position } = toRefs(props)
    const currentPos = ref(0)
    const handleChange = (e) => {
      emit('seek',e.target.value);
    }
    const updatePosition = (p) => {
      currentPos.value = p;
    }
    watch(position, (newPosition) => {
      updatePosition(newPosition);
    });
    return {
      currentPos,
      updatePosition,
      handleChange
    }
  },
  
}
</script>

<style>

</style>