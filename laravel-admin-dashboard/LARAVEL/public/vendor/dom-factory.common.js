'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var watchObject = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.unwatch=e.watch=void 0;var o=n(4),i=r(o),c=n(3),a=r(c),f=(e.watch=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];var r=e[1];_(r)?g.apply(void 0,e):f(r)?b.apply(void 0,e):w.apply(void 0,e);},e.unwatch=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];var r=e[1];_(r)||void 0===r?m.apply(void 0,e):f(r)?O.apply(void 0,e):x.apply(void 0,e);},function(t){return "[object Array]"==={}.toString.call(t)}),u=function(t){return "[object Object]"==={}.toString.call(t)},_=function(t){return "[object Function]"==={}.toString.call(t)},s=function(t,e,n){(0, a["default"])(t,e,{enumerable:!1,configurable:!0,writable:!1,value:n});},l=function(t,e,n,r){(0, a["default"])(t,e,{get:n,set:function(t){r.call(this,t);},enumerable:!0,configurable:!0});},p=function(t,e,n,r,o){var i=void 0,c=t.__watchers__[e];(i=t.__watchers__.__watchall__)&&(c=c?c.concat(i):i);for(var a=c?c.length:0,f=0;a>f;f++)c[f].call(t,n,r,e,o);},v=["pop","push","reverse","shift","sort","unshift","splice"],h=function(t,e,n,r){s(t,n,function(){for(var o=0,i=void 0,c=void 0,a=arguments.length,f=Array(a),u=0;a>u;u++)f[u]=arguments[u];if("splice"===n){var _=f[0],s=_+f[1];i=t.slice(_,s),c=[];for(var l=2;l<f.length;l++)c[l-2]=f[l];o=_;}else c="push"===n||"unshift"===n?f.length>0?f:void 0:f.length>0?f[0]:void 0;var p=e.apply(t,f);return "pop"===n?(i=p,o=t.length):"push"===n?o=t.length-1:"shift"===n?i=p:"unshift"!==n&&void 0===c&&(c=p),r.call(t,o,n,c,i),p});},d=function(t,e){if(_(e)&&t&&!(t instanceof String)&&f(t))for(var n=v.length;n>0;n--){var r=v[n-1];h(t,t[r],r,e);}},y=function(t,e,n,r){var o=!1,c=f(t);void 0===t.__watchers__&&(s(t,"__watchers__",{}),c&&d(t,function(n,o,i,c){if(p(t,n,i,c,o),0!==r&&i&&(u(i)||f(i))){var a=void 0,_=t.__watchers__[e];(a=t.__watchers__.__watchall__)&&(_=_?_.concat(a):a);for(var s=_?_.length:0,l=0;s>l;l++)if("splice"!==o)g(i,_[l],void 0===r?r:r-1);else for(var v=0;v<i.length;v++)g(i[v],_[l],void 0===r?r:r-1);}})),void 0===t.__proxy__&&s(t,"__proxy__",{}),void 0===t.__watchers__[e]&&(t.__watchers__[e]=[],c||(o=!0));for(var _=0;_<t.__watchers__[e].length;_++)if(t.__watchers__[e][_]===n)return;t.__watchers__[e].push(n),o&&!function(){var n=(0, i["default"])(t,e);void 0!==n?!function(){var r={enumerable:n.enumerable,configurable:n.configurable},o=["get","set"];o.forEach(function(e){void 0!==n[e]&&(r[e]=function(){for(var r=arguments.length,o=Array(r),i=0;r>i;i++)o[i]=arguments[i];return n[e].apply(t,o)});});var i=["writable","value"];i.forEach(function(t){void 0!==n[t]&&(r[t]=n[t]);}),(0, a["default"])(t.__proxy__,e,r);}():t.__proxy__[e]=t[e];var o=function(){return t.__proxy__[e]},c=function(n){var o=t.__proxy__[e];if(0!==r&&t[e]&&(u(t[e])||f(t[e]))&&!t[e].__watchers__)for(var i=0;i<t.__watchers__[e].length;i++)g(t[e],t.__watchers__[e][i],void 0===r?r:r-1);o!==n&&(t.__proxy__[e]=n,p(t,e,n,o,"set"));};l(t,e,o,c);}();},g=function P(t,e,n){if("string"!=typeof t&&(t instanceof Object||f(t)))if(f(t)){if(y(t,"__watchall__",e,n),void 0===n||n>0)for(var r=0;r<t.length;r++)P(t[r],e,n);}else {var o=[];for(var i in t)({}).hasOwnProperty.call(t,i)&&o.push(i);b(t,o,e,n);}},w=function(t,e,n,r){"string"!=typeof t&&(t instanceof Object||f(t))&&(_(t[e])||(null!==t[e]&&(void 0===r||r>0)&&g(t[e],n,void 0!==r?r-1:r),y(t,e,n,r)));},b=function(t,e,n,r){if("string"!=typeof t&&(t instanceof Object||f(t)))for(var o=0;o<e.length;o++){var i=e[o];w(t,i,n,r);}},x=function(t,e,n){if(void 0!==t.__watchers__&&void 0!==t.__watchers__[e])if(void 0===n)delete t.__watchers__[e];else for(var r=0;r<t.__watchers__[e].length;r++)t.__watchers__[e][r]===n&&t.__watchers__[e].splice(r,1);},O=function(t,e,n){for(var r in e)e.hasOwnProperty(r)&&x(t,e[r],n);},j=function S(t,e){var n=[];for(var r in t)t.hasOwnProperty(r)&&(t[r]instanceof Object&&S(t[r],e),n.push(r));O(t,n,e);},m=function(t,e){if(!(t instanceof String||!t instanceof Object&&!f(t)))if(f(t)){for(var n=["__watchall__"],r=0;r<t.length;r++)n.push(r);O(t,n,e);}else j(t,e);};},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n);},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach};},function(t,e,n){t.exports={"default":n(5),__esModule:!0};},function(t,e,n){t.exports={"default":n(6),__esModule:!0};},function(t,e,n){var r=n(2);t.exports=function(t,e,n){return r.setDesc(t,e,n)};},function(t,e,n){var r=n(2);n(17),t.exports=function(t,e){return r.getDesc(t,e)};},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)};},function(t,e,n){var r=n(7);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}};},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},function(t,e,n){var r=n(13),o=n(1),i=n(9),c="prototype",a=function(t,e,n){var f,u,_,s=t&a.F,l=t&a.G,p=t&a.S,v=t&a.P,h=t&a.B,d=t&a.W,y=l?o:o[e]||(o[e]={}),g=l?r:p?r[e]:(r[e]||{})[c];l&&(n=e);for(f in n)u=!s&&g&&f in g,u&&f in y||(_=u?g[f]:n[f],y[f]=l&&"function"!=typeof g[f]?n[f]:h&&u?i(_,r):d&&g[f]==_?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[c]=t[c],e}(_):v&&"function"==typeof _?i(Function.call,_):_,v&&((y[c]||(y[c]={}))[f]=_));};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a;},function(t,e){t.exports=function(t){try{return !!t()}catch(e){return !0}};},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},function(t,e,n){var r=n(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==r(t)?t.split(""):Object(t)};},function(t,e,n){var r=n(11),o=n(1),i=n(12);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1);}),"Object",c);};},function(t,e,n){var r=n(14),o=n(10);t.exports=function(t){return r(o(t))};},function(t,e,n){var r=n(16);n(15)("getOwnPropertyDescriptor",function(t){return function(e,n){return t(r(e),n)}});}])});
});

