@extends("flowdash::layouts.{$layout}", [
  'title' => 'Projects',
  'breadcrumb' => [[
    'title' => 'Projects'
  ]],
  'new_button_label' => 'New Ticket'
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">
  @if($layout === 'fluid')
  <div class="row">
    <div class="col-lg-9">
      @include('flowdash::partials.app-projects')
    </div>
    <div class="col-lg-3">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label class="text-label" for="range01">Date Range:</label>
              <input id="range01" type="text" class="form-control" placeholder="Select date ..." value="13/03/2018 to 20/03/2018" data-toggle="flatpickr" data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y" data-flatpickr-date-format="d/m/Y">
            </div>
            <div class="form-group">
              <label class="text-label" for="bucket01">Bucket:</label>
              <select id="bucket01" class="custom-select">
                <option value="All Buckets">All Buckets</option>
              </select>
            </div>
            <div class="form-group">
              <label class="text-label" for="assigned01">Assigned To:</label>
              <select id="assigned01" class="custom-select">
                <option value="All Users">All Users</option>
              </select>
            </div>
            <div class="text-center">
              <button class="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  @else
  <div class="card card-form d-flex flex-column flex-sm-row">
    <div class="card-form__body card-body-form-group flex">
      <div class="row">
        <div class="col-sm-auto">
          <div class="form-group">
            <label for="filter_name">Search</label>
            <input id="filter_name" type="text" class="form-control" placeholder="Enter keyword">
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-group">
            <label for="filter_buckets">Buckets</label><br>
            <select id="filter_buckets" class="custom-select" style="width: 150px;">
              <option value="all">Any</option>
              <option value="1">Deployed</option>
              <option value="2">Concept</option>
              <option value="3">Wireframe</option>
            </select>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-group">
            <label for="filter_assigned">Assigned To</label><br>
            <select id="filter_assigned" class="custom-select" style="width: 150px;">
              <option value="all">Any</option>
              <option value="1">Adrian D.</option>
              <option value="2">Michael S.</option>
              <option value="3">John L.</option>
            </select>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-group" style="width: 200px;">
            <label for="filter_date">Daterange</label>
            <input id="filter_date" type="text" class="form-control" placeholder="Select date ..." value="13/03/2018 to 20/03/2018" data-toggle="flatpickr" data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y" data-flatpickr-date-format="d/m/Y">
          </div>
        </div>
      </div>
    </div>
    <button class="btn bg-white border-left border-top border-top-sm-0 rounded-top-0 rounded-top-sm rounded-left-sm-0"><i class="material-icons text-primary">refresh</i></button>
  </div>
  @include('flowdash::partials.app-projects')
  @endif
</div>
@endsection

@section('head')
<!-- Flatpickr -->
<link type="text/css" href="{{ mix('css/vendor/flatpickr.css') }}" rel="stylesheet">
<link type="text/css" href="{{ mix('css/vendor/flatpickr-airbnb.css') }}" rel="stylesheet">
@endsection

@section('footer')
<!-- Flatpickr -->
<script src="{{ mix('vendor/flatpickr/flatpickr.min.js') }}" defer></script>
<script src="{{ mix('js/flatpickr.js') }}" defer></script>
@endsection
