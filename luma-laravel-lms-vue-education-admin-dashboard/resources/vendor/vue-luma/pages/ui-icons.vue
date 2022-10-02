<template>
  <docs-page 
    :meta="{ nav: meta.nav }"
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :nav-reference="false">

    <fmv-highlight
      id="usage"
      class="card card-body bg-dark"
      lang="html"
      :code="`
        <template>
          <md-icon>help</md-icon>
        </template>

        <script>
          import {MdIcon} from 'vue-luma'

          export default {
            components: {MdIcon}
          }
        </script>
      `" />

    <!-- main component reference information -->
    <component-doc
      :component="meta.component"
      :component-options="meta.componentOptions"
      :slots="meta.slots"
      :aliases="meta.aliases" />

    <icons-app id="search_icons" />
  </docs-page>
</template>

<script>
  // import {
  //   Page,
  //   DocsPage,
  //   ComponentDoc,
  //   IconsApp,
  //   MdIcon
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import DocsPage from '~/components/Docs/DocsPage.vue'
  import ComponentDoc from '~/components/Docs/ComponentDoc.vue'
  import IconsApp from '~/components/DemoIcons/IconsApp.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      DocsPage,
      ComponentDoc,
      IconsApp,
      FmvHighlight
    },
    extends: Page,
    data() {
      return {
        meta: {
          component: 'MdIcon',
          componentOptions: MdIcon,
          nav: ['usage', 'search_icons']
        }
      }
    }
  }
</script>
