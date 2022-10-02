<template>
  <div 
    :class="containerClass"
    class="hero text-center text-md-left py-112pt">
    <h1 
      class="text-white text-shadow"
      v-text="title || $t('home_hero_title')" />
    <p 
      class="lead measure-hero-lead mx-auto mx-md-0 text-white text-shadow"
      :class="[ cta || link ? 'mb-48pt' : 'mb-0' ]"
      v-text="subtitle || $t('home_hero_description')" />
    
    <b-btn
      v-if="cta"
      :to="routeTo(ctaRoute || routes.studentCourses)"
      size="lg"
      variant="white btn--raised mb-16pt"
      v-text="$t('Browse Courses')" />

    <p
      v-if="link" 
      class="mb-0">
      <b-link 
        :to="routeTo(linkRoute)"
        class="text-white text-shadow"
        v-html="`<strong>${linkLabel || $t('Are you a teacher?')}</strong>`" />
    </p>
  </div>
</template>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'
  import routeTo from '~/mixins/route-to'

  export default {
    mixins: [
      layoutConfigMixin,
      routeTo
    ],
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      link: {
        type: Boolean,
        default: true
      },
      linkRoute: {
        type: [String, Object],
        default: null
      },
      linkLabel: {
        type: String
      },
      cta: {
        type: Boolean,
        default: true
      },
      ctaRoute: {
        type: [String, Object]
      }
    }
  }
</script>