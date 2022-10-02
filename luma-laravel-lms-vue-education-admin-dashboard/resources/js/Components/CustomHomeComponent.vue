<template>
  <div>
    <!-- 
      copy and customize the template 
      from resources/vendor/vue-luma/pages/home.vue
    -->

    <fmv-box
      v-if="localPageHeader"
      effects="parallax-background blend-background"
      box-image="/images/photodune-4161018-group-of-students-m.jpg"
      class="mdk-box--bg-primary bg-dark mb-0">
      
      <student-home-hero
        v-bind="headerContentComponentProps" />
    </fmv-box>

    <div class="bg-white border-bottom-2 py-16pt">
      <div :class="containerClass">
        <div class="row align-items-center">
          <div class="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
            <div class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
              <md-icon class="text-white">subscriptions</md-icon>
            </div>
            <div class="flex">
              <div class="card-title mb-4pt">8,000+ Courses</div>
              <p class="card-subtitle text-black-70">Explore a wide range of skills.</p>
            </div>
          </div>
          <div class="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
            <div class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
              <md-icon class="material-icons text-white">verified_user</md-icon>
            </div>
            <div class="flex">
              <div class="card-title mb-4pt">By Industry Experts</div>
              <p class="card-subtitle text-black-70">Professional development from the best people.</p>
            </div>
          </div>
          <div class="d-flex col-md align-items-center">
            <div class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
              <md-icon class="material-icons text-white">update</md-icon>
            </div>
            <div class="flex">
              <div class="card-title mb-4pt">Unlimited Access</div>
              <p class="card-subtitle text-black-70">Unlock Library and learn any topic with one subscription.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">

        <page-separator>From the blog</page-separator>

        <div class="row card-group-row">
          <div 
            v-for="item in blogPosts1"
            :key="item.id"
            class="col-md-6 col-lg-4 card-group-row__col">
            <post-featured-card
              :item="item"
              class="card-group-row__card" />
          </div>
        </div>

        <div class="posts-cards">
          <post-card
            v-for="item in blogPosts2"
            :key="item.id"
            :item="item"
            class="mb-0" />
        </div>

      </div>
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <page-separator>Learning Paths</page-separator>

        <div class="row card-group-row">
          <div
            v-for="item in paths1"
            :key="item.id" 
            class="col-sm-4 card-group-row__col">
            <account-path-card
              class="card-group-row__card" 
              :title="item.title" 
              :image="item.image"
              :open="item.open"
              :favorite="item.favorite"
              :account="false"
              :cta="false" />
          </div>
        </div>

        <div class="row card-group-row mb-lg-8pt">
          <div
            v-for="item in paths2"
            :key="item.id" 
            class="col-sm-4 card-group-row__col">
            <account-path-card
              class="card-group-row__card mb-lg-0" 
              :title="item.title" 
              :image="item.image"
              :open="item.open"
              :favorite="item.favorite"
              :account="false"
              :cta="false" />
          </div>
        </div>

      </div>  
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <page-separator>Design Courses</page-separator>

        <div class="row card-group-row">
          <div 
            v-for="item in courses"
            :key="item.id"
            class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
            <course-card
              :account="false"
              :title="item.title" 
              :image="item.image"
              :avatar="(item.avatar || item.image)"
              :free="item.free"
              :favorite="item.favorite"
              :position="item.position"
              :reveals="false"
              card-class="card-group-row__card mb-16pt"
              class="d-flex w-100" />
          </div>
        </div>
      </div>
    </div>

    <page-feedback
      :container-class="containerClass" />

  </div>
</template>

<script>
  import {
    LumaHomePage
  } from 'vue-luma'

  import { 
    BlogPostFeaturedCard as PostFeaturedCard,
    BlogPostCard as PostCard,
    AccountPathCard,
    CourseCard,
    FeedbackPageSectionCarousel as PageFeedback,
    HomeHero as StudentHomeHero,
    MdIcon,
    PageSeparator
  } from 'vue-luma'

  import {FmvBox} from 'fmv-layout'

  export default {
    extends: LumaHomePage,
    components: {
      PostFeaturedCard,
      PostCard,
      AccountPathCard,
      CourseCard,
      PageFeedback,
      StudentHomeHero,
      FmvBox,
      MdIcon,
      PageSeparator
    }
  }
</script>
