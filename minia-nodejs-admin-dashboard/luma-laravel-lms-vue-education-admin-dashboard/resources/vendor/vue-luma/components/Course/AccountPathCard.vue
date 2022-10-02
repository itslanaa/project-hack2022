<template>
  <div
    :class="{
      'overlay--show': details && account
    }" 
    class="overlay--primary d-flex flex-column">
    <div
      :id="id"
      :class="[
        'flex',
        (details ? 'card-lg' : 'card-sm'),
        (!!cardClass ? cardClass : null)
      ]"
      class="card stack stack--1">
      <div class="card-body d-flex flex-column">
        <div class="d-flex align-items-center">
          <div class="flex">
            <div class="d-flex align-items-center">
              <div class="rounded mr-12pt z-0 o-hidden">
                <div class="overlay">
                  <img 
                    :src="`/images/paths/${image}_40x40@2x.png`" 
                    width="40" 
                    height="40" 
                    :alt="title" 
                    class="rounded">
                  <span class="overlay__content overlay__content-transparent">
                    <span class="overlay__action d-flex flex-column text-center lh-1">
                      <small 
                        class="h6 small text-white mb-0" 
                        style="font-weight: 500;">80%</small>
                    </span>
                  </span>
                </div>
              </div>
              <div class="flex">
                <div class="card-title">{{ title }}</div>
                <p class="flex text-black-50 lh-1 mb-0">
                  <small v-text="$t('courses', { courses: 18 })" />
                </p>
              </div>
            </div>
          </div>
          <b-link
            v-if="cta"
            :to="routeTo(to)" 
            :class="{ 'border-1 border-secondary': favorite }"
            class="ml-4pt btn btn-sm btn-link text-secondary"
            v-text="$t('Resume')" />
          <b-link 
            v-else
            v-b-tooltip.hover.top="{ title: favorite ? $t('Remove Favorite') : $t('Add Favorite') }"
            :to="routeTo(to)" 
            class="ml-4pt material-icons text-20 card-course__icon-favorite">favorite<template v-if="!favorite">_border</template></b-link>
        </div>
        
        <template v-if="details">
          <div
            v-if="!account"  
            class="rating mt-8pt">
            <span class="rating__item"><span class="material-icons">star</span></span>
            <span class="rating__item"><span class="material-icons">star</span></span>
            <span class="rating__item"><span class="material-icons">star</span></span>
            <span class="rating__item"><span class="material-icons">star</span></span>
            <span class="rating__item"><span class="material-icons">star_border</span></span>
          </div>
          <div 
            v-else
            class="d-flex align-items-center mt-8pt">
            <small 
              class="text-black-50 mr-8pt"
              v-text="$t('Your rating')" />
            <div class="rating mr-8pt">
              <span class="rating__item"><span class="material-icons text-primary">star</span></span>
              <span class="rating__item"><span class="material-icons text-primary">star</span></span>
              <span class="rating__item"><span class="material-icons text-primary">star</span></span>
              <span class="rating__item"><span class="material-icons text-primary">star</span></span>
              <span class="rating__item"><span class="material-icons text-primary">star_border</span></span>
            </div>
            <small class="text-black-50">4/5</small>
          </div>

          <p class="mt-16pt text-black-70 flex">{{ localDescription }}</p>

          <div class="mb-16pt d-none">
            <div class="d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p class="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with {{ title }}</small></p>
            </div>
            <div class="d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p class="flex text-black-50 lh-1 mb-0"><small>Create complete {{ title }} applications</small></p>
            </div>
            <div class="d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p class="flex text-black-50 lh-1 mb-0"><small>Working with the {{ title }} CLI</small></p>
            </div>
            <div class="d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p class="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
            </div>
            <div class="d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p class="flex text-black-50 lh-1 mb-0"><small>Testing with {{ title }}</small></p>
            </div>
          </div>

          <div
            v-if="!account" 
            class="row align-items-center">
            <div class="col-auto">
              <div class="d-flex align-items-center mb-4pt">
                <span class="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                <p class="flex text-black-50 lh-1 mb-0">
                  <small v-text="$t('hours', { hours: 6 })" />
                </p>
              </div>
              <div class="d-flex align-items-center mb-4pt">
                <span class="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                <p class="flex text-black-50 lh-1 mb-0">
                  <small v-text="$t('lessons', { lessons: 12 })" />
                </p>
              </div>
              <div class="d-flex align-items-center">
                <span class="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                <p class="flex text-black-50 lh-1 mb-0">
                  <small v-text="$t('Beginner')" />
                </p>
              </div>
            </div>
            <div class="col text-right">
              <b-btn
                :to="routeTo(routes.studentPath)"  
                variant="outline-secondary"
                v-text="$t('Begin')" />
            </div>
          </div>

          <template v-else>
            <div
              class="d-flex align-items-center mb-8pt justify-content-center">
              <div class="d-flex align-items-center mr-8pt">
                <span class="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                <p class="flex text-black-50 lh-1 mb-0">
                  <small v-text="$t('minutes_left', { minutes: 50 })" />
                </p>
              </div>
              <div class="d-flex align-items-center">
                <span class="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                <p class="flex text-black-50 lh-1 mb-0">
                  <small v-text="$t('lessons', { lessons: 12 })" />
                </p>
              </div>
            </div>

            <div class="d-flex align-items-center justify-content-center">
              <b-btn
                :to="routeTo(routes.studentPath)" 
                variant="primary"
                v-text="$t('Resume')" />
            </div>
          </template>
        </template>
      </div>
    </div>

    <b-popover
      v-if="!details"
      triggers="click"
      :target="id"
      :html="true"
      :container="popoverContainer"
      custom-class="popover-lg"
      @show="showOverlay"
      @hide="hideOverlay">
      <div class="media">
        <div class="media-left mr-12pt">
          <img 
            :src="`/images/paths/${image}_40x40@2x.png`" 
            width="40" 
            height="40" 
            alt="Angular" 
            class="rounded">
        </div>
        <div class="media-body">
          <div class="card-title">{{title}}</div>
          <p 
            class="text-black-50 d-flex lh-1 mb-0 small"
            v-text="$t('courses', { courses: 18 })" />
        </div>
      </div>

      <p class="mt-16pt text-black-70">{{localDescription}}</p>

      <div class="my-32pt">
        <div class="d-flex align-items-center mb-8pt justify-content-center">
          <div class="d-flex align-items-center mr-8pt">
            <span class="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
            <p class="flex text-black-50 lh-1 mb-0">
              <small v-text="$t('minutes_left', { minutes: 50 })" />
            </p>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
            <p class="flex text-black-50 lh-1 mb-0">
              <small v-text="$t('lessons', { lessons: 12 })" />
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <b-btn
            :to="routeTo(routes.studentPath)"  
            variant="primary" 
            class="mr-8pt"
            v-text="$t('Resume')" />
          <b-btn
            :to="routeTo(routes.studentPath)" 
            variant="outline-secondary" 
            class="ml-0"
            v-text="$t('Start over')" />
        </div>
      </div>

      <div class="d-flex align-items-center">
        <small 
          class="text-black-50 mr-8pt"
          v-text="$t('Your rating')" />
        <div class="rating mr-8pt">
          <span class="rating__item"><span class="material-icons text-primary">star</span></span>
          <span class="rating__item"><span class="material-icons text-primary">star</span></span>
          <span class="rating__item"><span class="material-icons text-primary">star</span></span>
          <span class="rating__item"><span class="material-icons text-primary">star</span></span>
          <span class="rating__item"><span class="material-icons text-primary">star_border</span></span>
        </div>
        <small class="text-black-50">4/5</small>
      </div>
    </b-popover>
  </div>
