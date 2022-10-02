<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    
    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <resume-course />
      </div>
    </div>

    <div :class="containerClass">
      <div class="page-section">

        <page-separator>Learning Paths</page-separator>

        <div class="row card-group-row mb-lg-8pt">
          <div
            v-for="item in paths" 
            :key="item.id"
            class="col-sm-4 card-group-row__col">
            <account-path-card
              class="card-group-row__card"
              :title="item.title"
              :description="item.description"
              :image="item.image"
              :favorite="item.favorite"
              :account="true"
              :cta="true" />
          </div>
        </div>

        <div class="mb-32pt">
          <pager />
        </div>

        <page-separator>Development Courses</page-separator>

        <div class="row card-group-row">
          <div
            v-for="item in development_courses" 
            :key="item.id"
            class="col-lg-3 card-group-row__col">
            <course-card
              :account="true"
              :title="item.title"
              :image="item.image"
              :avatar="(item.avatar || item.image)"
              :free="item.free"
              :favorite="item.favorite"
              :position="item.position"
              :open="item.open"
              :reveals="false"
              card-class="card-group-row__card"
              class="d-flex w-100" />
          </div>
        </div>

        <div class="mb-32pt">
          <pager />
        </div>

        <page-separator>Design Courses</page-separator>

        <div class="row card-group-row">
          <div
            v-for="item in design_courses" 
            :key="item.id"
            class="col-lg-3 card-group-row__col">
            <course-card
              :account="true"
              :title="item.title"
              :image="item.image"
              :avatar="(item.avatar || item.image)"
              :free="item.free"
              :favorite="item.favorite"
              :position="item.position"
              :open="item.open"
              :reveals="false"
              card-class="card-group-row__card"
              class="d-flex w-100" />
          </div>
        </div>

        <div class="mb-32pt">
          <pager />
        </div>

        <page-separator>Achievements</page-separator>
        <achievements-carousel-multi />

      </div>
    </div>

  </div>
</template>

<script>
  // import {
  //   Page,
  //   ResumeCourse,
  //   AccountPathCard,
  //   CourseCard,
  //   Pager,
  //   AchievementsCarouselMulti,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import ResumeCourse from '~/components/Course/ResumeCourse.vue'
  import AccountPathCard from '~/components/Course/AccountPathCard.vue'
  import CourseCard from '~/components/Course/CourseCard.vue'
  import Pager from '~/components/Ui/Pager.vue'
  import AchievementsCarouselMulti from '~/components/Student/Dashboard/AchievementsCarouselMulti.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      ResumeCourse,
      AccountPathCard,
      CourseCard,
      Pager,
      AchievementsCarouselMulti,
      PageHeader,
      PageSeparator
    },
    extends: Page,
    data () {
      return {
        paths: [{
          title: 'Angular',
          image: 'angular',
          description: 'Angular is a platform for building mobile and desktop web applications.',
          favorite: true
        }, {
          title: 'Swift',
          image: 'swift',
          description: 'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond.'
        }, {
          title: 'React Native',
          image: 'react'
        }, {
          title: 'WordPress',
          image: 'wordpress',
          description: 'WordPress is open source software you can use to create a beautiful website, blog, or app.'
        }, {
          title: 'Dev Ops',
          image: 'devops'
        }, {
          title: 'Redis',
          image: 'redis'
        }],
        development_courses: [{
          title: 'Learn Angular fundamentals',
          image: 'angular',
          free: true
        }, {
          title: 'Build an iOS Application in Swift',
          image: 'swift',
          favorite: true
        }, {
          title: 'Build a WordPress Website',
          image: 'wordpress'
        }, {
          title: 'Become a React Native Developer',
          image: 'react',
          position: 'left'
        }],
        design_courses: [{
          title: 'Learn Sketch',
          image: 'sketch',
          open: true
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
