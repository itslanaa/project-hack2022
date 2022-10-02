<template>
  <div>
    <div class="page-section bg-primary border-bottom-white">
      <div 
        class="d-flex flex-column flex-md-row align-items-center text-center text-md-left"
        :class="containerClass">
        <img 
          src="/images/illustration/teacher/128/white.svg" 
          width="104" 
          class="mr-md-32pt mb-32pt mb-md-0" 
          alt="student">
        <div class="flex mb-32pt mb-md-0">
          <h2 
            class="text-white mb-0"
            v-text="profile.name" />
          <p class="lead text-white-50 d-flex align-items-center">
            {{ $t('Instructor') }}
            <span class="ml-16pt d-flex align-items-center">
              <i class="material-icons icon-16pt mr-4pt">opacity</i>
              {{ $t('points', { points: 2300 }) }}
            </span>
          </p>
        </div>
        <b-btn 
          variant="outline-white" 
          v-text="$t('Follow')" />
      </div>
    </div>

    <div class="page-section bg-alt border-bottom-2">
      <div :class="containerClass">
        <div class="row">
          <div class="col-md-6">
            <h4 v-text="$t('About me')" />
            <p 
              class="text-70" 
              v-text="profile.about" />
          </div>
          <div class="col-md-6">
            <h4 v-text="$t('Connect')" />
            <p 
              class="text-70"
              v-text="profile.connect" />
            <div class="d-flex align-items-center">
              <b-link class="text-accent fab fa-facebook-square font-size-24pt mr-8pt" />
              <b-link class="text-accent fab fa-twitter-square font-size-24pt" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section">
      <div :class="containerClass">

        <page-headline
          center
          title="Level-up Your Career"
          :description="`Courses by ${profile.name}`" />

        <profile-courses />
        <profile-activity />
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "points": "{points} points"
    },
    "ro": {
      "points": "{points} puncte",
      "Follow": "Urmărește",
      "About me": "Despre mine",
      "Connect": "Conectare"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   ProfileCourses,
  //   ProfileActivity,
  //   PageHeadline
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import ProfileCourses from '~/components/Community/ProfileCourses.vue'
  import ProfileActivity from '~/components/Community/ProfileActivity.vue'
  import PageHeadline from '~/components/Ui/PageHeadline.vue'

  export default {
    components: {
      ProfileActivity,
      ProfileCourses,
      PageHeadline
    },
    extends: Page,
    props: {
      profile: {
        type: Object,
        default: () => {
          return {
            id: 1,
            name: 'Laza Bogdan',
            about: 'Fueled by my passion for understanding the nuances of cross-cultural advertising, I consider myself a forever student, eager to both build on my academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework.',
            connect: 'I’m currently working as a freelance marketing director and always interested in a challenge. Here’s how to reach out and connect.'
          }
        }
      }
    }
  }
</script>
