<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    
    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <div class="row">
          <div class="col-lg-4">
            <div class="card border-1 border-left-3 border-left-accent text-center mb-lg-0">
              <div class="card-body">
                <h4 class="h2 mb-0">&dollar;1,569.00</h4>
                <div v-text="$t('Earnings this month')" />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-center mb-lg-0">
              <div class="card-body">
                <h4 class="h2 mb-0">&dollar;3,917.80</h4>
                <div v-text="$t('Account Balance')" />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-center mb-lg-0">
              <div class="card-body">
                <h4 class="h2 mb-0">&dollar;10,211.50</h4>
                <div v-text="$t('Total Sales')" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div 
      :class="containerClass" 
      class="page-section">

      <div class="row">
        <div class="col-lg-6">

          <instructor-dashboard-earnings />
          <instructor-dashboard-transactions />

        </div>
        <div class="col-lg-6">

          <instructor-dashboard-sales />
          <instructor-dashboard-comments />

        </div>
      </div>

    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Earnings this month": "Încasări luna asta",
      "Account Balance": "Soldul contului",
      "Total Sales": "Vânzări Totale"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   InstructorDashboardEarnings,
  //   InstructorDashboardTransactions,
  //   InstructorDashboardSales,
  //   InstructorDashboardComments,
  //   PageHeader
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import InstructorDashboardEarnings from '~/components/Instructor/Dashboard/Earnings.vue'
  import InstructorDashboardTransactions from '~/components/Instructor/Dashboard/Transactions.vue'
  import InstructorDashboardSales from '~/components/Instructor/Dashboard/Sales.vue'
  import InstructorDashboardComments from '~/components/Instructor/Dashboard/Comments.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'

  export default {
    components: {
      InstructorDashboardEarnings,
      InstructorDashboardTransactions,
      InstructorDashboardSales,
      InstructorDashboardComments,
      PageHeader
    },
    extends: Page
  }
</script>
