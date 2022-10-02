<template>
  <div
    v-if="localItem" 
    class="card card-group-row__card card-sm">
    <div class="card-body d-flex align-items-center">
      <fmv-avatar 
        :to="routeTo(routes.studentTakeQuiz)"
        :src="localItem.image"
        :alt="localItem.course"
        landscape
        class="overlay overlay--primary avatar-4by3 mr-12pt">
        <template v-slot:after-img>
          <span class="overlay__content rounded" />
        </template>
      </fmv-avatar>
      <div class="flex mr-12pt">
        <b-link
          :to="routeTo(routes.studentTakeQuiz)" 
          class="card-title"
          v-text="localItem.course" />
        <div 
          class="card-subtitle text-50"
          v-text="localItem.date_for_humans" />
      </div>
      <div class="d-flex flex-column align-items-center">
        <span 
          class="lead text-headings lh-1"
          v-text="localItem.score" />
        <small 
          class="text-50 text-uppercase text-headings"
          v-text="$t('Score')" />
      </div>
    </div>
    <b-progress
      v-if="localItem.progress"
      variant="primary"
      class="rounded-0" 
      height="4px"
      :value="localItem.progress" />
    <div class="card-footer">
      <div class="d-flex align-items-center">
        <div class="flex mr-2">
          <b-btn 
            :to="routeTo(routes.studentTakeQuiz)"
            variant="light"
            size="sm">
            
            <template v-if="localItem.progress">
              <md-icon
                left
                v-text="'refresh'" />
              {{ $t('Continue') }}
            </template>
            
            <template v-else>
              <md-icon
                left 
                v-text="'playlist_add_check'" />
              {{ $t('Reset') }}
              <b-badge 
                variant="dark"
                class="badge-notifications ml-2"
                v-text="5" />
            </template>
          </b-btn>
        </div>
        
        <b-dd
          variant="flush"
          toggle-class="text-muted"
          no-caret
          right>

          <template v-slot:button-content>
            <md-icon class="icon-24pt">more_horiz</md-icon>
          </template>

          <b-dd-item :to="routeTo(routes.studentTakeQuiz)">{{ $t('Continue') }}</b-dd-item>
          <b-dd-item :to="routeTo(routes.studentQuizResult)">{{ $t('View Result') }}</b-dd-item>
          <b-dd-divider />
          <b-dd-item 
            :to="routeTo(routes.studentTakeQuiz)"
            variant="danger">
            {{ $t('Reset') }}
          </b-dd-item>
        </b-dd>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Continue": "Continuă",
      "Reset": "Resetează",
      "Score": "Scor",
      "View Result": "Vezi Rezultat"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      MdIcon,
      FmvAvatar
    },
    mixins: [routeTo],
    props: {
      item: {
        type: Object,
        default: null
      }
    },
    computed: {
      localItem() {
        let item = this.item
        item.date_for_humans = this.$t('diff_for_humans', {
          when: this.$tc(`datetime_units.${item.date.type}`, item.date.value, { value: item.date.value })
        })  
        return item
      }
    }
  }
</script>