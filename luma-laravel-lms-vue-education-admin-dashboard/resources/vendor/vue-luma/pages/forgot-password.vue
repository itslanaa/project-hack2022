<template>
  <div 
    class="d-flex align-items-center" 
    style="min-height: 100vh">
    <div 
      class="col-sm-8 col-md-6 col-lg-4 mx-auto"
      style="min-width: 300px;">
      <div class="text-center mt-5 mb-1">
        <fmv-avatar
          :to="routeTo(routeLogo || routes.home)"
          :title="true"
          title-class="bg-primary">
          <b-img 
            :src="logo" 
            class="img-fluid"
            width="40" 
            :alt="brand" />
        </fmv-avatar>
      </div>
      <div class="d-flex justify-content-center mb-4 navbar-light">
        <!-- Brand -->
        <component
          :is="linkComponent"
          :to="routeTo(routeLogo || routes.home)"
          class="navbar-brand m-0"
          v-text="brand" />
      </div>
      <card 
        :title="$t(title)"
        :subtitle="$t(subtitle)"
        header-class="text-center"
        class="navbar-shadow">

        <slot />

        <b-alert
          variant="soft-warning" 
          :show="success"
          class="d-flex flex-wrap">
          <div class="mr-8pt">
            <i class="material-icons">check_circle</i>
          </div>
          <div 
            class="flex" 
            style="min-width: 180px">
            <small 
              class="text-black-100"
              v-text="$t('An email with password reset instructions has been sent to your email address, if it exists on our system.')" />
          </div>
        </b-alert>

        <b-form
          novalidate 
          @submit.prevent="onSubmit">
          
          <b-form-group
            :label="`${$t('Your email address')}:`"
            :description="$t('We will email you with info on how to reset your password.')"
            label-for="email"
            label-class="form-label">
            <fmv-input-group-merge
              id="email"
              v-model="form.email"
              :invalid-feedback="invalidFeedback"
              :state="state"
              :placeholder="$t('Your email address')"
              type="email"
              required
              prepend>
              <span class="fas fa-envelope" />
            </fmv-input-group-merge>
            <b-form-invalid-feedback 
              v-text="invalidFeedback"
              :state="state" />
          </b-form-group>

          <b-btn 
            type="submit" 
            variant="primary"
            block
            v-text="$t('Send instructions')" />
        </b-form>

        <div 
          slot="footer" 
          class="text-center text-black-50">
          {{ $t('Remember your password?') }} 
          <component
            :is="linkComponent"
            :to="routeTo(routeLogin || routes.login)"
            v-text="$t('Login')" />
        </div>
      </card>

    </div>
  </div>  
</template>

<i18n>
  {
    "ro": {
      "Recover your account password": "Recuperează parola contului tău",
      "An email with password reset instructions has been sent to your email address, if it exists on our system.": "Verifică-ți email-ul pentru instrucțiunile de resetare a parolei.",
      "Your email address": "Adresa ta de email",
      "We will email you with info on how to reset your password.": "Îți vom trimite pe email instrucțiunile de resetare a parolei.",
      "Send instructions": "Trimite instrucțiuni",
      "Remember your password?": "Ți-ai amintit parola?",
      "Forgot Password?": "Ai uitat parola?"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   Card
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import Card from '~/components/Ui/Card.vue'
  
  import {FmvAvatar} from 'fmv-avatar'
  import {FmvInputGroupMerge} from 'fmv-input-group-merge'

  import logo from '~/static/images/illustration/student/128/white.svg'

  export default {
    components: {
      FmvAvatar,
      FmvInputGroupMerge,
      Card
    },
    extends: Page,
    props: {
      subtitle: {
        type: String,
        default: () => 'Recover your account password'
      },
      brand: {
        type: String,
        default: () => 'Brand'
      },
      logo: {
        type: String,
        default: () => logo
      },
      routeLogo: {
        type: [String, Object]
      },
      routeLogin: {
        type: [String, Object]
      },
      onSubmitHandler: {
        type: Function,
        async default() {
          return await this.onSubmitDefault()
        }
      },
      email: {
        type: String,
        default: () => null
      },
      errors: {
        type: Object,
        default: () => {}
      },
      linkComponent: {
        type: [String, Object],
        default: () => 'b-link'
      }
    },
    data() {
      return {
        success: false,
        form: {
          email: null
        }
      }
    },
    computed: {
      invalidFeedback() {
        let errors = this.getErrors('email')
        return errors ? errors[0] : null
      },
      state() {
        return this.errors ? false : undefined
      }
    },
    created() {
      this.form = {
        email: this.email
      }
    },
    methods: {
      getErrors(key) {
        if (this.errors && this.errors[key] !== undefined) {
          return this.errors[key]
        }
      },
      async onSubmit() {
        let success = await this.onSubmitHandler(this.form)
        this.success = !!success
      },
      async onSubmitDefault() {
        return true
      }
    }
  }
</script>
