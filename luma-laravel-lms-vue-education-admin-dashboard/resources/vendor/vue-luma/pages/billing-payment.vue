<template>
  <div :class="containerClass">
    <page-header
      :title="$t('Billing')"
      :breadcrumb="breadcrumb"
      :container-class="null" 
      class="mb-32pt" />
    
    <page-separator
      :title="$t(title)" />

    <div class="measure-lead-max page-section pt-0">
      <b-card no-body>
        <b-list-group class="list-group-flush">
          <b-list-group-item>
            <span class="d-flex align-items-center">
              <b-img
                src="/images/visa.svg"
                alt="cc"
                width="40"
                class="mr-3" />
              <span 
                class="flex" 
                style="white-space: nowrap;">
                {{ $t('Your current payment method is') }} 
                <strong>{{ $t('Visa ending with 2819') }}</strong>
              </span>
            </span>
          </b-list-group-item>
          <b-list-group-item>
            <b-form-group
              :label-cols="3"
              :label="$t('Payment type')"
              breakpoint="md"
              label-class="form-label"
              class="m-0 row-align-items-center"
              horizontal>
              <b-btn-group>
                <b-btn
                  :pressed="payment_type === 'cc'"
                  variant="outline-secondary"
                  @click="setPaymentType('cc')"
                  v-text="$t('Debit or credit card')" />
                <b-btn
                  :pressed="payment_type === 'pp'"
                  variant="outline-secondary"
                  @click="setPaymentType('pp')"
                  v-text="$t('PayPal')" />
              </b-btn-group>
            </b-form-group>
          </b-list-group-item>
          <b-list-group-item>
            <b-form-group
              :label-cols="3"
              :label="$t('Card number')"
              breakpoint="md"
              label-class="form-label"
              label-for="cc"
              class="m-0 row-align-items-center"
              horizontal>
              <b-form-input
                id="cc"
                :placeholder="$t('Credit / debit card number')" />
            </b-form-group>
          </b-list-group-item>
          <b-list-group-item>
            <b-form-group
              :label-cols="3"
              :label="$t('Security code (CVV)')"
              breakpoint="md"
              label-class="form-label"
              label-for="cvv"
              class="m-0 row-align-items-center"
              horizontal>
              <b-form-input
                id="cvv"
                :placeholder="$t('CVV')"
                style="width: 100px;" />
            </b-form-group>
          </b-list-group-item>
          <b-list-group-item>
            <b-form-group
              :label-cols="3"
              :label="$t('Expiration date')"
              breakpoint="md"
              label-class="form-label"
              label-for="expire_month"
              class="m-0 row-align-items-center"
              horizontal>
              <div class="form-row">
                <div class="col-auto">
                  <b-form-select
                    id="expire_month"
                    v-model="expire_month"
                    style="width: 140px;">
                    <option value="1">{{ $t('January') }}</option>
                    <option value="2">{{ $t('February') }}</option>
                    <option value="3">{{ $t('March') }}</option>
                    <option value="4">{{ $t('April') }}</option>
                    <option value="5">{{ $t('May') }}</option>
                    <option value="6">{{ $t('June') }}</option>
                    <option value="7">{{ $t('July') }}</option>
                    <option value="8">{{ $t('August') }}</option>
                    <option value="9">{{ $t('September') }}</option>
                    <option value="10">{{ $t('October') }}</option>
                    <option value="11">{{ $t('November') }}</option>
                    <option value="12">{{ $t('December') }}</option>
                  </b-form-select>
                </div>
                <div class="col-auto">
                  <b-form-select
                    id="expire_year"
                    v-model="expire_year"
                    style="width: 100px;">
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </b-form-select>
                </div>
              </div>
            </b-form-group>
          </b-list-group-item>
          <b-list-group-item>
            <b-btn 
              variant="primary"
              v-text="$t('Save Changes')" />
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   PageHeader,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  
  export default {
    components: {
      PageHeader,
      PageSeparator
    },
    extends: Page,
    data() {
      return {
        payment_type: 'cc',
        expire_month: 1,
        expire_year: 2018
      }
    },
    methods: {
      setPaymentType(type) {
        this.payment_type = type
      }
    }
  }
</script>
