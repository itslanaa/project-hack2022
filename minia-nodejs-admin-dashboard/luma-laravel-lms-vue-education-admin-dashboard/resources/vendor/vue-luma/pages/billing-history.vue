<template>
  <div :class="containerClass">
    <page-header
      :title="$t('Billing')"
      :breadcrumb="breadcrumb"
      :container-class="null" 
      class="mb-32pt" />
    
    <page-separator
      :title="$t(title)" />

    <div class="col-xl-10 page-section px-0 pt-0">
      <b-alert
        variant="soft-warning px-12pt"
        show>
        <div class="d-flex align-items-center">
          <div class="flex d-flex align-items-center">
            <b-img 
              src="/images/visa.svg" 
              alt="visa" 
              width="38"
              class="mr-8pt" />
            <span class="text-black-100">
              Please pay your amount due 
              <strong>$25.00 USD</strong>
            </span>
          </div>
          <b-btn 
            :to="routeTo(routes.billingPayment)" 
            variant="dark"
            class="ml-3"
            v-text="$t('Pay Now')" />
        </div>
      </b-alert>

      <b-card no-body>
        <transactions-table history />
      </b-card>
    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   TransactionsTable,
  //   PageHeader
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import TransactionsTable from '~/components/TransactionsTable.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      TransactionsTable,
      PageHeader,
      PageSeparator
    },
    extends: Page
  }
</script>
