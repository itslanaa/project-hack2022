<template>
  <div class="position-relative carousel-card">
    <div
      :id="id"
      ref="carousel"
      class="js-mdk-carousel row d-block">
      <a
        v-if="controls" 
        class="carousel-control-next js-mdk-carousel-control" 
        :href="`#${id}`"
        role="button" 
        data-slide="next">
        <span 
          class="carousel-control-icon material-icons" 
          aria-hidden="true">keyboard_arrow_right</span>
        <span class="sr-only">Next</span>
      </a>
      <div class="mdk-carousel__content">
        <div 
          v-for="item in items"
          :key="item.id"
          :class="colClass"
          class="col-12">
          <achievement :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { handler } from 'dom-factory'
  import { carouselComponent } from 'material-design-kit'
  handler.register('mdk-carousel', carouselComponent)
  
  const uniqueId = require('lodash/uniqueId')
  
  // import {Achievement} from 'vue-luma'
  import Achievement from '~/components/Student/Achievement.vue'

  export default {
    components: {
      Achievement
    },
    props: {
      controls: {
        type: Boolean,
        default: true
      },
      account: {
        type: Boolean
      },
      colClass: {
        type: String,
        default: 'col-sm-6'
      }
    },
    data() {
      return {
        items: [{
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
    },
    computed: {
      id() {
        return uniqueId('achievements_carousel_')
      }
    },
    mounted() {
      this.$nextTick(() => { 
        if (this.$refs.carousel) {
          handler.upgradeElement(this.$refs.carousel, 'mdk-carousel')
        }
      })
    },
    beforeDestroy() {
      handler.downgradeElement(this.$refs.carousel, 'mdk-carousel')
    }
  }
</script>