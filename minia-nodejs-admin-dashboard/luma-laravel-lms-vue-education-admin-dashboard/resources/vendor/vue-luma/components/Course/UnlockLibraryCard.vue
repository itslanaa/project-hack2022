<template>
  <b-card
    body-class="py-16pt text-center">
    <span class="icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-8pt">
      <md-icon>timer</md-icon>
    </span>
    <h4 class="card-title"><strong>{{ $t(`Unlock ${label}`) }}</strong></h4>
    <p 
      class="card-subtitle text-70 mb-24pt"
      v-text="$t('description')" />

    <b-btn 
      :to="routeTo(routes.pricing)" 
      variant="accent"
      class="mb-8pt">
      {{ $t('cta', { price }) }}
    </b-btn>
    <p class="mb-0">
      {{ $t('Have an account?') }}
      <b-link 
        :to="routeTo(routes.login)" 
        v-text="$t('Login')" />
    </p>
  </b-card>
</template>

<i18n>
  {
    "ro": {
      "Unlock Library": "Deblocați Biblioteca",
      "Unlock Course": "Deblocați Cursul",
      "cta": "Înscriere - Doar {price}/lună",
      "description": "Accesează toate cursurile din bibliotecă"
    },
    "en": {
      "cta": "Sign Up - Only {price}/mo",
      "description": "Get access to all videos in the library"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import { locales, numberFormats } from '~/config/i18n'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    mixins: [routeTo],
    i18n: {
      numberFormats
    },
    props: {
      label: {
        type: String,
        default() {
          return 'Library'
        }
      }
    },
    data() {
      return {
        locales
      }
    },
    computed: {
      localeIso() {
        return this.locales.find(locale => locale.code === this.$i18n.locale).iso
      },
      price() {
        return this.$n(19, 'currency', this.localeIso)
      }
    }
  }
</script>