<template>
  <card 
    :header-btn="true"
    :title="$t('Forum Activity')"
    :subtitle="$t('Latest forum topics & comments')"
    :header-btn-title="$t('My courses')"
    no-body>

    <md-icon slot="header-btn-title">keyboard_arrow_right</md-icon>

    <b-list-group class="list-group-fit">
      <b-list-group-item
        v-for="item in forum"
        :key="item.id"
        class="forum-thread">

        <b-media class="align-items-center">
          <div
            slot="aside" 
            class="forum-icon-wrapper">
            <b-link 
              :to="routeTo(routes.forumThread)" 
              class="forum-thread-icon">
              <md-icon>description</md-icon>
            </b-link>
            <fmv-avatar
              :src="item.user.avatar" 
              :alt="item.user.name" 
              :to="routeTo(routes.studentProfile)" 
              class="forum-thread-user"
              size="xs"
              circle />
          </div>
          <div class="d-flex align-items-center">
            <b-link 
              to="profile" 
              class="text-body"><strong>{{ item.user.name }}</strong></b-link>
            <small class="ml-auto text-muted">{{ $t('diff_for_humans', { when: item.published_at }) }}</small>
          </div>
          <b-link 
            :to="routeTo(routes.forumThread)"
            class="text-black-70" 
            v-text="item.title" />
        </b-media>
      </b-list-group-item>
    </b-list-group>
  </card>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import Card from '~/components/Ui/Card.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      MdIcon,
      Card,
      FmvAvatar
    },
    mixins: [routeTo],
    data() {
      return {
        forum: [
          {
            id: 1,
            title: 'Am I learning the right way?',
            published_at: '5 min',
            user: {
              name: 'Luci Bryant',
              avatar: '/images/people/50/guy-7.jpg'
            }
          },
          {
            id: 2,
            title: 'Can someone help me with the basic Setup?',
            published_at: '7 min',
            user: {
              name: 'Magnus Goldsmith',
              avatar: '/images/people/50/guy-4.jpg'
            }
          },
          {
            id: 3,
            title: 'I think this is the right way?',
            published_at: '12 min',
            user: {
              name: 'Katelyn Rankin',
              avatar: '/images/people/50/guy-2.jpg'
            }
          }
        ]
      }
    }
  }
</script>
