<template>
  <div>
    <div class="card stack">
      <div class="list-group list-group-flush">
        <div
          v-for="item in localItems"
          :key="item.id"
          class="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
          <div class="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
            <fmv-avatar 
              :to="routeTo(routes.instructorEditQuiz)"
              landscape
              :src="item.image"
              :alt="item.course" 
              class="overlay overlay--primary mr-12pt">

              <template v-slot:after-img>
                <span class="overlay__content rounded" />
              </template>
            </fmv-avatar>
            <div class="flex">
              <b-link 
                class="card-title" 
                :to="routeTo(routes.instructorEditQuiz)"
                v-text="item.course" />
              <div 
                class="card-subtitle text-50"
                v-text="item.date_for_humans" />
            </div>
          </div>
          <div class="d-flex flex-column align-items-center mr-16pt">
            <span 
              class="lead text-headings lh-1"
              v-text="item.score" />
            <small 
              class="text-50 text-uppercase text-headings"
              v-text="$t('Score')" />
          </div>
          
          <b-dd
            variant="flush"
            toggle-class="text-muted"
            no-caret
            right>

            <template v-slot:button-content>
              <md-icon class="icon-24pt">more_vert</md-icon>
            </template>

            <b-dd-item>{{ $t('Review Quiz') }}</b-dd-item>
            <b-dd-item :to="routeTo(routes.instructorEditQuiz)">{{ $t('Edit Quiz') }}</b-dd-item>
            <b-dd-divider />
            <b-dd-item 
              variant="danger">
              {{ $t('Delete Quiz') }}
            </b-dd-item>
          </b-dd>

        </div>
      </div>
    </div>

    <pager />
  </div>
</template>

<i18n>
  {
    "ro": {
      "Review Quiz": "Revizuire Test",
      "Score": "Scor",
      "Delete Quiz": "Ștergere Test",
      "Review": "Revizuire"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import Pager from '~/components/Ui/Pager.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      MdIcon,
      Pager,
      FmvAvatar
    },
    mixins: [routeTo],
    data() {
      return {
        items: [{
          course: 'Newsletter Design', 
          image: '/images/paths/mailchimp_200x168.png',
          date: {
            type: 'min',
            value: 12
          },
          score: '5.8'
        }, {
          course: 'Adobe XD', 
          image: '/images/paths/xd_200x168.png',
          date: {
            type: 'day',
            value: 2
          },
          score: '10'
        }, {
          course: 'inVision App', 
          image: '/images/paths/invision_200x168.png',
          date: {
            type: 'day',
            value: 3
          },
          score: '2.8'
        }, {
          course: 'Craft by inVision', 
          image: '/images/paths/craft_200x168.png',
          date: {
            type: 'day',
            value: 4
          },
          score: '3.3'
        }]
      }
    },
    computed: {
      localItems() {
        let items = this.items
        return items.map(item => {
          item.date_for_humans = this.$t('diff_for_humans', {
            when: this.$tc(`datetime_units.${item.date.type}`, item.date.value, { value: item.date.value })
          })
          return item
        })
      }
    }
  }
</script>