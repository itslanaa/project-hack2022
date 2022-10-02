@extends("flowdash::layouts.{$layout}", [
  'title' => 'E-commerce',
  'new_button_label' => 'Add Product',
  'breadcrumb' => [[
    'title' => 'Analytics'
  ]]
])

@section('content')
@php
$chat = [[
  'avatar' => 'assets/images/256_rsz_1andy-lee-642320-unsplash.jpg',
  'name' => 'Jenell D. Matney', 
  'date' => '4 days ago'
], [
  'avatar' => 'assets/images/256_daniel-gaffey-1060698-unsplash.jpg',
  'name' => 'Sherri J. Cardenas', 
  'date' => '3 days ago'
], [
  'avatar' => 'assets/images/256_jeremy-banks-798787-unsplash.jpg',
  'name' => 'Joseph S. Ferland', 
  'date' => '2 days ago'
], [
  'avatar' => 'assets/images/256_joao-silas-636453-unsplash.jpg',
  'name' => 'Bryan K. Davis', 
  'date' => '1 day ago'
], [
  'avatar' => 'assets/images/256_luke-porter-261779-unsplash.jpg',
  'name' => 'Elizabeth J. Ohara', 
  'date' => '4 hours ago'
], [
  'avatar' => 'assets/images/256_michael-dam-258165-unsplash.jpg',
  'name' => 'Kaci M. Langston', 
  'date' => 'just now'
]]
@endphp

<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="card-group">
      <div class="card card-body text-center">
        
        <div class="d-flex flex-row align-items-center">
          <div class="card-header__title m-0"> <i class="material-icons icon-muted icon-30pt">assessment</i> Visits</div>
          <div class="text-amount ml-auto">3,642</div>
        </div>
      </div>
      <div class="card card-body text-center">
        <div class="d-flex flex-row align-items-center">
          <div class="card-header__title m-0"><i class="material-icons icon-muted icon-30pt">shopping_basket</i> Purchases</div>
          <div class="text-amount ml-auto">&dollar;12,311</div>
        </div>
      </div>
      <div class="card card-body text-center">
        <div class="d-flex flex-row align-items-center">
          <div class="card-header__title m-0"><i class="material-icons  icon-muted icon-30pt">perm_identity</i> Customers</div>
          <div class="text-amount ml-auto">78</div>
        </div>
      </div>
  </div>
  

  <div class="card card-form d-flex flex-column flex-sm-row">
    <div class="card-form__body card-body-form-group flex">
      <div class="row">
        <div class="col-sm-auto">
          <div class="form-group">
            <label for="filter_name">Name</label>
            <input id="filter_name" type="text" class="form-control" placeholder="Search by name">
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-group">
            <label for="filter_category">Category</label><br>
            <select id="filter_category" class="custom-select" style="width: 200px;">
              <option value="all">All Categories</option>
            </select>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-group">
            <label for="filter_stock">In stock?</label>
            <div class="custom-control custom-checkbox mt-sm-2">
              <input type="checkbox" class="custom-control-input" id="filter_stock" checked="">
              <label class="custom-control-label" for="filter_stock">Yes</label>
            </div>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-group" style="width: 200px;">
            <label for="filter_date">Order date</label>
            <input id="filter_date" type="text" class="form-control" placeholder="Select date ..." value="13/03/2018 to 20/03/2018" data-toggle="flatpickr" data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y" data-flatpickr-date-format="d/m/Y">
          </div>
        </div>
      </div>
    </div>
    <button class="btn bg-white border-left border-top border-top-sm-0 rounded-top-0 rounded-top-sm rounded-left-sm-0"><i class="material-icons text-primary icon-20pt">refresh</i></button>
  </div>

  <div class="row">
      <div class="col-lg-7">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center text-center mb-4">
              <div class="border-right pr-4 mr-4">
                <div class="mb-0">Total Views</div>
                <div class="text-amount">4,412</div>
              </div>
              <div>
                <div class="mb-0">Conv. Ratio</div>
                <div class="text-amount">4%</div>
              </div>
              <div class="ml-auto">
                <a href="#" class="btn btn-primary">Export Data <i class="material-icons">file_download</i></a>
              </div>
            </div>
            <div class="chart" style="height: 295px;">
              <canvas id="viewsChart">
                <span style="font-size: 1rem;"><strong>Views</strong> area chart goes here.</span>
              </canvas>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card">
          <div class="card-header card-header-large bg-white d-flex align-items-center">
            <div class="flatpickr-wrapper flex">
              <div
                id="recent_orders_date"
                data-toggle="flatpickr" 
                data-flatpickr-wrap="true"
                data-flatpickr-static="true" 
                data-flatpickr-mode="range" 
                data-flatpickr-alt-format="d/m/Y" 
                data-flatpickr-date-format="d/m/Y">
                <h4 class="card-header__title">Recent Orders</h4>
                <a href="javascript:void(0)" class="link-date" data-toggle>13/03/2018 to 20/03/2018</a>
                <input class="d-none" type="hidden" value="13/03/2018 to 20/03/2018" data-input>
              </div>
            </div>
            <i class="material-icons icon-muted">help_outline</i>
          </div>
          <div class="card-body py-0">
            <div class="list-group list-group-small list-group-flush">
              @foreach([1,2,3,4,5] as $i)
              <div class="list-group-item d-flex align-items-center px-0">
                <div class="mr-3 flex"> <i class="material-icons icon-18pt icon-muted">contacts</i> {{ $chat[$i]['name'] }}</div>
                <div class="mr-3 text-dark-gray">{{ $chat[$i]['date'] }}</div>
                <div><a href="">&dollar;{{ 123 * $i }}</a></div>
              </div>
              @endforeach
            </div>
          </div>
          <div class="card-footer text-center">
            <a class="text-muted" href="">View All (54)</a>
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
@endsection

@section('footer')
<!-- Global Settings -->
<script src="{{ mix('js/settings.js') }}" defer></script>

<!-- Moment.js -->
<script src="{{ mix('vendor/moment.min.js') }}" defer></script>
<script src="{{ mix('vendor/moment-range.js') }}" defer></script>

<!-- Flatpickr -->
<script src="{{ mix('vendor/flatpickr/flatpickr.min.js') }}" defer></script>
<script src="{{ mix('js/flatpickr.js') }}" defer></script>

<!-- Chart.js -->
<script src="{{ mix('vendor/Chart.min.js') }}" defer></script>
<script src="{{ mix('js/charts.js') }}" defer></script>

<!-- Chart.js Samples -->
<script src="{{ mix('js/page.ecommerce.js') }}" defer></script>
@endsection
