<template>
  <div class="row">
    <div class="col-md-7 mb-24pt mb-md-0">
      <h4 v-text="$t('About the author')" />
      <p class="text-70 mb-24pt">Eddie Bryan is a software developer at LearnD*ash. With more than 20 years o*f software development experience, he has gained a passion for Agile software development -- especially Lean.</p>

      <page-separator
        :title="$t('More from the author')" />

      <div
        v-for="(item, index) in featured"
        :key="item.id"
        :class="[ index === featured.length - 1 ? 'mb-16pt' : 'mb-8pt' ]"
        class="card card-sm">
        <div class="card-body d-flex align-items-center">
          <fmv-avatar 
            :to="routeTo(routes.studentCourse)"
            class="mr-12pt"
            landscape
            :alt="item.course"
            :src="item.image" />
          <div class="flex">
            <b-link
              :to="routeTo(routes.studentCourse)" 
              class="card-title mb-4pt"
              v-text="item.course" />
            <b-form-rating
              class="b-rating-inline" 
              :value="item.rating" 
              variant="rating"
              size="sm"
              show-value
              show-value-max
              readonly
              inline
              no-border />
          </div>
        </div>
      </div>

      <div class="list-group list-group-flush">
        <div
          v-for="item in list"
          :key="item.id" 
          class="list-group-item px-0">
          <a 
            href="" 
            class="card-title mb-4pt"
            v-text="item.title" />
          <p class="lh-1 mb-0">
            <small 
              class="text-muted mr-8pt"
              v-text="item.duration" />
            <small 
              class="text-muted mr-8pt"
              v-text="$t('views', { views: item.views })" />
            <small 
              class="text-muted"
              v-text="item.date" />
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-5 pt-sm-32pt pt-md-0 d-flex flex-column align-items-center justify-content-start">
      <div class="text-center">
        <p class="mb-16pt">
          <img 
            src="/images/people/110/guy-6.jpg" 
            alt="guy-6" 
            class="rounded-circle" 
            width="64">
        </p>
        <h4 class="m-0">Eddie Bryan</h4>
        <p class="lh-1">
          <small class="text-muted">Angular, Web Development</small>
        </p>
        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-start">
          <b-btn 
            :to="routeTo(routes.instructorProfile)" 
            variant="outline-primary"
            class="mb-16pt mb-sm-0 mr-sm-16pt"
            v-text="$t('Follow')" />
          <b-btn 
            :to="routeTo(routes.instructorProfile)" 
            variant="outline-secondary"
            v-text="$t('View Profile')" />
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "views": "{views} views"
    },
    "ro": {
      "About the author": "Despre autor",
      "More from the author": "Mai multe de la autor",
      "views": "{views} vizualizări",
      "Follow": "Urmărește",
      "View Profile": "Vezi Profilul"
    }
  }
</i18n>

<script>
  import {FmvAvatar} from 'fmv-avatar'
  import routeTo from '~/mixins/route-to'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      FmvAvatar,
      PageSeparator
    },
    mixins: [routeTo],
    data() {
      return {
        featured: [{
          course: "Angular Routing In-Depth",
          image: "/images/paths/angular_routing_200x168.png",
          rating: 3
        }, {
          course: "Angular Unit Testing",
          image: "/images/paths/angular_testing_200x168.png",
          rating: 4
        }],
        list: [{
          title: 'Angular Best Practices',
          duration: '6h 40m',
          views: 13876,
          date: '13 May 2018'
        }, {
          title: 'Unit Testing in Angular',
          duration: '6h 40m',
          views: 13876,
          date: '13 May 2018'
        }, {
          title: 'Migrating Applications from AngularJS to Angular',
          duration: '6h 40m',
          views: 13876,
          date: '13 May 2018'
        }]
      }
    }
  }
</script>