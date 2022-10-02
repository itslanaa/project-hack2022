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
        v-for="(item, idx) in notifications"
        :key="`notifications-${idx}`"
        :description="item.description">
        <b-form-checkbox 
          :checked="item.checked">
          {{ item.label }}
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
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  
  export default {
    components: {
      PageHeader,
      PageSeparator
    },
    extends: Page,
    data() {
      return {
        notifications: [{
          label: 'Luma Newsletter',
          description: 'Get the latest on company news.',
          checked: true
        }, {
          label: 'New Content Releases',
          description: 'Send me an email when new courses or bonus content is released.',
          checked: true
        }, {
          label: 'Product & Feature Updates',
          description: 'Be the first to know when we announce new features and updates.',
          checked: true
        }, {
          label: 'Emails from Teachers',
          description: 'Get messages, encouragement and helpful information from your teachers.',
          checked: true
        }, {
          label: 'Content Suggestions',
          description: 'Get daily content suggestions to keep you on track.',
          checked: false
        }]
      }
    }
  }
</script>
