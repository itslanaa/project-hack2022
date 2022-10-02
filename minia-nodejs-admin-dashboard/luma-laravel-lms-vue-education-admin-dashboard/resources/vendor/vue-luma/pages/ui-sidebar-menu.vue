<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass"
      :layout-has-sticky-navbar="layoutHasStickyNavbar">

      <fmv-highlight
        id="usage"
        :code="code"
        class="card card-body bg-dark" />

    </docs-page>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   uiPagePropsMixin
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import uiPagePropsMixin from '~/mixins/ui-page-props'
  import {FmvHighlight} from 'fmv-highlight'
  import {FmvSidebarMenu} from 'fmv-layout'

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
          component: 'FmvSidebarMenu',
          componentOptions: FmvSidebarMenu,
          nav: ['usage']
        },
        code: `
          <template>
            <fmv-drawer :align="align">
              <fmv-sidebar
                :align="align"
                type="dark"
                variant="bg-dark">
                <div class="sidebar-p-y">
                  <div class="sidebar-heading">Applications</div>

                  <!-- Apps menu -->
                  <fmv-sidebar-menu 
                    :menu="apps"
                    class="sm-active-button-bg" />

                  <!-- Components menu -->
                  <div class="sidebar-heading">Components</div>
                  <fmv-sidebar-menu :menu="components" />

                </div>
              </fmv-sidebar>
            </fmv-drawer>
          </template>
          
          <script>
          import {FmvDrawer, FmvSidebar, FmvSidebarMenu} from 'fmv-layout'

          export default {
            components: {
              FmvDrawer,
              FmvSidebar,
              FmvSidebarMenu
            },
            data() {
              return {
                align: 'start',
                apps: [
                  {
                    label: 'Student',
                    route: '/',
                    icon: {
                      type: 'md-icon',
                      id: 'account_box'
                    }
                  }
                ],
                components: [
                  {
                    id: 'uiComponents',
                    label: 'User Interface',
                    icon: {
                      type: 'md-icon',
                      id: 'tune'
                    },
                    open: false,
                    children: [
                      {
                        label: 'Forms',
                        route: '/components/ui/forms'
                      }
                    ]
                  }
                ]
              }
            }
          }
          <\/script>
        `
      }
    }
  }
</script>