const isElement = (el) => (el instanceof HTMLElement);

const isArray = (obj) => ({}.toString.call(obj) === '[object Array]');

const isFunction = (fn) => typeof fn === 'function';

const toKebabCase = (str) => str.replace(/([A-Z])/g, ($1) => `-${ $1 }`.toLowerCase());

/**
 * Assign descriptors
 * @param  {Object}    target
 * @param  {...Object} sources
 * @return {Object}
 */
const assign = (target, ...sources) => {
  sources.forEach(source => {
    if (!source) {
      return
    }
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors
    }, {});
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target
};

/**
 * Set the default property options
 * @param  {Object} opts
 * @return {Object}
 */
const propOptions = (opts = {}) => {
  opts = assign({}, opts);
  opts.readOnly = opts.readOnly || false;
  opts.reflectToAttribute = opts.reflectToAttribute || false;
  opts.value = opts.value;
  opts.type = opts.type;
  return opts
};

/**
 * Create property
 * @param  {String} prop The property name
 * @param  {Object} opts The property options
 * @param  {Object} src  The source object
 */
const createProp = (prop, opts = {}, src) => {
  opts = propOptions(opts);
  const property = {
    enumerable: true,
    configurable: true,
    writable: !opts.readOnly,
    value: isFunction(opts.value) ? opts.value.call(src) : opts.value
  };
  Object.defineProperty(src, prop, property);
};

/**
 * Set the initial value for a property
 * @param  {String} prop  The property name
 * @param  {Object} opts  The property options
 * @param  {Object} src   The source object
 */
