<template>
  <div 
    class="page-headline"
    :class="{ 
      'text-center': center,
      'page-headline--white': white,
      'page-headline--title': !description
    }">
    <h2
      :class="{ 'text-white': white }"
      v-text="title" />
    <p
      v-if="description" 
      class="lead measure-lead text-black-70"
      :class="{ 'mx-auto': center }"
      v-html="description" />
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Page Headline'
      },
      description: {
        type: String,
        default: null
      },
      descriptionClass: {
        type: [String, Array, Object],
        default: null
      },
      center: {
        type: Boolean,
        default: true
      },
      white: {
        type: Boolean
      }
    }
  }
</script>