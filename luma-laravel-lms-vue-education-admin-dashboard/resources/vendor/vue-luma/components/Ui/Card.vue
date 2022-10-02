<template>
  <b-card 
    :no-body="noBody"
    :footer-class="footerClass"
    :header-class="headerClass">
    <b-media
      slot="header"
      right-align
      vertical-align="center">
      <h4
        :class="titleClass" 
        class="card-title">{{ title }}</h4>
      <p 
        v-if="subtitle" 
        class="card-subtitle text-50">{{ subtitle }}</p>
      <slot 
        v-if="headerAside || headerBtn"
        slot="aside"
        name="aside">
        <b-btn
          v-if="headerBtn" 
          :variant="headerBtnVariant" 
          :size="headerBtnSize"
          :to="headerBtnRoute">
          <slot name="header-btn-title">
            {{ headerBtnTitle }}
          </slot>
        </b-btn>
      </slot>
    </b-media>
    <slot />
    <slot
      slot="footer" 
      name="footer" />
  </b-card>
</template>

<style>
.highlight {
  white-space: pre-line;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: [String, Boolean],
      default: false
    },
    noBody: {
      type: Boolean,
      default: false
    },
    headerAside: {
      type: Boolean,
      default: false
    },
    headerBtn: {
      type: Boolean,
      default: false
    },
    headerBtnTitle: {
      type: String,
      default: 'Button'
    },
    headerBtnVariant: {
      type: String,
      default: 'outline-secondary'
    },
    headerBtnSize: {
      type: String,
      default: 'sm'
    },
    headerBtnRoute: {
      type: [String, Object],
      default: null
    },
    headerClass: {
      type: [String, Object, Array],
      default: null
    },
    footerClass: {
      type: [String, Object, Array],
      default: null
    },
    titleClass: {
      type: [String, Object, Array],
      default: null
    }
  }
}
</script>