const propValue = (prop, opts = {}, src, element) => {
  opts = propOptions(opts);
  if ((!opts.value && opts.value !== 0) || !!src[prop]) {
    return
  }

  if (opts.type === Boolean) {
    src[prop] = opts.reflectToAttribute && element.dataset[prop] === 'false' 
      ? false 
      : opts.value;
  }
  else if (isFunction(opts.value)) {
    src[prop] = opts.value.call(src);
  }
  else {
    src[prop] = opts.value;
  }
};

/**
 * Keep a property value in sync with a HTMLElement attribute
 * @param  {String} prop The property name
 * @param  {Object} opts The property options
 * @param  {Object} src  The source object
 */
const reflectToAttribute = (prop, opts = {}, src) => {
  opts = propOptions(opts);
  if (!opts.reflectToAttribute) {
    return
  }
  const propKebab = toKebabCase(`data-${prop}`);
  const descriptor = Object.getOwnPropertyDescriptor(src, prop);
  const property = {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    get: function () {
      if (opts.type === Boolean) {
        return this.element.dataset[prop] === ''
      }
      if (opts.type === Number) {
        return Number(this.element.dataset[prop])
      }
      return this.element.dataset[prop]
    },
    set: function (value) {
      const removable = !value && value !== 0;
      if (opts.type === Boolean || removable) {
        return this.element[!removable ? 'setAttribute' : 'removeAttribute'](propKebab, opts.type === Boolean ? '' : value)
      }
      this.element.dataset[prop] = value;
    }
  };
  Object.defineProperty(src, prop, property);
};

/**
 * Create properties
 * @param  {Object} src The source object
 */
const makeProperties = (src, element) => {
  if (typeof src.properties !== 'object') {
    return
  }
  for (let prop in src.properties) {
    if (src.properties.hasOwnProperty(prop)) {
      let opts = src.properties[prop];

      createProp(prop, opts, src);
      reflectToAttribute(prop, opts, src);
      propValue(prop, opts, src, element);
    }
  }
};

const dotObject = (str, obj) => {
  return str.split('.').reduce((o, i) => o[i], obj)
};

const dotObjectPropParent = (str, obj) => {
  let dots = str.split('.');
  let prop = dots.pop();
  let parent = dotObject(dots.join('.'), obj);
  return {
    parent,
    prop
  }
};

/**
 * Get the configuration for observers
 * @param  {Object} src The source object
 * @return {Array<Object(fn, args)>}
 */
const observers = (src) => {
  if (!isArray(src.observers)) {
    return []
  }
  return src.observers.map(sig => {
    let [, fn, args] = sig.match(/([a-zA-Z-_]+)\(([^)]*)\)/);
    args = args.split(',').map(a => a.trim()).filter(a => a.length);
    return {
      fn,
      args
    }
  })
  .filter(({ fn }) => isFunction(src[fn]))
};

/**
 * Create observers
 * @param  {Object} src The source object
 */
const makeObservers = (src) => {
  observers(src).forEach(({ fn, args }) => {
    src[fn] = src[fn].bind(src);
    args.forEach(arg => {
      if (arg.indexOf('.') !== -1) {
        const { prop, parent } = dotObjectPropParent(arg, src);
        watchObject.watch(parent, prop, src[fn]);
      }
      else {
        watchObject.watch(src, arg, src[fn]);
      }
    });
  });
};

/**
 * Get the configuration for DOM event listeners
 * @param  {Object} src The source object
 * @return {Array<Object(element, fn, events)>}
 */
const listeners = (src) => {
  if (!isArray(src.listeners)) {
    return []
  }
  return src.listeners.map(sig => {
    let match = sig.match(/(.*\.)?([a-zA-Z-_]+)\(([^)]*)\)/);
    let [, element, fn, events] = match;
    events = events.split(',').map(a => a.trim()).filter(a => a.length);
    element = element ? element.substr(0, element.length - 1) : 'element';
    return {
      element,
      fn,
      events
    }
  })
  .filter(({ element, fn }) => {
    return isFunction(src[fn]) && (
      element === 'document' ||
      element === 'window' ||
      isElement(src[element]) || 
      (src[element] && isElement(src[element]['element']) ))
  })
};

/**
 * Create DOM event listeners
 * @param  {Object} src The source object
 */
