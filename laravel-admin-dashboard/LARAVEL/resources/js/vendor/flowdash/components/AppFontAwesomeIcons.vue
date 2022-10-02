<script>
  import AppIcons from './AppIcons'
  import AppFontAwesomeIcon from './AppFontAwesomeIcon'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import * as icons from '@fortawesome/free-solid-svg-icons'
  
  const names = Object.keys(icons).filter(name => name.startsWith('fa') && name !== 'fas')
  names.forEach(key => library.add(icons[key]))

  export default {
    extends: AppIcons,
    components: {
      AppFontAwesomeIcon,
    },
    data() {
      return {
        iconComponent: 'app-font-awesome-icon'
      }
    },
    methods: {
      getIcons() {
        names.forEach(name => {
          let icon = { 
            name: this.getVueIconName(name), 
            className: this.slugify(name)
          }
          this.icons.push(icon)
        })
      },
      getVueIconName(name) {
        return this.slugify(name).replace(/^fa-/, '')
      },
      camelCaseToDash(str) {
        return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
      },
      slugify(name) {
        return this.camelCaseToDash(name)
      }
    }
  }
</script>