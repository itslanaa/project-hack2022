<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div 
      :class="containerClass" 
      class="page-section">
      <page-separator>{{ $t('Overview') }}</page-separator>

      <div class="row mb-lg-8pt">
        <div class="col-lg-6">
          <student-dashboard-topic-iq-chart />
        </div>
        <div class="col-lg-6">
          <student-dashboard-experience-iq-chart />
          <student-achievements-carousel />
        </div>
      </div>

      <div class="row mb-lg-16pt">
        <div class="col-lg-6 mb-8pt mb-sm-0">
          <page-separator>{{ $t('Learning Paths') }}</page-separator>
          <account-path-card
            v-for="item in paths"
            :key="item.id"
            :title="item.title"
            :image="item.image"
            :favorite="item.favorite" />
        </div>
        <div class="col-lg-6">
          <page-separator>{{ $t('Courses') }}</page-separator>
          <courses-carousel
            col-class="col-sm-6"
            :account="true" />
        </div>
      </div>

      <student-dashboard-discussions />
    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   TopicIqChart as StudentDashboardTopicIqChart,
  //   ExperienceIqChart as StudentDashboardExperienceIqChart,
  //   StudentDashboardDiscussions,
  //   AchievementsCarousel as StudentAchievementsCarousel,
  //   AccountPathCard,
  //   CoursesCarousel,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import StudentDashboardTopicIqChart from '~/components/Student/Dashboard/TopicIqChart.vue'
  import StudentDashboardExperienceIqChart from '~/components/Student/Dashboard/ExperienceIqChart.vue'
  import StudentDashboardDiscussions from '~/components/Student/Dashboard/Discussions.vue'
  import StudentAchievementsCarousel from '~/components/Student/Dashboard/AchievementsCarousel.vue'
  import AccountPathCard from '~/components/Course/AccountPathCard.vue'
  import CoursesCarousel from '~/components/Course/CoursesCarousel.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      StudentDashboardTopicIqChart,
      StudentDashboardExperienceIqChart,
      StudentDashboardDiscussions,
      StudentAchievementsCarousel,
      AccountPathCard,
      CoursesCarousel,
      PageHeader,
      PageSeparator
    },
    extends: Page,
    data () {
      return {
        paths: [{
          title: 'Angular',
          image: 'angular'
        }, {
          title: 'Swift', 
          image: 'swift', 
          favorite: true
        }, {
          title: 'React Native', 
          image: 'react', 
          position: 'left'
        }]
      }
    }
  }
</script>
