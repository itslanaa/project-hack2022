<template>
  <div>
    <b-navbar
      type="light"
      class="border-bottom" 
      style="white-space: nowrap;">
      <div :class="containerClass">
        <b-navbar-nav>
          <b-nav-item 
            :to="routeTo(routes.billingHistory)">
            <md-icon 
              left 
              v-text="'keyboard_backspace'" /> 
            {{ $t('Back to Payment History') }}
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>

    <div class="page-section bg-primary border-bottom-2">
      <div :class="containerClass">
        <div class="row">
          <div class="col-lg-9">
            <div class="row">
              <div class="col-md-6 mb-24pt mb-lg-0">
                <p class="text-white-70 mb-0"><strong>Prepared for</strong></p>
                <h2 class="text-white">Alexander Watson</h2>
                <p class="text-white-50">640 Joy Bypass Suite 448<br>Germany</p>
              </div>
              <div class="col-md-6">
                <p class="text-white-70 mb-0"><strong>Prepared by</strong></p>
                <h2 class="text-white">Luma Inc.</h2>
                <p class="text-white-50">32 Noah Cliffs Suite 626, Romania<br>Tax ID RO18880609</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-lg-right d-flex flex-lg-column">
            <div class="flex">
              <p class="text-white-70 mb-8pt"><strong>Invoice</strong></p>
              <p class="text-white-50">
                15 Mar 2018<br>
                10003578
              </p>
            </div>
            <div>
              <b-btn 
                variant="outline-white">
                Download <i class="material-icons icon--right">file_download</i>
              </b-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div 
      :class="containerClass"
      class="page-section">
      
      <page-separator
        :title="$t('Invoice Summary')" />

      <b-card no-body>
        <b-table
          ref="table" 
          :items="items"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          head-variant="light"
          class="table-nowrap"
          responsive>

          <template v-slot:cell(description)="data">
            <b-media
              v-if="data.item.type === 'course'"
              class="align-items-center" 
              vertical-align="center">
              <fmv-avatar
                slot="aside"
                :src="data.item.image"
                :alt="data.item.course"
                :to="routeTo(routes.studentTakeCourse)"
                landscape />
              <b-link
                :to="routeTo(routes.studentTakeCourse)" 
                class="card-title">
                <strong>{{ data.item.course }}</strong>
              </b-link>
            </b-media>
            <template v-else-if="data.item.type === 'title'">
              <p
                class="card-title"
                v-text="$t(data.item.title)" />
              <p
                v-if="data.item.subtitle" 
                class="card-subtitle text-black-50 small"
                v-text="data.item.subtitle" />
            </template>
          </template>

          <template v-slot:cell(amount)="data">
            <strong>&dollar;{{ data.item.amount }} USD</strong>
          </template>

        </b-table>

        <table class="table mb-0">
          <tfoot>
            <tr>
              <td class="text-right text-black-70"><strong>Subtotal</strong></td>
              <td 
                style="width: 120px;" 
                class="text-right"><strong>&dollar;89 USD</strong></td>
            </tr>
            <tr>
              <td class="text-right text-black-70"><strong>Total</strong></td>
              <td 
                style="width: 120px;" 
                class="text-right"><strong>&dollar;89 USD</strong></td>
            </tr>
          </tfoot>
        </table>
      </b-card>

      <div class="px-16pt mb-4">
        <p class="text-black-70 mb-8pt"><strong>Invoice paid</strong></p>
        <div class="d-flex">
          <div class="mr-3">
            <b-img 
              src="/images/visa.svg" 
              alt="visa" 
              width="38" />
          </div>
          <div class="flex text-black-50">
            You don’t need to take further action. Your credit card Visa ending in 2819 has been charged on January 12, 2019.
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   MdIcon,
  //   PageSeparator
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import {FmvAvatar} from 'fmv-avatar'
  
  export default {
    components: {
      MdIcon,
      PageSeparator,
      FmvAvatar
    },
    extends: Page,
    data() {
      return {
        sortBy: 'purchased_at',
        sortDesc: true,
        fields: [
          {
            key: 'description',
            label: this.$t('Description'),
            thClass: 'border-top-0'
          },
          {
            key: 'amount',
            label: this.$t('Amount'),
            class: 'text-right',
            thClass: 'border-top-0 text-right',
            thStyle: {
              width: '120px'
            }
          }
        ],
        items: [
          {
            type: 'course',
            course: 'Learn Angular Fundamentals',
            image: '/images/paths/angular_200x168.png',
            amount: 89
          },
          {
            type: 'title',
            title: 'Basic Plan - Monthly Subscription',
            subtitle: 'For the period of June 20, 2018 to July 20, 2018',
            amount: 9
          },
          {
            type: 'title',
            title: 'Credit discount',
            amount: -5
          }
        ]
      }
    }
  }
</script>
