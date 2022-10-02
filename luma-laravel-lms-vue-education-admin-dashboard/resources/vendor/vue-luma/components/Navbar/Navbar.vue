<template>
  <b-navbar 
    id="default-navbar"
    :class="navbarClass"
    :type="navbarType"
    :variant="navbarVariant">
    <div :class="navbarContainerClass">

      <!-- Toggle sidebar -->
      <button
        v-fmv-toggle.default-drawer 
        class="navbar-toggler w-auto mr-16pt d-block rounded-0"
        :class="navbarToggleClass" 
        type="button">
        <md-icon>short_text</md-icon>
      </button>

      <slot>
        <navbar-full-content-sample
          :navbar-type="navbarType"
          :navbar-brand="navbarBrand"
          :navbar-brand-class="navbarBrandClass"
          :navbar-search="navbarSearch"
          :navbar-full-sample-guest-mode="navbarFullSampleGuestMode"
          :navbar-content-container-class="navbarContentContainerClass || navbarContainerClass" />
      </slot>

    </div>
  </b-navbar>
</template>

<script>
  // import {NavbarFullContentSample, MdIcon} from 'vue-luma'
  import NavbarFullContentSample from './FullContentSample.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  import navbarProps from '~/components/Layout/navbar-props'
  import navbarContentProps from '~/components/Layout/navbar-content-props'

  export default {
    components: {
      NavbarFullContentSample,
      MdIcon
    },
    mixins: [
      navbarProps,
      navbarContentProps
    ]
  }
</script>
