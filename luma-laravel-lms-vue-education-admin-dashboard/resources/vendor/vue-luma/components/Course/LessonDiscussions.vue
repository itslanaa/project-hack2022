<template>
  <div>
    <div class="d-flex align-items-center mb-heading">
      <h4 
        class="m-0"
        v-text="$t('Discussions')" />
      <b-link 
        :to="routeTo(routes.askQuestion)" 
        class="text-underline ml-auto"
        v-text="$t('Ask a Question')" />
    </div>

    <div class="border-top">
      <discussions
        id="discussions-table" 
        :items="items"
        :per-page="perPage"
        :current-page="currentPage" />

      <pager
        v-if="pager"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        :items="items"
        aria-controls="discussions-table" />

      <b-btn
        v-else 
        :to="routeTo(routes.discussions)" 
        variant="outline-secondary"
        v-text="$t('See all discussions for this lesson')" />
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Discussions": "Discuții",
      "Ask a Question": "Pune o Întrebare",
      "See all discussions for this lesson": "Vezi toate discuțiile pentru această lecție"
    }
  }
</i18n>

<script>
  // import {
  //   Discussions,
  //   Pager
  // } from 'vue-luma'
  
  import Discussions from '~/components/Community/Discussions.vue'
  import Pager from '~/components/Ui/Pager.vue'

  import routeTo from '~/mixins/route-to'

  export default {
    components: {
      Discussions,
      Pager
    },
    mixins: [routeTo],
    props: {
      pager: {
        type: Boolean
      }
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