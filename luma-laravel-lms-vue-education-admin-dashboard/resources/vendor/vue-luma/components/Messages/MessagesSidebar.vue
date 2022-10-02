<template>
  <fmv-sidebar
    type="light"
    variant="white"
    wheel-propagation>

    <div class="d-flex flex-column justify-content-center navbar-height">
      <div class="px-3 form-group mb-0">
        <div class="input-group input-group-merge input-group-rounded flex-nowrap">
          <input type="text" class="form-control form-control-prepended" placeholder="Filter members">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <span class="material-icons">filter_list</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar-heading">Online</div>
    <ul class="list-group list-group-flush mb-3">
      <messages-sidebar-member
        v-for="item in online"
        :key="item.id"
        :item="item" />
    </ul>
    <div class="sidebar-heading d-flex">
      <div class="flex text-muted">{{ offline.length }} OFFLINE</div>
      <a 
        class="text-primary"
        @click="showOffline = !showOffline"
        v-text="showOffline ? 'Hide' : 'Show'" />
    </div>
    <ul
      v-if="showOffline" 
      class="list-group list-group-flush mb-3">
      <messages-sidebar-member
        v-for="item in offline"
        :key="item.id"
        :item="item" />
    </ul>

  </fmv-sidebar>
</template>

<script>
  import {FmvSidebar} from 'fmv-layout'
  // import {MessagesSidebarMember} from 'vue-luma'
  import MessagesSidebarMember from './MessagesSidebarMember.vue'

  export default {
    components: {
      FmvSidebar,
      MessagesSidebarMember
    },
    data() {
      return {
        showOffline: true,
        members: [{
          avatar: '/images/people/50/woman-5.jpg',
          name: 'Michelle Smith',
          description: 'Personal Development Teacher Since 2014',
          active: true,
          status: 'online'
        }, {
          avatar_title: 'AD',
          name: 'Andrew Brain',
          status: 'online'
        }, {
          avatar: '/images/people/50/guy-2.jpg',
          name: 'Jimmy Carter',
          status: 'online'
        }, {
          avatar: '/images/people/50/woman-2.jpg',
          name: 'Samantha Doe',
          status: 'online'
        }, {
          avatar_title: 'XD',
          name: 'Xander Dale',
          status: 'offline'
        }, {
          avatar: '/images/people/50/woman-1.jpg',
          name: 'Beatriz Summers',
          status: 'offline'
        }, {
          avatar: '/images/people/50/woman-3.jpg',
          name: 'Cassie Wills',
          status: 'offline'
        }, {
          avatar: '/images/people/50/guy-1.jpg',
          name: 'Jarrod Forrest',
          description: 'Arts Teacher',
          active: true,
          status: 'offline'
        }, {
          avatar: '/images/people/50/guy-3.jpg',
          name: 'Ziva Ochoa',
          status: 'offline'
        }]
      }
    },
    computed: {
      online() {
        return this.members.filter(item => item.status === 'online')
      },
      offline() {
        return this.members.filter(item => item.status === 'offline')
      }
    }
  }
</script>