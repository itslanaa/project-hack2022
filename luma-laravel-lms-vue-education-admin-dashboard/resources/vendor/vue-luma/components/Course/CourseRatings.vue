<template>
  <div>
    <page-separator 
      :title="$t('Reviews')" />
    <div class="row mb-32pt">
      <div class="col-md-3 mb-32pt mb-md-0">
        <div 
          class="display-1"
          v-text="ratingAvg()" />
        <b-form-rating
          class="b-rating-inline" 
          :value="ratingAvg()" 
          variant="rating"
          size="lg"
          precision="2"
          readonly
          inline
          no-border />
        <p 
          class="text-muted mb-0"
          v-text="$t('ratings_count', { ratings: items.length })" />
      </div>
      <div class="col-md-9">
        
        <div
          v-for="rating in [5,4,3,2,1]"
          :key="`rating-${rating}`"
          v-b-tooltip.hover.top="{ title: `${percentForRating(rating)}% rated ${rating}/5` }" 
          class="row align-items-center mb-8pt">
          <div class="col-md col-sm-6">
            <b-progress 
              :value="countForRating(rating)" 
              :max="items.length"
              variant="secondary"
              height="8px" />
          </div>
          <div class="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
            <b-form-rating
              class="b-rating-inline" 
              :value="rating" 
              variant="rating"
              size="sm"
              show-value
              show-value-max
              readonly
              inline
              no-border />
          </div>
        </div>

      </div>
    </div>

    <div 
      v-for="(item, index) in reviews"
      :key="`rating-desc-${item.id}`"
      :class="[ index < reviews.length - 1 ? 'border-bottom mb-16pt' : null ]"
      class="pb-16pt row">
      <div class="col-md-3 mb-16pt mb-md-0">
        <div class="d-flex">
          <fmv-avatar 
            :to="routeTo(routes.studentProfile)"
            size="sm" 
            class="mr-12pt"
            :title="item.avatar"
            circle />
          <div class="flex"> 
            <p 
              class="small text-muted m-0"
              v-text="item.date" />
            <b-link 
              :to="routeTo(routes.studentProfile)" 
              class="card-title"
              v-text="item.name" />
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="mb-8pt">
          <b-form-rating
            class="b-rating-inline" 
            :value="item.rating" 
            variant="rating"
            size="sm"
            show-value
            show-value-max
            readonly
            inline
            no-border />
        </div>
        <p 
          class="text-70 mb-0"
          v-text="item.description" />
      </div>
    </div>

  </div>
</template>

<i18n>
  {
    "en": {
      "ratings_count": "{ratings} ratings"
    },
    "ro": {
      "ratings_count": "{ratings} evaluări",
      "Reviews": "Evaluări"
    }
  }
</i18n>

<script>
  import {FmvAvatar} from 'fmv-avatar'
  import routeTo from '~/mixins/route-to'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      FmvAvatar,
      PageSeparator
    },
    mixins: [routeTo],
    data() {
      return {
        items: [{
          id: 1,
          avatar: 'LB',
          date: '1 day ago',
          name: 'Laza Bogdan',
          description: 'A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.',
          rating: 5
        }, {
          id: 2,
          avatar: 'LB',
          date: '1 days ago',
          name: 'Laza Bogdan',
          rating: 5
        }, {
          id: 3,
          avatar: 'UK',
          date: '1 day ago',
          name: 'Umberto Klass',
          rating: 5
        }, {
          id: 4,
          avatar: 'UK',
          date: '2 days ago',
          name: 'Umberto Klass',
          description: "This course is absolutely amazing, Bryan goes* out of his way to really expl*ain things clearly I couldn't be happier, so glad I made this purchase!",
          rating: 4
        }, {
          id: 5,
          avatar: 'UK',
          date: '2 days ago',
          name: 'Umberto Klass',
          rating: 4
        }, {
          id: 6,
          avatar: 'AD',
          date: '3 days ago',
          name: 'Adrian Demian',
          description: "This course is absolutely amazing, Bryan goes* out of his way to really expl*ain things clearly I couldn't be happier, so glad I made this purchase!",
          rating: 3
        }]
      }
    },
    computed: {
      reviews() {
        return this.items.filter(item => !!item.description)
      }
    },
    methods: {
      ratingAvg() {
        const total = this.items.reduce((acc, c) => acc + c.rating, 0)
        const avg = total / this.items.length

        // 2 decimals
        return Math.round((avg + Number.EPSILON) * 100) / 100
      },
      countForRating(rating) {
        return this.items.filter(item => item.rating === rating).length
      },
      percentForRating(rating) {
        return Math.round(
          this.countForRating(rating) / this.items.length * 100
        )
      }
    }
  }
</script>