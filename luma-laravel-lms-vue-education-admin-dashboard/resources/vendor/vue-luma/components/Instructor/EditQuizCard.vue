<template>
  <div
    v-if="localItem" 
    class="card card-group-row__card card-sm">
    <div class="card-body d-flex align-items-center">
      <fmv-avatar 
        :to="routeTo(routes.instructorEditQuiz)"
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
          :to="routeTo(routes.instructorEditQuiz)" 
          class="card-title"
          v-text="localItem.course" />
        <div 
          class="card-subtitle text-50"
          v-text="localItem.date_for_humans" />
      </div>
    </div>
    <div class="card-footer">
      <div class="d-flex align-items-center">
        <div class="flex mr-2">
          <b-btn 
            :to="routeTo(routes.instructorEditQuiz)"
            variant="light"
            size="sm">
            
            <md-icon
              left 
              v-text="'playlist_add_check'" />
            {{ $t('Review') }}
            <b-badge 
              variant="dark"
              class="badge-notifications ml-2"
              v-text="5" />
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