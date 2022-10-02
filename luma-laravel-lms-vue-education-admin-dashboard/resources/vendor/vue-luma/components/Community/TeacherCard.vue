<template>
  <div class="card card-group-row__card">
    <div class="card-header d-flex align-items-center">
      <b-link 
        :to="routeTo(routes.instructorProfile)" 
        class="card-title flex mr-12pt"
        v-text="item.name" />
      <b-link
        v-b-tooltip.hover.bottom="{ 
          title: $t('Unfollow'),
          disabled: !item.following
        }" 
        :to="routeTo(routes.instructorProfile)" 
        class="btn btn-light btn-sm"
        v-text="$t(item.following ? 'Following' : 'Follow')" />
    </div>
    <div class="card-body flex text-center d-flex flex-column align-items-center justify-content-center">
      <fmv-avatar
        :to="routeTo(routes.instructorProfile)"
        size="xl"
        class="overlay overlay--primary rounded-circle p-relative o-hidden mb-16pt"
        :class="{ 'overlay--show': item.face }"
        :src="item.avatar"
        :alt="item.name"
        circle>
        <template v-slot:after-img>
          <span class="overlay__content">
            <md-icon class="overlay__action icon-40pt">face</md-icon>
          </span>
        </template>
      </fmv-avatar>
      
      <div class="flex">
        <div class="d-inline-flex align-items-center mb-8pt">
          <b-form-rating
            class="b-rating-inline" 
            :value="item.rating" 
            variant="rating"
            size="sm"
            show-value
            show-value-max
            readonly
            inline
            no-border />
        </div>

        <p 
          class="text-70 measure-paragraph"
          v-text="item.description || 'Fueled by my passion for understanding the nuances of cross-cultural advertising, I consider myself a forever student, eager to both build on my academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework.'" />

        <b-link
          v-b-tooltip.hover.bottom="$t('Browse Topic')" 
          class="chip chip-outline-secondary"
          v-text="item.topic" />
      </div>
    </div>
    <div class="card-body flex-0">
      <div class="d-flex align-items-center">
        <fmv-avatar 
          :to="routeTo(routes.studentCourse)" 
          landscape
          class="overlay overlay--primary mr-12pt"
          :src="item.course_image || '/images/paths/angular_routing_200x168.png'"
          :alt="item.course_title">
          <template v-slot:after-img>
            <span class="overlay__content rounded" />
          </template>
        </fmv-avatar>
        <div class="flex">
          <b-link 
            :to="routeTo(routes.studentCourse)" 
            class="card-title"
            v-text="item.course_title || 'Angular Routing In-Depth'" />
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Following": "Urmărești",
      "Follow": "Urmărește",
      "Unfollow": "Nu mai urmări",
      "Browse Topic": "Explorează Subiectul"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      MdIcon,
      FmvAvatar
    },
    mixins: [routeTo],
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>