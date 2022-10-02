<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div 
      :class="containerClass"
      class="page-section">

      <page-separator
        :title="$t('Overview')" />

      <instructor-earnings
        class="mb-lg-32pt" />

      <page-separator
        :title="$t('Transactions')" />
      
      <b-card no-body>
        <transactions-table
          earnings />
      </b-card>

    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Overview": "Sumar"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   InstructorEarnings,
  //   TransactionsTable,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import InstructorEarnings from '~/components/Instructor/Earnings.vue'
  import TransactionsTable from '~/components/TransactionsTable.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      InstructorEarnings,
      TransactionsTable,
      PageHeader,
      PageSeparator
    },
    extends: Page
  }
</script>
