<template>
  <div>
    <b-table
      ref="table" 
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      head-variant="light"
      class="table-nowrap"
      responsive>
      <template 
        v-slot:head(purchased_at)>
        &nbsp;
      </template>

      <template
        v-slot:cell(purchased_at)="data">
        <small class="text-muted text-uppercase">{{ data.item.purchased_at }}</small>
      </template>
      
      <template 
        v-slot:head(thead)>
        <a
          v-for="field in hiddenFields"
          :key="field.key"
          :class="sortByClass(field.key)"
          class="sort"
          href="#"
          @click.stop.prevent="sortByKey($event, field)"
          v-text="field.label" />
      </template>
      
      <template 
        v-slot:cell(thead)="data">
        <b-media
          class="align-items-center" 
          vertical-align="center">
          <fmv-avatar
            slot="aside"
            :src="data.item.image"
            :alt="data.item.course"
            :to="routeTo(history ? routes.billingInvoice : routes.instructorEditCourse)"
            landscape
            class="overlay overlay--primary">
            <template v-slot:after-img>
              <span class="overlay__content rounded" />
            </template>
          </fmv-avatar>
          <b-link
            :to="routeTo(history ? routes.billingInvoice : routes.instructorEditCourse)" 
            class="text-body">
            <strong>{{ data.item.course }}</strong>
          </b-link><br>
          <small class="text-muted mr-1">
            {{ $t('Invoice') }} 
            <b-link
              :to="routeTo('layout-instructor-invoice')"
              style="color: inherit;"
              v-text="data.item.document" /> 
            - &dollar;{{ data.item.amount }} USD
          </small>
        </b-media>
      </template>

      <template 
        v-slot:cell(course)="data">
        <b-media
          class="align-items-center" 
          vertical-align="center">
          <fmv-avatar
            slot="aside"
            :src="data.item.image"
            :alt="data.item.course"
            :to="routeTo(history ? routes.billingInvoice : routes.instructorEditCourse)"
            landscape
            class="overlay overlay--primary">
            <template v-slot:after-img>
              <span class="overlay__content rounded" />
            </template>
          </fmv-avatar>
          <b-link
            :to="routeTo(history ? routes.billingInvoice : routes.instructorEditCourse)" 
            class="card-title">
            <strong>{{ data.item.course }}</strong>
          </b-link>
          <small 
            class="text-muted"
            v-text="$t('34 Sales')" />
        </b-media>
      </template>

      <template 
        v-slot:cell(fees)="data">
        <div
          v-if="data.item.fees" 
          class="text-70">
          &dollar;{{ data.item.fees }} USD
        </div>
        <md-icon
          v-else 
          class="text-muted">remove</md-icon>
      </template>

      <template 
        v-slot:cell(revenue)="data">
        <div
          v-if="data.item.revenue" 
          class="text-70">
          &dollar;{{ data.item.revenue }} USD
        </div>
        <md-icon
          v-else 
          class="text-muted">remove</md-icon>
      </template>

    </b-table>

    <div class="card-footer d-flex align-items-center">
      <pager class="m-0" />
      <div class="ml-auto">
        Total <md-icon>remove</md-icon> <strong>&dollar;6,129 USD</strong>
      </div>
    </div>
  </div>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import tableSortMixin from '~/mixins/table-sort'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import Pager from '~/components/Ui/Pager.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      MdIcon,
      Pager,
      FmvAvatar
    },
    mixins: [
      routeTo,
      tableSortMixin
    ],
    props: {
      earnings: {
        type: Boolean
      },
      history: {
        type: Boolean
      }
    },
    data() {
      return {
        sortDesc: true,
        hiddenFields: [
          {
            key: 'course',
            label: this.$t('Course'),
            sortable: true,
            thStyle: {
              display: 'none'
            }
          },
          {
            key: 'document',
            label: this.$t('Document'),
            sortable: true,
            thStyle: {
              display: 'none'
            }
          },
          {
            key: 'amount',
            label: this.$t('Amount'),
            sortable: true,
            thStyle: {
              display: 'none'
            }
          },
          {
            key: 'purchased_at',
            label: this.$t('Date'),
            sortable: true,
            thStyle: {
              display: 'none'
            }
          }
        ],
        items: [
          {
            purchased_at: '12 Nov 2018',
            course: 'Angular Routing In-Depth',
            image: '/images/paths/angular_routing_200x168.png',
            document: '#8734',
            amount: 89,
            fees: 120,
            revenue: 8737
          },
          {
            purchased_at: '13 Nov 2018',
            course: "Angular Unit Testing",
            image: '/images/paths/angular_testing_200x168.png',
            document: '#8735',
            amount: 89,
            fees: null,
            revenue: null
          },
          {
            purchased_at: '14 Nov 2018',
            course: 'Introduction to TypeScript',
            image: '/images/paths/typescript_200x168.png',
            document: '#8736',
            amount: 89,
            fees: null,
            revenue: null
          },
          {
            purchased_at: '15 Nov 2018',
            course: 'Learn Angular Fundamentals',
            image: '/images/paths/angular_200x168.png',
            document: '#8737',
            amount: 89,
            fees: null,
            revenue: null
          }
        ]
      }
    },
    computed: {
      sortBy() {
        return this.earnings ? 'revenue' : 'purchased_at'
      },
      fields() {
        if (this.earnings) {
          return [{
            key: 'course',
            label: this.$t('Course'),
            sortable: true
          }, {
            key: 'fees',
            label: this.$t('Fees'),
            sortable: true, 
            thClass: 'text-right', 
            tdClass: 'text-right'
          }, {
            key: 'revenue',
            label: this.$t('Revenue'),
            sortable: true, 
            thClass: 'text-right', 
            tdClass: 'text-right'
          }]
        }

        return [
          'thead',
          {
            key: 'purchased_at',
            label: this.$t('Date'),
            class: 'text-right',
            sortable: true,
            thStyle: {
              backgroundImage: 'none'
            }
          }
        ]
      }
    }
  }
</script>
