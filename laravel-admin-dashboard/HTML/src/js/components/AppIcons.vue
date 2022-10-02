<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-auto" v-for="icon in filteredIcons">
        <keep-alive>
          <component :is="iconComponent" :icon="icon"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .col-auto {
    padding: 1rem;
    height: 120px;
    width: 112px;
  }
</style>

<script>
  export default {
    data() {
      return {
        icons: []
      }
    },
    props: {
      search: {
        type: String,
        default: ''
      }
    },
    computed: {
      filteredIcons() {
        const matcher = new RegExp(this.search, 'i')
        return this.icons.filter(icon => matcher.test(icon.name))
      }
    },
    mounted() {
      this.getIcons()
    }
  }
</script>