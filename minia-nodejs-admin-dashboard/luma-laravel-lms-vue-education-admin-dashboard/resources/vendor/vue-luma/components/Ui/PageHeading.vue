<template>
  <component
    :is="element"
    :class="customClass">
    <slot>Page Heading</slot>
  </component>
</template>

<script>
  export default {
    props: {
      customClass: {
        type: String,
        default: () => 'h2'
      },
      element: {
        type: String,
        default: () => 'h1'
      }
    }
  }
</script>
