<template>
  <b-card class="border-1 border-left-3 border-left-primary card-2by1">
    <b-media 
      class="flex-wrap" 
      vertical-align="center">
      <md-icon 
        slot="aside" 
        class="text-muted">
        credit_card
      </md-icon>
      <div class="d-flex align-items-center">
        <div 
          class="flex"
          v-html="i18nMessage" />
        <b-btn 
          variant="success"
          class="mt-2 mt-xs-plus-0 ml-sm-2"
          v-text="$t('Upgrade')" />
      </div>
    </b-media>
  </b-card>
</template>

<script>
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    props: {
      expiresAt: {
        type: Date,
        default: () => new Date()
      },
      message: {
        type: String,
        default() {
          return this.$i18nMessage
        }
      }
    },
    data() {
      return {
        expires_at: new Date()
      }
    },
    computed: {
      localeConfig() {
        return this.$i18n.locales.find(
          locale => locale.code === this.$i18n.locale
        )
      },
      dateTimeLocale() {
        if (this.localeConfig) {
          return this.localeConfig.iso
        }
      },
      i18nDate() {
        return this.$d(this.expires_at, 'short', this.dateTimeLocale)
      },
      i18nMessage() {
        return this.$t('upgrade_subscription', {
          expires_at: this.i18nDate
        })
      }
    }
  }
</script>
