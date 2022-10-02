<template>
  <div
    :class="[ subLayout ? 'h-100vh' : null ]">
    <fmv-header-layout 
      content-id="header-layout-content"
      :content-class="[ 'page-content', subLayout ? 'h-100vh' : null ]"
      :header-effects="headerEffects"
      :header-image="headerImage"
      :header-content-class="headerContentClass"
      :header-condenses="headerCondenses"
      :header-class="[headerClass, (subLayout ? 'mb-0' : null)]">

      <template slot="header">
        <slot name="navbar">
          <app-navbar
            data-primary
            :navbar-type="navbarType"
            :navbar-variant="navbarVariant"
            :navbar-brand="navbarBrand"
            :navbar-brand-class="navbarBrandClass"
            :navbar-container-class="subLayout ? 'container-fluid' : navbarContainerClass"
            :navbar-content-container-class="navbarContentContainerClass"
            :navbar-toggle-class="navbarToggleClass"
            :navbar-full-sample-guest-mode="navbarFullSampleGuestMode"
            class="p-0">
            <slot name="navbar-content" />
          </app-navbar>
        </slot>

        <component
          :is="headerContentComponent"
          v-if="headerContentComponent"
          v-bind="headerContentComponentProps" />
      </template>

      <fmv-drawer-layout 
        v-if="subLayout"
        :responsive-width="subLayoutResponsiveWidth"
        :has-scrolling-region="subLayoutHasScrollingRegion"
        :drawer-id="subLayoutDrawerId"
        :drawer-align="subLayoutDrawerAlign"
        drawer-classes="sub-layout-drawer"
        content-id="sub-layout-content"
        fullbleed
        @ps-scroll-y="$root.$emit('bv::hide::popover')">
        <slot v-bind:layout-props="defaultSlotProps" />

        <component
          :is="subLayoutDrawer"
          v-if="subLayoutDrawer"
          slot="drawer" />
      </fmv-drawer-layout> 
      
      <template v-else>
        <slot v-bind:layout-props="defaultSlotProps" />

        <slot name="footer">
          <app-footer
            v-if="hasFooter"
            :container-class="footerContainerClass || containerClass"
            :footer-class="footerClass" 
            :footer-brand="footerBrand"
            :footer-logo="footerLogo"
            :footer-copyright-year="footerCopyrightYear"
            :footer-copyright-text="footerCopyrightText"
            :footer-description-text="footerDescriptionText">
            <template v-slot:default="footerProps">
              <slot 
                name="footer-content"
                v-bind="footerProps" />
            </template>

            <template v-slot:description-text>
              <slot name="footer-description-text" />
            </template>

            <template v-slot:copyright-text>
              <slot name="footer-copyright-text" />
            </template>

            <template v-slot:links>
              <slot name="footer-links" />
            </template>
          </app-footer>
        </slot>
      </template>
    </fmv-header-layout>
    
    <fmv-drawer :align="drawerAlign">
      <slot name="sidebar">
        <app-sidebar
          :sidebar-search="sidebarSearch"
          :sidebar-search-form-class="sidebarSearchFormClass"
          :sidebar-brand="sidebarBrand"
          :sidebar-brand-class="sidebarBrandClass"
          :sidebar-type="sidebarType"
          :sidebar-variant="sidebarVariant"
          :sidebar-menu="sidebarMenu">
          <template v-slot:default="{sidebar}">
            <slot 
              name="sidebar-content"
              v-bind:sidebar="sidebar" />
          </template>
        </app-sidebar>
      </slot>
    </fmv-drawer>
    
    <slot name="after-layout" />

    <component
      :is="subLayoutDrawer"
      v-if="subLayoutDrawer && !subLayout" />
  </div>
</template>

<script>
  import {
    FmvHeaderLayout, 
    FmvDrawerLayout, 
    FmvDrawer
  } from 'fmv-layout'

  // import {
  //   AppNavbar, 
  //   AppSidebar, 
  //   AppFooter
  // } from 'vue-luma'
  
  import AppNavbar from '~/components/Navbar/Navbar.vue'
  import AppSidebar from '~/components/Sidebar/Sidebar.vue'
  import AppFooter from '~/components/Footer/Footer.vue'

  import pageProps from './page-props'
  import subLayoutProps from './sub-layout-props'
  import sidebarProps from './sidebar-props'
  import navbarProps from './navbar-props'
  import navbarContentProps from './navbar-content-props'
  import footerProps from './footer-props'

  export default {
    components: {
      FmvHeaderLayout,
      FmvDrawerLayout,
      FmvDrawer,
      AppNavbar,
      AppSidebar,
      AppFooter
    },
    mixins: [
      pageProps,
      subLayoutProps,
      sidebarProps,
      navbarProps,
      navbarContentProps,
      footerProps
    ],
    props: {
      /** Layout */

      containerClass: {
        type: [String, Array, Object],
        default: () => 'container page__container'
      },

      /** Header */

      headerClass: {
        type: [String, Array, Object],
        default: () => null
      },
      headerEffects: {
        type: String,
        default: () => 'waterfall'
      },
      headerImage: {
        type: String,
        default: () => null
      },
      headerContentClass: {
        type: String,
        default: () => null
      },
      headerCondenses: {
        type: Boolean
      },
      headerContentComponent: {
        type: Object,
        default: () => null
      },
      headerContentComponentProps: {
        type: Object,
        default: () => null
      },

      /** Main Drawer */

      drawerAlign: {
        type: String,
        default: () => 'start'
      }
    },
    data() {
      return {
        defaultBodyClass: 'layout-fixed'
      }
    }
  }
</script>
