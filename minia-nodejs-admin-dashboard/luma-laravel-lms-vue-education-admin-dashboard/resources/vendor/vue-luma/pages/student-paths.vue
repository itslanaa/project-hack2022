<template>
  <div>
    <div 
      :class="containerClass" 
      class="page-section">

      <results-heading
        :enable-sidebar-toggle="resultsHeadingSidebarToggle" 
        label="paths" />

      <page-separator>Development Paths</page-separator>

      <div class="row card-group-row mb-lg-8pt">
        <div
          v-for="item in development"
          :key="item.id" 
          class="col-sm-4 card-group-row__col">
          <account-path-card
            class="card-group-row__card" 
            :title="item.title"
            :description="item.description" 
            :image="item.image"
            :favorite="item.favorite"
            :open="item.open"
            :account="item.account"
            :cta="false" />
        </div>
      </div>

      <pager class="mb-32pt" />

      <page-separator>Design Paths</page-separator>

      <div class="row card-group-row mb-lg-8pt">
        <div
          v-for="item in design"
          :key="item.id" 
          class="col-sm-4 card-group-row__col">
          <account-path-card
            class="card-group-row__card" 
            :title="item.title"
            :description="item.description" 
            :image="item.image"
            :favorite="item.favorite"
            :account="item.account"
            :cta="false" />
        </div>
      </div>

      <pager />

    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   ResultsHeading,
  //   AccountPathCard,
  //   Pager,
  //   PageSeparator,
  //   LibraryDrawer,
  //   LibrarySidebar
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import ResultsHeading from '~/components/ResultsHeading.vue'
  import AccountPathCard from '~/components/Course/AccountPathCard.vue'
  import Pager from '~/components/Ui/Pager.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import LibraryDrawer from '~/components/Courses/LibraryDrawer.vue'
  import LibrarySidebar from '~/components/Courses/LibrarySidebar.vue'

  export default {
    components: {
      ResultsHeading,
      AccountPathCard,
      Pager,
      PageSeparator
    },
    extends: Page,
    props: {
      resultsHeadingSidebarToggle: {
        type: [String, Boolean],
        // true|false or 'mobile'
        default: () => true
      }
    },
    data () {
      return {
        development: [{
          title: 'React Native',
          image: 'react'
        }, {
          title: 'Dev Ops',
          image: 'devops'
        }, {
          title: 'Redis',
          image: 'redis'
        }, {
          title: 'MailChimp',
          image: 'mailchimp',
          open: true,
          favorite: true
        }, {
          title: 'Angular',
          image: 'angular'
        }, {
          title: 'Swift',
          image: 'swift'
        }, {
          title: 'WordPress',
          image: 'wordpress'
        }],
        design: [{
          title: 'Sketch',
          image: 'sketch'
        }, {
          title: 'Flinto',
          image: 'flinto'
        }, {
          title: 'Photoshop',
          image: 'photoshop'
        }, {
          title: 'Figma',
          image: 'figma'
        }, {
          title: 'Adobe XD',
          image: 'xd'
        }, {
          title: 'inVision App',
          image: 'invision'
        }, {
          title: 'Craft by inVision',
          image: 'craft'
        }]
      }
    }
  }
</script>
