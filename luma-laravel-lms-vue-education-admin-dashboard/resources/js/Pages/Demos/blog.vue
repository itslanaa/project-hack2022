<template>
  <luma-blog-page
    :title="title"
    :container-class="containerClass"
    :local-page-header="localPageHeader"
    :header-content-component-props="headerContentComponentProps"
    :header-image="headerImage"
    :blog-posts1="blogPosts1"
    :blog-posts2="blogPosts2" />
</template>

<script>
  import Page from '@/Components/Page'
  import Layout from '@/Layouts/Dynamic'
  import {
    LumaBlogPage, 
    HomeHero
  } from 'vue-luma'

  export default {
    layout: (h, page) => {
      return h(Layout, {
        props: { routeLayout: page.data.props.routeLayout }
      }, [page])
    },
    components: {
      LumaBlogPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Blog')
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
          avatar: "/images/paths/photoshop_200x168.png",
          title: "Semantic Logo Design",
          views: 78,
          tag: "Photoshop",
          date: "10 Nov, 2018 08:25 AM",
          avatarGroup: true,
          avatarCount: 2,
          avatars: [
            "/images/256_joao-silas-636453-unsplash.jpg",
            "/images/256_jeremy-banks-798787-unsplash.jpg",
            "/images/256_daniel-gaffey-1060698-unsplash.jpg"
          ],
          to: this.routes.blogPost
        }, {
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
        }, {
          avatar: "/images/paths/sketch_200x168.png",
          title: "Merge Duplicates Inconsistent Symbols & Styles",
          views: 78,
          tag: "Sketch",
          date: "09 Nov, 2018 07:13 PM",
          avatarGroup: true,
          avatarCount: 1,
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
          return 'mdk-header--bg-primary mb-0'
        }
        return 'mb-0'
      },
      headerEffects() {
        if (this.layout === 'fixed') {
          return 'parallax-background waterfall'
        }
        return null
      },
      headerImage() {
        return '/images/1280_work-station-straight-on-view.jpg'
      },
      headerContentComponentProps() {
        return {
          title: this.$t('Get Inspired'),
          subtitle: this.$t('Free resources and inspiration on hot topics with articles, talks, podcasts, developer resources and more.'),
          cta: false,
          link: false,
          containerClass: this.containerClass
        }
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
        title: app.$i18n.t('Blog')
      }
    }
  }
</script>
