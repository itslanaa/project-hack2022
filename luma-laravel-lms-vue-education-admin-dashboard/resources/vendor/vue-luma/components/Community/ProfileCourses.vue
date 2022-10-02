<template>
  <div class="row card-group-row mb-8pt">
    <div
      v-for="item in items"
      :key="item.id" 
      class="col-sm-6 card-group-row__col">
      <div class="card card-sm card-group-row__card">
        <div class="card-body d-flex align-items-center">
          <fmv-avatar 
            :to="routeTo(routes.studentCourse)" 
            :src="item.image"
            :alt="item.course"
            landscape
            class="overlay overlay--primary mr-12pt">
            <template v-slot:after-img>
              <span class="overlay__content rounded" />
            </template>
          </fmv-avatar>
          
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
    </div>
  </div>
</template>

<script>
  import {FmvAvatar} from 'fmv-avatar'
  import routeTo from '~/mixins/route-to'

  export default {
    components: {
      FmvAvatar
    },
    mixins: [routeTo],
    data() {
      return {
        items: [{
          course: "Angular Routing In-Depth",
          image: "/images/paths/angular_routing_200x168.png",
          rating: 3
        }, {
          course: "Angular Unit Testing",
          image: "/images/paths/angular_testing_200x168.png",
          rating: 4
        }, {
          course: "Introduction to TypeScript",
          image: "/images/paths/typescript_200x168.png",
          rating: 5
        }, {
          course: "Learn Angular Fundamentals",
          image: "/images/paths/angular_200x168.png",
          rating: 5
        }]
      }
    }
  }
</script>