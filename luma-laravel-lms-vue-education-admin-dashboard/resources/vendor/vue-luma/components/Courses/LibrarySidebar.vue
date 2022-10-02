<template>
  <fmv-sidebar
    type="light"
    variant="white"
    class="py-16pt"
    wheel-propagation>

    <div class="sidebar-heading">{{ $t('Category') }}</div>
    <ul class="sidebar-menu">
      <li class="sidebar-menu-item active">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">code</span>
          <span class="sidebar-menu-text">Web Development</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">brush</span>
          <span class="sidebar-menu-text">Design</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">settings_cell</span>
          <span class="sidebar-menu-text">iOS &amp; Swift</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">android</span>
          <span class="sidebar-menu-text">Android</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">business_center</span>
          <span class="sidebar-menu-text">Business</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">crop_original</span>
          <span class="sidebar-menu-text">Photography</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">payment</span>
          <span class="sidebar-menu-text">Marketing</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">store</span>
          <span class="sidebar-menu-text">eCommerce</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">redeem</span>
          <span class="sidebar-menu-text">Health &amp; Fitness</span>
        </a>
      </li>
      <li class="sidebar-menu-item">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">music_note</span>
          <span class="sidebar-menu-text">Music</span>
        </a>
      </li>
    </ul>

    <div class="sidebar-heading">Platform</div>
    <div class="sidebar-block">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck01" checked="">
          <label class="custom-control-label" for="filtersCheck01">All</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck02">
          <label class="custom-control-label" for="filtersCheck02">Archive</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck06">
          <label class="custom-control-label" for="filtersCheck06">Unity</label>
        </div>
      </div>

      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck03">
          <label class="custom-control-label" for="filtersCheck03">Web</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck04">
          <label class="custom-control-label" for="filtersCheck04">iOS &amp; Swift</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck05">
          <label class="custom-control-label" for="filtersCheck05">Android</label>
        </div>
      </div>
    </div>

    <div class="sidebar-heading">Subscription</div>
    <div class="sidebar-block">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck07" checked="">
          <label class="custom-control-label" for="filtersCheck07">All</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck08">
          <label class="custom-control-label" for="filtersCheck08">Free</label>
        </div>
      </div>

      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck09">
          <label class="custom-control-label" for="filtersCheck09">Beginner</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck10">
          <label class="custom-control-label" for="filtersCheck10">Advanced</label>
        </div>
      </div>
    </div>

    <div class="sidebar-heading">Content type</div>
    <div class="sidebar-block">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck11" checked="">
          <label class="custom-control-label" for="filtersCheck11">All</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck12">
          <label class="custom-control-label" for="filtersCheck12">Episode</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck13">
          <label class="custom-control-label" for="filtersCheck13">Video</label>
        </div>
      </div>

      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck14">
          <label class="custom-control-label" for="filtersCheck14">Article</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck15">
          <label class="custom-control-label" for="filtersCheck15">Book</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck16">
          <label class="custom-control-label" for="filtersCheck16">Screencast</label>
        </div>
      </div>
    </div>
  </fmv-sidebar>
</template>

<script>
  import {FmvSidebar} from 'fmv-layout'

  export default {
    components: {
      FmvSidebar
    }
  }
</script>