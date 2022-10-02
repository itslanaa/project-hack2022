<template>
  <fixed-layout
    :body-class="bodyClass"
    :container-class="containerClass"
    :drawer-align="mainDrawerAlign"
    :sidebar-type="sidebarType"
    :sidebar-variant="sidebarVariant"
    :sidebar-brand="$store.state.brand"
    :sidebar-search="sidebarSearch"
    sidebar-search-form-class="search-form--black"
    :sidebar-brand-class="sidebarBrandClass"
    :sidebar-menu="$store.getters['sidebarMenuConfig/layoutMenu']"
    :header-class="headerClass"
    :header-effects="headerEffects"
    :header-image="headerImage"
    :header-content-class="headerContentClass"
    :header-condenses="headerCondenses"
    :header-content-component="headerContentComponent"
    :header-content-component-props="headerContentComponentProps"
    :sub-layout="subLayout"
    :sub-layout-has-scrolling-region="subLayoutHasScrollingRegion"
    :sub-layout-drawer="subLayoutDrawer"
    :sub-layout-drawer-id="subLayoutDrawerId"
    :sub-layout-drawer-align="subLayoutDrawerAlign"
    :navbar-type="navbarType"
    :navbar-variant="navbarVariant"
    :navbar-container-class="navbarContainerClass"
    :navbar-brand="$store.state.brand"
    :navbar-full-sample-guest-mode="! isLoggedIn"
    :footer-brand="$store.state.brand">

    <!-- Replace Navbar Component -->
    <!-- <template v-slot:navbar>
      <div class="navbar-height bg-white px-3">Replace Navbar Component</div>
    </template> -->

    <!-- Replace Navbar Content -->
    <!-- <template v-slot:navbar-content>
      Replace Navbar Content
    </template> -->

    <!-- Replace Sidebar Component -->
    <!-- <template v-slot:sidebar>
      Replace Sidebar Component
    </template> -->

    <!-- Replace Sidebar Content -->
    <!-- <template v-slot:sidebar-content="{sidebar}">
      <div class="sidebar-heading">Replace Sidebar Content</div>
      <pre 
        class="sidebar-text"
        v-text="sidebar.menu" />
    </template> -->

    <!-- Page Content -->
    <template v-slot:default="{layoutProps}">
      <slot v-bind:layout-props="layoutProps" />
    </template>

    <!-- Footer Content -->
    <!-- <template v-slot:footer-content="footerProps">
      <p class="text-70 brand mb-24pt">
        <img 
          class="brand-icon" 
          :src="footerProps.footerLogo" 
          width="30" 
          :alt="footerProps.footerBrand"> 
        {{ footerProps.footerBrand }}
      </p>

      <p class="text-50 measure-lead-max small">A beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>

      <pre v-text="footerProps" />
    </template> -->

    <!-- Footer Links -->
    <!-- <template v-slot:footer-links>
      <p class="mb-8pt d-flex">
        <a class="text-70 text-underline mr-8pt small">Terms</a>
        <a class="text-70 text-underline small">Privacy</a>
      </p>
    </template> -->

    <!-- Footer Copyright Text -->
    <!-- <template v-slot:footer-copyright-text>
      Copyright 2020 &copy; All rights reserved!
    </template> -->

    <!-- Footer Description Text -->
    <!-- <template v-slot:footer-description-text>
      Hello World!
    </template> -->

    <!-- Replace Footer Component -->
    <!-- <template v-slot:footer>
      Replace Footer Component
    </template> -->

    <!-- App Settings -->
    <template v-slot:after-layout>
      <no-ssr>
        <app-settings
          v-if="$store.state.settings.ui"
          v-bind="{ routeLayout: layout }" />
      </no-ssr>
    </template>

  </fixed-layout>
</template>

<script>
  import {FixedLayout} from 'vue-luma'
  import AppSettings from '@/Components/Settings'

  import mainDrawerMixin from '@/Mixins/main-drawer'
  import sidebarConfigMixin from '@/Mixins/sidebar-config'
  import navbarConfigMixin from '@/Mixins/navbar-config'
  import layoutConfigMixin from '@/Mixins/layout-config'
  import subLayoutMixin from '@/Mixins/sub-layout'

  export default {
    components: {
      FixedLayout,
      AppSettings,
    },
    mixins: [
      mainDrawerMixin,
      sidebarConfigMixin,
      navbarConfigMixin,
      layoutConfigMixin,
      subLayoutMixin,
    ],
    data() {
      return {
        headerClass: null,
        headerEffects: 'waterfall',
        headerImage: null,
        headerContentClass: null,
        headerCondenses: false,
        headerContentComponent: null,
        headerContentComponentProps: null
      }
    },
    computed: {
      bodyClass() {
        return null
      },
      sidebarSearch() {
        return true
      },
      sidebarBrandClass() {
        return null
      },
      sidebarConfigKey() {
        return this.mainDrawerSidebar
      },
    },
    created() {
      this.$root.$on('luma::headerClass', headerClass => this.headerClass = headerClass)
      this.$root.$on('luma::headerEffects', headerEffects => this.headerEffects = headerEffects)
      this.$root.$on('luma::headerImage', headerImage => this.headerImage = headerImage)
      this.$root.$on('luma::headerContentClass', headerContentClass => this.headerContentClass = headerContentClass)
      this.$root.$on('luma::headerCondenses', headerCondenses => this.headerCondenses = headerCondenses)
      this.$root.$on('luma::headerContentComponent', headerContentComponent => this.headerContentComponent = headerContentComponent)
      this.$root.$on('luma::headerContentComponentProps', headerContentComponentProps => this.headerContentComponentProps = headerContentComponentProps)
    }
  }
</script>
