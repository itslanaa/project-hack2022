<template>
  <div>
    <page-separator 
      :title="$t('Basic information')" />

    <b-form-group
      :label="$t('Course title')"
      class="mb-32pt"
      label-class="form-label">
      <b-form-input 
        value="Angular Fundamentals" 
        :placeholder="$t('Course title')"
        size="lg" />

      <template v-slot:description>
        Please see our <b-link v-text="'course title guideline'" />
      </template>
    </b-form-group>

    <b-form-group
      :label="$t('Description')"
      :description="$t('Shortly describe this course.')"
      label-class="form-label"
      class="mb-32pt">
      <no-ssr>
        <quill-editor
          ref="editor"
          v-model="content"
          :options="editorOption" />
      </no-ssr>
    </b-form-group>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Sections": "Secțiuni",
      "Add Section": "Adaugă Secțiune",
      "Basic information": "Informații de bază",
      "Course title": "Titlul cursului",
      "Description": "Descriere"
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
        content: `
          <h1>Hello World!</h1>
          <p>Some initial <strong>bold</strong> text</p>
          <p>&nbsp;<br></p>
        `,
        editorOption: {
          theme: 'snow',
          placeholder: this.$t('Course description'),
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