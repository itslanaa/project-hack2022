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

        <template v-if="authWithGoogle">
          <b-btn 
            variant="light"
            exact
            block
            class="mb-16pt"
            @click.prevent="onAuthWithGoogle">
            <span class="fab fa-google mr-2" />
            {{ $t('Continue with Google') }}
          </b-btn>

          <page-separator
            :title="$t('or')"
            text-class="bg-white"
            center />
        </template>

        <b-form
          novalidate 
          @submit.prevent="onSubmit">
          
          <b-form-group
            :label="`${$t('Your email address')}:`"
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

          <b-form-group
            :label="`${$t('Your password')}:`"
            label-for="password"
            label-class="form-label">
            <fmv-input-group-merge
              id="password"
              v-model="form.password"
              :invalid-feedback="invalidFeedback"
              :state="state"
              :placeholder="$t('Your password')"
              type="password"
              class="form-control-prepended"
              required
              prepend>
              <span class="fas fa-key" />
            </fmv-input-group-merge>
          </b-form-group>

          <div class="form-group">
            <b-btn 
              type="submit" 
              variant="primary"
              block
              v-text="$t('Login')" />
          </div>

          <div class="text-center">
            <component
              :is="linkComponent"
              :to="routeTo(routeForgotPassword || routes.forgotPassword)"
              class="text-black-70" 
              style="text-decoration: underline;"
              v-text="$t('Forgot Password?')" />
          </div>
        </b-form>

        <div 
          slot="footer" 
          class="text-center text-black-50">
          {{ $t(this.signupDescription) }} 
          <component
            :is="linkComponent"
            :to="routeTo(routeSignup || routes.signup)"
            v-text="$t('Sign up')" />
        </div>
      </card>

    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Continue with Google": "Continuă cu Google",
      "or": "sau",
      "Your email address": "Adresa ta de email",
      "Your password": "Parola ta",
      "Have an account?": "Ai deja un cont?",
      "Access your account": "Accesează contul tău",
      "Not yet a student?": "Încă nu ai cont de student?",
      "Sign up": "Înscrie-te",
      "Forgot Password?": "Ai uitat parola?"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   PageSeparator,
  //   Card
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import Card from '~/components/Ui/Card.vue'
  
  import {FmvAvatar} from 'fmv-avatar'
  import {FmvInputGroupMerge} from 'fmv-input-group-merge'

  import logo from '~/static/images/illustration/student/128/white.svg'

  export default {
    components: {
      PageSeparator,
      Card,
      FmvAvatar,
      FmvInputGroupMerge
    },
    extends: Page,
    props: {
      subtitle: {
        type: String,
        default: () => 'Access your account'
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
      authWithGoogle: {
        type: Boolean,
        default: () => true
      },
      routeSignup: {
        type: [String, Object]
      },
      routeForgotPassword: {
        type: [String, Object]
      },
      onSubmitHandler: {
        type: Function,
        default() {
          this.onSubmitDefault()
        }
      },
      onAuthWithGoogle: {
        type: Function,
        default() {
          this.onSubmitDefault()
        }
      },
      signupDescription: {
        type: String,
        default: () => 'Not yet a student?'
      },
      email: {
        type: String,
        default: () => null
      },
      password: {
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
        form: {
          email: null,
          password: null
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
        email: this.email,
        password: this.password
      }
    },
    methods: {
      getErrors(key) {
        if (this.errors && this.errors[key] !== undefined) {
          return this.errors[key]
        }
      },
      onSubmit() {
        this.onSubmitHandler(this.form)
      },
      onSubmitDefault() {
        this.$router.push(this.routeTo(this.routes.studentDashboard))
      }
    }
  }
</script>
