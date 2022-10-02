@extends("flowdash::layouts.{$layout}", [
  'title' => 'Staff',
  'new_button_label' => 'Add Staff',
  'breadcrumb' => [[
    'title' => 'Staff'
  ]]
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="row card-group-row">
    <div class="col-lg-4 col-md-6 card-group-row__col">
        <div class="card card-group-row__card">
          <div class="card-body-x-lg card-body d-flex flex-row align-items-center">
            <div class="flex">
              <div class="card-header__title text-muted mb-2 d-flex">Budget  <span class="badge badge-warning ml-2">20%</span></div>
              <span class="h4 m-0">&dollar;24,000 <small class="text-muted"> / &dollar;50,000</small>      </span>              
            </div>
            <div><i class="material-icons icon-muted icon-40pt ml-3">monetization_on</i></div>
          </div>
          <div class="progress" style="height: 3px;">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    <div class="col-lg-4 col-md-6 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="card-body-x-lg card-body d-flex flex-row align-items-center">
          <div class="flex">
            <div class="card-header__title text-muted d-flex mb-2">Current Target  <span class="badge badge-primary ml-2">2018</span></div>
            <span class="h4 m-0">&dollar;50,000 </span>              
          </div>
          <div><i class="material-icons icon-muted icon-40pt ml-3">gps_fixed</i></div>
        </div>
        <div class="progress" style="height: 3px;">
            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="card-body-x-lg card-body d-flex flex-row align-items-center">
          <div class="flex">
            <div class="card-header__title text-muted mb-2">Top Grossing</div>
            <div class="d-flex align-items-center">
              <div class="h4 m-0">&dollar;13,531 </div>
              <div class="progress ml-1" style="width:100%;height: 3px;">
                <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div><i class="material-icons icon-muted icon-40pt ml-3">contacts</i></div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header bg-white d-flex align-items-center">
      <h4 class="card-header__title mb-0">Earnings</h4>
      <div class="flatpickr-wrapper flatpickr-calendar-right d-flex ml-auto">
        <div
          id="recent_orders_date"
          data-toggle="flatpickr" 
          data-flatpickr-wrap="true"
          data-flatpickr-static="true" 
          data-flatpickr-mode="range" 
          data-flatpickr-alt-format="d/m/Y" 
          data-flatpickr-date-format="d/m/Y">
          <a href="javascript:void(0)" class="link-date" data-toggle>13/03/2018 to 20/03/2018</a>
          <input class="d-none" type="hidden" value="13/03/2018 to 20/03/2018" data-input>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="chart">
        <canvas id="ordersChart" class="chart-canvas"></canvas>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <form class="form-inline">
        <label class="mr-sm-2" for="inlineFormFilterBy">Filter by:</label>
        <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormFilterBy" placeholder="Type a name">

        <label class="sr-only" for="inlineFormRole">Role</label>
        <select id="inlineFormRole" class="custom-select mb-2 mr-sm-2 mb-sm-0">
          <option value="All Roles">All Roles</option>
        </select>

        <div class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
          <input type="checkbox" class="custom-control-input" id="inlineFormPurchase">
          <label class="custom-control-label" for="inlineFormPurchase">Made a Purchase?</label>
        </div>
      </form>
    </div>
    @component('flowdash::components.staff-table', [
      'items' => [[
        'name' => 'Michael Smith',
        'selected' => true,
        'avatar' => [
          'image' => '/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg'
        ],
        'employer' => 'Black Ops',
        'projects' => 12,
        'status_class' => 'badge-warning',
        'status_name' => 'ADMIN',
        'date' => '3 days ago',
        'earnings' => '12,402'
      ], [
        'name' => 'Connie Smith',
        'avatar' => [
          'image' => '/vendor/flowdash/images/avatar/green.svg'
        ],
        'employer' => 'Backend Ltd',
        'employer_rating_active' => true,
        'projects' => 42,
        'status_class' => 'badge-success',
        'status_name' => 'USER',
        'date' => '1 week ago',
        'earnings' => '1,943'
      ], [
        'name' => 'John Connor',
        'avatar' => [
          'image' => '/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg'
        ],
        'employer' => 'Frontted',
        'projects' => 42,
        'status_class' => 'badge-primary',
        'status_name' => 'MANAGER',
        'date' => '1 week ago',
        'earnings' => '1,943'
      ]]
    ]) @endcomponent
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

<!-- Flatpickr -->
<script src="{{ mix('vendor/flatpickr/flatpickr.min.js') }}" defer></script>
<script src="{{ mix('js/flatpickr.js') }}" defer></script>

<!-- Chart.js -->
<script src="{{ mix('vendor/Chart.min.js') }}"></script>
<script src="{{ mix('js/chartjs-rounded-bar.js') }}" defer></script>
<script src="{{ mix('js/charts.js') }}" defer></script>

<!-- Chart.js Samples -->
<script src="{{ mix('js/page.staff.js') }}" defer></script>

<!-- List.js -->
<script src="{{ mix('vendor/list.min.js') }}"></script>
<script src="{{ mix('js/list.js') }}" defer></script>

<!-- Tables -->
<script src="{{ mix('js/toggle-check-all.js') }}" defer></script>
<script src="{{ mix('js/check-selected-row.js') }}" defer></script>
@endsection
