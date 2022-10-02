<template>
  <div>
    <page-separator
      :title="$t('Questions')" />

    <ul class="list-group stack mb-40pt">
      <li
        v-for="(item, index) in items"
        :key="item.id" 
        class="list-group-item d-flex">
        <i class="material-icons text-70 icon-16pt icon--left">drag_handle</i>
        <div class="flex d-flex flex-column">
          <div 
            class="card-title mb-4pt"
            v-text="$t('question_index', { index: index + 1, total: items.length })" />
          <div 
            class="card-subtitle text-70 paragraph-max mb-16pt"
            v-text="item.question" />
          <fmv-highlight
            v-if="item.code"
            lang="js"
            :code="item.code"
            class="card card-body bg-dark mb-16pt" />
          <div class="d-flex">
            <b-link 
              class="chip chip-light d-inline-flex align-items-center">
              <md-icon 
                class="icon-16pt" 
                left
                v-text="'keyboard_arrow_down'" />
              {{ $t('Answers') }}
            </b-link>
            <div 
              class="chip chip-outline-secondary"
              v-text="$t('Single Answer')" />
            <div
              v-if="item.code" 
              class="chip chip-outline-secondary"
              v-text="$t('Code')" />
          </div>
        </div>
        <span class="text-muted mx-12pt">800 pt</span>
        <!-- {{ dropdown | safe }} -->
      </li>
    </ul>
  </div>
</template>

<i18n>
  {
    "en": {
      "question_index": "Question {index} of {total}"
    },
    "ro": {
      "question_index": "Întrebarea {index} din {total}",
      "Questions": "Întrebări",
      "Answers": "Răspunsuri",
      "Single Answer": "Un singur răspuns",
      "Code": "Cod"
    }
  }
</i18n>

<script>
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import {FmvHighlight} from 'fmv-highlight'

  export default {
    components: {
      MdIcon,
      PageSeparator,
      FmvHighlight
    },
    data() {
      return {
        items: [{
          id: 1,
          question: 'An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?'
        }, {
          id: 2,
          question: 'What will be the output of below program?',
          code: `
            function f(input: boolean) {
              let a = 100;

              if (input) {
                  let b = a + 1;
                  return b;
              }
              return b;
            }
          `
        }]
      }
    }
  }
</script>