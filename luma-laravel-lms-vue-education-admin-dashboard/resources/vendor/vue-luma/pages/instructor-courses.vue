<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div 
      :class="containerClass"
      class="page-section">

      <page-separator 
        :title="$t('Development Courses')" />

      <div class="row">
        <div
          v-for="item in development"
          :key="item.id" 
          class="col-sm-6 col-md-4 col-xl-3">
          <instructor-course-card
            :title="item.title"
            :image="item.image" 
            :avatar="(item.avatar || item.image)"
            :position="item.position"
            :open="item.open"
            compact />
        </div>
      </div>

      <pager 
        class="mb-32pt" />

      <page-separator 
        :title="$t('Design Courses')" />

      <div class="row">
        <div 
          v-for="item in design"
          :key="item.id"
          class="col-sm-6 col-md-4 col-xl-3">
          <instructor-course-card
            :title="item.title"
            :image="item.image" 
            :avatar="(item.avatar || item.image)"
            :position="item.position"
            :open="item.open"
            compact />
        </div>
      </div>

      <pager />
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Development Courses": "Cursuri Programare",
      "Design Courses": "Cursuri Design"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   InstructorCourseCard,
  //   PageHeader,
  //   PageSeparator,
  //   Pager
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import InstructorCourseCard from '~/components/Instructor/InstructorCourseCard.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import Pager from '~/components/Ui/Pager.vue'

  export default {
    components: {
      InstructorCourseCard,
      PageHeader,
      PageSeparator,
      Pager
    },
    extends: Page,
    props: {
      development: {
        type: Array,
        default: () => [{
          title: 'Learn Angular fundamentals',
          image: 'angular',
          open: true
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
        }]
      },
      design: {
        type: Array,
        default: () => [{
          title: 'Learn Sketch',
          image: 'sketch'
        }, {
          title: 'Learn Flinto',
          image: 'flinto'
        }, {
          title: 'Learn Photoshop',
          image: 'photoshop'
        }, {
          title: 'Newsletter Design',
          image: 'mailchimp'
        }]
      }
    }
  }
</script>
