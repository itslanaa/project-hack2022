<template>
  <b-navbar
    type="light"
    toggleable="sm"
    class="navbar-list border-bottom" 
    style="white-space: nowrap;">
    <div :class="containerClass">
      <nav class="nav navbar-nav">
        <div class="nav-item navbar-list__item">
          <b-link 
            :to="routeTo(routes.studentTakeCourse)" 
            class="nav-link h-auto">
            <md-icon 
              left 
              v-text="'keyboard_backspace'" /> 
            {{ $t('Back to Course') }}
          </b-link>
        </div>
        <div class="nav-item navbar-list__item">
          <div class="d-flex align-items-center flex-nowrap">
            <div class="mr-16pt">
              <b-link 
                :to="routeTo(routes.studentTakeCourse)">
                <img 
                  src="/images/paths/angular_64x64.png" 
                  width="40" 
                  alt="Angular" 
                  class="rounded">
              </b-link>
            </div>
            <div class="flex">
              <b-link 
                :to="routeTo(routes.studentTakeCourse)" 
                class="card-title text-body mb-0"
                v-text="'Angular Fundamentals'" />
              <p class="lh-1 d-flex align-items-center mb-0">
                <span class="text-50 small font-weight-bold mr-8pt">Elijah Murray</span>
                <span class="text-50 small">Software Engineer and Developer</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </b-navbar>
</template>

<i18n>
  {
    "ro": {
      "Back to Course": "Înapoi la Curs"
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