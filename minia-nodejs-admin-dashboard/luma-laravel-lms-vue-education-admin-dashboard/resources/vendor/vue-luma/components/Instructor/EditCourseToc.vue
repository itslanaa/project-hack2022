<template>
  <div
    :id="id"
    :class="[ boxed ? 'accordion--boxed' : null, listClass ]" 
    class="accordion">
    <div
      v-for="section in localValue"
      :key="`toc-section-${section.id}`"
      class="accordion__item"
      :class="[ section.visible ? 'open' : null ]">
      <b-link 
        v-b-toggle="`toc-section-${section.id}`"
        class="accordion__toggle">
        <span 
          class="flex"
          v-text="section.title" />
        <md-icon 
          class="accordion__toggle-icon"
          v-text="'keyboard_arrow_down'" />
      </b-link>
      <b-collapse
        :id="`toc-section-${section.id}`"
        :ref="`toc-collapse-${section.id}`"
        :accordion="accordionId"
        :visible="section.visible"
        class="accordion__menu"
        @hide="section.visible = false"
        @show="section.visible = true">
        <div
          v-for="item in section.items"
          :key="`toc-item-${item.id}`"
          :class="{ active: item.active }"
          class="accordion__menu-link">
          <md-icon 
            class="text-70 icon-16pt"
            left
            v-text="'drag_handle'" />
          <b-link 
            :to="linkTo(item)"
            class="flex"
            v-text="item.title" />
          <span
            v-if="item.duration" 
            class="text-muted"
            v-text="item.duration" />
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  const uniqueId = require('lodash/uniqueId')

  export default {
    components: {
      MdIcon
    },
    mixins: [routeTo],
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      listClass: {
        type: String,
        default: null
      },
      boxed: {
        type: Boolean
      },
      accordionId: {
        type: String,
        default() {
          return this.id
        }
      },
      value: {
        type: Array,
        default() {
          return [{
            id: 1,
            visible: false,
            title: 'Course Overview',
            items: [{
              id: 1,
              title: 'Watch Trailer',
              duration: '1m 10s',
              type: 'lesson'
            }]
          }, {
            id: 2,
            visible: true,
            title: 'Getting Started with Angular',
            items: [{
              id: 2,
              title: 'Introduction',
              duration: '8m 42s',
              type: 'lesson'
            }, {
              id: 3,
              title: 'Introduction to TypeScript',
              duration: '50m 13s',
              type: 'lesson'
            }, {
              id: 4,
              title: 'Comparing Angular to AngularJS',
              duration: '12m 10s',
              type: 'lesson'
            }, {
              id: 5,
              title: 'Quiz: Getting Started With Angular',
              icon: 'hourglass_empty',
              type: 'quiz'
            }]
          }, {
            id: 3,
            visible: false,
            title: 'Creating and Communicating Between Angular Components',
            items: [{
              id: 6,
              title: 'Angular Components',
              duration: '4m 23s',
              type: 'lesson'
            }]
          }, {
            id: 4,
            visible: false,
            title: 'Exploring the Angular Template Syntax',
            items: [{
              id: 7,
              title: 'Template Syntax',
              duration: '2m 34s',
              type: 'lesson'
            }]
          }]
        }
      }
    },
    data() {
      return {
        localValue: this.value
      }
    },
    computed: {
      id() {
        return uniqueId('accordion_')
      }
    },
    watch: {
      value(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.localValue = newVal
        }
      },
      localValue: {
        deep: true,
        handler(newVal, oldVal) {
          this.$emit('change', newVal)
        }
      }
    },
    methods: {
      linkTo(item) {
        if (item.type === 'lesson') {
          return this.routeTo(this.routes.instructorEditCourse)
        }
        if (item.type === 'quiz') {
          return this.routeTo(this.routes.instructorEditQuiz)
        }
      }
    }
  }
</script>