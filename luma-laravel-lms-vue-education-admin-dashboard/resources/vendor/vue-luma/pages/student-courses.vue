<template>
  <div>
    <div 
      :class="containerClass" 
      class="page-section">
      
      <results-heading
        :enable-sidebar-toggle="resultsHeadingSidebarToggle" />

      <page-separator>Popular Courses</page-separator>

      <div class="row card-group-row">
        <div
          v-for="item in popular"
          :key="item.id" 
          class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <course-card
            :title="item.title"
            :image="item.image"
            :avatar="(item.avatar || item.image)"
            :free="item.free"
            :favorite="item.favorite"
            :position="item.position"
            :open="item.open"
            :author-avatar="item.author_avatar"
            card-class="card-group-row__card"
            class="d-flex w-100" />
        </div>
      </div>

      <pager class="mb-32pt" />

      <page-separator>Development Courses</page-separator>

      <div class="row card-group-row">
        <div
          v-for="item in development"
          :key="item.id" 
          class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <course-card
            :title="item.title"
            :image="item.image"
            :avatar="(item.avatar || item.image)"
            :free="item.free"
            :favorite="item.favorite"
            :position="item.position"
            :open="item.open"
            :author-avatar="item.author_avatar"
            :reveals="false"
            card-class="card-group-row__card"
            class="d-flex w-100" />
        </div>
      </div>

      <pager class="mb-32pt" />

      <page-separator>Design Courses</page-separator>

      <div class="row card-group-row">
        <div
          v-for="item in design"
          :key="item.id" 
          class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <course-card
            :title="item.title"
            :image="item.image"
            :avatar="(item.avatar || item.image)"
            :free="item.free"
            :favorite="item.favorite"
            :position="item.position"
            :open="item.open"
            :author-avatar="item.author_avatar"
            :reveals="false"
            card-class="card-group-row__card"
            class="d-flex w-100" />
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
  //   CourseCard,
  //   LibraryDrawer,
  //   LibrarySidebar,
  //   PageSeparator,
  //   Pager
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import ResultsHeading from '~/components/ResultsHeading.vue'
  import CourseCard from '~/components/Course/CourseCard.vue'
  import LibraryDrawer from '~/components/Courses/LibraryDrawer.vue'
  import LibrarySidebar from '~/components/Courses/LibrarySidebar.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import Pager from '~/components/Ui/Pager.vue'

  export default {
    components: {
      ResultsHeading,
      CourseCard,
      PageSeparator,
      Pager
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
        popular: [{
          title: 'Newsletter Design', 
          image: 'mailchimp',
          open: true,
          favorite: true
        }, {
          title: 'Adobe XD', 
          image: 'xd'
        }, {
          title: 'inVision App', 
          image: 'invision'
        }, {
          title: 'Craft by inVision', 
          image: 'craft'
        }],
        development: [{
          title: 'Learn Angular fundamentals',
          image: 'angular'
        }, {
          title: 'Build an iOS Application in Swift',
          image: 'swift'
        }, {
          title: 'Build a WordPress Website',
          image: 'wordpress'
        }, {
          title: 'Become a React Native Developer', 
          image: 'react', 
          position: 'left'
        }],
        design: [{
          title: 'Learn Sketch',
          image: 'sketch'
        }, {
          title: 'Learn Flinto',
          image: 'flinto'
        }, {
          title: 'Learn Photoshop',
          image: 'photoshop'
        }, {
          title: 'Learn Figma', 
          image: 'figma'
        }]
      }
    }
  }
</script>
