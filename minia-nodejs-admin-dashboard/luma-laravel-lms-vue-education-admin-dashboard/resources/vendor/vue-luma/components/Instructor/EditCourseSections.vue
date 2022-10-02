<template>
  <div>
    <page-separator
      :title="$t('Sections')" />

    <edit-course-toc 
      boxed
      class="mb-24pt" />

    <b-btn 
      variant="outline-secondary"
      class="mb-24pt mb-sm-0"
      v-text="$t('Add Section')" />
  </div>
</template>

<i18n>
  {
    "ro": {
      "Sections": "Secțiuni",
      "Add Section": "Adaugă Secțiune"
    }
  }
</i18n>

<script>
  // import {
  //   EditCourseToc,
  //   PageSeparator
  // } from 'vue-luma'
  
  import EditCourseToc from './EditCourseToc.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      EditCourseToc,
      PageSeparator
    }
  }
</script>