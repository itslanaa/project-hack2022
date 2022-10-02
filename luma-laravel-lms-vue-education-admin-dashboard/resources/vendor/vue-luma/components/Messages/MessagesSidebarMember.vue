<template>
  <li class="list-group-item px-3 py-12pt{% if item.active %} bg-light{% endif %}">
    <a class="d-flex align-items-center position-relative">
      <fmv-avatar
        no-link
        :title="item.avatar_title"
        :src="item.avatar"
        size="xs"
        :status="item.status"
        class="mr-3 flex-shrink-0"
        circle />
      <span 
        class="flex d-flex flex-column" 
        style="max-width: 175px;">
        <strong class="text-body">{{ item.name }}</strong>
        <span
          v-if="item.description" 
          class="text-muted text-ellipsis">{{ item.description }}</span>
      </span>
    </a>
  </li>
</template>

<script>
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      FmvAvatar
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>