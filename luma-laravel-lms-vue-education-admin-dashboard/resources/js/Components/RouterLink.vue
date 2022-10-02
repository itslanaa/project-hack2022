<template>
  <inertia-link :href="to">
    <slot />
  </inertia-link>
</template>

<script>
  export default {
    props: ['to']
  }
</script>