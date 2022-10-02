<style lang="scss" scoped>
@import 'variables';

.card-title {
  margin-bottom: 0;
  font-size: .9375rem;
}

.card-header[aria-expanded=true] {
  background-color: $primary;
  .card-title {
    color: white;
  }
}
</style>

<script>
import { FmAppSettingsCollapse as Collapse } from 'fm-app-settings'
export default {
  extends: Collapse
}
</script>
