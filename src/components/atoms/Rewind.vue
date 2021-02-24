<template>
  <svg  @click="handleClick" class="audioBtn" :class="{ inactive: rewindInactive }"
    width="48" height="25" viewBox="0 0 96 50" fill="black" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 25L46.5 3.34937V46.6506L9 25Z" />
    <path d="M46 25L83.5 3.34937V46.6506L46 25Z" />
    <rect y="2" width="9" height="46" />
  </svg>
</template>

<script>

export default {
  props: ['rewindInactive'],
  setup(props, { emit })  {
    const handleClick = () => {
      emit('rewind')
    }
    return {
      handleClick // functions returned behave the same as methods
    }
  }  
}
</script>

<style>

</style>