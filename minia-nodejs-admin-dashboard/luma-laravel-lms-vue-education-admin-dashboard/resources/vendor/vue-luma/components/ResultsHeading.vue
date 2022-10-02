<template>
  <div 
    class="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt" 
    style="white-space: nowrap;">
    <small class="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">
      <span v-text="$t('display', { num: 4, total: 10 })" />
      {{ $t(label) }}</small>
    <div class="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
      <small 
        class="text-muted text-headings text-uppercase mr-3 d-none d-sm-block"
        v-text="$t('Sort by')" />
      <a
        v-for="(item, index) in sort"
        :key="item.id" 
        href="#" 
        :class="{ 
          'desc': index === 0,
          'ml-2': index > 0
        }"
        class="sort small text-headings text-uppercase"
        v-text="$t(item)" />
    </div>

    <b-btn
      v-if="enableSidebarToggle !== false"
      v-fmv-toggle.library-drawer 
      size="sm"
      variant="white"
      class="ml-sm-16pt"
      :class="{ 'd-lg-none': enableSidebarToggle === 'mobile' }">
      <md-icon left>tune</md-icon> 
      <span v-text="$t('Filters')" />
    </b-btn>
  </div>
</template>

<i18n>
  {
    "en": {
      "display": "Displaying {num} out of {total}"
    },
    "ro": {
      "display": "Se afișează {num} din {total}",
      "Sort by": "Sortează",
      "Newest": "Noi",
      "Popularity": "Populare",
      "Filters": "Filtre",
      "courses": "cursuri",
      "paths": "calificări"
    }
  }
</i18n>

<script>
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    props: {
      label: {
        type: String,
        default() {
          return 'courses'
        }
      },
      sort: {
        type: Array,
        default() {
          return ['Newest', 'Popularity']
        }
      },
      drawerId: {
        type: String,
        default() {
          return 'library-drawer'
        }
      },
      enableSidebarToggle: {
        type: [Boolean, String],
        default: true,
        validator: val => ['mobile', true, false, null].includes(val)
      }
    }
  }
</script>