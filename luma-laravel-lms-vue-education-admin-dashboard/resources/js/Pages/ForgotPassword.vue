<template>
  <div 
    class="page-content justify-content-center"
    style="min-height: 100vh">
    <div 
      class="d-flex justify-content-center my-5"
      v-if="loading">
      <b-spinner 
        variant="primary" 
        type="grow" 
        label="Loading ..."
        style="width: 3rem; height: 3rem;" />
    </div>

    <div v-show="! loading">
      <luma-forgot-password-page
        :title="title"
        :brand="$store.state.brand"
        email="test@luma.test"
        :on-submit-handler="onSubmitHandler"
        :errors="errors">
        
        <p v-if="message">
          <b-form-invalid-feedback
            v-text="message"
            :state="!message" />
        </p>
      </luma-forgot-password-page>
    </div>
  </div>
</template>

<script>
  import Page from '@/Components/Page'
  import {LumaForgotPasswordPage} from 'vue-luma'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      LumaForgotPasswordPage
    },
    extends: Page,
    layout: 'blank',
    data() {
      return {
        title: 'Forgot Password?',
        errors: null,
        message: null
      }
    },
    async asyncData() {
      return {
        title: 'Forgot Password?'
      }
    },
    computed: {
      ...mapGetters('auth', [
        'authStatus'
      ]),
      loading() {
        return this.authStatus === 'loading' || this.authStatus === 'forgotPassword.success'
      }
    },
    methods: {
      async onSubmitHandler(form) {
        this.errors = null
        this.message = null

        return this.$store.dispatch('auth/forgotPassword', form)
          .catch(error => {
            try {
              let { response } = error
              let { data } = response
              let { errors, message } = data
              this.errors = errors
              this.message = message
            } catch (e) {
              this.message = error
            }
          })
      }
    }
  }
</script>
