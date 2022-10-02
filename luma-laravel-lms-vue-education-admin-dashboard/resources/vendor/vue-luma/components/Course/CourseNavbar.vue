<template>
  <b-navbar
    type="light"
    toggleable="sm"
    class="bg-white border-bottom-2 navbar-list p-0 m-0 align-items-center">
    <div :class="containerClass">
      <ul class="nav navbar-nav flex align-items-sm-center">
        <li class="nav-item navbar-list__item">
          <div class="media align-items-center">
            <span class="media-left mr-16pt">
              <img 
                src="/images/people/50/guy-6.jpg" 
                width="40" 
                alt="avatar" 
                class="rounded-circle">
            </span>
            <div class="media-body">
              <a 
                :to="routeTo(routes.instructorProfile)"
                class="card-title m-0"
                v-text="'Eddie Bryan'" />
              <p 
                class="text-50 lh-1 mb-0"
                v-text="'Instructor'" />
            </div>
          </div>
        </li>
        <li class="nav-item navbar-list__item">
          <md-icon 
            left 
            class="text-muted icon--left" 
            v-text="'schedule'" />
          2h 46m
        </li>
        <li class="nav-item navbar-list__item">
          <md-icon
            left 
            class="text-muted" 
            v-text="'assessment'" />
          {{ $t('Beginner') }}
        </li>
        <li class="nav-item ml-sm-auto text-sm-center flex-column navbar-list__item">
          <b-form-rating
            class="b-rating-inline" 
            :value="4" 
            variant="rating"
            size="lg"
            readonly
            inline
            no-border />
          <p class="lh-1 mb-0">
            <small 
              class="text-muted"
              v-text="$t('ratings', { ratings: 20 })" />
          </p>
        </li>
      </ul>
    </div>
  </b-navbar>
</template>

<i18n>
  {
    "ro": {
      "Beginner": "Începător",
      "ratings": "{ratings} evaluări"
    },
    "en": {
      "ratings": "{ratings} ratings"
    }
  }
</i18n>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    mixins: [
      layoutConfigMixin,
      routeTo
    ]
  }
</script>