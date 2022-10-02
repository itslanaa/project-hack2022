<template>
  <div
    :class="{ 'card--raised': raised }"
    class="card card-group-row__card text-center o-hidden">
    <span
      v-if="ribbon"
      class="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white"
      v-text="ribbon" />
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1 mb-16pt">
        <span
          :class="iconClass" 
          class="w-64 h-64 icon-holder rounded-circle d-inline-flex mb-16pt">
          <md-icon v-text="icon" />
        </span>
        <h4 class="mb-8pt">{{ $t(title) }}</h4>
        <p class="text-black-70">{{ $t(description) }}</p>
      </div>
      <p class="d-flex justify-content-center align-items-center m-0">
        <span class="h4 m-0 font-weight-normal">&dollar;</span>
        <span class="h1 m-0 font-weight-normal">{{ price }}</span>
        <span class="h4 m-0 font-weight-normal">/ {{ $t('month') }}</span>
      </p>
      <p class="lh-1 text-muted"><small>{{ $t('after the free trial ends') }}</small></p>
    </div>
    <div class="card-footer">
      <b-btn 
        :to="routeTo(routes.signup)"
        :variant="localActionColor"
        :disabled="actionDisabled"
        v-text="$t(action)" />
    </div>
  </div>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    mixins: [routeTo],
    props: {
      title: {
        type: String,
        default: null
      },
      description: {
        type: String,
        default: null
      },
      price: {
        type: String,
        default: null
      },
      color: {
        type: String,
        default: 'accent'
      },
      icon: {
        type: String,
        default: null
      },
      iconColor: {
        type: String,
        default: null
      },
      raised: {
        type: Boolean,
        default: false
      },
      ribbon: {
        type: String,
        default: null
      },
      action: {
        type: String,
        default: 'Get started'
      },
      actionColor: {
        type: String,
        default: null
      },
      actionDisabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      localIconColor() {
        return this.iconColor || `outline-${this.color}`
      },
      localActionColor() {
        return this.actionColor || this.color
      },
      iconClass() {
        return `icon-holder--${this.localIconColor}`
      }
    }
  }
</script>
