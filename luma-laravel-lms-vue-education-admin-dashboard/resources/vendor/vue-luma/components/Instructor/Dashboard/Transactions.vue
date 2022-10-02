<template>
  <card
    :header-btn="true" 
    :title="$t('Transactions')"
    :subtitle="$t('Latest Transactions')"
    :header-btn-route="routeTo(routes.instructorStatement)"
    no-body>
    <md-icon slot="header-btn-title">receipt</md-icon>

    <transactions-table />
  </card>
</template>

<script>
  // import {
  //   TransactionsTable,
  //   MdIcon,
  //   Card
  // } from 'vue-luma'
  
  import TransactionsTable from '~/components/TransactionsTable.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import Card from '~/components/Ui/Card.vue'
  
  import routeTo from '~/mixins/route-to'

  export default {
    components: {
      TransactionsTable,
      MdIcon,
      Card
    },
    mixins: [routeTo]
  }
</script>
