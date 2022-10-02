<template>
  <div class="page-section">
    <div :class="containerClass">
      <page-headline
        :title="$t('Feedback')"
        :description="$t('feedback_description')"
        center />
      
      <feedback-carousel />
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "feedback_description": "What other students turned professionals have to say about us after learning with us and reaching their goals."
    },
    "ro": {
      "Feedback": "Păreri",
      "feedback_description": "Ce au de spus despre noi alți studenți deveniți profesioniști după ce au învățat cu noi și și-au atins obiectivele."
    }
  }
</i18n>

<script>
  // import {
  //   FeedbackCarousel,
  //   PageHeadline
  // } from 'vue-luma'
  
  import FeedbackCarousel from '~/components/Feedback/FeedbackCarousel.vue'
  import PageHeadline from '~/components/Ui/PageHeadline.vue'
  
  import layoutConfigMixin from '~/mixins/layout-config'

  export default {
    components: {
      FeedbackCarousel,
      PageHeadline
    },
    mixins: [layoutConfigMixin]
  }
</script>