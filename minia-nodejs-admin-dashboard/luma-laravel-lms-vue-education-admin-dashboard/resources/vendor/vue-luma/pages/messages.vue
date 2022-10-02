<template>
  <div class="app-messages__container d-flex flex-column h-100 pb-4">

    <!-- Navbar -->
    <div 
      id="messages-navbar" 
      class="navbar navbar-light bg-white navbar-expand-sm navbar-shadow z-1"
      :class="{ 'px-0': $root.layoutName === 'fixed' }">
      <div 
        class="flex-wrap"
        :class="navbarContainerClass"
        style="max-width: none;">

        <!-- Person Info -->
        <div class="nav py-2">
          <div class="nav-item d-flex align-items-center mr-3">
            <div class="mr-3">
              <fmv-avatar
                no-link
                size="sm"
                alt="people"
                src="/images/people/110/woman-5.jpg"
                circle
                status="online" />
            </div>
            <div 
              class="d-flex flex-column" 
              style="max-width: 200px; font-size: 15px">
              <strong class="text-body">Michelle Smith</strong>
              <span class="text-50 text-ellipsis">Personal Development Teacher since 2014</span>
            </div>
          </div>
        </div>

        <div class="py-2 flex d-flex align-items-center">

          <!-- Messages Search -->
          <div 
            class="flex search-form form-control-rounded navbar-search" 
            style="min-width: 200px;">
            <input
              id="searchSample02" 
              type="text" 
              class="form-control" 
              placeholder="Search messages">
            <button 
              class="btn pr-3" 
              type="button"><md-icon v-text="'search'" /></button>
          </div>

          <!-- Messages Drawer Toggle Button -->
          <button 
            v-fmv-toggle.messages-drawer
            class="navbar-toggler d-block w-auto ml-16pt"
            :class="{ 'd-md-none': $root.layoutName !== 'fixed' }">
            <md-icon v-text="'people_outline'" />
          </button>

        </div>
      </div>
    </div>

    <!-- Messages -->
    <fmv-perfect-scrollbar
      ref="scroll" 
      class="flex pt-4 position-relative"
      @update="scroll">
      <div :class="containerClass">
        <div class="card">
          <div class="card-body d-flex align-items-center">
            <div class="mr-3">
              <div class="avatar avatar-xl">
                <span class="avatar-title rounded-circle">MS</span>
              </div>
            </div>
            <div class="flex">
              <h4 class="mb-0">Michelle Smith</h4>
              <p class="text-50 mb-0">Personal Development Teacher since 2014</p>
            </div>
          </div>
        </div>
        <ul
          id="messages" 
          class="d-flex flex-column list-unstyled">

          <li
            v-for="item in messages"
            :key="item.id" 
            class="message d-inline-flex">
            <div class="message__aside">
              <fmv-avatar 
                :to="routeTo(routes.studentProfile)" 
                size="sm"
                :src="item.avatar"
                alt="people"
                circle />
            </div>
            <div class="message__body card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex mr-3">
                    <b-link 
                      :to="routeTo(routes.studentProfile)" 
                      class="text-body">
                      <strong v-text="item.name" />
                    </b-link>
                  </div>
                  <div>
                    <small 
                      class="text-50"
                      v-text="item.date" />
                  </div>
                </div>
                <span 
                  class="text-70"
                  v-text="item.message" />
                <a
                  v-if="item.file" 
                  class="media align-items-center mt-2 text-decoration-0 px-3">
                  <fmv-avatar
                    no-link 
                    :title="true"
                    circle
                    class="mr-12pt">
                    <md-icon 
                      class="font-size-24pt"
                      v-text="'attach_file'" />
                  </fmv-avatar>
                  <span 
                    class="media-body" 
                    style="line-height: 1.5">
                    <span 
                      class="text-primary"
                      v-text="item.file.name" /><br>
                    <span 
                      class="text-50"
                      v-text="item.file.size" />
                  </span>
                </a>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </fmv-perfect-scrollbar>

    <!-- Form -->
    <div :class="containerClass">
      <b-form 
        @submit.prevent="addMessage">
        <div class="input-group input-group-merge">
          <b-form-input
            v-model="message" 
            class="form-control-appended" 
            autofocus
            required
            placeholder="Type message" />
          <div class="input-group-append">
            <div class="input-group-text pr-2">
              <b-btn 
                variant="flush">
                <md-icon v-text="'tag_faces'" />
              </b-btn>
            </div>
            <div class="input-group-text pl-0">
              <div 
                class="custom-file custom-file-naked d-flex" 
                style="width: 24px; overflow: hidden;">
                <input
                  id="customFile" 
                  type="file" 
                  class="custom-file-input">
                <label 
                  class="custom-file-label" 
                  style="color: inherit;" 
                  for="customFile">
                  <md-icon v-text="'attach_file'" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   MessagesSidebar
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import MessagesSidebar from '~/components/Messages/MessagesSidebar.vue'
  import {FmvPerfectScrollbar} from 'fmv-layout'

  export default {
    extends: Page,
    props: {
      navbarContainerClass: {
        type: [String, Array, Object],
        default() {
          return this.containerClass
        }
      }
    },
    data () {
      return {
        messages: [{
          avatar: '/images/people/110/guy-6.jpg',
          name: "Laza Bogdan", 
          date: "1 hour ago",
          message: "Coming along nicely, we've got a draft for the client design completed, take a look! 🤓",
          file: {
            name: "draft.sketch",
            size: "5 MB"
          }
        }, {
          avatar: '/images/people/110/woman-5.jpg',
          name: 'Michelle',
          date: '5 minutes ago',
          message: 'Clients loved the new design.'
        }, {
          avatar: '/images/people/110/woman-5.jpg',
          name: 'Michelle',
          date: '5 minutes ago',
          message: '🔥 Superb job..'
        }, {
          avatar: '/images/people/110/guy-6.jpg',
          name: 'Laza Bogdan',
          date: 'just now',
          message: 'Glad it all worked out 😉'
        }],
        message: null
      }
    },
    mounted() {
      this.scroll()
    },
    methods: {
      scroll() {
        this.$nextTick(() => {
          if (this.$refs.scroll) {
            const element = this.$refs.scroll.$el
            element.scrollTop = element.scrollHeight - element.offsetHeight - 16
          }
        })
      },
      addMessage() {
        this.messages.push({
          name: 'Laza Bogdan',
          avatar: '/images/people/110/guy-6.jpg',
          date: 'just now',
          message: this.message
        })

        this.message = null
        this.scroll()
      }
    }
  }
</script>
