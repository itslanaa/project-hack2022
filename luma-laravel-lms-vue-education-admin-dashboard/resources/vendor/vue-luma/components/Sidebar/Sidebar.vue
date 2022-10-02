<template>
  <fmv-sidebar
    ref="sidebar"
    :type="sidebarType"
    :variant="sidebarVariant"
    @update="scrollIntoView">

    <!-- Search -->
    <div
      v-if="sidebarSearch"  
      class="d-flex align-items-center navbar-height">
      <b-form 
        class="search-form w-100 mx-16pt pr-0 pl-16pt"
        :class="sidebarSearchFormClass">
        <b-form-input
          :placeholder="$t('Search')"
          type="text"
          class="pl-0" />
        <b-button variant="none">
          <md-icon>search</md-icon>
        </b-button>
      </b-form>
    </div>
    <!-- // END Search -->

    <span
      v-if="sidebarBrand" 
      class="sidebar-brand"
      :class="sidebarBrandClass">
      <fmv-avatar
        :title="true"
        title-class="bg-primary"
        size="xl"
        :to="routes.home"
        class="sidebar-brand-icon h-auto">
        <b-img 
          :src="brandImage" 
          class="img-fluid" 
          alt="logo" />
      </fmv-avatar>
      <span 
        v-text="sidebarBrand" />
    </span>

    <slot v-bind:sidebar="{ menu, i18nMenu }">
      <template v-if="sidebarMenu">
        <!-- Sidebar Menu -->

        <template
          v-if="menu.auth && menu.auth.length">
          <div class="sidebar-heading">Auth</div>
          <fmv-sidebar-menu
            :menu="i18nMenu.auth"
            class="mb-24pt" />
        </template>

        <template
          v-if="menu.student && menu.student.length">
          <div class="sidebar-heading">Student</div>
          <fmv-sidebar-menu
            :menu="i18nMenu.student"
            class="mb-24pt" />
        </template>

        <template
          v-if="menu.instructor && menu.instructor.length">
          <div class="sidebar-heading">Instructor</div>
          <fmv-sidebar-menu
            :menu="i18nMenu.instructor"
            class="mb-24pt" />
        </template>

        <template
          v-if="menu.apps && menu.apps.length">
          <div class="sidebar-heading">{{ $t('Applications') }}</div>
          <fmv-sidebar-menu 
            :menu="i18nMenu.apps"
            class="mb-24pt" />
        </template>

        <template
          v-if="menu.components && menu.components.length">
          <div class="sidebar-heading">{{ $t('Components') }}</div>
          <fmv-sidebar-menu 
            :menu="i18nMenu.components"
            class="mb-24pt" />
        </template>
      </template>
    </slot>
  </fmv-sidebar>
</template>

<script>
  import { cloneDeepWith, cloneDeep } from 'lodash'

  import {
    FmvSidebar, 
    FmvSidebarMenu
  } from 'fmv-layout'

  import {FmvAvatar} from 'fmv-avatar'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  import teacherBrandImage from '~/static/images/illustration/teacher/128/white.svg'
  import studentBrandImage from '~/static/images/illustration/student/128/white.svg'

  import { elementScrollIntoView } from 'seamless-scroll-polyfill'

  export default {
    components: {
      FmvSidebar,
      FmvSidebarMenu,
      FmvAvatar,
      MdIcon
    },
    props: {
      sidebarType: {
        type: String,
        default: () => 'dark-pickled-bluewood'
      },
      sidebarVariant: {
        type: String,
        default: () => null
      },
      sidebarBrand: {
        type: [String, Boolean],
        default: () => 'Brand'
      },
      brandImage: {
        type: String,
        default() {
          return this.isInstructor ? teacherBrandImage : studentBrandImage
        }
      },
      sidebarBrandClass: {
        type: [Array, String, Object],
        default: null
      },
      sidebarSearch: {
        type: Boolean,
        default: true
      },
      sidebarSearchFormClass: {
        type: [Array, String, Object],
        default: () => null
      },
      sidebarMenu: {
        type: Object,
        default: () => null
      }
    },
    data() {
      return {
        scrollIntoViewElement: null,
        menu: {}
      }
    },
    computed: {
      i18nMenu() {
        let menu = Array.isArray(this.menu) ? [] : {}

        if (this.menu) {
          let menuClone = this.cloneDeepWith(this.menu)

          if (Array.isArray(this.menu)) {
            menu = menuClone.map(item => this.transformI18nMenuItem(item))
          }
          else {
            Object.keys(menuClone).map(key => {
              menu[key] = menuClone[key]
              menu[key].map(item => this.transformI18nMenuItem(item))
            })
          }
        }

        return menu
      },
      isInstructor() {
        return this.$route.path.indexOf('instructor') !== -1
      },
    },
    watch: {
      scrollIntoViewElement: 'scrollIntoView',
      sidebarMenu: {
        immediate: true,
        deep: true,
        handler(menu) {
          this.setMenu(menu)
        }
      }
    },
    created() {
      this.$root.$on('fmv::sidebar-menu::state', ({targetId, opened}) => {
        this.updateSidebarScroll()
        if (opened) {
          this.scrollIntoViewElement = targetId
        }
      })
    },
    methods: {
      setMenu(menu) {
        this.menu = this.cloneDeepWith(menu)
      },
      cloneDeepWith(value) {
        return cloneDeepWith(
          value, 
          value => typeof value === 'function' ? value : cloneDeep(value)
        )
      },
      updateSidebarScroll() {
        this.$nextTick(() => {
          if (this.$refs.sidebar) {
            this.$refs.sidebar.update()
          }
        })
      },
      scrollIntoView() {
        this.$nextTick(() => {
          const target = document.querySelector(`#${this.scrollIntoViewElement}`)
          if (target) {
            elementScrollIntoView(target, {
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest'
            })
          }
        })
      },
      $localePath(route) {
        try {
          return this.localePath(route)
        } catch(e) {
          return route
        }
      },
      $localeRoute(route) {
        try {
          return this.localeRoute(route)
        } catch(e) {
          return route
        }
      },
      transformI18nMenuItem(item) {
        if (item.label) {
          item.label = this.$t(item.label)
        }
        if (item.route) {
          if (typeof item.route === 'string') {
            item.route = this.$localePath(item.route)
          }
          else if (typeof item.route === 'object') {
            item.route = this.$localeRoute(item.route)
          }
        }
        if (item.children && item.children.length > 0) {
          item.children.map(child => this.transformI18nMenuItem(child))
        }
        return item
      }
    }
  }
</script>
