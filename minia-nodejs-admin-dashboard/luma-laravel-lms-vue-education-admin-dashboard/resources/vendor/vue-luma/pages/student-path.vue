<template>
  <div>
    <div 
      class="mdk-box bg-primary js-mdk-box mb-0" 
      data-effects="blend-background">
      <div class="mdk-box__content">
        <div class="hero py-64pt text-center text-sm-left">
          <div :class="containerClass">
            <div class="d-flex flex-column flex-sm-row">
              <div class="order-1 order-sm-0">
                <h1 
                  class="text-white"
                  v-text="$t('learn', { topic: 'Angular' })" />
                <p class="lead text-white-50 measure-hero-lead mb-24pt">It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.</p>
                
                <b-btn 
                  :to="routeTo(routes.studentSkillAssessment)" 
                  variant="outline-white"
                  v-text="$t('Get started')" />
              </div>
              <div class="ml-sm-auto order-sm-1">
                <div class="position-relative overflow-hidden rounded border-4 border-light mb-16pt mb-sm-0">
                  <div 
                    class="bg-primary fullbleed" 
                    style="opacity: .5;" />
                  <img 
                    src="/images/paths/angular_96x96.png" 
                    alt="Angular">
                </div>
              </div>
            </div>
          </div>
        </div>
        <path-navbar
          :container-class="containerClass" />
      </div>
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <course-description
          :title="$t('Introduction')"
          description="<p class='text-70 measure-paragraph-max'>Learn one way to build applications with Angu*lar and reuse your code and ab*ilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>" />
      </div>
    </div>  

    <div class="page-section bg-alt border-bottom-2">
      <div :class="containerClass">
        <path-skill-assessment />
      </div>
    </div>

    <div :class="containerClass">
      <div class="border-left-2 page-section pl-32pt pb-8pt">
        <div class="d-flex align-items-center page-num-container">
          <div class="page-num">1</div>
          <h4 v-text="$t('Beginner')" />
        </div>
        <p class="text-70 measure-paragraph-max mb-lg-32pt">Throughout these Angular courses for beginner*s you will learn core concepts*, common patterns using Angular and, finally, some of the best practices to build fully-functioning web applications using the Angular framework.</p>
        <courses-carousel account />
      </div>
      <div class="border-left py-32pt pl-32pt">
        <div class="d-flex align-items-center page-num-container">
          <div class="page-num">2</div>
          <h4 v-text="$t('Intermediate')" />
        </div>
        <p class="text-70 measure-paragraph-max mb-lg-32pt">Once you have the basics using the Angular framework, you will continue to build on your existing knowledge and, with these intermediate courses you will have a deeper understanding into features like services, routing and testing.</p>
        
        <courses-carousel
          account
          :items="[{
            title: 'Angular Unit Testing',
            image: 'angular_testing',
            avatar: 'angular',
            position: 'left'
          }, {
            title: 'Angular Routing In-Depth',
            image: 'angular_routing',
            avatar: 'angular',
            position: 'left'
          }, {
            title: 'Angular Services',
            image: 'angular_services',
            avatar: 'angular',
            position: 'left'
          }, {
            title: 'Angular Patterns',
            image: 'angular_patterns',
            avatar: 'angular'
          }]" />
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "learn": "Learn {topic}"
    },
    "ro": {
      "learn": "Învață {topic}",
      "Introduction": "Introducere",
      "Beginner": "Începător",
      "Intermediate": "Intermediar"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   PathNavbar,
  //   PathSkillAssessment,
  //   CourseDescription,
  //   CoursesCarousel
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import PathNavbar from '~/components/Course/PathNavbar.vue'
  import PathSkillAssessment from '~/components/Course/PathSkillAssessment.vue'
  import CourseDescription from '~/components/Course/CourseDescription.vue'
  import CoursesCarousel from '~/components/Course/CoursesCarousel.vue'

  export default {
    components: {
      PathNavbar,
      PathSkillAssessment,
      CourseDescription,
      CoursesCarousel
    },
    extends: Page
  }
</script>
