<template>
  <div>
    <form class="search-form search-form--light input-group-lg mb-3">
      <input v-model="search" type="text" class="form-control" placeholder="Search icons">
      <button class="btn" type="button" ><i class="material-icons">search</i></button>
    </form>

    <div class="card">
      <div class="card-header card-header-tabs-basic nav">
        <a 
          href="#" 
          :class="{ 'active': tab.active === true }"
          role="tab" 
          aria-selected="true"
          @click.stop.prevent="setActive(tab)"
          v-for="tab in tabs" v-html="tab.label"></a>
      </div>
      <div class="card-body">
        <keep-alive>
          <component :is="libraryComponent" :search="search"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import AppMaterialIcons from './AppMaterialIcons.vue'
  import AppFontAwesomeIcons from './AppFontAwesomeIcons.vue'

  export default {
    data() {
      return {
        tabs: [{
          label: 'Material Icons',
          id: 'app-material-icons',
          active: true
        },{
          label: 'Font Awesome',
          id: 'app-font-awesome-icons',
          active: false
        }],
        libraryComponent: null,
        search: ''
      }
    },
    mounted() {
      this.libraryComponent = this.activeTab.id
    },
    computed: {
      activeTab() {
        return this.tabs.find(tab => tab.active)
      }
    },
    components: {
      AppMaterialIcons,
      AppFontAwesomeIcons
    },
    methods: {
      setActive(tab) {
        this.tabs.forEach(t => {
          if (t.id !== tab.id) { 
            t.active = false
          }
        })
        tab.active = true
        this.libraryComponent = tab.id
      }
    }
  }
</script>