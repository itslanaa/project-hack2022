<template>
  <div>
    <div class="card">
      <img 
        src="/images/paths/typescript_892x286.png" 
        alt="TypeScript" 
        class="card-img" 
        style="max-height: 100%; width: initial;">
      <div 
        class="fullbleed bg-primary" 
        style="opacity: .5;" />
      <img 
        src="/images/paths/typescript_64x64.svg" 
        width="64" 
        alt="Instruduction to TypeScript" 
        class="rounded position-absolute" 
        style="right: 1rem; top: 1rem;">
      <div class="card-body d-flex align-items-center justify-content-center fullbleed">
        <div>
          <h2 class="text-white mb-16pt">Introduction to TypeScript</h2>
          <div class="d-flex align-items-center mb-16pt justify-content-center">
            <div class="d-flex align-items-center mr-16pt">
              <span class="material-icons icon-16pt text-white-50 mr-4pt">access_time</span>
              <p 
                class="flex text-white-50 lh-1 mb-0"
                v-text="$t('minutes_left', { minutes: 50 })" />
            </div>
            <div class="d-flex align-items-center">
              <span class="material-icons icon-16pt text-white-50 mr-4pt">play_circle_outline</span>
              <p 
                class="flex text-white-50 lh-1 mb-0"
                v-text="$t('lessons', { lessons: 12 })" />
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <b-btn 
              :to="routeTo(routes.studentTakeLesson)"
              variant="white" 
              class="mr-8pt"
              v-text="$t('Resume')" />
            <b-btn
              :to="routeTo(routes.studentTakeCourse)" 
              variant="outline-white"
              class="ml-0"
              v-text="$t('Start over')" />
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-wrap align-items-start">
      <div class="d-flex align-items-center mr-24pt">
        <b-link 
          :to="routeTo(routes.studentTakeCourse)" 
          class="mr-12pt">
          <img 
            src="/images/paths/angular_64x64.svg" 
            width="40" 
            alt="Angular" 
            class="rounded">
        </b-link>
        <div class="flex">
          <b-link
            :to="routeTo(routes.studentTakeCourse)"  
            class="card-title"
            v-text="'Angular Fundamentals'" />
          <p class="lh-1 mb-0">
            <span 
              class="text-50 small" 
              v-text="$t('with')" />
            <span class="text-50 small">Elijah Murray</span>
          </p>
        </div>
      </div>
      <div 
        class="d-flex align-items-center py-4pt" 
        style="white-space: nowrap;">
        <small 
          class="text-50 mr-8pt"
          v-text="$t('Your rating')" />
        <div class="rating mr-8pt">
          <span class="rating__item"><span class="material-icons text-primary">star</span></span>
          <span class="rating__item"><span class="material-icons text-primary">star</span></span>
          <span class="rating__item"><span class="material-icons text-primary">star</span></span>
          <span class="rating__item"><span class="material-icons text-primary">star</span></span>
          <span class="rating__item"><span class="material-icons text-primary">star_border</span></span>
        </div>
        <small class="text-50">4/5</small>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "minutes_left": "{minutes} minutes left",
      "lessons": "{lessons} lessons"
    },
    "ro": {
      "Resume": "Continuă",
      "Start over": "Reîncepe",
      "Your rating": "Evaluarea ta",
      "with": "cu",
      "minutes_left": "{minutes} minute rămase",
      "lessons": "{lessons} lecții"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'

  export default {
    mixins: [routeTo]
  }
</script>