<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div class="page-section">
      <div :class="containerClass">
        
        <div 
          class="flex search-form form-control-rounded search-form--light mb-16pt" 
          style="min-width: 200px;">
          <b-form-input 
            :placeholder="$t('Search articles')" />
          <b-btn 
            class="pr-3" 
            type="submit"
            variant="flush">
            <md-icon v-text="'search'" />
          </b-btn>
        </div>
        <div class="mb-32pt d-flex align-items-center">
          <small 
            class="text-black-70 text-headings text-uppercase mr-3"
            v-text="$t('results', { results: 10, total: 5234 })" />
          <b-dropdown
            class="ml-auto"
            :text="$t('All Topics')"
            variant="flush text-black-70"
            right>
            <b-dropdown-item active>All Topics</b-dropdown-item>
            <b-dropdown-item>General</b-dropdown-item>
            <b-dropdown-item>Lessons</b-dropdown-item>
            <b-dropdown-item>Customer Support</b-dropdown-item>
          </b-dropdown>
        </div>

        <div class="row card-group-row">
          <div class="col-md-6 card-group-row__col">
            <faq-card
              title="Do you offer a free trial?"
              description="We offer everyone a 7 day free trial! You can take advantage of it by visiting our sign-up page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ab!"
              class="card-group-row__card" />
          </div>
          <div class="col-md-6 card-group-row__col">
            <faq-card
              title="Can I gift a subscription to someone?"
              description="Yes! We do offer certificates. Please email us for more information. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ad!"
              class="card-group-row__card" />
          </div>
          <div class="col-md-6 card-group-row__col">
            <faq-card
              title="I have a great idea for an application or website, but need help on where to begin. Can you guys help me?"
              description="We advise posting personal requests in our Community Forum Lorem ipsum dolor sit amet."
              class="card-group-row__card" />
          </div>
          <div class="col-md-6 card-group-row__col">
            <faq-card
              title="I found a bug. Where can I report that?"
              description="In the unlikely situation you stumble across a bug, go ahead and shoot us an email. Lorem ipsum dolor sit amet"
              class="card-group-row__card" />
          </div>
        </div>

        <pager />

      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "results": "Displaying {results} out of {total} articles"
    },
    "ro": {
      "Search articles": "Căutare articole",
      "All Topics": "Toate Subiectele",
      "results": "Se afișează {results} din {total} articole"
    }
  }
</i18n>

<script>
  // import {
  //   Page, 
  //   FaqCard,
  //   MdIcon,
  //   PageHeader,
  //   Pager
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import FaqCard from '~/components/Faq/FaqCard.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import Pager from '~/components/Ui/Pager.vue'

  export default {
    components: {
      FaqCard,
      MdIcon,
      PageHeader,
      Pager
    },
    extends: Page
  }
</script>
