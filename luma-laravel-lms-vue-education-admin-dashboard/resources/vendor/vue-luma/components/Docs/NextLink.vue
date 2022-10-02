<template>
  <b-button-group
    class="measure-lead-max navbar-shadow docs-next w-100">
    <b-btn
      v-if="prev"
      v-b-tooltip.hover.left="{
        title: $t(prev.title),
        disabled: !next
      }"
      :to="routeTo(prev.to)"
      exact
      :block="!next"
      variant="white"
      :class="{ 'p-3': !next }">
      <md-icon 
        class="font-size-24pt text-black-50"
        v-text="next ? 'keyboard_arrow_left' : 'arrow_back'" />
      <template 
        v-if="!next">
        <span class="d-flex flex-column flex align-items-start ml-12pt">
          <small 
            class="text-black-50"
            v-text="$t('Prev')" />
          <strong 
            v-text="$t(prev.title)" />
        </span>
      </template>
    </b-btn>
    <b-btn
      v-if="next"
      :to="routeTo(next.to)"
      exact
      variant="white"
      block
      class="d-flex p-3 text-left">
      <span class="d-flex flex-column flex align-items-start">
        <small 
          class="text-black-50"
          v-text="$t('Next')" />
        <strong 
          v-text="$t(next.title)" />
      </span>
      <md-icon 
        class="font-size-24pt text-black-50"
        v-text="'arrow_forward'" />
    </b-btn>
  </b-button-group>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    mixins: [routeTo],
    props: {
      next: {
        type: Object,
        default: () => null
      },
      prev: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
