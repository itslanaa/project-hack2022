<template>
  <div>
    <div 
      :class="containerClass" 
      class="page-section">
      
      <results-heading
        :enable-sidebar-toggle="resultsHeadingSidebarToggle"
        :label="$t('teachers')" />

      <page-separator
        :title="$t('Top Teachers')" />

      <div class="row card-group-row">
        <div
          v-for="item in items.slice(0, 3)"
          :key="item.id" 
          class="col-md-6 col-xl-4 card-group-row__col">
          <teacher-card
            :item="item"
            card-class="card-group-row__card"
            class="d-flex w-100" />
        </div>
      </div>

      <pager class="mb-32pt" />

      <page-separator
        :title="$t('Rising Stars')" />

      <div class="row card-group-row">
        <div
          v-for="item in items.slice(3, 6)"
          :key="item.id" 
          class="col-md-6 col-xl-4 card-group-row__col">
          <teacher-card
            :item="item"
            card-class="card-group-row__card"
            class="d-flex w-100" />
        </div>
      </div>

      <pager />
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "teachers": "instructori",
      "Top Teachers": "Top Instructori",
      "Rising Stars": "În Creștere"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   ResultsHeading,
  //   TeacherCard,
  //   PageSeparator,
  //   Pager
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import ResultsHeading from '~/components/ResultsHeading.vue'
  import TeacherCard from '~/components/Community/TeacherCard.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import Pager from '~/components/Ui/Pager.vue'

  export default {
    components: {
      ResultsHeading,
      TeacherCard,
      PageSeparator,
      Pager
    },
    extends: Page,
    props: {
      resultsHeadingSidebarToggle: {
        type: Boolean
      },
      items: {
        type: Array,
        default: () => [{
          name: 'Johnathan S.',
          avatar: '/images/people/110/guy-1.jpg',
          topic: 'UI Designer',
          course_title: "Angular Routing In-Depth",
          course_image: "/images/paths/angular_routing_200x168.png",
          rating: 5,
          following: true
        }, {
          name: 'Fabrice M.',
          avatar: '/images/people/110/guy-2.jpg',
          topic: 'Web Developer',
          course_title: 'Build an iOS Application in Swift',
          course_image: "/images/paths/swift_200x168.png",
          rating: 5,
          face: true
        }, {
          name: 'Diane D.',
          avatar: '/images/people/110/woman-1.jpg',
          topic: 'iOS Developer',
          course_title: 'Build a WordPress Website',
          course_image: "/images/paths/wordpress_200x168.png",
          rating: 5
        }, {
          name: 'Nicole G.',
          avatar: '/images/people/110/woman-2.jpg',
          topic: 'UX Designer',
          rating: 4,
          face: true
        }, {
          name: 'Abraham K.',
          avatar: '/images/people/110/guy-3.jpg',
          topic: 'Entrepreneur',
          course_title: 'Become a React Native Developer', 
          course_image: "/images/paths/react_200x168.png",
          rating: 3
        }, {
          name: 'Jane D.',
          avatar: '/images/people/110/woman-3.jpg',
          topic: 'Android Developer',
          rating: 3
        }]
      }
    }
  }
</script>
