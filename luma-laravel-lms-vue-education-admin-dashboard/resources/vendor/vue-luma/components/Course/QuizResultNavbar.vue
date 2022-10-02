<template>
  <b-navbar
    type="light"
    toggleable="sm" 
    class="navbar-submenu navbar-list p-0 m-0 align-items-center">
    <div :class="containerClass">
      <ul class="nav navbar-nav flex align-items-sm-center">
        <li class="nav-item navbar-list__item">350/450 Score</li>
        <li class="nav-item navbar-list__item">
          <md-icon class="text-muted" left>schedule</md-icon>
          12 minutes
        </li>
        <li class="nav-item navbar-list__item">
          <md-icon class="text-muted" left>assessment</md-icon>
          Intermediate
        </li>
      </ul>
    </div>
  </b-navbar>
</template>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    mixins: [layoutConfigMixin]
  }
</script>