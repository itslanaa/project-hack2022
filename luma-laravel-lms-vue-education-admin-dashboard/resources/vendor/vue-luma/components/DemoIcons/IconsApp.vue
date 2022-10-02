<template>
  <div>
    <form class="search-form mb-3">
      <input
        v-model="search"
        type="text"
        class="form-control form-control-lg"
        placeholder="Search icons">
      <button 
        class="btn"
        type="button"
        role="button">
        <md-icon class="icon-24pt">search</md-icon>
      </button>
    </form>

    <div class="card">
      <ul class="nav nav-tabs nav-tabs-card">
        <li
          v-for="tab in tabs"
          :key="tab.label" 
          class="nav-item">
          <a
            :class="{ 'active': tab.active === true }" 
            href="#" 
            class="nav-link"
            role="tab" 
            aria-selected="true"
            @click.stop.prevent="setActive(tab)"
            v-html="tab.label" />
        </li>
      </ul>
      <div class="card-body">
        <keep-alive>
          <component 
            :is="libraryComponent" 
            :search="search"
            @done="$root.$emit('luma::reset::footer')" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  // import {IconsAppMaterialIcons} from 'vue-luma'
  import IconsAppMaterialIcons from '~/components/DemoIcons/MaterialIcons.vue'
  import IconsAppFontAwesomeIcons from '~/node_modules/vue-icons-demo-app/src/AppFontAwesomeIcons'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      IconsAppMaterialIcons,
      IconsAppFontAwesomeIcons,
      MdIcon
    },
    data() {
      return {
        tabs: [
          {
            label: 'Material Icons',
            id: 'icons-app-material-icons',
            active: true
          },
          {
            label: 'Font Awesome',
            id: 'icons-app-font-awesome-icons',
            active: false
          }
        ],
        libraryComponent: null,
        search: ''
      }
    },
    computed: {
      activeTab() {
        return this.tabs.find(tab => tab.active)
      }
    },
    mounted() {
      this.libraryComponent = this.activeTab.id
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
