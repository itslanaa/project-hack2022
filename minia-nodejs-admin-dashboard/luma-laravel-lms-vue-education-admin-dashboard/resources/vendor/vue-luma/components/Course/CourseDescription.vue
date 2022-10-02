<template>
  <div class="row">
    <div class="col-md-7">
      <page-separator
        :title="$t(title)" />
      <div v-html="description" />
    </div>
    <div class="col-md-5">
      <page-separator
        :title="$t('What you’ll learn')" />
      <ul class="list-unstyled">
        <li class="d-flex align-items-center">
          <span class="material-icons text-50 mr-8pt">check</span>
          <span class="text-70">Fundamentals of working with Angular</span>
        </li>
        <li class="d-flex align-items-center">
          <span class="material-icons text-50 mr-8pt">check</span>
          <span class="text-70">Create complete Angular applications</span>
        </li>
        <li class="d-flex align-items-center">
          <span class="material-icons text-50 mr-8pt">check</span>
          <span class="text-70">Working with the Angular CLI</span>
        </li>
        <li class="d-flex align-items-center">
          <span class="material-icons text-50 mr-8pt">check</span>
          <span class="text-70">Understanding Dependency Injection</span>
        </li>
        <li class="d-flex align-items-center">
          <span class="material-icons text-50 mr-8pt">check</span>
          <span class="text-70">Testing with Angular</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "About this course": "Despre curs",
      "What you’ll learn": "Ce vei învăța"
    }
  }
</i18n>

<script>
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      PageSeparator
    },
    props: {
      title: {
        type: String,
        default: () => 'About this course'
      },
      description: {
        type: String,
        default: () => `
          <p class="text-70 measure-paragraph-max">This course will teach you the fundamentals o*f working with Angular 2. You *will learn everything you need to know to create complete applications including: components, services, directives, pipes, routing, HTTP, and even testing.</p>
          <p class="text-70 measure-paragraph-max mb-0">This course will teach you the fundamentals o*f working with Angular 2. You *will learn everything you need to know to create complete applications including: components, services, directives, pipes, routing, HTTP, and even testing.</p>
        `
      }
    }
  }
</script>