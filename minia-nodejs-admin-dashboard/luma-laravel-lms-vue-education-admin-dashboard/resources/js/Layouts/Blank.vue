<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t(this.title)} - Luma`
    }
  },
  data() {
    return {
      title: null
    }
  }
}
</script>
