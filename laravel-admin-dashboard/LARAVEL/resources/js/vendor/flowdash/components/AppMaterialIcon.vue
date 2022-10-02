<template>
  <div class="icon">
    <i class="material-icons icon-40pt">{{ icon.name }}</i>
    <small class="title">{{ icon.className }}</small>
  </div>
</template>

<script>
  import AppIcon from './AppIcon'
  export default {
    extends: AppIcon
  }
</script>