<template>
  <div :class="containerClass">
    <page-header
      :title="$t('Account')"
      :breadcrumb="breadcrumb"
      :container-class="null" 
      class="mb-32pt" />
    
    <page-separator
      :title="$t(title)" />

    <b-form class="measure-lead page-section pt-0">
      <b-form-group
        :label="$t('Your photo')"
        label-for="avatar"
        label-class="form-label"
        class="row-align-items-center">
        <b-media
          class="align-items-center"
          vertical-align="center">
          <fmv-avatar
            slot="aside"
            src="/images/people/110/guy-6.jpg"
            alt="Avatar"
            size="lg"
            no-link>
            <md-icon>photo</md-icon>
          </fmv-avatar>
          <b-form-file 
            id="avatar"
            :placeholder="$t('Your avatar photo')" />
        </b-media>
      </b-form-group>

      <b-form-group
        :label="$t('Profile name')"
        :description="$t('profile_name_description')"
        label-for="profilename"
        label-class="form-label">
        <fmv-input-group-merge
          id="profilename"
          :placeholder="$t('Your profile name')"
          value="alexander"
          prepend>
          luma.io/
        </fmv-input-group-merge>
      </b-form-group>

      <b-form-group
        :label="$t('About you')"
        label-for="about"
        label-class="form-label">
        <b-form-textarea 
          id="about"
          :placeholder="`${$t('About you')} ...`"
          :rows="3"
          :max-rows="5" />
      </b-form-group>

      <b-form-group
        :label="$t('Privacy')"
        :description="$t('display_realname_description')"
        label-class="form-label">
        <b-form-checkbox 
          id="display_realname"
          :checked="true">
          {{ $t('display_realname_label') }}
        </b-form-checkbox>
      </b-form-group>

      <b-form-group
        :description="$t('public_profile_description')">
        <b-form-checkbox 
          id="public_profile"
          :checked="true">
          {{ $t('public_profile_label') }}
        </b-form-checkbox>
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
  
  import {FmvAvatar} from 'fmv-avatar'
  import {FmvInputGroupMerge} from 'fmv-input-group-merge'
  
  export default {
    components: {
      MdIcon,
      PageHeader,
      PageSeparator,
      FmvAvatar,
      FmvInputGroupMerge
    },
    extends: Page
  }
</script>
