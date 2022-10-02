<template>
  <fmv-drawer 
    id="messages-drawer"
    align="end">
    <messages-sidebar />
  </fmv-drawer>
</template>

<script>
  import {FmvDrawer} from 'fmv-layout'
  // import {MessagesSidebar} from 'vue-luma'
  import MessagesSidebar from './MessagesSidebar.vue'

  export default {
    components: {
      FmvDrawer,
      MessagesSidebar
    }
  }
</script>