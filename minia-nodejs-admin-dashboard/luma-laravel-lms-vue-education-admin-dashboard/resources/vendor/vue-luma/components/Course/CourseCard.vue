<template>
  <div>
    <div
      :id="id"
      ref="card"
      :class="cardClasses"
      class="card card-sm card--elevated p-relative o-hidden overlay--primary"
      :data-partial-height="localReveals ? revealPartialHeight : null">
      
      <span
        ref="image" 
        :data-position="position"
        :data-height="localReveals ? 168 : 128"
        class="js-image">
        <img 
          :src="`/images/paths/${image}_430x168.png`" 
          alt="course">
        <span 
          class="overlay__content"
          :class="[localReveals ? 'align-items-start justify-content-start' : null]">
          <span 
            class="overlay__action d-flex"
            :class="[ localReveals ? 'card-body align-items-center' : 'flex-column text-center' ]">
            <md-icon 
              :class="localReveals ? 'mr-4pt' : 'icon-32pt'"
              v-text="'play_circle_outline'" />
            <span class="card-title text-white">
              <template v-if="account">{{ $t('Resume') }}</template>
              <template v-else>{{ $t('Preview') }}</template>
            </span>
          </span>
        </span>
      </span>

      <span
        v-if="free" 
        class="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white">NEW</span>

      <div class="mdk-reveal__content d-flex flex-column flex">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex">
              <b-link
                :to="routeTo(routes.studentLesson)" 
                class="card-title"
                v-text="title" />
              <small 
                class="text-50 font-weight-bold mb-4pt"
                v-text="author" />
            </div>
            <md-icon 
              v-b-tooltip.hover.top="{ title: favorite ? $t('Remove Favorite') : $t('Add Favorite') }"
              class="ml-4pt text-20 card-course__icon-favorite">
              favorite<template v-if="!favorite">_border</template>
            </md-icon>
          </div>
          <div class="d-flex">
            <b-form-rating
              class="b-rating-inline" 
              :value="4" 
              variant="rating"
              size="sm"
              show-value
              show-value-max
              readonly
              inline
              no-border />
            <small
              v-if="compact" 
              class="ml-auto text-50"
              v-text="$t('hours', { hours: 6 })" />
          </div>
        </div>
        <div
          v-if="!compact" 
          class="card-footer">
          <div class="row justify-content-between">
            <div class="col-auto d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
              <p class="flex text-black-50 lh-1 mb-0">
                <small v-text="$t('hours', { hours: 6 })" />
              </p>
            </div>
            <div class="col-auto d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
              <p class="flex text-black-50 lh-1 mb-0">
                <small v-text="$t('lessons', { lessons: 12 })" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-popover
      v-if="popoverContainer && ! isMobile"
      ref="popover"
      triggers="click"
      :target="id"
      :html="true"
      :container="popoverContainer"
      custom-class="popover-lg"
      @show="show"
      @hide="hide">
      
      <div class="media">
        <div class="media-left mr-12pt">
          <img 
            :src="`/images/paths/${avatar}_40x40@2x.png`" 
            width="40" 
            height="40" 
            :alt="avatar" 
            class="rounded">
        </div>
        <div class="media-body">
          <div class="card-title mb-0">{{ title }}</div>
          <p class="lh-1 mb-0">
            <span class="text-black-50 small" v-text="$t('with')"></span>
            <span 
              class="text-black-50 small font-weight-bold"
              v-text="author" />
          </p>
        </div>
      </div>
      
      <p class="my-16pt text-black-70">{{ localDescription }}</p>

      <div class="mb-16pt">
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
        </div>
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
        </div>
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
        </div>
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
        </div>
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
        </div>
      </div>

      <template v-if="account">
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
            <b-link 
              :to="routeTo(routes.studentTakeLesson)"
              class="btn btn-primary mr-8pt"
              v-text="$t('Resume')" />
            <b-link 
              :to="routeTo(routes.studentTakeCourse)"
              class="btn btn-outline-secondary ml-0"
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
      </template>

      <div
        v-else 
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
            :to="routeTo(routes.studentLesson)" 
            variant="primary"
            v-text="$t('Watch trailer')" />
        </div>
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
      "hours": "{hours} ore",
      "minutes_left": "{minutes} minute rămase",
      "Preview": "Previzualizare",
      "Watch trailer": "Urmărește trailer",
      "Start over": "Reîncepe",
      "Resume": "Continuă",
      "with": "cu",
      "Add Favorite": "Adaugă Favorit",
      "Remove Favorite": "Șterge Favorit",
      "Beginner": "Începător",
      "Edit Course": "Editează Cursul"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import popoverMixin from '~/mixins/popover'
  import { handler } from 'dom-factory'
  
  import { overlayComponent } from '~/assets/js/overlay'
  handler.register('overlay', overlayComponent)

  import { imageComponent } from '~/assets/js/image'
  handler.register('image', imageComponent)

  import { revealComponent } from '~/assets/js/reveal'
  handler.register('reveal', revealComponent)

  const uniqueId = require('lodash/uniqueId')

  import MdIcon from '~/components/Ui/MdIcon.vue'

  import { mediaQuery } from 'material-design-kit'
  import { watch, unwatch } from 'watch-object'

  export default {
    components: {
      MdIcon
    },
    mixins: [
      routeTo,
      popoverMixin
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
      author: {
        type: String,
        default: () => 'Elijah Murray'
      },
      image: {
        type: String,
        default: null
      },
      avatar: {
        type: String,
        default: null
      },
      account: {
        type: Boolean
      },
      free: {
        type: Boolean
      },
      favorite: {
        type: Boolean
      },
      compact: {
        type: Boolean
      },
      open: {
        type: Boolean
      },
      position: {
        type: String,
        default: null
      },
      reveals: {
        type: Boolean,
        default: true
      },
      revealsOnMobile: {
        type: Boolean,
        default: true
      },
      revealPartialHeight: {
        type: Number,
        default() {
          return 44
        }
      }
    },
    watch: {
      localReveals(localReveals) {
        this[localReveals ? 'enableReveals' : 'destroyReveals']()
      }
    },
    data() {
      return {
        // eslint-disable-next-line vue/no-reserved-keys
        _mediaQuery: null,
        isMobile: false
      }
    },
    computed: {
      mediaQuery() {
        if (!this._mediaQuery) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this._mediaQuery = mediaQuery(this.responsiveMediaQuery) 
        }
        return this._mediaQuery
      },
      responsiveMediaQuery() {
        return `(max-width: 768px)`
      },
      id() {
        return uniqueId('course_')
      },
      localReveals() {
        if (this.reveals) {
          if (this.revealsOnMobile || ! this.isMobile) {
            return true
          }
        }
        return false
      },
      localDescription() {
        if (!this.description) {
          return `Learn the fundamentals of working with ${this.title} and how to create basic applications.`
        }

        return this.description
      },
      cardClasses() {
        let classes = []
        if (this.cardClass) {
          if (Array.isArray(this.cardClass)) {
            classes = this.cardClass
          }
          else if (typeof this.cardClass === 'string') {
            classes.push(this.cardClass)
          }
        }
        if (this.localReveals) {
          classes.push('mdk-reveal')
        }

        return classes
      }
    },
    beforeMount() {
      watch(this.mediaQuery, 'queryMatches', this.onMediaQueryMatch)
      this.mediaQuery.init()
    },
    mounted() {
      this.$nextTick(() => {
        if (this.$refs.card) {
          this.$refs.card.addEventListener('domfactory-component-upgraded', () => this.update())

          handler.upgradeElement(this.$refs.card, 'overlay')

          if (this.reveals) {
            handler.upgradeElement(this.$refs.card, 'reveal')
          }
        }

        if (this.$refs.image) {
          this.$refs.image.addEventListener('domfactory-component-upgraded', () => this.update())
          handler.upgradeElement(this.$refs.image, 'image')
        }
      })
    },
    updated() {
      this.update()
    },
    destroyed() {
      unwatch(this.mediaQuery, 'queryMatches', this.onMediaQueryMatch)
      this.mediaQuery.destroy()
    },
    beforeDestroy() {
      this.$refs.card.removeEventListener('domfactory-component-upgraded', () => this.update())
      this.$refs.image.removeEventListener('domfactory-component-upgraded', () => this.update())
      handler.downgradeElement(this.$refs.card)
      handler.downgradeElement(this.$refs.image)
    },
    methods: {
      onMediaQueryMatch (isMobile) {
        this.isMobile = isMobile
      },
      enableReveals() {
        this.$refs.card.reveal.init()
      },
      destroyReveals() {
        if (this.reveals && this.$refs.card && this.$refs.card.reveal) {
          this.$refs.card.reveal.destroy()
        }
      },
      update() {
        this.$nextTick(() => {
          if (this.$refs.card && this.$refs.card.overlay) {
            this.$refs.card.overlay.trigger = 'click'
          }
          if (this.$refs.image && this.$refs.image.image) {
            this.$refs.image.image._reset()
          }
          if (this.$refs.card && this.localReveals && this.$refs.card.reveal) {
            this.$refs.card.reveal._reset()
          }
        })
      },
      show() {
        if (this.$refs.card.overlay) {
          this.$refs.card.overlay.show()
        }
        if (this.localReveals && this.$refs.card.reveal) {
          this.$refs.card.reveal.open()
        }
      },
      hide() {
        if (this.$refs.card.overlay) {
          this.$refs.card.overlay.hide()
        }
        if (this.localReveals && this.$refs.card.reveal) {
          this.$refs.card.reveal.close()
        }
      },
    }
  }
</script>