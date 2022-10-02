<template>
  <div>
    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <blog-post-heading 
          class="d-flex flex-column flex-md-row align-items-center align-items-md-start flex mb-16pt text-center text-md-left" />
      </div>
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <blog-post />
      </div>
    </div>

    <div class="page-section bg-alt">
      <div :class="containerClass">
        <feedback />
      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   BlogPostHeading,
  //   BlogPost,
  //   FeedbackGrid as Feedback
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import BlogPostHeading from '../components/Blog/BlogPostHeading.vue'
  import BlogPost from '../components/Blog/BlogPost.vue'
  import Feedback from '../components/Feedback/FeedbackGrid.vue'

  export default {
    components: {
      BlogPost,
      BlogPostHeading,
      Feedback
    },
    extends: Page
  }
</script>
