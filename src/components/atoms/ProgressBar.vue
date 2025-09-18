<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  position: Number,
  duration: Number
})
const emit = defineEmits(['seek'])
const currentPos = ref(0)
const updatePosition = (p) => {
  currentPos.value = p;
}
const handleChange = (e) => {
  emit('seek',e.target.value);
}
watch(() => props.position, (newVal, oldVal) => {
  updatePosition(newVal)
});
</script>

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
