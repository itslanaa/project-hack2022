<template>
  <div />
</template>

<script>
  export default {
    layout: 'blank',
    created() {
      this.$store.dispatch('auth/logout')
        .then(this.onLogout)
        .catch(this.onLogout)
    },
    methods: {
      onLogout() {
        this.$inertia.get(this.routes.home, {}, { replace: true })
      }
    }
  }
</script>