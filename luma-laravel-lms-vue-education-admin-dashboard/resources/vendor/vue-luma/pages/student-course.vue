<template>
  <div>
    <fmv-box
      :box-image="' '"
      class="mdk-box--bg-primary bg-dark mb-0"
      data-effects="blend-background">
      <div class="hero py-64pt text-center text-sm-left">
        <div :class="containerClass">
          <h1 
            class="text-white"
            v-text="hero_title" />
          <p 
            class="lead text-white-50 measure-hero-lead"
            v-text="description" />
          <div class="d-flex flex-column flex-sm-row align-items-center justify-content-start">
            <b-btn
              :to="routeTo(routes.studentLesson)"
              variant="outline-white"
              class="mb-16pt mb-sm-0 mr-sm-16pt">
              {{ $t('Watch trailer') }} 
              <md-icon
                right
                v-text="'play_circle_outline'" />
            </b-btn>
            <b-btn
              :to="routeTo(routes.pricing)"
              variant="white"
              v-text="$t('Start your free trial')" />
          </div>
        </div>
      </div>
    </fmv-box>
  
    <course-navbar
      :container-class="containerClass" />

    <div class="page-section border-bottom-2">
      <div :class="containerClass">

        <page-separator 
          :title="$t('Table of Contents')" />

        <div class="row mb-0">
          <div class="col-lg-7">
            <course-toc 
              boxed />
          </div>
          <div class="col-lg-5 justify-content-center">
            <unlock-library-card 
              label="Library" />
          </div>
        </div>
      </div>
    </div>

    <div class="page-section bg-alt border-bottom-2">
      <div :class="containerClass">
        <course-description />
      </div>
    </div>

    <div class="page-section bg-alt border-bottom-2">
      <div :class="containerClass">
        <course-author />
      </div>
    </div>

    <page-feedback
      class="border-bottom-2"
      :container-class="containerClass" />

    <div class="page-section bg-alt border-bottom-2">
      <div :class="containerClass">
        <course-ratings />
      </div>
    </div>

    <div class="page-section">
      <div :class="containerClass">
        <page-heading
          element="h4"
          :custom-class="null"
          v-text="'Top Development Courses'" />

        <courses-carousel
          :account="false" />
      </div>
    </div>

  </div>
</template>

<i18n>
  {
    "ro": {
      "Watch trailer": "Urmărește trailer",
      "Start your free trial": "Începe gratuit",
      "Table of Contents": "Cuprins"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   CourseNavbar,
  //   UnlockLibraryCard,
  //   CourseToc,
  //   CourseDescription,
  //   CourseAuthor,
  //   CourseRatings,
  //   CoursesCarousel,
  //   FeedbackPageSectionCarousel as PageFeedback,
  //   MdIcon,
  //   PageHeading,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import CourseNavbar from '~/components/Course/CourseNavbar.vue'
  import UnlockLibraryCard from '~/components/Course/UnlockLibraryCard.vue'
  import CourseToc from '~/components/Course/CourseToc.vue'
  import CourseDescription from '~/components/Course/CourseDescription.vue'
  import CourseAuthor from '~/components/Course/CourseAuthor.vue'
  import CourseRatings from '~/components/Course/CourseRatings.vue'
  import CoursesCarousel from '~/components/Course/CoursesCarousel.vue'
  import PageFeedback from '~/components/Feedback/FeedbackPageSectionCarousel.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import PageHeading from '~/components/Ui/PageHeading.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  import {FmvBox} from 'fmv-layout'

  export default {
    components: {
      CourseNavbar,
      UnlockLibraryCard,
      CourseToc,
      CourseDescription,
      CourseAuthor,
      CourseRatings,
      CoursesCarousel,
      PageFeedback,
      FmvBox,
      MdIcon,
      PageHeading,
      PageSeparator
    },
    extends: Page,
    data () {
      return {
        hero_title: 'Angular Fundamentals',
        description: 'It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.'
      }
    }
  }
</script>
