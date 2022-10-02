<template>
  <div>
    <page-separator
      :title="$t('New Question')" />

    <b-card>
      <b-form-group
        :label="$t('Question')"
        :description="$t('Shortly describe the question.')"
        label-class="form-label">
        <no-ssr>
          <quill-editor
            ref="editor"
            v-model="content"
            :options="editorOption" />
        </no-ssr>
      </b-form-group>

      <b-form-group
        :description="$t('Select a question type.')" 
        :label="$t('Question Type')"
        label-class="form-label">
        <b-form-select
          :value="$t('Multiple Answer')" 
          :options="[$t('Multiple Answer'), $t('Single Answer'), $t('Essay')]" />
      </b-form-group>

      <b-form-group
        :description="$t('Select one or more answers.')" 
        :label="$t('Answers')"
        label-class="form-label">
        <b-form-tags 
          v-model="answers"
          :placeholder="$t('Add Answer')" />
      </b-form-group>

      <b-form-group
        :label="$t('Completion Points')"
        label-class="form-label">
        <b-form-input 
          value="1000" />
      </b-form-group>

      <b-btn 
        type="submit" 
        variant="outline-secondary"
        v-text="$t('Add Question')" />
    </b-card>
  </div>
</template>

<i18n>
  {
    "ro": {
      "New Question": "Întrebare Nouă",
      "Question": "Întrebare",
      "Shortly describe the question.": "Descrie întrebarea pe scurt.",
      "Select a question type.": "Alege tipul întrebării",
      "Question Type": "Tipul Întrebării",
      "Multiple Answer": "Mai multe răspunsuri",
      "Single Answer": "Un singur răspuns",
      "Essay": "Eseu",
      "Select one or more answers.": "Alege unul sau mai multe răspunsuri.",
      "Answers": "Răspunsuri",
      "Add Answer": "Adaugă Răspuns",
      "Completion Points": "Punctaj",
      "Add Question": "Adaugă Întrebare"
    }
  }
</i18n>

<script>
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      PageSeparator
    },
    data() {
      return {
        answers: [
          'JavaScript',
          'Angular',
          'Bootstrap',
          'CSS',
          'HTML'
        ],
        content: `An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?`,
        editorOption: {
          theme: 'snow',
          placeholder: this.$t('Question'),
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          }
        }
      }
    }
  }
</script>