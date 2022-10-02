<template>
  <div class="app-settings app-fab--absolute">
    <b-dropdown 
      id="app-settings-dd"
      :popper-opts="popper"
      variant="primary rounded-circle"
      toggle-class="mdc-fab material-icons"
      no-caret
      dropup
      :right="!settings[`layout.rtl`]">

      <template slot="button-content">
        <span class="mdc-fab__icon">
          settings
        </span>
      </template>
      
      <collapse
        v-for="option in options"
        :key="`collapse-${option.id}`"
        :id="option.id"
        :title="option.title">
        
        <b-form-group
          v-for="(group, index) in option.children"
          :key="`group-${option.id}-${index}`"
          :label="group.title"
          :class="{ 'mb-0': index === option.children.length - 1 }">

          <form-image-group
            v-if="group.component === 'form-image-group'"
            :options="group.options"
            v-model="settings[`${option.id}.${group.id}`]"
            :name="group.id" />

          <b-form-radio-group 
            v-if="group.component === 'b-form-radio-group'"
            :id="`group-${option.id}-${index}`"
            v-model="settings[`${option.id}.${group.id}`]"
            :options="group.options" />

          <b-form-select
            v-if="group.component === 'b-form-select'"
            :id="`group-${option.id}-${index}`"
            v-model="settings[`${option.id}.${group.id}`]"
            :options="group.options" />

          <b-form-checkbox
            v-if="group.component === 'b-form-checkbox'"
            :id="`group-${option.id}-${index}`"
            v-model="settings[`${option.id}.${group.id}`]">
            {{ group.title }}
          </b-form-checkbox>

          <b-form-checkbox
            v-if="group.component === 'custom-checkbox-toggle'"
            :id="`group-${option.id}-${index}`"
            v-model="settings[`${option.id}.${group.id}`]"
            class="custom-checkbox-toggle custom-control-inline mr-1">&nbsp;</b-form-checkbox>

          <label 
            v-if="group.component === 'custom-checkbox-toggle'"
            :for="`group-${option.id}-${index}`"
            class="mb-0">
            <span class="form-label m-0">{{ group.title }}</span>
          </label>

        </b-form-group>
      </collapse>

      <slot />

      <pre 
        v-if="debug" 
        v-text="settings" />

    </b-dropdown>
  </div>
</template>

<style lang="scss">
@import 'variables';

@import '@material/fab/mdc-fab';

.app-fab--absolute {
  position: fixed !important;
  bottom: 1rem;
  right: 1rem;
}
@media(min-width: 1024px) {
   .app-fab--absolute {
    bottom: 3rem;
    right: 5rem;
  }
}

#app-settings-dd {
  .dropdown-menu {
    background-color: transparent;
    box-shadow: none;
    z-index: 0;
    padding: 0;
    min-width: 250px;
    border: none;
    margin-bottom: 1rem;
    &::before,
    &::after {
      display: none;
    }
  }
  legend {
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: rgba($dark-gray, .84);
    line-height: .9375rem;
    margin-bottom: .5rem;
    font-weight: bold;
  }
}
</style>

<script>
import { FmAppSettingsBase } from 'fm-app-settings'
import Collapse from './app-settings-collapse'

export default {
  components: {
    Collapse
  },
  extends: FmAppSettingsBase,
  data() {
    return {
      popper: {
        modifiers: {
          applyStyle: {
            enabled: false
          }
        }
      }
    }
  }
}
</script>