const makeListeners = (src) => {
  listeners(src).forEach(({ element, fn, events }) => {
    src[fn] = src[fn].bind(src);
    if (element === 'document') {
      element = src.element.ownerDocument;
    }
    else if (element === 'window') {
      element = window;
    }
    else if (isElement(src[element])) {
      element = src[element];
    }
    else if (isElement(src[element]['element'])) {
      element = src[element]['element'];
    }
    if (element) {
      events.forEach(e => element.addEventListener(e, src[fn]));
    }
  });
};

/**
 * Get mixins
 * @param  {Object} src The source object
 * @return {Array<Object>}
 */
const mixins = (src) => {
  if (!isArray(src.mixins)) {
    return []
  }
  return src.mixins.filter(mixin => typeof mixin === 'object')
};

/**
 * Merge mixins
 * @param  {Object} src The source object
 */
const makeMixins = (src) => {
  const args = mixins(src);
  args.unshift({});
  return assign.apply(null, args)
};

const factory = (factory, element) => {
  if (!factory || 
    typeof factory !== 'object' || 
    !isElement(element)) {
    console.error('[dom-factory] Invalid factory.', factory, element);
    return
  }

  factory.element = element;

  let component = {

    /**
     * Set a property on the component
     * @param {String}  prop  The property name
     * @param {?}       value The property value
     */
    $set (prop, value) {
      if (!prop || value === undefined || this.properties === undefined || !this.properties.hasOwnProperty(prop)) {
        return
      }
      const opts = propOptions(this.properties[prop]);
      const descriptor = Object.getOwnPropertyDescriptor(this, prop);

      if (opts.readOnly && descriptor.writable !== undefined) {
        let property = {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: false,
          value
        };
        Object.defineProperty(this, prop, property);
        return
      }

      this[prop] = value;
    },

    /**
     * Initialize component
     */
    init () {
      makeObservers(this);
      makeListeners(this);
      if (isFunction(factory.init)) {
        factory.init.call(this);
      }
    },

    /**
     * Destroy component
     */
    destroy () {
      observers(factory).forEach(({ fn, args }) => {
        args.forEach(arg => {
          if (arg.indexOf('.') !== -1) {
            const { prop, parent } = dotObjectPropParent(arg, this);
            watchObject.unwatch(parent, prop, this[fn]);
          }
          else {
            watchObject.unwatch(this, arg, this[fn]);
          }
        });
      });

      listeners(factory).forEach(({ element, fn, events }) => {
        if (element === 'document') {
          element = this.element.ownerDocument;
        }
        else if (element === 'window') {
          element = window;
        }
        else if (isElement(this[element])) {
          element = this[element];
        }
        else if (isElement(this[element]['element'])) {
          element = this[element]['element'];
        }
        if (element) {
          events.forEach(e => element.removeEventListener(e, this[fn]));
        }
      });

      if (isFunction(factory.destroy)) {
        factory.destroy.call(this);
      }
    },

    /**
     * Fire a DOM Event on the HTMLElement
     * @param  {String} eventName The event name
     */
    fire (eventName) {
      let event;
      let bubbles = false;
      if ('CustomEvent' in window && typeof window.CustomEvent === 'object') {
        try {
          event = new CustomEvent(eventName, {
            bubbles,
            cancelable: false
          }); 
        } 
        catch (e) {
          event = new this.CustomEvent_(eventName, {
            bubbles,
            cancelable: false
          });
        }
      }
      else {
        event = document.createEvent('Event');
        event.initEvent(eventName, bubbles, true);
      }
      this.element.dispatchEvent(event);
    },

    CustomEvent_ (event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt
    }
  };

  makeProperties(factory, element);

  component = assign(
    {},
    makeMixins(factory),
    factory,
    component
  );

  component.init();

  return component
};

const toCamelCase = (str) => str.replace(/(\-[a-z])/g, ($1) => $1.toUpperCase().replace('-', ''));

// The property name used to store the component config on a component reference
const CONFIG_PROPERTY = '__domFactoryConfig';

/**
 * Component handler
 * @type {Object}
 */
