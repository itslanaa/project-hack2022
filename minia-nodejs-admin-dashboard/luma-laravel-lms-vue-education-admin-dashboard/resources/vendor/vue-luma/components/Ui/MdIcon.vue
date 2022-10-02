<template>
  <i 
    class="material-icons"
    :class="{
      'icon--left': left,
      'icon--right': right
    }"><slot>credit_card</slot></i>
</template>

<script>
  export default {
    name: 'MdIcon',
    props: {
      left: {
        type: Boolean
      },
      right: {
        type: Boolean
      }
    }
  }
</script>
