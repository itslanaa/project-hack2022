<template>
  <div class="card card--elevated posts-card-popular">
    <img 
      :src="`/images/paths/${item.image}_430x168.png`"
      class="card-img">
    <div 
      class="fullbleed bg-primary" 
      style="opacity: .5" />
    <div class="posts-card-popular__content">
      <div class="card-body d-flex align-items-center">
        <div class="avatar-group flex">
          <fmv-avatar
            v-b-tooltip.hover.top="{ title: 'Janell D.' }"
            size="xs"
            :src="item.author_avatar"
            circle />
        </div>
        <span 
          style="text-decoration: none;" 
          class="d-flex align-items-center text-white">
          <md-icon 
            class="mr-1" 
            style="font-size: inherit;"
            v-text="'remove_red_eye'" /> 
          <small>327</small>
        </span>
      </div>
      <div class="posts-card-popular__title card-body">
        <small class="text-muted text-uppercase">{{ item.category }}</small>
        <b-link 
          class="card-title" 
          :to="routeTo(item.to)"
          v-text="item.title" />
      </div>
    </div>
  </div>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      MdIcon,
      FmvAvatar
    },
    mixins: [routeTo],
    props: {
      item: {
        type: Object,
        default: null
      }
    }
  }
</script>