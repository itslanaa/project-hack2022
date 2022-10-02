<script>
import AppIcons from '~/node_modules/vue-icons-demo-app/src/AppIcons'
import AppMaterialIcon from '~/node_modules/vue-icons-demo-app/src/AppMaterialIcon'

export default {
  components: {
    AppMaterialIcon
  },
  extends: AppIcons,
  data() {
    return {
      iconComponent: 'app-material-icon'
    }
  },
  methods: {
    getIcons() {
      $.ajax({
        url: '/data/material-icons/MaterialIcons-Regular.ijmap',
        method: 'GET',
        dataType: 'json',
        success: data => {
          Object.keys(data.icons).forEach(key => {
            let icon = data.icons[key]
            icon.code = key
            const slug = this.slugify(icon.name)
            icon.name = slug
            icon.className = slug
            this.icons.push(icon)
          })
          this.$emit('done')
        }
      })
    },
    slugify(name) {
      return name
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^\w\_]+/g, '')
        .replace(/\_\_+/g, '_')
        .replace(/^_+/, '')
        .replace(/_+$/, '')
    }
  }
}
</script>
