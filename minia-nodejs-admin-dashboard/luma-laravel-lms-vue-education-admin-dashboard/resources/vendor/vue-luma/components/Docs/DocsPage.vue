<template>
  <div 
    :class="containerClass"
    class="page__container p-0">
    <div class="row">
      <div class="col-lg container-fluid page__container pb-32pt">
        <page-header
          :title="title"
          :breadcrumb="breadcrumb"
          class="page-section" />

        <slot />

        <!-- main component reference information -->
        <component-doc
          v-if="meta.component"
          :name="startCase(meta.component)"
          :component="meta.component"
          :component-options="meta.componentOptions"
          :slots="meta.slots"
          :aliases="meta.aliases" />
      </div>
      <div 
        id="page-nav"
        class="col-lg-auto page-nav"
        :style="{ top: ! layoutHasStickyNavbar ? '0px' : '4rem' }">
        <div class="page-section">
          <div class="page-nav__content">
            <page-separator :title="$t('Table of Contents')" />
          </div>

          <b-nav
            v-if="nav.length && rendered"
            v-b-scrollspy
            class="page-nav__menu">
            <li
              v-for="(item, index) in nav"
              :key="`page-nav-${index}`"
              class="nav-item">
              <b-link
                :to="`#${item.id}`"
                class="nav-link"
                @click="scrollIntoView(item.id)">
                {{ item.title }}
              </b-link>
            </li>
          </b-nav>

          <div class="page-nav__content">
            <next-link
              v-if="meta.next || meta.prev"
              :next="meta.next"
              :prev="meta.prev"
              class="mb-24pt" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   ComponentDoc,
  //   PageHeader,
  //   NextLink,
  //   PageSeparator
  // } from 'vue-luma'

  import ComponentDoc from '~/components/Docs/ComponentDoc.vue'
  import NextLink from '~/components/Docs/NextLink.vue'
  import PageHeader from '~/components/Ui/PageHeader.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  import { scrollTo, offsetTop } from '~/utils/doc'
  import startCase from 'lodash.startcase'
  import { elementScrollIntoView } from 'seamless-scroll-polyfill'

  export default {
    components: {
      ComponentDoc,
      NextLink,
      PageHeader,
      PageSeparator
    },
    props: {
      containerClass: {
        type: [String, Array, Object],
        default: () => 'container page__container'
      },
      meta: {
        type: Object,
        default: () => {}
      },
      title: {
        type: String,
        default: null
      },
      breadcrumb: {
        type: Array,
        default: () => []
      },
      navReference: {
        type: Boolean,
        default: true
      },
      layoutHasStickyNavbar: {
        type: Boolean
      }
    },
    data() {
      return {
        rendered: false
      }
    },
    computed: {
      nav() {
        if (!this.meta.nav) {
          return []
        }
        return this.meta.nav.map(nav => {
          if (typeof nav === 'string') {
            return {
              id: nav,
              title: startCase(nav)
            }
          }
          return nav
        })
      }
    },
    watch: {
      '$route.hash': function(hash) {
        if (hash) {
          this.scrollTo()
        }
      }
    },
    created() {
      if (this.navReference) {
        const reference = {
          id: 'reference',
          title: 'Reference'
        }
        if (this.meta.nav && !this.nav.find(nav => nav.id === reference.id)) {
          this.meta.nav.push(reference)
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rendered = true
        this.scrollTo()
      })
    },
    methods: {
      startCase,
      scrollTo() {
        let hash = window.location.hash
        if (hash) {
          this.$nextTick(() => this.scrollIntoView(hash))
        }
      },
      scrollIntoView(id, cb) {
        // const scroller =
        //   document.scrollingElement || document.documentElement || document.body
        // scrollTo(scroller, el ? offsetTop(el) - 64 : 0, 300, cb)
        
        if (id.indexOf('#') === -1) {
          id = `#${id}`
        }

        let el = document.querySelector(id)
        if (el) {
          elementScrollIntoView(el, {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        }
      }
    }
  }
</script>
