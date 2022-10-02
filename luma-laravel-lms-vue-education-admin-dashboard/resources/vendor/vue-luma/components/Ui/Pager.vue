<template>
  <b-pagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    size="xsm"
    hide-goto-end-buttons>
    <template v-slot:prev-text>
      <md-icon aria-hidden="true">chevron_left</md-icon>
      <span>Prev</span>
    </template>
    <template v-slot:next-text>
      <span>Next</span>
      <md-icon aria-hidden="true">chevron_right</md-icon>
    </template>
  </b-pagination>
</template>

<script>
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    model: {
      prop: 'currentPage',
      event: 'input'
    },
    props: {
      perPage: {
        type: Number,
        default: 3
      },
      currentPage: {
        type: Number,
        default: 1
      },
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>