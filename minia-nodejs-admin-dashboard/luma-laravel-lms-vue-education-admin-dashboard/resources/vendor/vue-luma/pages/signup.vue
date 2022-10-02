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
            :label="`${$t('Name')}:`"
            label-for="name"
            label-class="form-label">
            <fmv-input-group-merge
              id="name"
              autofocus="autofocus"
              v-model="form.name"
              :state="state('name')"
              :invalid-feedback="invalidFeedback('name')"
              :placeholder="$t('Your first and last name')"
              type="text"
              required
              prepend>
              <span class="fas fa-user" />
            </fmv-input-group-merge>
            <b-form-invalid-feedback 
              v-text="invalidFeedback('name')"
              :state="state('name')" />
          </b-form-group>
          
          <b-form-group
            :label="`${$t('Your email address')}:`"
            label-for="email"
            label-class="form-label">
            <fmv-input-group-merge
              id="email"
              v-model="form.email"
              :state="state('email')"
              :invalid-feedback="invalidFeedback('email')"
              :placeholder="$t('Your email address')"
              type="email"
              required
              prepend>
              <span class="fas fa-envelope" />
            </fmv-input-group-merge>
            <b-form-invalid-feedback 
              v-text="invalidFeedback('email')"
              :state="state('email')" />
          </b-form-group>

          <b-form-group
            :label="`${$t('Your password')}:`"
            label-for="password"
            label-class="form-label">
            <fmv-input-group-merge
              id="password"
              v-model="form.password"
              :state="state('password')"
              :invalid-feedback="invalidFeedback('password')"
              :placeholder="$t('Your password')"
              type="password"
              autocomplete="new-password"
              class="form-control-prepended"
              required
              prepend>
              <span class="fas fa-key" />
            </fmv-input-group-merge>
            <b-form-invalid-feedback 
              v-text="invalidFeedback('password')"
              :state="state('password')" />
          </b-form-group>

          <b-form-group
            :label="`${$t('Confirm password')}:`"
            label-for="password_confirmation"
            label-class="form-label">
            <fmv-input-group-merge
              id="password_confirmation"
              v-model="form.password_confirmation"
              :state="state('password_confirmation')"
              :invalid-feedback="invalidFeedback('password_confirmation')"
              :placeholder="$t('Confirm password')"
              type="password"
              autocomplete="new-password"
              class="form-control-prepended"
              required
              prepend>
              <span class="fas fa-key" />
            </fmv-input-group-merge>
            <b-form-invalid-feedback 
              v-text="invalidFeedback('password_confirmation')"
              :state="state('password_confirmation')" />
          </b-form-group>

          <div class="form-group">
            <b-btn 
              type="submit" 
              variant="primary"
              block
              v-text="$t('Sign Up')"
              :disabled="!formState" />
          </div>

          <div class="form-group text-center text-black-70 mb-0">
            <b-form-checkbox 
              id="terms"
              v-model="form.terms"
              required>
              {{ $t('I agree to the') }}
              <component
                :is="linkComponent"
                :to="routeTo(routeTerms || routes.terms)"
                class="text-black-70" 
                style="text-decoration: underline;"
                v-text="$t('Terms of Use')" />
            </b-form-checkbox>
          </div>
        </b-form>

        <div 
          slot="footer" 
          class="text-center text-black-50">
          {{ $t('Already signed up?') }} 
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
      "Create a new account": "Crează un cont nou",
      "Continue with Google": "Continuă cu Google",
      "or": "sau",
      "Name": "Nume",
      "Your first and last name": "Nume și prenume",
      "Your email address": "Adresa ta de email",
      "Your password": "Parola",
      "Confirm password": "Confirmă parola",
      "I agree to the": "Sunt de acord cu",
      "Terms of Use": "Termenii de Utilizare",
      "Already signed up?": "Ai deja un cont?"
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
        default: () => 'Create a new account'
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
      routeTerms: {
        type: [String, Object]
      },
      authWithGoogle: {
        type: Boolean,
        default: () => true
      },
      routeLogin: {
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
        form: {
          name: null,
          email: null,
          password: null,
          password_confirmation: null,
          terms: null
        }
      }
    },
    computed: {
      formState() {
        return !!this.form.terms
      }
    },
    created() {
      this.form.email = this.email
    },
    methods: {
      getErrors(key) {
        if (this.errors && this.errors[key] !== undefined) {
          return this.errors[key]
        }
      },
      onSubmit() {
        if (this.formState) {
          this.onSubmitHandler(this.form)
        }
      },
      onSubmitDefault() {
        this.$router.push(this.routeTo(this.routes.studentDashboard))
      },
      invalidFeedback(key) {
        let errors = this.getErrors(key)
        return errors ? errors[0] : null
      },
      state(key) {
        return this.getErrors(key) ? false : null
      }
    }
  }
</script>
