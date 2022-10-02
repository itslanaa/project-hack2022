<script>
  import AppIcons from './AppIcons'
  import AppMaterialIcon from './AppMaterialIcon'

  export default {
    extends: AppIcons,
    components: {
      AppMaterialIcon
    },
    data() {
      return {
        iconComponent: 'app-material-icon'
      }
    },
    methods: {
      getIcons() {
        $.ajax({
          url: 'assets/fonts/material-icons/MaterialIcons-Regular.ijmap',
          method: 'GET',
          dataType: 'json',
          success: (data) => {
            Object.keys(data.icons).forEach(key => {
              let icon = data.icons[key]
              icon.code = key
              const slug = this.slugify(icon.name)
              icon.name = slug
              icon.className = slug
              this.icons.push(icon)
            })
          }
        })
      },
      slugify(name) {
        return name.toString().toLowerCase()
          .replace(/\s+/g, '_')
          .replace(/[^\w\_]+/g, '')
          .replace(/\_\_+/g, '_')
          .replace(/^_+/, '')
          .replace(/_+$/, '')
      }
    }
  }
</script>