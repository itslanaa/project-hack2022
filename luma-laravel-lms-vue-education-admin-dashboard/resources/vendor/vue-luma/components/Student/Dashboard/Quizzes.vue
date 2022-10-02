<template>
  <card 
    :header-btn="true"
    :title="$t('Quizzes')"
    :subtitle="$t('Your Performance')"
    :header-btn-title="$t('Quiz results')"
    no-body>

    <b-list-group class="list-group-fit mb-0">
      <b-list-group-item
        v-for="item in quizzes"
        :key="item.title">
        <b-media
          right-align
          vertical-align="center">
          <b-link
            :to="routeTo(routes.studentQuizResult)" 
            class="text-body">
            <strong v-text="item.title" />
          </b-link>
          <div class="d-flex align-items-center">
            <small 
              class="text-black-50 text-uppercase mr-2" 
              v-text="$t('Course')" />
            <b-link 
              :to="routeTo(routes.studentTakeCourse)" 
              v-text="item.course" />
          </div>
          <div
            slot="aside" 
            class="text-center d-flex align-items-center">
            <span 
              class="text-black-50 mr-3"
              v-text="$t(item.result_label)" />
            <h4
              :class="{ 'text-success': item.result_score > 8, 'text-danger': item.result_score < 3 }" 
              class="mb-0">{{ item.result_score }}</h4>
          </div>
        </b-media>
      </b-list-group-item>
    </b-list-group>
  </card>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import Card from '~/components/Ui/Card.vue'

  export default {
    components: {
      Card
    },
    mixins: [routeTo],
    data() {
      return {
        quizzes: [
          {
            title: 'Title of quiz goes here?',
            course: 'Basics of HTML',
            result_label: 'Good',
            result_score: 5.8
          },
          {
            title: 'Directives & Routing',
            course: 'Angular in Steps',
            result_label: 'Great',
            result_score: 9.8
          },
          {
            title: 'Responsive & Retina',
            course: 'Bootstrap Foundations',
            result_label: 'Failed',
            result_score: 2.8
          }
        ]
      }
    }
  }
</script>
