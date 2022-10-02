<template>
  <div>
    <fmv-box
      v-if="localPageHeader"
      effects="parallax-background blend-background"
      :box-image="headerImage"
      class="mdk-box--bg-primary bg-dark mb-0">
      
      <home-hero
        v-bind="headerContentComponentProps" />
    </fmv-box>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        
        <div 
          class="text-center d-flex align-items-center flex-wrap mb-32pt" 
          style="white-space: nowrap;">
          <h5 
            class="mr-24pt mb-md-0 d-md-inline-block"
            v-text="$t('Popular Topics')" />
          <b-link 
            class="chip mb-16pt mb-md-0 chip-secondary"
            v-text="$t('Design')" />
          <b-link 
            class="chip mb-16pt mb-md-0 chip-outline-secondary"
            v-text="$t('Development')" />
          <b-link 
            class="chip mb-16pt mb-md-0 chip-outline-secondary"
            v-text="$t('Photography')" />
          <b-link 
            class="chip mb-16pt mb-md-0 chip-outline-secondary d-md-none d-lg-inline-flex"
            v-text="$t('Business')" />
        </div>

        <div class="row card-group-row">
          <div 
            v-for="item in blogPosts1"
            :key="item.id"
            class="col-md-6 col-lg-4 card-group-row__col">
            <blog-post-featured-card
              :item="item"
              class="card-group-row__card" />
          </div>
        </div>

        <pager />
      
      </div>
    </div>
    <div class="page-section">
      <div :class="containerClass">

        <div class="row">
          <div class="col-lg-8">

            <page-separator
              :title="$t('Design Resources')" />

            <div class="posts-cards mb-24pt">
              <blog-post-card
                v-for="item in blogPosts2"
                :key="item.id"
                :item="item"
                wrap="xl" />
            </div>

            <pager />

          </div>
          <div class="col-lg-4">
            <blog-recommended />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Popular Topics": "Subiecte Populare",
      "Design Resources": "Resurse de Design"
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   BlogPostFeaturedCard,
  //   BlogPostCard,
  //   BlogRecommended,
  //   HomeHero,
  //   PageSeparator,
  //   Pager
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import BlogPostFeaturedCard from '~/components/Blog/PostFeaturedCard.vue'
  import BlogPostCard from '~/components/Blog/PostCard.vue'
  import BlogRecommended from '~/components/Blog/Recommended.vue'
  import HomeHero from '~/components/Home/HomeHero.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import Pager from '~/components/Ui/Pager.vue'

  import {FmvBox} from 'fmv-layout'

  export default {
    components: {
      BlogPostFeaturedCard,
      BlogPostCard,
      BlogRecommended,
      HomeHero,
      PageSeparator,
      Pager,
      FmvBox
    },
    extends: Page,
    props: {
      localPageHeader: {
        type: Boolean
      },
      headerImage: {
        type: String,
        default: () => '/images/1280_work-station-straight-on-view.jpg'
      },
      headerContentComponentProps: {
        type: Object,
        default() {
          return {
            title: this.$t('Get Inspired'),
            subtitle: this.$t('Free resources and inspiration on hot topics with articles, talks, podcasts, developer resources and more.'),
            cta: false,
            link: false,
            containerClass: this.containerClass
          }
        }
      },
      blogPosts1: {
        type: Array,
        default: () => []
      },
      blogPosts2: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
