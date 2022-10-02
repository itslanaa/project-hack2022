<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div class="page-section border-bottom-2">
      <div :class="containerClass">

        <div class="row">
          <div class="col-md-8">
            <edit-course-basic />
            <edit-course-sections />
          </div>
          <div class="col-md-4">

            <b-card
              header-class="text-center"
              no-body>
              <template v-slot:header>
                <b-btn 
                  type="submit"
                  variant="accent"
                  v-text="$t('Save Changes')" />
              </template>
              
              <b-list-group class="list-group-flush border-top-0">
                <b-list-group-item class="d-flex">
                  <b-link 
                    class="flex">
                    <strong 
                      v-text="$t('Save Draft')" />
                  </b-link>
                  <md-icon 
                    class="text-muted"
                    v-text="'check'" />
                </b-list-group-item>
                <b-list-group-item>
                  <strong
                    class="text-danger" 
                    v-text="$t('Delete Course')" />
                </b-list-group-item>
              </b-list-group>
            </b-card>

            <page-separator
              :title="$t('Video')" />

            <b-card
              no-body>
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0"
                allowfullscreen />

              <div class="card-body">
                <b-form-group
                  :description="$t('Enter a valid video URL.')" 
                  :label="$t('URL')"
                  label-class="form-label"
                  class="mb-0">
                  <b-form-input
                    value="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0" 
                    :placeholder="$t('Enter Video URL')" />
                </b-form-group>
              </div>
            </b-card>

            <page-separator
              :title="$t('Options')" />
            
            <b-card>
              <b-form-group
                :description="$t('Select a category.')" 
                :label="$t('Category')"
                label-class="form-label">
                <b-form-select
                  value="VueJS" 
                  :options="['VueJS', 'Angular', 'React']" />
              </b-form-group>

              <b-form-group
                :label="$t('Price')"
                label-class="form-label">
                <b-input-group
                  prepend="$">
                  <b-form-input
                    value="24" />
                </b-input-group>
                <template v-slot:description>
                  The recommended price is between &dollar;17 and &dollar;24
                </template>
              </b-form-group>

              <b-form-group
                :description="$t('Select one or more tags.')" 
                :label="$t('Tags')"
                label-class="form-label"
                class="mb-0">
                <b-form-tags 
                  v-model="tags" />
              </b-form-group>
            </b-card>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Save Changes": "Salvează Modificări",
      "Save Draft": "Salvează Schiță",
      "Delete Course": "Șterge Cursul",
      "Options": "Opțiuni",
      "Category": "Categorie",
      "Select a category.": "Alege o categorie.",
      "Price": "Preț"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   EditCourseBasic,
  //   EditCourseSections,
  //   MdIcon,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import EditCourseBasic from '~/components/Instructor/EditCourseBasic.vue'
  import EditCourseSections from '~/components/Instructor/EditCourseSections.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      EditCourseBasic,
      EditCourseSections,
      MdIcon,
      PageHeader,
      PageSeparator
    },
    extends: Page,
    data() {
      return {
        tags: [
          'JavaScript',
          'Angular',
          'Bootstrap',
          'CSS',
          'HTML'
        ]
      }
    }
  }
</script>
