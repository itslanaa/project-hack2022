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
        :label="$t('First name')"
        label-for="firstname"
        label-class="form-label">
        <b-form-input 
          id="firstname"
          :placeholder="$t('Your first name')"
          value="Alexander" />
      </b-form-group>

      <b-form-group
        :label="$t('Last name')"
        label-for="lastname"
        label-class="form-label">
        <b-form-input 
          id="lastname"
          :placeholder="$t('Your last name')"
          value="Watson" />
      </b-form-group>

      <b-form-group
        :label="$t('Your email address')"
        :description="$t('Note that if you change your email, you will have to confirm it again.')"
        label-for="email"
        label-class="form-label">
        <fmv-input-group-merge 
          id="email"
          :placeholder="$t('Your email address')"
          type="email"
          value="alexander.watson@gmail.com"
          prepend>
          <md-icon>email</md-icon>
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
  //   MdIcon,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  import {FmvInputGroupMerge} from 'fmv-input-group-merge'
  
  export default {
    components: {
      MdIcon,
      PageHeader,
      PageSeparator,
      FmvInputGroupMerge
    },
    extends: Page
  }
</script>
