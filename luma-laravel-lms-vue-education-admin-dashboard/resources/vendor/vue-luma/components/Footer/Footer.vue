<template>
  <div :class="footerClass">
    <div
      :class="containerClass" 
      class="page-section d-flex flex-column">
      <slot v-bind="slotProps">
      
        <p
          v-if="localFooterLogo"
          :class="{ 
            'text-white-70': isDark,
            'text-70' : !isDark
          }" 
          class="brand mb-24pt">
          <img 
            class="brand-icon" 
            :src="localFooterLogo" 
            width="30" 
            :alt="footerBrand"> 
          {{ footerBrand }}
        </p>

        <p
          v-if="localDescriptionText || $slots['description-text']"
          :class="{ 
            'text-white-50': isDark,
            'text-50' : !isDark
          }"  
          class="measure-lead-max small mr-8pt">
          <slot name="description-text">
            {{ localDescriptionText }}
          </slot>
        </p>

        <slot name="links">
          <p class="mb-8pt d-flex">
            <a 
              href=""
              :class="{ 
                'text-white-70': isDark,
                'text-70' : !isDark
              }"  
              class="text-underline mr-8pt small">Terms</a>
            <a 
              href="" 
              :class="{ 
                'text-white-70': isDark,
                'text-70' : !isDark
              }" 
              class="text-underline small">Privacy policy</a>
          </p>
        </slot>

        <p
          v-if="localCopyrightText || $slots['copyright-text']"
          :class="{ 
            'text-white-50': isDark,
            'text-50' : !isDark
          }"  
          class="small mt-n1 mb-0">
          <slot name="copyright-text">
            <span v-html="localCopyrightText" />
          </slot>
        </p>

      </slot>
    </div>
  </div>
</template>

<script>
  import logo from '~/static/images/logo/black-70@2x.png'

  export default {
    props: {
      isDark: {
        type: Boolean
      },
      footerClass: {
        type: [String, Array, Object],
        default: () => 'border-top-2'
      },
      footerBrand: {
        type: String,
        default: () => 'Brand'
      },
      footerLogo: {
        type: [String, Boolean],
        default: () => null
      },
      containerClass: {
        type: String,
        default: () => null
      },
      copyrightYear: {
        type: [String, Number, Boolean],
        default: () => null
      },
      copyrightText: {
        type: [String, Boolean],
        default: () => null
      },
      descriptionText: {
        type: [String, Boolean],
        default: () => null
      }
    },
    computed: {
      localFooterLogo() {
        return this.footerLogo === null
          ? logo
          : this.footerLogo
      },
      localCopyrightYear() {
        return this.copyrightYear === null
          ? (new Date).getFullYear()
          : this.copyrightYear
      },
      localCopyrightText() {
        return this.copyrightText === null
          ? `Copyright ${this.localCopyrightYear} &copy; All rights reserved.`
          : this.copyrightText
      },
      localDescriptionText() {
        return this.descriptionText === null
          ? `${this.footerBrand} is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.`
          : this.descriptionText
      },
      slotProps() {
        return {
          footerBrand: this.footerBrand,
          footerLogo: this.localFooterLogo,
          copyrightText: this.localCopyrightText,
          copyrightYear: this.localCopyrightYear,
          descriptionText: this.localDescriptionText
        }
      }
    }
  }
</script>