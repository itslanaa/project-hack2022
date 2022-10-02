<template>
  <div :class="containerClass">
    <page-header
      :title="$t('Billing')"
      :breadcrumb="breadcrumb"
      :container-class="null" 
      class="mb-32pt" />
    
    <page-separator
      :title="$t(title)" />

    <div class="row card-group-row mb-40pt">
      <div class="col-lg-4 col-sm-6 card-group-row__col">
        <pricing-card
          title="Student"
          description="Access to over 1.000 high quality courses. For individuals."
          price="9"
          color="secondary"
          action-color="outline-secondary"
          action="Current plan"
          action-disabled
          icon="person" />
      </div>
      <div class="col-lg-4 col-sm-6 card-group-row__col">
        <pricing-card
          title="Team"
          description="Starts with 3 accounts with more seats available."
          price="19"
          color="accent"
          raised
          icon="group" />
      </div>
      <div class="col-lg-4 col-sm-6 card-group-row__col">
        <pricing-card
          title="Enterprise"
          description="Build customized learning paths with content that aligns to your internal learning goals."
          price="49"
          color="accent"
          raised
          icon="group" />
      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   PricingCard,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import PricingCard from '../components/Pricing/PricingCard.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  
  export default {
    components: {
      PricingCard,
      PageHeader,
      PageSeparator
    },
    extends: Page
  }
</script>
