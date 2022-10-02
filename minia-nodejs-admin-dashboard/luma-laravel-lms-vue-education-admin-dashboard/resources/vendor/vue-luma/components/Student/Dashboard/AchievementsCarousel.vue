<template>
  <div class="carousel-card position-relative">
    <b-carousel 
      id="carouselExampleFade"
      ref="myCarousel"
      class="mb-24pt">
      <b-carousel-slide
        v-for="(item, index) in items"
        :key="item.id"
        :class="{ 'active': index === 1 }" 
        class="carousel-item">
        <template v-slot:img>
          <achievement :item="item" />
        </template>
      </b-carousel-slide>
    </b-carousel>

    <a
      v-if="prevControl" 
      class="carousel-control-prev" 
      href="#" 
      role="button" 
      @click.prevent="prev">
      <span 
        class="carousel-control-icon material-icons" 
        aria-hidden="true">keyboard_arrow_left</span>
      <span class="sr-only">Previous</span>
    </a>
    <a 
      class="carousel-control-next" 
      href="#" 
      role="button" 
      @click.prevent="next">
      <span 
        class="carousel-control-icon material-icons" 
        aria-hidden="true">keyboard_arrow_right</span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  // import {Achievement} from 'vue-luma'
  import Achievement from '~/components/Student/Achievement.vue'

  export default {
    components: {
      Achievement
    },
    props: {
      prevControl: {
        type: Boolean,
        default: false
      },
      items: {
        type: Array,
        default() {
          return [{
            image: '/images/achievements/flinto.png',
            logo: '/images/paths/flinto_40x40@2x.png',
            title: 'Flinto',
            description: 'Introduction to The App Design Application',
            date: 'Jun 5, 2018'
          }, {
            image: '/images/achievements/angular.png',
            logo: '/images/paths/angular_64x64.png',
            title: 'Angular fundamentals',
            description: 'Creating and Communicating Between Angular Components',
            date: 'Jun 5, 2018'
          }]
        }
      }
    },
    methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    }
  }
</script>