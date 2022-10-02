<template>
  <div class="row">
    <div class="col-lg-5 mb-24pt mb-lg-0">
      <div class="border-left-3 border-left-primary pl-24pt pl-md-32pt">
        <h4 
          class="mb-8pt"
          v-text="$t(title)" />
        <p 
          class="text-70"
          :class="{ 
            'mb-24pt': !result,
            'mb-0': result 
          }"
          v-text="$t(description)" />
        <b-btn
          v-if="!result" 
          :to="routeTo(routes.studentSkillAssessment)" 
          variant="primary"
          v-text="$t('Start Assessment')" />
      </div>
    </div>
    <div class="col-lg-7 d-flex align-items-center">
      <div class="page-num-timeline d-flex flex-column flex-sm-row align-items-center justify-content-center flex">
        <b-link
          v-for="item in localLevels"
          :key="item.level" 
          v-b-tooltip.hover.top="{ title: $t('level', { level: $t(item.title) }) }"
          class="page-num-timeline__item"
          :class="{ 'page-num-timeline__item-current': item.level === level }">
          <span class="page-num-timeline__item-tip" />
          <span class="page-num">
            <md-icon v-if="item.level === level">person</md-icon>
            <template v-else>
              {{ item.level }}
            </template>
          </span>
        </b-link>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "level": "Your current level: {level}"
    },
    "ro": {
      "Skill Assessment": "Evaluare Calificare",
      "Skill Result": "Rezultat Evaluare",
      "Start Assessment": "Începe Evaluarea",
      "level": "Nivelul tău actual: {level}",
      "Beginner": "Începător",
      "Intermediate": "Intermediar",
      "Advanced": "Avansat",
      "Unknown": "Necunoscut",
      "Measure your skill to find out where to start.": "Măsoară-ți abilitățile pentru a afla de unde să începi."
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    mixins: [routeTo],
    props: {
      result: {
        type: Boolean
      }
    },
    data() {
      return {
        levels: [{
          level: 0,
          title: 'Unknown'
        }, {
          level: 1,
          title: 'Beginner'
        }, {
          level: 2,
          title: 'Intermediate'
        }, {
          level: 3,
          title: 'Advanced'
        }]
      }
    },
    computed: {
      title() {
        return this.result 
          ? 'Skill Result'
          : 'Skill Assessment'
      },
      description() {
        return this.result
          ? 'Based on your skill level we recommend you take the Intermediate level Angular courses.'
          : 'Measure your skill to find out where to start.'
      },
      level() {
        return this.result ? 2 : 0
      },
      localLevels() {
        return this.result
          ? this.levels.filter(level => level.level !== 0)
          : this.levels
      }
    }
  }
</script>