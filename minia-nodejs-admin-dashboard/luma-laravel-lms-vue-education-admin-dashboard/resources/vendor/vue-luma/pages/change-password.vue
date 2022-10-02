<template>
  <div :class="containerClass">
    <page-header
      :title="$t('Account')"
      :breadcrumb="breadcrumb"
      :container-class="null" 
      class="mb-32pt" />
    
    <page-separator
      :title="$t(title)" />

    <b-form class="col-sm-5 px-0 page-section pt-0">
      <b-form-group
        :label="`${$t('New password')}:`"
        label-for="password"
        label-class="form-label">
        <fmv-input-group-merge
          id="password"
          :placeholder="$t('New password')"
          type="password"
          class="form-control-prepended"
          required
          prepend>
          <span class="fas fa-key" />
        </fmv-input-group-merge>
      </b-form-group>

      <b-form-group
        :label="`${$t('Confirm password')}:`"
        label-for="password2"
        label-class="form-label">
        <fmv-input-group-merge
          id="password2"
          :placeholder="$t('Confirm password')"
          type="password"
          class="form-control-prepended"
          required
          prepend>
          <span class="fas fa-key" />
        </fmv-input-group-merge>
      </b-form-group>

      <b-btn
        variant="primary"
        v-text="$t('Save Changes')" />
    </b-form>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  import {FmvInputGroupMerge} from 'fmv-input-group-merge'
  
  export default {
    components: {
      PageHeader,
      PageSeparator,
      FmvInputGroupMerge
    },
    extends: Page
  }
</script>
