<template>
  <div>
    <page-separator 
      :title="$t('Your Answer')" />

    <div class="form-group">
      <div class="custom-control custom-checkbox">
        <input 
          id="customCheck01" 
          type="checkbox" 
          class="custom-control-input">
        <label 
          for="customCheck01" 
          class="custom-control-label">Ability to use newer syntax and offers reliability</label>
      </div>
    </div>
    <div class="form-group">
      <div class="custom-control custom-checkbox">
        <input 
          id="customCheck02" 
          type="checkbox" 
          class="custom-control-input" 
          checked="">
        <label 
          for="customCheck02" 
          class="custom-control-label">Compatibility</label>
      </div>
    </div>
    <div class="form-group mb-32pt mb-lg-48pt">
      <div class="custom-control custom-checkbox">
        <input 
          id="customCheck03" 
          type="checkbox" 
          class="custom-control-input">
        <label 
          for="customCheck03" 
          class="custom-control-label">Usage of missing features</label>
      </div>
    </div>

    <p class="text-50 mb-0">{{ $t('note') }}</p>
  </div>
</template>

<i18n>
  {
    "en": {
      "note": "Note: There can be multiple correct answers to this question."
    },
    "ro": {
      "Your Answer": "Răspunsul Tău",
      "note": "Atenție: Pot exista mai multe răspunsuri corecte la această întrebare."
    }
  }
</i18n>

<script>
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      PageSeparator
    }
  }
</script>