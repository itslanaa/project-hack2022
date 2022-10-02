<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <h4 id="usage">Basic usage</h4>
      <fmv-highlight
        :code="codeBasic"
        class="card card-body bg-dark" />

      <h4 id="content">Content</h4>
      <fmv-highlight
        :code="codeContent"
        class="card card-body bg-dark" />

      <h4 id="navbar">Navbar</h4>
      <fmv-highlight
        :code="codeNavbar"
        class="card card-body bg-dark" />

      <h4 id="sidebar">Sidebar</h4>
      <fmv-highlight
        :code="codeSidebar"
        class="card card-body bg-dark" />

      <h4 id="footer">Footer</h4>
      <fmv-highlight
        :code="codeFooter"
        class="card card-body bg-dark" />

    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   FixedLayout,
  //   uiPagePropsMixin
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import FixedLayout from '~/components/Layout/Fixed.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      DocsPage,
      FmvHighlight
    },
    extends: Page,
    mixins: [uiPagePropsMixin],
    data() {
      return {
        meta: {
          component: 'FixedLayout',
          componentOptions: FixedLayout,
          slots: [
            { name: 'default', description: 'The page content.' },
            { name: 'navbar', description: 'Replace Navbar Component' },
            { name: 'navbar-content', description: 'Replace Navbar Content' },
            { name: 'sidebar', description: 'Replace Sidebar Component' },
            { name: 'sidebar-content', description: 'Replace Sidebar Content' },
            { name: 'footer-content', description: 'Replace Footer Content' },
            { name: 'footer-links', description: 'Replace the footer links' },
            { name: 'footer-copyright-text', description: 'Replace the footer copyright text' },
            { name: 'footer-description-text', description: 'Replace the footer description text' },
            { name: 'footer', description: 'Replace Footer Component' }
          ],
          nav: ['usage', 'content', 'navbar', 'sidebar', 'footer']
        },
        codeBasic: `
          <template>
            <fixed-layout></fixed-layout>
          </template>
          
          <script>
          import {FixedLayout} from 'vue-luma'

          export default {
            components: {
              FixedLayout
            }
          }
          <\/script>
        `,

        codeContent: `
          <fixed-layout>

            <!-- Page Content -->
            <template v-slot:default="{layoutProps}">
              <!-- Nuxt -->
              <nuxt v-bind:layout-props="layoutProps" />

              <!-- or Vue Router -->
              <router-view v-bind:layout-props="layoutProps" />

              <!-- Or Inertia.js -->
              <slot v-bind:layout-props="layoutProps" />
            </template>
            
            <!-- Other -->
            <template v-slot:after-layout>
              <!-- Additional after layout components -->
              <!-- For example, we're adding the app settings here -->
            </template>

          </fixed-layout>
        `,

        codeNavbar: `
          <fixed-layout>

            <!-- Replace Navbar Component -->
            <template v-slot:navbar>
              Replace Navbar Component
            </template>

            <!-- Replace Navbar Content -->
            <template v-slot:navbar-content>
              Replace Navbar Content
            </template>

          </fixed-layout>
        `,

        codeSidebar: `
          <template>
            <fixed-layout
              :sidebar-menu="sidebarMenu">

              <!-- Replace Sidebar Component -->
              <template v-slot:sidebar>
                Replace Sidebar Component
              </template>

              <!-- Replace Sidebar Content -->
              <template v-slot:sidebar-content="{sidebar}">
                <div class="sidebar-heading">Replace Sidebar Content</div>
                
                <fmv-sidebar-menu 
                  :menu="sidebar.menu"
                  class="mb-24pt" />
                
                <pre 
                  class="sidebar-text"
                  v-text="sidebar.menu" />
              </template>

            </fixed-layout>
          </template>
          
          <script>
          import {FixedLayout} from 'vue-luma'
          import {FmvSidebarMenu} from 'fmv-layout'

          export default {
            components: {
              FixedLayout,
              FmvSidebarMenu
            },
            computed() {
              sidebarMenu() {
                return [{
                  "label": "Home",
                  "route": {
                    "name": "layout",
                    "params": {
                      "layout": "default"
                    }
                  },
                  "icon": {
                    "type": "md-icon",
                    "id": "home"
                  }
                }]
              }
            }
          }
          <\/script>
        `,

        codeFooter: `
          <fixed-layout>

            <!-- Footer Content -->
            <template v-slot:footer-content="footerProps">
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
            </template>

            <!-- Footer Links -->
            <template v-slot:footer-links>
              <p class="mb-8pt d-flex">
                <a class="text-70 text-underline mr-8pt small">Terms</a>
                <a class="text-70 text-underline small">Privacy</a>
              </p>
            </template>

            <!-- Footer Copyright Text -->
            <template v-slot:footer-copyright-text>
              Copyright 2020 &copy; All rights reserved!
            </template>

            <!-- Footer Description Text -->
            <template v-slot:footer-description-text>
              Hello World!
            </template>

            <!-- Other -->
            <template v-slot:after-layout>
              <!-- Additional after layout components -->
            </template>

          </fixed-layout>
        `
      }
    }
  }
</script>
