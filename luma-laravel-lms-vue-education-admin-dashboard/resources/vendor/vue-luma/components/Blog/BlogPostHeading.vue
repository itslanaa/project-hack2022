<template>
  <div>
    <fmv-avatar 
      no-link
      src="/images/paths/sketch_40x40@2x.png"
      alt="lesson"
      class="overlay overlay--primary mb-16pt mb-md-0 mr-md-16pt"
      element="div">
      <template v-slot:after-img>
        <div class="overlay__content rounded" />
      </template>
    </fmv-avatar>
    <div class="flex">
      <h1 class="h2 measure-lead-max mb-16pt">Merge Duplicates in Sketch - Inconsistent Symbols &amp; Styles</h1>
      <div class="d-flex align-items-center">
        <fmv-avatar 
          :to="routeTo(routes.instructorProfile)"
          src="/images/people/50/guy-6.jpg" 
          alt="author"
          size="sm"
          circle
          class="mr-12pt" />
        <div class="mr-16pt">
          <b-link 
            :to="routeTo(routes.instructorProfile)" 
            class="card-title"
            v-text="'Eddie Bryan'" />
          <div class="d-flex align-items-center">
            <small 
              class="text-50 mr-2"
              v-text="'3 days ago'" />
            <small 
              class="text-50 mr-2"
              v-text="'2 min read'" />
            <b-link 
              class="text-50">
              <small>Liked</small>
            </b-link>
          </div>
        </div>
        <div>
          <b-link 
            class="text-50 d-flex align-items-center text-decoration-0">
            <md-icon 
              left
              v-text="'favorite_border'" /> 3
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      MdIcon,
      FmvAvatar
    },
    mixins: [routeTo]
  }
</script>