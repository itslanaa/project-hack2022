<template>
  <b-navbar
    type="light" 
    class="border-0">
    <div :class="containerClass">
      <nav class="nav navbar-nav">
        <div class="nav-item py-16pt py-sm-0">
          <b-media class="flex-nowrap">
            <template v-slot:aside>
              <b-link 
                :to="routeTo(routes.studentCourse)">
                <img 
                  src="/images/paths/angular_64x64.png" 
                  width="40" 
                  alt="Angular" 
                  class="rounded">
              </b-link>
            </template>
            
            <b-link 
              :to="routeTo(routes.studentCourse)" 
              class="card-title text-body mb-0"
              v-text="'Angular Fundamentals'" />
            
            <p class="lh-1 d-flex align-items-center mb-0">
              <span class="text-50 small font-weight-bold mr-8pt">Elijah Murray</span>
              <span class="text-50 small">Software Engineer and Developer</span>
            </p>
          </b-media>
        </div>
      </nav>

      <b-navbar-nav class="ml-sm-auto align-items-center align-items-sm-end d-none d-lg-flex">
        <b-nav-item class="active ml-sm-16pt">{{ $t('Video') }}</b-nav-item>
        <b-nav-item>{{ $t('Downloads') }}</b-nav-item>
        <b-nav-item>{{ $t('Notes') }}</b-nav-item>
        <b-nav-item>{{ $t('Discussions') }}</b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<i18n>
  {
    "ro": {
      "Downloads": "Descărcări",
      "Notes": "Notițe",
      "Discussions": "Discuții"
    }
  }
</i18n>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'
  import routeTo from '~/mixins/route-to'

  export default {
    mixins: [
      layoutConfigMixin,
      routeTo
    ]
  }
</script>