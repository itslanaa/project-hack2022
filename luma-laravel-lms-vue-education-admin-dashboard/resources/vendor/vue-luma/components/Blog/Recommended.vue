<template>
  <div>
    <page-separator
      v-if="heading"
      :title="$t(heading)" />

    <div 
      v-for="(item, index) in items"
      :key="item.id"
      :class="[ index === items.length - 1 ? `mb-${margin}` : 'mb-8pt' ]"
      class="d-flex align-items-center">
      
      <fmv-avatar 
        :to="routeTo(routes.blogPost)" 
        size="lg"
        :src="item.image"
        :alt="item.image"
        class="overlay overlay--primary mr-12pt">
        <template v-slot:after-img>
          <span class="overlay__content rounded" />
        </template>
      </fmv-avatar>

      <div class="flex">
        <b-link
          :to="routeTo(routes.blogPost)" 
          class="card-title mb-4pt"
          v-text="item.title" />

        <div class="d-flex align-items-center">
          <small class="text-muted mr-8pt"><b-link v-text="item.tag" /></small>
          <small class="text-muted mr-8pt">{{ item.views }} Views</small>
          <small class="text-muted">{{ item.date }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "ro": {
      "Recommended": "Recomandate"
    }
  }
</i18n>

<script>
  import {FmvAvatar} from 'fmv-avatar'
  // import {PageSeparator} from 'vue-luma'
  import routeTo from '~/mixins/route-to'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      FmvAvatar,
      PageSeparator
    },
    mixins: [routeTo],
    props: {
      margin: {
        type: String,
        default: () => '16pt'
      },
      heading: {
        type: String,
        default: () => 'Recommended'
      }
    },
    data() {
      return {
        items: [{
          image: "/images/paths/invision_200x168.png",
          title: "Design Systems Essentials",
          views: 35,
          tag: "inVision",
          date: "11 Nov, 2018"
        }, {
          title: "Semantic Logo Design",
          image: "/images/paths/photoshop_200x168.png",
          views: 78,
          tag: "Photoshop",
          date: "10 Nov, 2018"
        }, {
          title: "Merge Duplicates Inconsistent Symbols & Styles",
          image: "/images/paths/sketch_200x168.png",
          views: 78,
          tag: "Sketch",
          date: "09 Nov, 2018"
        }]
      }
    }
  }
</script>