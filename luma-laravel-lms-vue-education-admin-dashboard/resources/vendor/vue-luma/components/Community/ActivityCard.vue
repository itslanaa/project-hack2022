<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex mb-1">
        <fmv-avatar
          :title="item.avatar_title"
          circle
          size="sm"
          class="mr-3" />
        <div class="flex">
          <div class="d-flex align-items-center mb-1">
            <strong 
              class="card-title"
              v-text="item.name" />
            <small 
              class="ml-auto text-muted"
              v-text="item.date" />
          </div>
          
          <div 
            v-html="item.content" />
          
          <b-link
            v-if="item.card" 
            class="card my-3 text-body text-decoration-0 measure-lead">
            <img 
              :src="item.card.image" 
              alt="image" 
              class="card-img-top">
            <span class="card-footer d-flex flex-column">
              <strong 
                v-text="item.card.title" />
              <span 
                class="text-black-70"
                v-text="item.card.description" />
              <span 
                class="text-muted"
                v-text="item.card.link" />
            </span>
          </b-link>

        </div>
      </div>
      <div class="d-flex align-items-center">
        <b-link 
          class="text-muted d-flex align-items-center text-decoration-0">
          <i 
            class="material-icons mr-1" 
            style="font-size: inherit;">favorite_border</i> 
          {{ item.favorites }}
        </b-link>
        <b-link 
          class="text-muted d-flex align-items-center text-decoration-0 ml-3">
          <i 
            class="material-icons mr-1" 
            style="font-size: inherit;">thumb_up</i> 
          {{ item.likes }}
        </b-link>
      </div>
    </div>
  </div>
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