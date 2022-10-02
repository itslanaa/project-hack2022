<template>
  <card
    :title="$t('Rewards')"
    :subtitle="$t('Your latest achievements')"
    class="card-2by1">
    <div class="text-center">
      <b-btn
        v-for="(item, index) in rewards"
        :class="{ 'ml-1': index > 0 }"
        :key="item.icon"
        :variant="item.variant" 
        class="btn-circle">
        <md-icon v-text="item.icon" />
      </b-btn>
    </div>
  </card>
</template>

<script>
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import Card from '~/components/Ui/Card.vue'

  export default {
    components: {
      MdIcon,
      Card
    },
    data() {
      return {
        rewards: [
          {
            variant: 'primary',
            icon: 'thumb_up'
          },
          {
            variant: 'danger',
            icon: 'grade'
          },
          {
            variant: 'success',
            icon: 'bubble_chart'
          },
          {
            variant: 'warning',
            icon: 'keyboard_voice'
          },
          {
            variant: 'info',
            icon: 'event_available'
          }
        ]
      }
    }
  }
</script>
