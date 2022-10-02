<template>
  <div 
    class="page-separator"
    :class="{ 'justify-content-center': center }">
    <div 
      class="page-separator__text"
      :class="[ textClass ? textClass : null ]">
      <slot>{{ title }}</slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Page Separator Title'
      },
      center: {
        type: Boolean
      },
      textClass: {
        type: String,
        default: null
      }
    }
  }
</script>
