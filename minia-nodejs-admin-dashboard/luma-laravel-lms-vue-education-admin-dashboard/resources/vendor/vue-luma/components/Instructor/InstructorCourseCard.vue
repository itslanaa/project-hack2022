<template>
  <div>
    <div
      :id="id"
      ref="card"
      :class="cardClasses"
      class="card card-sm card--elevated p-relative o-hidden overlay--primary"
      :data-partial-height="reveals ? revealPartialHeight : null">
      
      <span
        ref="image" 
        :data-position="position"
        :data-height="reveals ? 168 : 128"
        class="js-image">
        <img 
          :src="`/images/paths/${image}_430x168.png`" 
          alt="course">
        <span 
          class="overlay__content"
          :class="[reveals ? 'align-items-start justify-content-start' : null]">
          <span 
            class="overlay__action d-flex"
            :class="[ reveals ? 'card-body align-items-center' : 'flex-column text-center' ]">
            <md-icon 
              :class="reveals ? 'mr-4pt' : 'icon-32pt'"
              v-text="'edit'" />
            <span 
              class="card-title text-white"
              v-text="$t('Edit')" />
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
                :to="routeTo(routes.instructorEditCourse)" 
                class="card-title"
                v-text="title" />
              <small class="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
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
      v-if="popoverContainer"
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
            <span class="text-black-50 small font-weight-bold">Elijah Murray</span>
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

      <div class="row align-items-center">
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
            :to="routeTo(routes.instructorEditCourse)" 
            variant="primary"
            v-text="$t('Edit Course')" />
        </div>
      </div>

    </b-popover>
  </div>
</template>

<script>
  // import {CourseCard, MdIcon} from 'vue-luma'
  import CourseCard from '~/components/Course/CourseCard.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  
  import routeTo from '~/mixins/route-to'

  export default {
    components: {
      MdIcon
    },
    extends: CourseCard,
    mixins: [routeTo]
  }
</script>