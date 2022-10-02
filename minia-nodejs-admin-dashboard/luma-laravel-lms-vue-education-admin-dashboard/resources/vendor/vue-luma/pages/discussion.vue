<template>
  <div>
    <div class="page-section">
      <div :class="containerClass">

        <div class="row">
          <div class="col-md-8">
            
            <h1 
              class="h2 measure-lead-max mb-2"
              v-text="'Can someone help me with the basic setup of a Vue.js and Vuex project using Nuxt?'" />

            <p class="text-muted d-flex align-items-center mb-lg-32pt">
              <b-link 
                :to="routeTo(routes.discussions)" 
                class="mr-3"
                v-text="$t('Back to Community')" />

              <a class="mr-2 text-50">Mute</a>
              <a class="mr-2 text-50">Report</a>
              <a 
                class="text-50" 
                style="text-decoration: underline;">Edit</a>
            </p>

            <div class="card card-body">
              <div class="d-flex">
                <fmv-avatar
                  size="sm"
                  title="JD"
                  circle
                  status="online"
                  class="mr-12pt" />
                <div class="flex">
                  <p class="d-flex align-items-center mb-2">
                    <a class="text-body mr-2"><strong>Jenell D. Matney</strong></a>
                    <small class="text-muted">2 min ago</small>
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae quisquam iste maiores libero, corrupti totam saepe itaque quidem perspiciatis?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa commodi consequuntur! Optio labore corporis quo a quia, incidunt unde soluta velit ad, eius exercitationem sequi ab laborum! Nostrum voluptate earum sit aperiam quaerat unde, vel excepturi quisquam nihil reprehenderit in minus laudantium eligendi odio iusto nemo, aspernatur, optio soluta!</p>
                  <div class="d-flex align-items-center">
                    <a class="text-50 d-flex align-items-center text-decoration-0">
                      <i 
                        class="material-icons mr-1" 
                        style="font-size: inherit;">favorite_border</i> 30</a>
                    <a class="text-50 d-flex align-items-center text-decoration-0 ml-3">
                      <i 
                        class="material-icons mr-1" 
                        style="font-size: inherit;">thumb_up</i> 130</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex mb-4">
              <fmv-avatar
                size="sm"
                title="LB"
                circle 
                class="mr-12pt" />
              
              <div class="flex">
                <b-form-group
                  :label="$t('Your reply')"
                  label-for="comment">
                  <b-textarea
                    id="comment" 
                    rows="3" 
                    :placeholder="$t('reply_to', { to: 'Matney' })" />
                </b-form-group>
                <b-btn 
                  variant="outline-secondary"
                  v-text="$t('Post comment')" />
              </div>
            </div>
            <div class="pt-3">
              <h4>2 Comments</h4>
              <div class="d-flex mb-3">
                <fmv-avatar
                  size="sm"
                  title="JF"
                  circle 
                  class="mr-12pt" />

                <div class="flex">
                  <a class="text-body"><strong>Joseph S. Ferland</strong></a><br>
                  <p class="mt-1 text-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero neque magnam modi corrupti in aliquid odit eligendi pariatur! Ad consequatur illo voluptates, dignissimos tenetur odit magni excepturi! Nesciunt, fuga, vel.</p>
                  <div class="d-flex align-items-center">
                    <small class="text-50 mr-2">27 min ago</small>
                    <a class="text-50"><small>Liked</small></a>
                  </div>
                </div>
              </div>

              <div class="ml-sm-32pt mt-3 card p-3 mb-0">
                <div class="d-flex">
                  <fmv-avatar
                    size="sm"
                    title="FM"
                    circle 
                    class="mr-12pt" />
                  <div class="flex">
                    <div class="d-flex align-items-center">
                      <a class="text-body"><strong>FrontendMatter</strong></a>
                      <small class="ml-auto text-muted">just now</small>
                    </div>
                    <p class="mt-1 text-70">Hi Joseph,<br> Thank you for purchasing our course! <br><br>Please have a look at the charts library documentation <a href="#">here</a> and follow the instructions.</p>

                    <div class="d-flex align-items-center">
                      <a class="text-50 d-flex align-items-center text-decoration-0">
                        <i 
                          class="material-icons mr-1" 
                          style="font-size: inherit;">favorite_border</i> 3</a>
                      <a class="text-50 d-flex align-items-center text-decoration-0 ml-3">
                        <i 
                          class="material-icons mr-1" 
                          style="font-size: inherit;">thumb_up</i> 13</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">

            <page-separator
              :title="$t('Top Contributors')" />
            <p 
              class="text-70 mb-24pt"
              v-text="$t('People most active in our community.')" />

            <div class="mb-4">
              <div
                v-for="item in streak"
                :key="item.id"
                class="d-flex align-items-center mb-2">
                <fmv-avatar
                  :src="item.avatar"
                  :alt="item.name"
                  size="xs"
                  class="mr-8pt"
                  circle />
                <a class="flex mr-2 text-body"><strong>{{ item.name }}</strong></a>
                <span class="text-70 mr-2">{{ item.articles }}</span>
                <i class="text-muted material-icons font-size-16pt">forum</i>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<i18n locale="en">
  {
    "en": {
      "reply_to": "Type here to reply to {to} ..."
    },
    "ro": {
      "reply_to": "Scrie aici pentru a raspunde lui {to} ...",
      "Back to Community": "Inapoi la Comunitate",
      "Post comment": "Posteaza comentariu",
      "Top Contributors": "Top Contribuitori",
      "People most active in our community.": "Cei mai activi din comunitatea noastra."
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   PageSeparator
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'
  import {FmvAvatar} from 'fmv-avatar'

  export default {
    components: {
      FmvAvatar,
      PageSeparator
    },
    extends: Page,
    props: {
      streak: {
        type: Array,
        default: () => [{
          avatar: '/images/people/50/guy-1.jpg',
          name: 'Luci Bryant',
          articles: '105'
        }, {
          avatar: '/images/people/50/guy-2.jpg',
          name: 'Magnus Goldsmith',
          articles: '93'
        }, {
          avatar: '/images/people/50/woman-1.jpg',
          name: 'Katelyn Rankin',
          articles: '55'
        }, {
          avatar: "/images/people/256/256_rsz_nicolas-horn-689011-unsplash.jpg",
          name: "Jenell D. Matney",
          articles: '32'
        }, {
          avatar: "/images/people/256/256_rsz_sharina-mae-agellon-377466-unsplash.jpg",
          name: "Sherri J. Cardenas", 
          articles: '21'
        }, {
          avatar: "/images/people/256/256_rsz_karl-s-973833-unsplash.jpg",
          name: "Joseph S. Ferland", 
          articles: '16'
        }]
      } 
    },
  }
</script>
