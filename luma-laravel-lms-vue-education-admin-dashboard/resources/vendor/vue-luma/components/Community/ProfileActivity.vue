<template>
  <div>
    <activity-card
      v-for="item in items"
      :key="item.id"
      :item="item" />

    <b-btn
      block
      variant="light"
      v-text="$t('Load more ...')" />
  </div>
</template>

<i18n>
  {
    "ro": {
      "Load more ...": "Încarcă mai multe ..."
    }
  }
</i18n>

<script>
  // import {ActivityCard} from 'vue-luma'
  import ActivityCard from './ActivityCard.vue'

  export default {
    components: {
      ActivityCard
    },
    data() {
      return {
        items: [{
          avatar: '/images/people/50/guy-2.jpg',
          avatar_title: 'LB',
          name: 'Laza Bogdan',
          date: "3 days ago",
          content: '<p class="measure-lead">Thanks for contributing to the release of LearnPlus - Learning Management Template <a href="">https://www.frontendmatter.com/themes/learnpl...</a> 🔥</p><p><a href="">#themeforest</a> <a href="">#EnvatoMarket</a></p>',
          favorites: 26,
          likes: 123
        }, {
          avatar: '/images/people/50/woman-5.jpg',
          avatar_title: 'LB',
          name: 'Laza Bogdan',
          date: "4 days ago",
          content: '<p class="measure-lead">Checkout our new JVC camera course on <a href="">https://t.co/Wh7jE0yz4h</a> 😉',
          card: {
            image: "/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg",
            title: "Learn How To Operate a JVC Camera",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            link: "frontendmatter.com"
          },
          favorites: 156,
          likes: 351
        }]
      }
    }
  }
</script>