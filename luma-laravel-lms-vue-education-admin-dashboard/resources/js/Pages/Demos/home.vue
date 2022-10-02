<template>
  <luma-home-page
    :title="title"
    :container-class="containerClass"
    :local-page-header="localPageHeader"
    :header-image="headerImage"
    :blog-posts1="blogPosts1"
    :blog-posts2="blogPosts2" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {
    LumaHomePage,
    HomeHero
  } from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaHomePage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Home')
      }
    },
    computed: {
      blogPosts1() {
        return [{
          image: "sketch",
          category: "Sketch",
          title: "Merge Duplicates Inconsistent Symbols",
          author_avatar: "/images/256_luke-porter-261779-unsplash.jpg",
          to: this.routes.blogPost
        }, {
          image: "invision",
          category: "inVision",
          title: "Design Systems Essentials",
          author_avatar: "/images/256_michael-dam-258165-unsplash.jpg",
          to: this.routes.blogPost
        }, {
          image: "photoshop",
          category: "Photoshop",
          title: "Semantic Logo Design",
          author_avatar: "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
          to: this.routes.blogPost
        }]
      },
      blogPosts2() {
        return [{
          avatar: "/images/paths/invision_200x168.png",
          title: "Design Systems Essentials",
          views: 35,
          tag: "inVision",
          date: "11 Nov, 2018 07:46 AM",
          avatarGroup: true,
          avatarCount: 3,
          avatars: [
            "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
            "/images/256_michael-dam-258165-unsplash.jpg",
            "/images/256_luke-porter-261779-unsplash.jpg"
          ],
          to: this.routes.blogPost
        }]
      },
      localPageHeader() {
        return this.layout !== 'fixed'
      },
      headerClass() {
        if (this.layout === 'fixed') {
          return 'mdk-header--bg-dark bg-dark mb-0'
        }
        if (this.layout === 'sticky') {
          return 'mb-0'
        }
        return null
      },
      headerEffects() {
        if (this.layout === 'fixed') {
          return 'parallax-background waterfall'
        }
        return null
      },
      headerImage() {
        if (this.layout === 'fixed') {
          return '/images/photodune-4161018-group-of-students-m.jpg'
        }
        return null
      },
      headerContentClass() {
        if (this.layout === 'fixed') {
          return 'justify-content-center'
        }
        return null
      },
      headerCondenses() {
        return this.layout === 'fixed'
      },
      headerContentComponent() {
        return HomeHero
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Home')
      }
    }
  }
</script>
