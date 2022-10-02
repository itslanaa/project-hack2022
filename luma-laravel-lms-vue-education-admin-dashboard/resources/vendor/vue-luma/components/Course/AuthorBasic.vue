<template>
  <div>
    <page-separator
      :title="$t('Author')" />

    <div class="media align-items-center mb-16pt">
      <span class="media-left mr-16pt">
        <img 
          src="/images/people/50/guy-6.jpg" 
          width="40" 
          alt="avatar" 
          class="rounded-circle">
      </span>
      <div class="media-body">
        <b-link
          :to="routeTo(routes.instructorProfile)" 
          class="card-title m-0"
          v-text="'Eddie Bryan'" />
        <p class="text-50 lh-1 mb-0">Instructor</p>
      </div>
    </div>
    <p class="text-70">Fueled by my passion for understanding the nuances of cross-cultural advertising, I consider myself a forever student, eager to both build on my academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework.</p>

    <b-btn 
      :to="routeTo(routes.instructorProfile)" 
      variant="white"
      class="mb-24pt"
      v-text="$t('Follow')" />
  </div>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      PageSeparator
    },
    mixins: [routeTo]
  }
</script>