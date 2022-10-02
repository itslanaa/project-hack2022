<template>
  <div 
    class="card posts-card"
    :class="cardClass">
    <div class="posts-card__content d-flex align-items-center flex-wrap">
      <fmv-avatar
        :to="routeTo(item.to)"
        size="lg"
        :src="item.avatar" 
        alt="avatar" 
        class="overlay overlay--primary o-hidden mr-3">
        <template v-slot:after-img>
          <div class="overlay__content rounded" />
        </template>
      </fmv-avatar>

      <div class="posts-card__title flex d-flex flex-column">
        <b-link 
          :to="routeTo(item.to)"
          class="card-title mr-3"
          v-text="item.title" />
        <small class="text-50">{{ item.views }} views last week</small>
      </div>
      <div class="d-flex align-items-center flex-column flex-sm-row posts-card__meta">
        <div class="mr-3 text-50 text-uppercase posts-card__tag d-flex align-items-center">
          <i class="material-icons text-muted-light mr-1">folder_open</i> {{ item.tag }}
        </div>
        <div class="mr-3 text-50 posts-card__date">
          <small>{{ item.date }}</small>
        </div>
        <div class="media ml-sm-auto align-items-center">
          <div 
            :class="{ 'avatar-group': !!item.avatarGroup }"
            class="media-left mr-2">
            <fmv-avatar
              v-for="avatar in item.avatars"
              :key="avatar.id"
              v-b-tooltip.hover.top="{ title: 'Janell D.' }"
              size="xs"
              :src="avatar"
              circle />
          </div>
          <div class="media-body">
            <a
              v-if="item.avatarCount > 1" 
              href="" 
              v-text="`+${item.avatarCount-1} more`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {FmvAvatar} from 'fmv-avatar'
  import routeTo from '~/mixins/route-to'

  export default {
    components: {
      FmvAvatar
    },
    mixins: [routeTo],
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
      wrap: {
        type: String,
        default: null
      }
    },
    computed: {
      cardClass() {
        const classes = {}
        if (this.wrap) {
          classes[`posts-card--wrap-${this.wrap}`] = true
        }
        return classes
      }
    }
  }
</script>