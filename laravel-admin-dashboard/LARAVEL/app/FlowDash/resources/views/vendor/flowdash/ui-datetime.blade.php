@extends("flowdash::layouts.{$layout}", [
  'title' => 'Time & Date',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Time & Date'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">
  <h4>Flatpickr</h4>
  <p>A simple yet powerful datepicker powered by Flatpickr. Please read the <a target="_blank" href="https://flatpickr.js.org/">official plugin documentation</a> for a full list of options.</p>
  <hr>
  <div class="row mb-4">
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Date Picker</h4>
        </div>
        <div class="card-body">
          <label class="text-label" for="flatpickrSample01">Date</label>
          <input id="flatpickrSample01" type="text" class="form-control" placeholder="Flatpickr example" data-toggle="flatpickr" value="today">
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Range Picker</h4>
        </div>
        <div class="card-body">
          <label class="text-label" for="flatpickrSample02">Range</label>
          <input id="flatpickrSample02" type="text" class="form-control" placeholder="Flatpickr range example" data-toggle="flatpickr" data-flatpickr-mode="range" value="2018-10-07 to 2018-10-15">
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Anchor Range Picker</h4>
        </div>
        <div class="card-header card-header-large bg-white d-flex align-items-center">
          <div class="flatpickr-wrapper flex">
            <div
              id="recent_orders_date"
              data-toggle="flatpickr" 
              data-flatpickr-wrap="true"
              data-flatpickr-mode="range" 
              data-flatpickr-alt-format="d/m/Y" 
              data-flatpickr-date-format="d/m/Y">
              <h4 class="card-header__title">Recent Orders</h4>
              <a href="javascript:void(0)" class="link-date" data-toggle>13/03/2018 to 20/03/2018</a>
              <input class="flatpickr-hidden-input" type="hidden" value="13/03/2018 to 20/03/2018" data-input>  
            </div>
          </div>
          <i class="material-icons icon-muted">help_outline</i>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Date Time Picker</h4>
        </div>
        <div class="card-body">
          <label class="text-label" for="flatpickrSample04">Date Time</label>
          <input 
            id="flatpickrSample04" 
            type="text" 
            class="form-control" 
            placeholder="Flatpickr date time example" 
            data-toggle="flatpickr" 
            data-flatpickr-enable-time="true"
            data-flatpickr-alt-format="F j, Y at H:i" 
            data-flatpickr-date-format="Y-m-d H:i" 
            value="2018-10-07 15:35">
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Time Picker</h4>
        </div>
        <div class="card-body">
          <label class="text-label" for="flatpickrSample05">Time Picker</label>
          <input 
            id="flatpickrSample05" 
            type="text" 
            class="form-control" 
            placeholder="Flatpickr time example" 
            data-toggle="flatpickr" 
            data-flatpickr-enable-time="true"
            data-flatpickr-no-calendar="true"
            data-flatpickr-alt-format="H:i" 
            data-flatpickr-date-format="H:i" 
            value="15:35">
        </div>
      </div>
    </div>
  </div>

  <h4>DateRangePicker</h4>
  <p>The DateRangePicker can be attached to any webpage element to pop up two calendars for selecting dates, times, or predefined ranges like "Last 30 Days". Please read the <a target="_blank" href="http://www.daterangepicker.com">official plugin documentation</a> for a full list of options.</p>
  <hr>
  <div class="row">
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Date Picker</h4>
        </div>
        <div class="card-body">
          <label class="text-label" for="dateRangePickerSample01">Date</label>
          <input 
            id="dateRangePickerSample01" 
            type="text" 
            class="form-control" 
            placeholder="Date example" 
            data-toggle="daterangepicker"
            data-daterangepicker-drops="up"
            data-daterangepicker-start-date="2018/11/06"
            data-daterangepicker-single-date-picker="true">
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Range Picker</h4>
        </div>
        <div class="card-body">
          <label class="text-label" for="dateRangePickerSample02">Range</label>
          <input 
            id="dateRangePickerSample02" 
            type="text" 
            class="form-control" 
            placeholder="Range example" 
            data-toggle="daterangepicker"
            data-daterangepicker-drops="up"
            data-daterangepicker-start-date="2018/11/06"
            data-daterangepicker-end-date="2018/12/06">
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Date Time Picker</h4>
        </div>
        <div class="card-body">
          <label class="text-label" for="dateRangePickerSample03">Date Time</label>
          <input 
            id="dateRangePickerSample03" 
            type="text" 
            class="form-control" 
            placeholder="Date Time example" 
            data-toggle="daterangepicker"
            data-daterangepicker-drops="up"
            data-daterangepicker-opens="left"
            data-daterangepicker-time-picker="true"
            data-daterangepicker-locale-format="DD/MM Ha"
            data-daterangepicker-start-date="06/11 7am"
            data-daterangepicker-end-date="06/12 8pm">
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Predefined Range</h4>
        </div>
        <div class="card-body">
          <label class="text-label" for="dateRangePickerSample04">Predefined Range</label>
          <input 
            id="dateRangePickerSample04" 
            type="text" 
            class="form-control" 
            placeholder="Predefined example" 
            data-toggle="daterangepicker"
            data-daterangepicker-ranges="true"
            data-daterangepicker-drops="up">
        </div>
      </div>
    </div>
  </div>
</div>
@endsection

@section('head')
<!-- Flatpickr -->
<link type="text/css" href="{{ mix('css/vendor/flatpickr.css') }}" rel="stylesheet">
<link type="text/css" href="{{ mix('css/vendor/flatpickr-airbnb.css') }}" rel="stylesheet">

<!-- DateRangePicker -->
<link type="text/css" href="{{ mix('vendor/daterangepicker.css') }}" rel="stylesheet">
@endsection

@section('footer')
<!-- Moment.js -->
<script src="{{ mix('vendor/moment.min.js') }}"></script>

<!-- Flatpickr -->
<script src="{{ mix('vendor/flatpickr/flatpickr.min.js') }}" defer></script>
<script src="{{ mix('js/flatpickr.js') }}" defer></script>

<!-- DateRangePicker -->
<script src="{{ mix('vendor/daterangepicker.js') }}" defer></script>
<script src="{{ mix('js/daterangepicker.js') }}" defer></script>
@endsection