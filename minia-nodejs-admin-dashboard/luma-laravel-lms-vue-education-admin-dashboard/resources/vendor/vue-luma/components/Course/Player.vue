<template>
  <div class="embed-responsive embed-responsive-16by9 mb-32pt">
    <div class="player embed-responsive-item">
      <div class="player__content">
        <div 
          class="player__image" 
          :style="`--player-image: url(${image})`" />
        <b-link 
          class="player__play bg-primary">
          <md-icon v-text="'play_arrow'" />
        </b-link>
      </div>
      <div class="player__embed d-none">
        <iframe 
          class="embed-responsive-item" 
          :src="src" 
          allowfullscreen="" />
      </div>
    </div>
  </div>
</template>

<script>
  import { handler } from 'dom-factory'
  import { playerComponent } from '~/assets/js/player'
  handler.register('player', playerComponent)

  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    props: {
      src: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.$nextTick(() => {
        handler.upgradeElement(this.$el, 'player')
      })
    },
    beforeDestroy() {
      handler.downgradeElement(this.$el, 'player')
    },
    methods: {
      play() {
        if (this.$el.player) {
          this.$el.player.play()
        }
      }
    }
  }
</script>