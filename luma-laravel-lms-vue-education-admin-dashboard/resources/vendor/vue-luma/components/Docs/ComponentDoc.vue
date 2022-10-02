<template>
  <div
    v-if="component"
    id="reference"
    class="bd-content">

    <div 
      ref="components"
      v-show="false" />

    <h2><code>{{ tag }}</code></h2>

    <div v-if="aliases && aliases.length > 0">
      <h4 :id="`comp-ref-${tagName}-aliases`">Component aliases</h4>
      <p><code>{{ tag }}</code> can also be used via the following aliases:</p>
      <ul>
        <li 
          v-for="alias in aliases" 
          :key="alias"><code>&lt;{{ kebabCase(alias) }}&gt;</code></li>
      </ul>
    </div>

    <div v-if="props_items && props_items.length > 0">
      <h4 :id="`comp-ref-${tagName}-props`">Properties</h4>
      <b-table
        :items="props_items"
        :fields="props_fields"
        small
        head-variant="default"
        striped>
        <template
          slot="default"
          slot-scope="field">
          <code v-if="field.value">{{ field.value }}</code>
        </template>
      </b-table>
    </div>

    <div v-if="slots && slots.length > 0">
      <h4 :id="`comp-ref-${tagName}-slots`">Slots</h4>
      <b-table
        :items="slots"
        :fields="slots_fields"
        small
        head-variant="default"
        striped/>
    </div>

    <div v-if="events && events.length > 0">
      <h4 :id="`comp-ref-${tagName}-events`">Events</h4>
      <b-table
        :items="events"
        :fields="events_fields"
        small
        head-variant="default"
        striped>
        <template
          slot="args"
          slot-scope="field">
          <div
            v-for="arg in field.value"
            :key="`event-${field.item.event}-${arg.arg ? arg.arg : 'none'}`">
            <code v-if="arg.arg">{{ arg.arg }}</code>
            <span v-html="arg.description"/>
          </div>
        </template>
      </b-table>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import kebabCase from 'lodash.kebabcase'

export default {
  props: {
    component: {
      type: String,
      required: true
    },
    componentOptions: {
      type: [Object, Function],
      default: () => null
    },
    slots: {
      type: Array,
      default: () => []
    },
    events: {
      type: Array,
      default: () => []
    },
    aliases: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      localComponentOptions: null
    }
  },
  computed: {
    props_fields() {
      if (! this.localComponentOptions) {
        return []
      }

      let props = this.localComponentOptions.$options 
        ? this.localComponentOptions.$options.props
        : this.localComponentOptions.props

      const hasRequired =
        props.length > 0 && props.filter(p => p.required).length > 0

      const fields = [
        { key: 'prop', label: 'Property' },
        { key: 'type', label: 'Type' },
        { key: 'default', label: 'Default Value' }
      ]

      // Add the required column if there are required field(s)
      if (hasRequired) {
        fields.push({ key: 'required', label: 'Required' })
      }

      return fields
    },
    events_fields() {
      return [
        { key: 'event', label: 'Event' },
        { key: 'args', label: 'Arguments' },
        { key: 'description', label: 'Description' }
      ]
    },
    slots_fields() {
      return [
        { key: 'name', label: 'Slot' },
        { key: 'description', label: 'Description' }
      ]
    },
    // slots() {
    //   if (! this.localComponentOptions) {
    //     return []
    //   }

    //   try {
    //     return this.localComponentOptions.$slots
    //   } catch(e) {}
    // },
    props_items() {
      if (! this.localComponentOptions) {
        return []
      }

      let props = this.localComponentOptions.$options 
        ? this.localComponentOptions.$options.props
        : this.localComponentOptions.props

      return Object.keys(props).map(prop => {
        const p = props[prop]

        // Describe type
        let type = p.type || Object
        let typeClass = String
        if (Array.isArray(type)) {
          typeClass = type[0]
          type = type.map(t => t.name).join(' or ')
        } else {
          typeClass = type
          type = type.name
        }

        // Describe value
        let default_val = p.default

        if (default_val instanceof Function && !Array.isArray(default_val)) {
          default_val = default_val()
        }

        if (typeof default_val !== 'string') {
          default_val = JSON.stringify(default_val)
        }

        if (
          default_val === '' ||
          default_val === null ||
          default_val === 'null'
        ) {
          default_val = ''
        }

        default_val = (default_val || '').replace(/"/g, "'")

        // Requied prop?
        const required = p.required ? 'Yes' : 'No'

        return {
          prop: kebabCase(prop),
          type,
          required,
          default: default_val
        }
      })
    },
    tagName() {
      return kebabCase(this.component)
    },
    tag() {
      return '<' + this.tagName + '>'
    }
  },
  mounted() {
    this.$nextTick(this.setLocalComponentOptions)
  },
  methods: {
    kebabCase,
    setLocalComponentOptions() {
      let options = null
      if (this.componentOptions) {
        // console.log(this.componentOptions)
        try {
          Vue.component(this.component, this.componentOptions)

          // const Component = Vue.extend(this.componentOptions)
          // const instance = new Component().$mount()

          // console.log(instance)
          // this.$nextTick(() => {
          //   console.log(instance.$slots)
          // })
          
          // options = instance
        } catch(e) {}
      }
      const component = Vue.options.components[this.component]
      options = component && component.options ? component.options : options

      this.$set(this, 'localComponentOptions', options)
    }
  }
}
</script>
