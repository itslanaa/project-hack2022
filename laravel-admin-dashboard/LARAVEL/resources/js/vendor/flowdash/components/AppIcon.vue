<style scoped="" lang="scss">
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    max-width: 112px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 .35rem;
  }
</style>

<script>
  export default {
    props: {
      icon: {
        type: Object,
        default() {
          return {
            name: 'timer',
            className: 'timer'
          }
        }
      }
    }
  }
</script>