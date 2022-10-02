<template>
  <div>
    <page-separator>{{ $t('Discussions') }}</page-separator>

    <b-card no-body>
      <discussions
        id="discussions-table" 
        :items="items"
        :per-page="perPage"
        :current-page="currentPage" />
      <b-card-footer class="p-8pt">
        <pager
          v-model="currentPage"
          :per-page="perPage"
          :items="items"
          aria-controls="discussions-table" />
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
  // import {
  //   Discussions,
  //   PageSeparator,
  //   Pager
  // } from 'vue-luma'
  
  import Discussions from '~/components/Community/Discussions.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import Pager from '~/components/Ui/Pager.vue'

  export default {
    components: {
      Discussions,
      PageSeparator,
      Pager
    },
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [{
          avatarTitle: 'LB',
          date: 2,
          name: 'Laza Bogdan',
          title: 'Using Angular HttpClientModule instead of HttpModule',
          chips: ['Angular fundamentals'],
          answers: 2
        }, {
          avatarTitle: 'AC',
          date: 3,
          name: 'Adam Curtis',
          title: 'Why am I getting an error when trying to install angular/http@2.4.2',
          answers: 1
        }]
      }
    }
  }
</script>