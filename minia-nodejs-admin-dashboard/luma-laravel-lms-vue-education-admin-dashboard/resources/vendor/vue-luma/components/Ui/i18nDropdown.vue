<template>
  <component
    v-if="$i18n"
    :is="navbar ? 'b-nav-item-dropdown' : 'b-dropdown'"
    v-b-tooltip.hover.bottom="{ title: $t($i18n.locale) }" 
    no-caret
    right>
    <template slot="button-content">
      <fmv-avatar 
        :src="flags[$i18n.locale]" 
        :alt="$i18n.locale"
        size="xs"
        circle
        no-link />
    </template>
    <b-dropdown-item
      v-for="locale in locales"
      :key="`locale-${locale.code}`"
      @click.prevent="$switchLocalePath(locale.code)"
      exact
      :link-class="{ 'active': $i18n.locale === locale.code }">
      {{ $t(locale.code) }}
    </b-dropdown-item>
  </component>
</template>

<script>
  import ro from '~/node_modules/svg-country-flags/svg/ro.svg'
  import us from '~/node_modules/svg-country-flags/svg/us.svg'

  import { locales } from '~/config/i18n'

  export default {
    props: {
      navbar: {
        type: Boolean,
        default: () => true
      },
      flags: {
        type: Object,
        default: () => {
          return {ro, en: us}
        }
      },
      locales: {
        type: Array,
        default: () => locales
      }
    },
    methods: {
      $switchLocalePath(locale) {
        try {
          this.$router.push(this.switchLocalePath(locale))
        } catch (e) {
          this.$root.$i18n.locale = locale
        }
      }
    }
  }
</script>