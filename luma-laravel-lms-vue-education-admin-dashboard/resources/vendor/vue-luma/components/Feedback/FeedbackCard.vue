<template>
  <div>
    <div class="card card-feedback card--elevated card-body">
      <blockquote class="blockquote mb-0">
        <p class="text-70 small mb-0">{{ item.description || 'A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.' }}</p>
      </blockquote>
    </div>
    <div class="media ml-12pt">
      <div class="media-left mr-12pt">
        <fmv-avatar 
          :to="routeTo(to || routes.studentProfile)" 
          size="sm"
          circle
          :title="item.avatar_title || 'UK'" />
      </div>
      <div class="media-body media-middle"> 
        <b-link 
          :to="routeTo(to || routes.studentProfile)" 
          class="card-title"
          v-text="item.name || 'Umberto Kass'" />
        <b-form-rating
          class="b-rating-inline mt-4pt mb-16pt" 
          :value="4" 
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
</template>

<script>
  import {FmvAvatar} from 'fmv-avatar'
  import routeTo from '~/mixins/route-to'

  export default {
    components: {
      FmvAvatar
    },
    mixins: [routeTo],
    props: {
      item: {
        type: Object,
        required: true
      },
      to: {
        type: String
      }
    }
  }
</script>