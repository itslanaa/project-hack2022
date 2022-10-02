<template>
  <div class="icon">
    <span class="icon-40pt">
      <font-awesome-icon :icon="icon.name" />
    </span>
    <small class="title">{{ icon.className }}</small>
  </div>
</template>

<script>
  import AppIcon from './AppIcon'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
    extends: AppIcon,
    components: {
      FontAwesomeIcon
    }
  }
</script>