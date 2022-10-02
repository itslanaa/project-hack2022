<template>
  <div class="carousel-card position-relative col-md-8 col-lg-6 p-0 mx-auto">
    <b-carousel 
      :id="id"
      ref="carousel">
      <b-carousel-slide
        v-for="(item, index) in items"
        :key="item.id"
        :class="{ 'active': index === 1 }" 
        class="carousel-item">
        <template v-slot:img>
          <feedback-card :item="item" />
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
      class="carousel-control-next mt-n24pt" 
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
  // import {FeedbackCard} from 'vue-luma'
  import FeedbackCard from '~/components/Feedback/FeedbackCard.vue'

  const uniqueId = require('lodash/uniqueId')

  export default {
    components: {
      FeedbackCard
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
            avatar_title: 'UK',
            name: 'Umberto Kass'
          }, {
            avatar_title: 'UK',
            name: 'Umberto Kass'
          }]
        }
      }
    },
    computed: {
      id() {
        return uniqueId('feedback_carousel_')
      }
    },
    methods: {
      prev() {
        this.$refs.carousel.prev()
      },
      next() {
        this.$refs.carousel.next()
      }
    }
  }
</script>