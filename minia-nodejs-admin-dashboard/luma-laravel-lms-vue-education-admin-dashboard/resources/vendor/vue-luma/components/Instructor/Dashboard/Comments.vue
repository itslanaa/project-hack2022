<template>
  <card
    :title="$t('Comments')"
    :subtitle="$t('Latest comments')"
    header-aside>

    <template slot="aside">
      <b-btn-group>
        <b-btn
          size="sm" 
          variant="outline-secondary">
          <md-icon>keyboard_arrow_left</md-icon>
        </b-btn>
        <b-btn
          size="sm" 
          variant="outline-secondary">
          <md-icon>keyboard_arrow_right</md-icon>
        </b-btn>
      </b-btn-group>
    </template>

    <b-media
      v-for="item in items"
      :key="item.id"
      :class="commentClasses(item)">
      <fmv-avatar 
        slot="aside"
        :src="item.avatar"
        alt="Guy"
        size="sm"
        circle />
      <div class="d-flex align-items-center">
        <b-link 
          :to="routeTo(routes.studentProfile)" 
          class="text-body"><strong v-text="item.name" /></b-link>
        <small 
          class="ml-auto text-muted" 
          v-text="item.date" /><br>
      </div>
      <span
        v-if="item.course"
        class="text-muted">
        on 
        <b-link 
          :to="routeTo(routes.instructorEditCourse)"
          class="text-black-50"
          style="text-decoration: underline;"
          v-text="item.course" />
      </span>
      <p 
        class="mt-1 mb-0 text-black-70" 
        v-html="item.message" />
    </b-media>

    <b-form slot="footer">
      <b-input-group class="input-group-merge">
        <b-form-input
          :placeholder="$t('Quick Reply')"
          class="form-control-appended"
          required />
        <template slot="append">
          <b-input-group-text class="pr-2">
            <b-btn variant="flush"><md-icon>tag_faces</md-icon></b-btn>
          </b-input-group-text>
          <b-input-group-text class="pl-0">
            <div 
              class="custom-file custom-file-naked d-flex" 
              style="width: 24px; overflow: hidden;">
              <b-form-file
                class="custom-file-input"
                plain />
              <label 
                class="custom-file-label"
                style="color: inherit;">
                <md-icon>attach_file</md-icon>
              </label>
            </div>
          </b-input-group-text>
          <b-input-group-text class="pl-0">
            <b-btn 
              type="submit" 
              variant="flush"><md-icon>send</md-icon></b-btn>
          </b-input-group-text>
        </template>
      </b-input-group>
    </b-form>

  </card>
</template>

<script>
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'
  import Card from '~/components/Ui/Card.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      MdIcon,
      Card,
      FmvAvatar
    },
    mixins: [routeTo],
    data() {
      return {
        items: [
          {
            id: 1,
            name: 'Laza Bogdan',
            avatar: '/images/people/110/guy-9.jpg',
            date: this.$t('diff_for_humans', { when: '27 min' }),
            course: 'Data Visualization With Chart.js',
            message: 'How can I load Charts on a page?'
          },
          {
            id: 2,
            reply_to: 1,
            name: 'FrontendMatter',
            avatar: '/images/people/110/guy-6.jpg',
            date: this.$t('just now'),
            message: `Hi Bogdan,<br> Thank you for purchasing our course! <br><br>Please have a look at the charts library documentation <a href="#">here</a> and follow the instructions.`
          }
        ]
      }
    },
    methods: {
      commentClasses(comment) {
        if (comment.reply_to) {
          return 'ml-sm-32pt mt-3 border rounded p-3 bg-light'
        }
      }
    }
  }
</script>
