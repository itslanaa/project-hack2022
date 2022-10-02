<template>
  <b-card 
    :footer-class="footerClass" 
    :no-body="noBody">
    <component :is="noBody ? 'b-card-body' : 'div'">
      <div class="row">
        <div class="col-lg-4">
          <h4 
            v-if="title" 
            class="card-title"
            :class="{ 'mb-8pt': description || $slots.description }">
            {{ title }}
          </h4>
          <p class="card-subtitle text-muted">
            <slot name="description">{{ description }}</slot>
          </p>
        </div>
        <div class="col-lg-8 d-flex align-items-center">
          <slot />
        </div>
      </div>
    </component>
    <slot name="before-footer" />
    <slot slot="footer" name="footer" />
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    footerClass: {
      type: [String, Object, Array],
      default: 'bg-dark'
    },
    noBody: {
      type: Boolean,
      default: false
    }
  }
}
</script>
