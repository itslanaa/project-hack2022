<template>
  <div class="pt-32pt">
    <div
      :class="containerClass" 
      class="d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
      <div 
        :class="{ 'mb-24pt mb-md-0': !!buttonLabel }"
        class="flex d-flex flex-column flex-sm-row align-items-center">
        <div class="mb-24pt mb-sm-0 mr-sm-24pt">
          <page-heading 
            class="mb-0"
            v-text="title" />
          
          <b-breadcrumb
            v-if="breadcrumb" 
            :items="breadcrumb"
            class="mb-0" />
        </div>
      </div>

      <div
        v-if="buttonLabel" 
        class="row">
        <div class="col-auto">
          <b-btn
            :to="routeTo(buttonPath)"
            variant="outline-secondary"
            v-text="buttonLabel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import {PageHeading} from 'vue-luma'

  import routeTo from '~/mixins/route-to'
  import PageHeading from '~/components/Ui/PageHeading.vue'

  export default {
    components: {
      PageHeading
    },
    mixins: [routeTo],
    props: {
      buttonLabel: {
        type: String,
        default: null
      },
      buttonPath: {
        type: String,
        default: null
      },
      breadcrumb: {
        type: Array,
        default() {
          return []
        }
      },
      title: {
        type: String,
        default: null
      },
      containerClass: {
        type: String,
        default: null
      }
    }
  }
</script>