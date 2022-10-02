<template>
  <div>
    <div 
      class="mdk-box bg-primary js-mdk-box mb-0" 
      data-effects="blend-background">
      <div class="mdk-box__content">
        <div class="hero py-64pt text-center text-sm-left">
          <div :class="containerClass">
            <h1 class="text-white">Angular Fundamentals</h1>
            <p class="lead text-white-50 measure-hero-lead mb-24pt">It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.</p>
            <b-btn 
              :to="routeTo(routes.studentTakeLesson)" 
              variant="white"
              v-text="$t('Resume course')" />
          </div>
        </div>
        <course-navbar
          :container-class="containerClass" />
      </div>
    </div>

    <div :class="containerClass">
      <div class="row">
        <div class="col-lg-7">
          <div
            id="course-toc" 
            class="border-left-2 page-section pl-32pt">

            <div
              v-for="(section, index) in sections"
              :key="section.id">

              <div class="d-flex align-items-center page-num-container">
                <div 
                  class="page-num"
                  v-text="index + 1" />
                <h4 v-text="section.title" />
              </div>

              <p
                v-if="section.description" 
                class="text-70 mb-24pt" 
                v-text="section.description" />

              <course-toc
                :guest="false"
                :value="[{
                  id: section.id,
                  visible: section.visible,
                  title: 
                    section.items.filter(item => !!item.done).length 
                      ? $t('done_of_steps', { 
                        done: section.items.filter(item => !!item.done).length,
                        steps: section.items.length
                      })
                      : $t('steps', { steps: section.items.length }),
                  items: section.items
                }]"
                accordion-id="course-toc"
                boxed
                :class="[ index < sections.length - 1 ? 'mb-32pt mb-lg-40pt' : null ]"
                @change="section.visible = $event[0].visible" />
            </div>

          </div>
        </div>
        <div 
          class="col-lg-5 page-nav"
          :style="{ top: $root.layoutName === 'default' ? '0px' : '4rem' }">
          <div class="page-section">
            <div class="page-nav__content">
              <page-separator :title="$t('Table of Contents')" />
            </div>
            <nav class="nav page-nav__menu">
              <b-link
                v-for="section in sections"
                :key="`nav-${section.id}`" 
                class="nav-link"
                :class="{ active: section.visible }"
                v-text="section.title" />
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section bg-alt border-top-2 border-bottom-2">
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
    "en": {
      "done_of_steps": "{done} of {steps} steps",
      "steps": "{steps} steps"
    },
    "ro": {
      "Resume course": "Continuă cursul",
      "Table of Contents": "Cuprins",
      "done_of_steps": "{done} din {steps} pași",
      "steps": "{steps} pași"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   CourseNavbar,
  //   CourseToc,
  //   CourseDescription,
  //   CourseAuthor,
  //   CourseRatings,
  //   CoursesCarousel,
  //   FeedbackPageSectionCarousel as PageFeedback,
  //   PageHeading,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import CourseNavbar from '~/components/Course/CourseNavbar.vue'
  import CourseToc from '~/components/Course/CourseToc.vue'
  import CourseDescription from '~/components/Course/CourseDescription.vue'
  import CourseAuthor from '~/components/Course/CourseAuthor.vue'
  import CourseRatings from '~/components/Course/CourseRatings.vue'
  import CoursesCarousel from '~/components/Course/CoursesCarousel.vue'
  import PageFeedback from '~/components/Feedback/FeedbackPageSectionCarousel.vue'
  import PageHeading from '~/components/Ui/PageHeading.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      CourseNavbar,
      CourseToc,
      CourseDescription,
      CourseAuthor,
      CourseRatings,
      CoursesCarousel,
      PageFeedback,
      PageHeading,
      PageSeparator
    },
    extends: Page,
    data () {
      return {
        sections: [{
          id: 1,
          visible: false,
          title: 'Course Overview',
          description: 'It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.',
          items: [{
            id: 1,
            title: 'Watch Trailer',
            duration: '1m 10s',
            type: 'lesson',
            done: true
          }]
        }, {
          id: 2,
          visible: true,
          title: 'Getting Started with Angular',
          description: 'Good tools make application development quick*er and easier to maintain than* if you did everything by hand. The goal in this guide is to build and run a simple Angular application in TypeScript, using the Angular CLI while adhering to the Style Guide recommendations that benefit every Angular project.',
          items: [{
            id: 2,
            title: 'Introduction',
            duration: '8m 42s',
            type: 'lesson',
            done: true
          }, {
            id: 3,
            title: 'Introduction to TypeScript',
            duration: '50m 13s',
            type: 'lesson',
            active: true
          }, {
            id: 4,
            title: 'Comparing Angular to AngularJS',
            duration: '12m 10s',
            type: 'lesson'
          }, {
            id: 5,
            title: 'Quiz: Getting Started With Angular',
            icon: 'hourglass_empty',
            type: 'quiz'
          }]
        }, {
          id: 3,
          visible: false,
          title: 'Creating and Communicating Between Angular Components',
          description: 'Data sharing is an essential concept to understand before diving into your first Angular project. In this section, you will learn four different methods for sharing data between Angular components.',
          items: [{
            id: 6,
            title: 'Angular Components',
            duration: '4m 23s',
            type: 'lesson'
          }]
        }, {
          id: 4,
          visible: false,
          title: 'Exploring the Angular Template Syntax',
          items: [{
            id: 7,
            title: 'Template Syntax',
            duration: '2m 34s',
            type: 'lesson'
          }]
        }]
      }
    }
  }
</script>
