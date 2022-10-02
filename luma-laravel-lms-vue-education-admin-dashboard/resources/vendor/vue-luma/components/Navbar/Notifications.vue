<template>
  <b-nav-item-dropdown
    v-b-tooltip.hover.bottom="{ title: $t(title) }"
    variant="flush"
    no-caret
    right
    class="dropdown-notifications dropdown-xs-down-full d-none d-sm-flex">
    <template slot="button-content">
      <md-icon :class="iconClass">{{ icon }}</md-icon>
      <b-badge
        v-if="badge && unread" 
        pill
        variant="accent badge-notifications">
        {{ unread }}
      </b-badge> 
    </template>
    
    <fmv-perfect-scrollbar 
      class="position-relative">
      <b-dd-header>{{ $t(title) }}</b-dd-header>
      <b-list-group flush>
        <b-list-group-item
          v-for="item in notifications"
          :key="item.id"
          :class="{ 'unread': !!item.unread }"
          action
          :to="routeTo(routeMessages || routes.messages)">
          <span class="d-flex align-items-center mb-1">
            <small
              class="text-black-50"
              v-text="item.created_at" />
            <span
              v-if="item.unread" 
              class="ml-auto unread-indicator bg-accent" />
          </span>
          <span class="d-flex">
            <fmv-avatar
              :title="item.icon"
              :src="item.avatar"
              title-class="bg-light"
              circle
              class="mr-2"
              size="xs">
              <md-icon 
                :class="item.iconClass"
                class="icon--left" 
                v-text="item.icon" />
            </fmv-avatar>
            <span class="flex d-flex flex-column">
              <strong
                v-if="item.name" 
                class="text-black-100"
                v-text="item.name" />
              <span 
                class="text-black-70"
                v-html="item.message" />
            </span>
          </span>
        </b-list-group-item>
        <b-list-group-item>
          <b-btn
            variant="light"
            size="sm"
            :to="routeTo(routeMessages || routes.messages)"
            active-class="fake-active-class"
            exact-active-class="fake-exact-active-class"
            v-text="$t('view_all', { title: $t(title) })" />
        </b-list-group-item>
      </b-list-group>
    </fmv-perfect-scrollbar>
  </b-nav-item-dropdown>
</template>

<i18n>
  {
    "en": {
      "view_all": "View {title}"
    },
    "ro": {
      "view_all": "Vezi {title}",
      "System notifications": "Notificări",
      "Messages": "Mesaje"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import {FmvPerfectScrollbar} from 'fmv-layout'
  import {FmvAvatar} from 'fmv-avatar'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      FmvPerfectScrollbar,
      FmvAvatar,
      MdIcon
    },
    mixins: [routeTo],
    props: {
      badge: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: 'notifications_none'
      },
      iconClass: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default() {
          return 'System notifications'
        }
      },
      routeMessages: {
        type: [String, Object]
      },
      notifications: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      unread() {
        if (this.notifications.length) {
          return this.notifications.filter(i => !! i.unread).length
        }
      }
    }
  }
</script>
