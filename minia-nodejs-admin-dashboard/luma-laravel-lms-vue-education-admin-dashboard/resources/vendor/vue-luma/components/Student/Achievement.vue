<template>
  <b-link 
    class="card border-0 mb-0" 
    to="">
    <img 
      :src="item.image" 
      :alt="item.title" 
      class="card-img" 
      style="max-height: 100%; width: initial;">
    <div 
      class="fullbleed bg-primary" 
      style="opacity: .5;" />
    <span class="card-body d-flex flex-column align-items-center justify-content-center fullbleed">
      <span class="row flex-nowrap">
        <span class="col-auto text-center d-flex flex-column justify-content-center align-items-center">
          <span class="h5 text-white text-uppercase font-weight-normal m-0 d-block">Achievement</span>
          <span class="text-white-60 d-block mb-24pt">{{ item.date }}</span>
        </span>
        <span class="col d-flex flex-column">
          <span class="text-right flex mb-16pt">
            <b-img 
              :src="item.logo" 
              width="64" 
              :alt="item.title" 
              class="rounded" />
          </span>
        </span>
      </span>
      <span class="row flex-nowrap">
        <span class="col-auto text-center d-flex flex-column justify-content-center align-items-center">
          <b-img 
            src="/images/illustration/achievement/128/white.png" 
            width="64" 
            alt="achievement" />
        </span>
        <span class="col d-flex flex-column">
          <span>
            <span class="card-title text-white mb-4pt d-block">{{ item.title }}</span>
            <span class="text-white-60">{{ item.description }}</span>
          </span>
        </span>
      </span>
    </span>
  </b-link>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: null
      }
    }
  }
</script>