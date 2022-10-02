/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Form advanced Js File
*/


// Chocies Select plugin
document.addEventListener('DOMContentLoaded', function () {
	var genericExamples = document.querySelectorAll('[data-trigger]');
	for (i = 0; i < genericExamples.length; ++i) {
	  var element = genericExamples[i];
	  new Choices(element, {
		placeholderValue: 'This is a placeholder set in the config',
		searchPlaceholderValue: 'This is a search placeholder',
	  });
	}
  
	// singleNoSearch
	var singleNoSearch = new Choices('#choices-single-no-search', {
	  searchEnabled: false,
	  removeItemButton: true,
	  choices: [
		{ value: 'One', label: 'Label One' },
		{ value: 'Two', label: 'Label Two', disabled: true },
		{ value: 'Three', label: 'Label Three' },
	  ],
	}).setChoices(
	  [
		{ value: 'Four', label: 'Label Four', disabled: true },
		{ value: 'Five', label: 'Label Five' },
		{ value: 'Six', label: 'Label Six', selected: true },
	  ],
	  'value',
	  'label',
	  false
	);
  
	// singleNoSorting
	var singleNoSorting = new Choices('#choices-single-no-sorting', {
	  shouldSort: false,
	});
  
  
	// multiple Remove CancelButton
	var multipleCancelButton = new Choices(
	  '#choices-multiple-remove-button',
	  {
		removeItemButton: true,
	  }
	);
  
	//choices-multiple-groups
	var multipleDefault = new Choices(
	  document.getElementById('choices-multiple-groups')
	);
  
	// text inputs example
	var textRemove = new Choices(
	  document.getElementById('choices-text-remove-button'),
	  {
		delimiter: ',',
		editItems: true,
		maxItemCount: 5,
		removeItemButton: true,
	  }
	);
  
	// choices-text-unique-values
	var textUniqueVals = new Choices('#choices-text-unique-values', {
	  paste: false,
	  duplicateItemsAllowed: false,
	  editItems: true,
	});
  
	//choices-text-disabled
	var textDisabled = new Choices('#choices-text-disabled', {
	  addItems: false,
	  removeItems: false,
	}).disable();
});


// colorpicker

// classic color picker
var classicPickr = Pickr.create({
    el: '.classic-colorpicker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: '#4a4fea',
    swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
    ],

    components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
        hex: true,
        rgba: true,
        hsva: true,
        input: true,
        clear: true,
        save: true
      }
    }
});


// monolith color picker
var monolithPickr = Pickr.create({
  el: '.monolith-colorpicker',
  theme: 'monolith',
  default: '#27bbe8',
  swatches: [
    'rgba(244, 67, 54, 1)',
    'rgba(233, 30, 99, 0.95)',
    'rgba(156, 39, 176, 0.9)',
    'rgba(103, 58, 183, 0.85)',
    'rgba(63, 81, 181, 0.8)',
    'rgba(33, 150, 243, 0.75)',
    'rgba(3, 169, 244, 0.7)'
  ],
  defaultRepresentation: 'HEXA',
  components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: false,
      rgba: false,
      hsva: false,
      input: true,
      clear: true,
      save: true
    }
  }
});

// nano color picker
var nanoPickr = Pickr.create({
  el: '.nano-colorpicker',
  theme: 'nano',
  default: '#f7cc53',
  swatches: [
    'rgba(244, 67, 54, 1)',
    'rgba(233, 30, 99, 0.95)',
    'rgba(156, 39, 176, 0.9)',
    'rgba(103, 58, 183, 0.85)',
    'rgba(63, 81, 181, 0.8)',
    'rgba(33, 150, 243, 0.75)',
    'rgba(3, 169, 244, 0.7)'
  ],
  defaultRepresentation: 'HEXA',
  components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: false,
      rgba: false,
      hsva: false,
      input: true,
      clear: true,
      save: true
    }
  }
});

// flatpickr

flatpickr('#datepicker-basic');

flatpickr('#datepicker-datetime', {
  enableTime: true,
  dateFormat: "m-d-Y H:i"
});

flatpickr('#datepicker-humanfd', {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
});

flatpickr('#datepicker-minmax', {
  minDate: "today",
  maxDate: new Date().fp_incr(14) // 14 days from now
});

flatpickr('#datepicker-disable', {
  onReady: function () {
    this.jumpToDate("2025-01")
  },
  disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9)],
  dateFormat: "Y-m-d",
});

flatpickr('#datepicker-multiple', {
  mode: "multiple",
  dateFormat: "Y-m-d"
});

flatpickr('#datepicker-range', {
  mode: "range"
});

flatpickr('#datepicker-timepicker', {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
});

flatpickr('#datepicker-inline', {
  inline: true
});