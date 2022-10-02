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

        <page-separator
          :title="$t('General')" />

        <div class="row mb-8pt">
          <div class="col-md-6 col-xl-4">
            <div class="card stack stack--1">
              <div class="card-header d-flex align-items-center">
                <div class="flex">
                  <h4 class="card-title">Introduction</h4>
                  <div class="card-subtitle text-70">Getting started</div>
                </div>
                <i class="material-icons text-black-20">info_outline</i>
              </div>
              <ul class="list-group list-group-flush border-top-0">
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Basic Setup</strong> <i class="material-icons text-black-20">trending_flat</i></a> 
                </li>
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Working with the Dev</strong> <i class="material-icons text-black-20">trending_flat</i></a>  
                </li>
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Your first deploy</strong> <i class="material-icons text-black-20">trending_flat</i></a> 
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="card stack stack--1">
              <div class="card-header d-flex align-items-center">
                <div class="flex">
                  <h4 class="card-title">Customization</h4>
                  <div class="card-subtitle text-70">Documentation</div>
                </div>
                <i class="material-icons text-black-20">info_outline</i>
              </div>
              <ul class="list-group list-group-flush border-top-0">
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Styling with SASS</strong> <i class="material-icons text-black-20">trending_flat</i></a> 
                </li>
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Editing the Pages</strong> <i class="material-icons text-black-20">trending_flat</i></a> 
                </li>
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Saving for later</strong> <i class="material-icons text-black-20">trending_flat</i></a>  
                </li>
              </ul>
            </div>
          </div>
        </div>

        <page-separator
          :title="$t('Documentation')" />

        <div class="row">
          <div class="col-md-6 col-xl-4">
            <div class="card stack stack--1 mb-0">
              <div class="card-header d-flex align-items-center">
                <div class="flex">
                  <h4 class="card-title">API</h4>
                  <div class="card-subtitle text-70">Documentation</div>
                </div>
                <i class="material-icons text-black-20">info_outline</i>
              </div>
              <ul class="list-group list-group-flush border-top-0">
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Course API Docs</strong> <i class="material-icons text-black-20">trending_flat</i></a>  
                </li>
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Student API Docs</strong> <i class="material-icons text-black-20">trending_flat</i></a>  
                </li>
                <li class="list-group-item">
                  <a class="text-body d-flex align-items-center"><strong class="flex">Instructor API Docs</strong> <i class="material-icons text-black-20">trending_flat</i></a> 
                </li>
              </ul>
            </div>
          </div>
        </div>

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
  //   MdIcon,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      MdIcon,
      PageHeader,
      PageSeparator
    },
    extends: Page
  }
</script>