const handler = {

  autoInit () {
    ['DOMContentLoaded', 'load'].forEach(function (e) {
      window.addEventListener(e, () => handler.upgradeAll());
    });
  },

  // Registered components
  _registered: [],

  // Created component references
  _created: [],

  /**
   * Register a component.
   * @param  {String} id      A unique component ID.
   * @param  {Object} factory The component definition object.
   */
  register (id, factory) {
    const callbacks = [];
    const cssClass = `js-${ id }`;

    if (!this.findRegistered(id)) {
      this._registered.push({
        id,
        cssClass,
        callbacks,
        factory
      });
    }
  },

  /**
   * Register a callback to be called on component upgrade.
   * @param  {String}   id       The component ID.
   * @param  {Function} callback The callback function.
   */
  registerUpgradedCallback (id, callback) {
    const config = this.findRegistered(id);
    if (config) {
      config.callbacks.push(callback);
    }
  },

  /**
   * Get a registered component.
   * @param  {String} id The component ID.
   * @return {Object}    A configuration object.
   */
  findRegistered (id) {
    return this._registered.find(config => config.id === id)
  },

  /**
   * Get a created component reference for an element.
   * @param  {HTMLElement} element
   * @return {Object}
   */
  findCreated (element) {
    return this._created.filter(ref => ref.element === element)
  },

  /**
   * Upgrade an element with a single component type or all of the registered components.
   * @param  {HTMLElement}  element The element to upgrade.
   * @param  {String}       id      The component ID (optional).
   */
  upgradeElement (element, id) {
    if (id === undefined) {
      this._registered.forEach(config => {
        if (element.classList.contains(config.cssClass)) {
          this.upgradeElement(element, config.id);
        }
      });
      return
    }

    let upgraded = element.getAttribute('data-domfactory-upgraded');
    const config = this.findRegistered(id);

    if (config && (upgraded === null || upgraded.indexOf(id) === -1)) {
      upgraded = upgraded === null ? [] : upgraded.split(',');
      upgraded.push(id);

      let component;
      try {
        component = factory(config.factory(element), element);
      }
      catch (e) {
        console.error(id, e.message, e.stack);
      }

      if (component) {
        element.setAttribute('data-domfactory-upgraded', upgraded.join(','));

        const instanceConfig = Object.assign({}, config);
        delete instanceConfig.factory;
        component[CONFIG_PROPERTY] = instanceConfig;

        this._created.push(component);

        Object.defineProperty(element, toCamelCase(id), {
          configurable: true,
          writable: false,
          value: component
        });

        config.callbacks.forEach(cb => cb(element));
        component.fire('domfactory-component-upgraded');
      }
    }
    else if (config) {
      let component = element[toCamelCase(id)];
      if (typeof component._reset === 'function') {
        component._reset();
      }
    }
  },

  /**
   * Upgrade all elements matching a registered component ID.
   * @param  {String} id       The component ID.
   */
  upgrade (id) {
    if (id === undefined) {
      this.upgradeAll();
    }
    else {
      const config = this.findRegistered(id);
      if (config) {
        const elements = [...document.querySelectorAll('.' + config.cssClass)];
        elements.forEach(element => this.upgradeElement(element, id)); 
      }
    }
  },

  /**
   * Upgrade all elements matching the registered components.
   */
  upgradeAll () {
    this._registered.forEach(config => this.upgrade(config.id));
  },

  /**
   * Downgrade a component reference.
   * @param  {Object} component
   */
  downgradeComponent (component) {
    component.destroy();
    const index = this._created.indexOf(component);
    this._created.splice(index, 1);
    
    const upgrades = component.element.getAttribute('data-domfactory-upgraded').split(',');
    const upgradeIndex = upgrades.indexOf(component[CONFIG_PROPERTY].id);
    upgrades.splice(upgradeIndex, 1);
    component.element.setAttribute('data-domfactory-upgraded', upgrades.join(','));
    component.fire('domfactory-component-downgraded');
  },

  /**
   * Downgrade an element.
   * @param  {HTMLElement} element
   */
  downgradeElement (element) {
    this.findCreated(element).forEach(this.downgradeComponent, this);
  },

  /**
   * Downgrade all the created components.
   */
  downgradeAll () {
    this._created.forEach(this.downgradeComponent, this);
  },

  /**
   * Downgrade a single element, a NodeList or an array of elements
   * @param  {Node|Array<Node>|NodeList} node
   */
  downgrade (node) {
    if (node instanceof Array || node instanceof NodeList) {
      const nodes = node instanceof NodeList ? [...node] : node;
      nodes.forEach(element => this.downgradeElement(element));
    }
    else if (node instanceof Node) {
      this.downgradeElement(node);
    }
  }
};

/**
 * Transform style
 * @param  {String} value       The transform value
 * @param  {HTMLElement} element  The element to apply transforms to
 */
const transform = (value, element) => {
  const properties = [
    'transform',
    'WebkitTransform',
    'msTransform',
    'MozTransform',
    'OTransform'
  ];
  properties.map(p => element.style[p] = value);
};

const util = {
  assign,
  isArray,
  isElement,
  isFunction,
  toKebabCase,
  transform
};

exports.factory = factory;
exports.handler = handler;
exports.util = util;
