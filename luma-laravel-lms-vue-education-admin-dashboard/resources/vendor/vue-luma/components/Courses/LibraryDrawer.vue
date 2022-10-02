<template>
  <fmv-drawer 
    id="library-drawer"
    align="end">
    <library-sidebar />
  </fmv-drawer>
</template>

<script>
  // import {LibrarySidebar} from 'vue-luma'
  import LibrarySidebar from '~/components/Courses/LibrarySidebar.vue'

  import {FmvDrawer} from 'fmv-layout'

  export default {
    components: {
      FmvDrawer,
      LibrarySidebar
    }
  }
</script>