<template>
  <div>
    <div class="page-section bg-primary">
      <div :class="containerClass">
        
        <!-- <div class="hero text-center pb-40pt">
          <h1 
            class="text-white"
            v-text="$t('Pricing')" />
          <p 
            class="text-white-50 lead measure-hero-lead mx-auto"
            v-text="$t('pricing_description')" />
        </div> -->
        
        <div class="row card-group-row mb-16pt mb-lg-40pt">
          <div class="col-lg-4 col-sm-6 card-group-row__col">
            <pricing-card
              title="Student"
              description="Access to over 1.000 high quality courses. For individuals."
              price="9"
              color="accent"
              ribbon="Start"
              icon="person"
              class="mb-lg-0 border-0"
              raised />
          </div>
          <div class="col-lg-4 col-sm-6 card-group-row__col">
            <pricing-card
              title="Team" 
              description="Starts with 3 accounts with more seats available."
              price="19"
              color="secondary"
              action-color="outline-secondary"
              icon="group"
              class="mb-lg-0 border-0" />
          </div>
          <div class="col-lg-4 col-sm-6 card-group-row__col">
            <pricing-card
              title="Enterprise" 
              description="Build customized learning paths with content that aligns to your internal learning goals."
              price="49"
              color="secondary"
              action-color="outline-secondary"
              icon="business_center"
              class="mb-lg-0 border-0" />
          </div>
        </div>

        <page-headline
          title="All plans include"
          white />

        <div class="d-flex justify-content-center">
          <div class="row">
            <div class="col-sm-auto mb-16pt mb-sm-0">
              <ul class="list-unstyled">
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">24h Access to PRO Courses</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">Join 2000+ Community Members</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">Access to New Courses Weekly</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">Support from our Tutors</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">Assets Included per Course</span>
                </li>
              </ul>
            </div>
            <div class="col-sm-auto">
              <ul class="list-unstyled">
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">24h Access to PRO Courses</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">Join 2000+ Community Members</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">Access to New Courses Weekly</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">Support from our Tutors</span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="text-white-20 material-icons mr-8pt">check</span>
                  <span class="text-white-70">Assets Included per Course</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">

        <page-headline
          title="Feedback"
          description="What other students turned professionals have to say about us after learning with us and reaching their goals."
          center />

        <feedback-carousel />

      </div>
    </div>

    <div class="border-top-1 page-section">
      <div :class="containerClass">

        <page-headline
          title="FAQ"
          description="Frequently Asked Questions"
          center />

        <div class="row card-group-row">
          <div class="col-md-6 card-group-row__col">
            <faq-card
              title="Do you offer a free trial?"
              description="We offer everyone a 7 day free trial! You can take advantage of it by visiting our sign-up page! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ab!"
              class="card-group-row__card" />
          </div>
          <div class="col-md-6 card-group-row__col">
            <faq-card
              title="Can I gift a subscription to someone?"
              description="Yes! We do offer certificates. Please email us for more information. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ad!"
              class="card-group-row__card" />
          </div>
          <div class="col-md-6 card-group-row__col">
            <faq-card
              title="I have a great idea for an application or website, but need help on where to begin. Can you guys help me?"
              description="We advise posting personal requests in our Community Forum Lorem ipsum dolor sit amet."
              class="card-group-row__card" />
          </div>
          <div class="col-md-6 card-group-row__col">
            <faq-card
              title="I found a bug. Where can I report that?"
              description="In the unlikely situation you stumble across a bug, go ahead and shoot us an email. Lorem ipsum dolor sit amet"
              class="card-group-row__card" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   PricingCard,
  //   FaqCard,
  //   FeedbackCarousel,
  //   PageHeadline
  // } from 'vue-luma'
  
  import Page from '~/components/Page.vue'
  import PricingCard from '~/components/Pricing/PricingCard.vue'
  import FaqCard from '~/components/Faq/FaqCard.vue'
  import FeedbackCarousel from '~/components/Feedback/FeedbackCarousel.vue'
  import PageHeadline from '~/components/Ui/PageHeadline.vue'

  export default {
    components: {
      PricingCard,
      FaqCard,
      FeedbackCarousel,
      PageHeadline
    },
    extends: Page
  }
</script>