</template>

<i18n>
  {
    "en": {
      "lessons": "{lessons} lessons",
      "minutes_left": "{minutes} minutes left",
      "hours": "{hours} hours"
    },
    "ro": {
      "lessons": "{lessons} lecții",
      "courses": "{courses} cursuri",
      "hours": "{hours} ore",
      "minutes_left": "{minutes} minute rămase",
      "Start over": "Reîncepe",
      "Resume": "Continuă",
      "Add Favorite": "Adaugă Favorit",
      "Remove Favorite": "Șterge Favorit",
      "Beginner": "Începător",
      "Your rating": "Evaluarea ta",
      "Begin": "Începe"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import popoverMixin from '~/mixins/popover'
  import { handler } from 'dom-factory'
  
  import { overlayComponent } from '~/assets/js/overlay'
  handler.register('overlay', overlayComponent)
  
  const uniqueId = require('lodash/uniqueId')

  export default {
    mixins: [
      popoverMixin, 
      routeTo
    ],
    props: {
      cardClass: {
        type: String,
        default: 'mb-16pt'
      },
      title: {
        type: String,
        default: null
      },
      description: {
        type: String,
        default: null
      },
      image: {
        type: String,
        default: null
      },
      account: {
        type: Boolean
      },
      favorite: {
        type: Boolean
      },
      details: {
        type: Boolean
      },
      cta: {
        type: Boolean
      },
      open: {
        type: Boolean
      },
      to: {
        type: String,
        default: null
      }
    },
    computed: {
      id() {
        return uniqueId('path_')
      },
      localDescription() {
        if (!this.description) {
          return `Learn the fundamentals of working with ${this.title} and how to create basic applications.`
        }

        return this.description
      }
    },
    mounted() {
      this.$root.$on('bv::popover::show', bvEventObj => {
        this.$root.$emit('bv::hide::popover')
      })

      if (!this.details) {
        this.$el.addEventListener('domfactory-component-upgraded', () => this.onOverlayInit())
        this.$nextTick(() => { 
          handler.upgradeElement(this.$el, 'overlay') 

          if (this.open) {
            setTimeout(() => this.$root.$emit('bv::show::popover', this.id), 100)
          }
        })
      }
    },
    beforeDestroy() {
      if (!this.details) {
        handler.downgradeElement(this.$el, 'overlay')
      }
    },
    methods: {
      onOverlayInit() {
        this.$el.overlay.trigger = 'click'
      },
      showOverlay() {
        if (this.$el.overlay) {
          this.$el.overlay.show()
        }
      },
      hideOverlay() {
        if (this.$el.overlay) {
          this.$el.overlay.hide()
        }
      },
    }
  }
</script>