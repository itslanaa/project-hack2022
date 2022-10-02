<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div class="page-section">
      <div :class="containerClass">

        <page-separator
          :title="title" />

        <div class="card mb-0">
          <div class="card-header">
            <div 
              class="row align-items-center" 
              style="white-space: nowrap;">
              <div class="col-lg-auto">
                <form 
                  class="search-form search-form--light d-lg-inline-flex mb-8pt mb-lg-0">
                  <b-form-input 
                    class="w-lg-auto" 
                    :placeholder="$t('Search discussions')" />
                  <b-btn 
                    variant="flush" 
                    type="submit">
                    <md-icon v-text="'search'" />
                  </b-btn>
                </form>
              </div>
              <div class="col-lg d-flex flex-wrap align-items-center">
                <b-dropdown
                  class="ml-lg-auto"
                  :text="$t('All Topics')"
                  variant="link text-black-70"
                  right>
                  <b-dropdown-item active>All Topics</b-dropdown-item>
                  <b-dropdown-item>My Topics</b-dropdown-item>
                </b-dropdown>
                
                <b-dropdown
                  class="mr-8pt"
                  :text="$t('Newest')"
                  variant="link text-black-70"
                  right>
                  <b-dropdown-item active>Newest</b-dropdown-item>
                  <b-dropdown-item>Unanswered</b-dropdown-item>
                </b-dropdown>
                
                <b-btn 
                  :to="routeTo(routes.askQuestion)"
                  exact 
                  variant="accent"
                  v-text="$t('Ask Question')" />
              </div>
            </div>
          </div>

          <discussions
            id="discussions-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage" />

          <div class="card-footer">
            <pager
              v-model="currentPage"
              :total-rows="items.length"
              :per-page="perPage"
              :items="items"
              aria-controls="discussions-table" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Search discussions": "Căutare discuții",
      "All Topics": "Toate Subiectele",
      "Newest": "Cele mai noi"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   Discussions,
  //   MdIcon,
  //   PageHeader,
  //   PageSeparator,
  //   Pager
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import Discussions from '~/components/Community/Discussions.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import Pager from '~/components/Ui/Pager.vue'

  export default {
    components: {
      Discussions,
      MdIcon,
      PageHeader,
      PageSeparator,
      Pager
    },
    extends: Page,
    props: {
      items: {
        type: Array,
        default: () => [{
          avatarTitle: 'LB',
          date: 2,
          name: 'Laza Bogdan',
          title: 'Using Angular HttpClientModule instead of HttpModule',
          chips: ['Angular fundamentals']
        }, {
          avatarTitle: 'AC',
          date: 3,
          name: 'Adam Curtis',
          title: 'Why am I getting an error when trying to install angular/http@2.4.2'
        }, {
          avatarTitle: 'EH',
          date: 4,
          name: 'Emilie Howard',
          title: 'Using Angular HttpClientModule instead of HttpModule'
        }, {
          avatarTitle: 'JK',
          date: 6,
          name: 'Jason Klein',
          title: 'Why am I getting an error when trying to install angular/http@2.4.2'
        }]
      }
    },
    data () {
      return {
        perPage: 3,
        currentPage: 1
      }
    }
  }
</script>
