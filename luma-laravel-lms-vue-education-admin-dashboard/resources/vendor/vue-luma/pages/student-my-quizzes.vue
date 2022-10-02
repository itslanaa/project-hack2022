<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div 
      :class="containerClass" 
      class="page-section">

      <div class="row card-group-row">
        <div
          v-for="item in items"
          :key="item.id" 
          class="card-group-row__col col-md-6">
          <quiz-card 
            :item="item" />
        </div>
      </div>

      <pager 
        class="mb-32pt" />

      <quizzes-list />

    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   QuizCard,
  //   QuizzesList,
  //   PageHeader,
  //   Pager
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import QuizCard from '~/components/Course/QuizCard.vue'
  import QuizzesList from '~/components/Course/QuizzesList.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import Pager from '~/components/Ui/Pager.vue'

  export default {
    components: {
      QuizCard,
      QuizzesList,
      PageHeader,
      Pager
    },
    extends: Page,
    data () {
      return {
        items: [{
          course: "Angular Routing In-Depth",
          image: "/images/paths/angular_routing_200x168.png",
          date: {
            type: 'min',
            value: 12
          },
          score: '5.8',
          progress: 25
        }, {
          course: "Angular Unit Testing",
          image: "/images/paths/angular_testing_200x168.png",
          date: {
            type: 'day',
            value: 2
          },
          score: '10',
          progress: 37
        }, {
          course: "Introduction to TypeScript",
          image: "/images/paths/typescript_200x168.png",
          date: {
            type: 'day',
            value: 3
          },
          score: '2.8'
        }, {
          course: "Angular Fundamentals",
          image: "/images/paths/angular_200x168.png",
          date: {
            type: 'day',
            value: 3
          },
          score: '3.3'
        }]
      }
    }
  }
</script>
