export default {
  methods: {
    sortByClass(key) {
      return {
        asc: !this.sortDesc && this.sortBy === key,
        desc: this.sortDesc && this.sortBy === key
      }
    },
    sortByKey(event, field, isFoot = false) {
      this.$refs.table.$emit('head-clicked', field.key, field, event, isFoot);
    }
  }
}
