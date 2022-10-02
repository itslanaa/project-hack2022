<template>
  <div class="card card--elevated">
    <div class="card-body d-flex">
      <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
        <i class="material-icons">question_answer</i>
      </span>
      <div class="flex">
        <b-link 
          class="card-title mb-8pt" 
          :to="routeTo(routes.faq)"
          v-text="title" />
        <p class="text-70 mb-0">{{ description }}</p>
      </div>
    </div>
    <div class="card-footer d-flex lh-1 px-16pt py-8pt">
      <div class="flex text-muted"><small>7 people found this useful</small></div>
      <a href="#" class="text-20"><i class="material-icons icon-16pt">thumb_up</i></a>
    </div>
  </div>
</template>

<script>
  // import {routeToMixin} from 'vue-luma'
  import routeToMixin from '~/mixins/route-to'

  export default {
    mixins: [routeToMixin],
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
</script>