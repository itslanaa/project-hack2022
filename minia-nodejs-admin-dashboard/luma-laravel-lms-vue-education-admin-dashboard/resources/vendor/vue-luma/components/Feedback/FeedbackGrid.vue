<template>
  <div>
    <page-separator
      :title="$t('Feedback')" />

    <div class="row">
      <div
        v-for="item in items"
        :key="item.id" 
        class="col-sm-6 col-md-4">
        <feedback-card :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   FeedbackCard,
  //   PageSeparator
  // } from 'vue-luma'
  
  import FeedbackCard from '~/components/Feedback/FeedbackCard.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      FeedbackCard,
      PageSeparator
    },
    props: {
      items: {
        type: Array,
        default() {
          return [{
            avatar_title: 'UK',
            name: 'Umberto Kass'
          }, {
            avatar_title: 'UK',
            name: 'Umberto Kass'
          }, {
            avatar_title: 'UK',
            name: 'Umberto Kass'
          }]
        }
      }
    }
  }
</script>