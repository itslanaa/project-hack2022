@extends("flowdash::layouts.{$layout}", [
  'title' => 'Dashboard',
  'breadcrumb' => [[
    'title' => 'Dashboard'
  ]],
  'new_button_label' => 'New Report'
])

@section('content')
@php
$chat = [[
  'avatar' => "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
  'name' => "Jenell D. Matney", 
  'date' => "4 days ago"
], [
  'avatar' => "/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg",
  'name' => "Sherri J. Cardenas", 
  'date' => "3 days ago"
], [
  'avatar' => "/vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg",
  'name' => "Joseph S. Ferland", 
  'date' => "2 days ago"
], [
  'avatar' => "/vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg",
  'name' => "Bryan K. Davis", 
  'date' => "1 day ago"
], [
  'avatar' => "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg",
  'name' => "Elizabeth J. Ohara", 
  'date' => "4 hours ago"
], [
  'avatar' => "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
  'name' => "Kaci M. Langston", 
  'date' => "just now"
]] 
@endphp

<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="alert alert-soft-warning d-flex align-items-center card-margin" role="alert">
    <i class="material-icons mr-3">error_outline</i>
    <div class="text-body"><strong>API gateways are now Offline.</strong> Please try the API later. If you want to stay up to date follow our <a href="">Status Page </a></div>
  </div>

  <div class="row card-group-row">
    <div class="col-lg-4 col-md-6 card-group-row__col">
      <div class="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
        <div class="flex">
          <div class="card-header__title text-muted mb-2">Current Target</div>
          <div class="text-amount">&dollar;12,920</div>
          <div class="text-stats text-success">31.5% <i class="material-icons">arrow_upward</i></div>
        </div>
        <div><i class="material-icons icon-muted icon-40pt ml-3">gps_fixed</i></div>
      </div>  
    </div>
    <div class="col-lg-4 col-md-6 card-group-row__col">
      <div class="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
        <div class="flex">
          <div class="card-header__title text-muted mb-2">Earnings</div>
          <div class="text-amount">&dollar;3,642</div>
          <div class="text-stats text-success">51.5% <i class="material-icons">arrow_upward</i></div>
        </div>
        <div><i class="material-icons icon-muted icon-40pt ml-3">monetization_on</i></div>
      </div>
    </div>
    <div class="col-lg-4 col-md-12 card-group-row__col">
      <div class="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
        <div class="flex">
          <div class="card-header__title text-muted mb-2">Website Traffic</div>
          <div class="text-amount">8,391</div>
          <div class="text-stats text-danger">3.5% <i class="material-icons">arrow_downward</i></div>
        </div>
        <div><i class="material-icons icon-muted icon-40pt ml-3">perm_identity</i></div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-7">
      <div class="card dashboard-area-tabs" id="dashboard-area-tabs">
        <div class="card-header p-0 bg-white nav">
          <div class="row no-gutters flex" role="tablist">
            <div 
              class="col" 
              data-toggle="chart" 
              data-target="#earningsTrafficChart" 
              data-update='{"data":{"datasets":[{"label": "Traffic", "data":[10,2,5,15,10,12,15,25,22,30,25,40]}]}}' 
              data-prefix="" 
              data-suffix="k">
              <a 
                href="#" 
                data-toggle="tab" 
                role="tab" 
                aria-selected="true" 
                class="dashboard-area-tabs__tab card-body text-center active">
                <span class="card-header__title m-0">Sessions</span>
                <span class="text-amount">18,391</span>
              </a>
            </div>
            <div 
              class="col border-left" 
              data-toggle="chart" 
              data-target="#earningsTrafficChart" 
              data-update='{"data":{"datasets":[{"label": "Earnings", "data":[7,35,12,27,34,17,19,30,28,32,24,39]}]}}' 
              data-prefix="$" 
              data-suffix="k">
              <a 
                href="#" 
                data-toggle="tab" 
                role="tab" 
                aria-selected="false" 
                class="dashboard-area-tabs__tab card-body text-center">
                <span class="card-header__title m-0">Orders</span>
                <span class="text-amount">&dollar;8,942</span>
              </a>
            </div>
          </div>
        </div>
        <div class="card-body text-muted" style="height: 280px;">
          <div class="chart" style="height: calc(280px - 1.25rem * 2);">
            <canvas id="earningsTrafficChart">
              <span style="font-size: 1rem;"><strong>Website Traffic / Earnings</strong> area chart goes here.</span>
            </canvas>
          </div>
        </div>
      </div>
      <div class="card-group">
          <div class="card card-body text-center">
            <div class="mb-1"><i class="material-icons icon-muted icon-40pt">assessment</i></div>
            <div class="text-amount">3,642 </div><div class="card-header__title mb-2">Visits</div>
          </div>
          <div class="card card-body text-center">
            <div class="mb-1"><i class="material-icons icon-muted icon-40pt">shopping_basket</i></div>
            <div class="text-amount">&dollar;12,311</div>
            <div class="card-header__title  mb-2">Purchases</div>
          </div>
        </div>
    </div>
    <div class="col-lg-5">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Revenue by location</h4>
        </div>
        <div class="card-body">
          <div
            id="vector-map-revenue"
            class="map mb-3"  
            data-toggle="vector-map" 
            data-vector-map-map="world_en"
            data-vector-map-show-tooltip="false"
            data-vector-map-enable-zoom="true"
            data-vector-map-scale="1.1"
            data-vector-map-pins='{
              "it": "<div class=\"map-pin blue\"><span>Vatican City</span></div>",
              "us": "<div class=\"map-pin blue\"><span>New York</span></div>",
              "au": "<div class=\"map-pin blue\"><span>Sydney</span></div>"
            }'>
          </div>

          <ul class="list-unstyled dashboard-location-tabs nav flex-column m-0" role="tablist">
            <li 
              data-toggle="vector-map-focus" 
              data-target="#vector-map-revenue" 
              data-focus="us" 
              data-animate="true">
              <div 
                class="dashboard-location-tabs__tab active" 
                data-toggle="tab" 
                role="tab" 
                aria-selected="true">
                <div><strong>New York</strong></div>
                <div class="d-flex align-items-center">
                  <div class="flex mr-2">
                    <div class="progress" style="height: 6px;">
                      <div class="progress-bar" role="progressbar" style="width: 72%;" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div>72k</div>
                </div>
              </div>
            </li>
            <li 
              data-toggle="vector-map-focus" 
              data-target="#vector-map-revenue" 
              data-focus="it" 
              data-animate="true">
              <div 
                class="dashboard-location-tabs__tab" 
                data-toggle="tab" 
                role="tab" 
                aria-selected="true">
                <div><strong>Vatican City</strong></div>
                <div class="d-flex align-items-center">
                  <div class="flex mr-2">
                    <div class="progress" style="height: 6px;">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 39%;" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div>39k</div>
                </div>
              </div>
            </li>
            <li 
              data-toggle="vector-map-focus" 
              data-target="#vector-map-revenue" 
              data-focus="au" 
              data-animate="true">
              <div 
                class="dashboard-location-tabs__tab" 
                data-toggle="tab" 
                role="tab" 
                aria-selected="true">
                <div><strong>Sydney</strong></div>
                <div class="d-flex align-items-center">
                  <div class="flex mr-2">
                    <div class="progress" style="height: 6px;">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div>25k</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg">
      <div class="card">
        <div class="card-header card-header-large bg-white d-flex align-items-center">
          <h4 class="card-header__title flex m-0">Recent Activity</h4>
          <div
            data-toggle="flatpickr" 
            data-flatpickr-wrap="true"
            data-flatpickr-static="true" 
            data-flatpickr-mode="range" 
            data-flatpickr-alt-format="d/m/Y" 
            data-flatpickr-date-format="d/m/Y">
            <a href="javascript:void(0)" class="link-date" data-toggle>13/03/2018 <span class="text-muted mx-1">to</span> 20/03/2018</a>
            <input class="d-none" type="hidden" value="13/03/2018 to 20/03/2018" data-input>
          </div>
        </div>
        <div class="card-header card-header-tabs-basic nav" role="tablist">
          <a href="#activity_all" class="active" data-toggle="tab" role="tab" aria-controls="activity_all" aria-selected="true">All</a>
          <a href="#activity_purchases" data-toggle="tab" role="tab" aria-controls="activity_purchases" aria-selected="false">Purchases</a>
          <a href="#activity_emails" data-toggle="tab" role="tab" aria-controls="activity_emails" aria-selected="false">Emails</a>
          <a href="#activity_quotes" data-toggle="tab" role="tab" aria-controls="activity_quotes" aria-selected="false">Quotes</a>
        </div>
        <div class="list-group tab-content list-group-flush">
          <div class="tab-pane active show fade" id="activity_all">
            @php 
            $list_items = [[
              'avatar' => "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
              'name' => "Jenell D. Matney",
              'date' => "4 days ago",
              'amount' => "$573",
              'icon' => "monetization_on",
              'icon_bg' => "bg-purple",
              'message' => "Confirmation required for design"
            ], [
              'avatar' => "/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg",
              'name' => "Sherri J. Cardenas", 
              'date' => "3 days ago",
              'amount' => "$612",
              'icon' => "email",
              'icon_bg' => "bg-teal",
              'message' => "Improve spacings on Projects page"
            ], [
              'avatar' => "/vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg",
              'name' => "Joseph S. Ferland", 
              'date' => "2 days ago",
              'amount' => "$244",
              'icon' => "monetization_on",
              'icon_bg' => "",
              'message' => "You unlocked a new Badge"
            ], [
              'avatar' => "/vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg",
              'name' => "Bryan K. Davis", 
              'date' => "1 day ago",
              'amount' => "$664",
              'icon' => "monetization_on",
              'icon_bg' => "",
              'message' => "Meeting on Friday"
            ], [
              'avatar' => "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
              'name' => "Kaci M. Langston", 
              'date' => "just now",
              'amount' => "$631",
              'icon' => "description",
              'icon_bg' => "",
              'message' => "Design a new Brochure"
            ]] 
            @endphp

            @foreach([0,1,2,3,4] as $i)
            <div class="list-group-item list-group-item-action d-flex align-items-center {% if i > 1 %} bg-light {% endif %}">
              <div class="avatar avatar-xs mr-3">
                <span class="avatar-title rounded-circle {{ $list_items[$i]['icon_bg'] }}">
                  <i class="material-icons">{{ $list_items[$i]['icon'] }}</i>
                </span>
              </div>
              
              <div class="flex">
                <div class="d-flex align-items-middle">
                  <div class="avatar avatar-xxs mr-1">
                      <img src="{{ $chat[$i]['avatar'] }}" alt="Avatar" class="avatar-img rounded-circle">
                  </div>
                
              @if($i == 1)
                  <strong class="text-15pt mr-1">{{ $list_items[$i]['name'] }}</strong>
                </div>
                <small>{{ $list_items[$i]['message'] }}</small>
              </div>
              <small class="text-muted">{{ $list_items[$i]['date'] }}</small>
              @else
                  <strong class="text-15pt mr-1">{{ $list_items[$i]['name'] }}</strong>    
                </div>
                <small class="text-muted">{{ $list_items[$i]['date'] }}</small>
              </div>
              <div>{{ $list_items[$i]['amount'] }}</div>
              @endif

              <i class="material-icons icon-muted ml-3">arrow_forward</i>
            </div>
            @endforeach
            <div class="card-footer text-center border-0">
              <a class="text-muted" href="">View All (54)</a>
            </div>
          </div>
          <div class="tab-pane" id="activity_purchases">
            @foreach([0,1,2,3,4] as $i)
            <div class="list-group-item list-group-item-action d-flex align-items-center {% if i > 2 %} bg-light {% endif %}">
              <div class="avatar avatar-xs mr-3">
                <span class="avatar-title rounded-circle {% if i < 3 %} bg-purple{% endif %}">
                  <i class="material-icons">monetization_on</i>
                </span>
              </div>
              
              <div class="flex">
                <div class="d-flex align-items-middle">
                  <div class="avatar avatar-xxs mr-1">
                      <img src="{{ $list_items[$i]['avatar'] }}" alt="Avatar" class="avatar-img rounded-circle">
                  </div>
                  <strong class="text-15pt mr-1">{{ $list_items[$i]['name'] }}</strong>
                  
                </div>
                <small class="text-muted">{{ $list_items[$i]['date'] }}</small>
              </div>
              <div>{{ $list_items[$i]['amount'] }}</div>
              <i class="material-icons icon-muted ml-3">arrow_forward</i>
            </div>
            @endforeach
          </div>
          <div class="tab-pane" id="activity_emails">
            @foreach([0,1,2,3,4] as $i)
            <div class="list-group-item list-group-item-action d-flex align-items-center {% if i > 2 %} bg-light {% endif %}">
              <div class="avatar avatar-xs mr-3">
                <span class="avatar-title rounded-circle {% if i < 3 %} bg-teal{% endif %}">
                  <i class="material-icons">email</i>
                </span>
              </div>
              
              <div class="flex">
                <div class="d-flex align-items-middle">
                  <div class="avatar avatar-xxs mr-1">
                      <img src="{{ $chat[$i]['avatar'] }}" alt="Avatar" class="avatar-img rounded-circle">
                  </div>
                  <strong class="text-15pt mr-1">{{ $list_items[$i]['name'] }}</strong>
                  
                </div>
                <small>{{ $list_items[$i]['message'] }}</small>
              </div>
              <small class="text-muted">{{ $list_items[$i]['date'] }}</small>
              <i class="material-icons icon-muted ml-3">arrow_forward</i>
            </div>
            @endforeach
          </div>
          <div class="tab-pane" id="activity_quotes"></div>
        </div>
      </div>
    </div>
    <div class="col-lg">
      <div class="row card-group-row">
        <div class="col-lg-6 card-group-row__col">
          <div class="card card-group-row__card card-body card-body-x-lg" style="position: relative; padding-bottom: calc(80px - 1.25rem); overflow: hidden; z-index: 0;">
            <div class="card-header__title text-muted mb-2">Products</div>
            <div class="text-amount">&dollar;8,391</div>
            <div class="text-stats text-success">31.5% <i class="material-icons">arrow_upward</i></div>
            <div class="chart" style="height: 80px; position: absolute; left: 0; right: 0; bottom: 0;">
              <canvas id="productsChart"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg-6 card-group-row__col">
          <div class="card card-group-row__card card-body card-body-x-lg" style="position: relative; padding-bottom: calc(80px - 1.25rem); overflow: hidden; z-index: 0;">
            <div class="card-header__title text-muted mb-2">Courses</div>
            <div class="text-amount">15,021</div>
            <div class="text-stats text-danger">31.5% <i class="material-icons">arrow_downward</i></div>
            <div class="chart" style="height: 80px; position: absolute; left: 0; right: 0; bottom: 0;">
              <canvas id="coursesChart"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header card-header-large bg-white d-flex align-items-center">
          <h4 class="card-header__title flex m-0">Stats by Location</h4>
          <i class="material-icons icon-muted ml-3">expand_more</i>
        </div>
        <div class="card-header card-header-tabs-basic nav justify-content-center" role="tablist">
          <div 
            data-toggle="chart" 
            data-target="#locationDoughnutChart" 
            data-update='{"data":{
              "labels": ["United States", "United Kingdom", "Germany", "India"], 
              "datasets": [{"label": "Traffic", "data":[25,25,15,35]}]
            }}'>
              <a 
                href="#" 
                class="active" 
                data-toggle="tab" 
                role="tab" 
                aria-selected="true">
              Traffic
            </a>
          </div>
          <div 
            data-toggle="chart" 
            data-target="#locationDoughnutChart" 
            data-update='{"data":{
              "labels": ["United States", "United Kingdom", "Germany", "India"], 
              "datasets": [{"label": "Purchases", "data":[15,17,25,43]}]
            }}'>
            <a 
              href="#" 
              data-toggle="tab" 
              role="tab" 
              aria-selected="false">
              Purchases
            </a>
          </div>
          <div 
            data-toggle="chart" 
            data-target="#locationDoughnutChart" 
            data-update='{"data":{
              "labels": ["United States", "United Kingdom", "Germany", "India"], 
              "datasets": [{"label": "Quotes", "data":[53,17,25,5]}]
            }}'>
            <a 
              href="#" 
              data-toggle="tab" 
              role="tab" 
              aria-selected="false">
              Quotes
            </a>
          </div>
        </div>
        <div class="card-body d-flex align-items-center justify-content-center" style="height: 210px;">
          <div class="row">
            <div class="col-7">
              <div class="chart" style="height: calc(210px - 1.25rem * 2);">
                <canvas id="locationDoughnutChart" data-chart-legend="#locationDoughnutChartLegend">
                  <span style="font-size: 1rem;" class="text-muted"><strong>Location</strong> doughnut chart goes here.</span>
                </canvas>
              </div>
            </div>
            <div class="col-5">
              <div id="locationDoughnutChartLegend" class="chart-legend chart-legend--vertical"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg">
      <div class="card">
        <div class="card-header card-header-large bg-white d-flex align-items-center">
          <h4 class="card-header__title flex m-0">TODO List</h4>
          <div><a href="#" data-target="#todo" class="js-toggle-check-all">Mark All as Completed</a></div>
        </div>
        <div class="card-body bg-light">
          <ul class="list-unstyled list-todo" id="todo">
            <li>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" checked="" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Wireframe the CRM application pages</label>
              </div>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2">
                <label class="custom-control-label" for="customCheck2">Design a new page in Sketch</label>
              </div>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck3">
                <label class="custom-control-label" for="customCheck3">Quote the custom work</label>
              </div>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck4">
                <label class="custom-control-label" for="customCheck4">Interview John for Full-Stack Developer</label>
              </div>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck5">
                <label class="custom-control-label" for="customCheck5">Research the success of CRM</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-footer text-center">
          15 <span class="text-muted">of 100</span> <a href="#"><i class="material-icons icon-muted float-right">arrow_forward</i></a>
        </div>
      </div>
    </div>
    <div class="col-lg">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Team Skills</h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled list-skills">
            <li>
              <div>HTML</div>
              <div class="flex">
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar" role="progressbar" style="width: 61%;" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="text-dark-gray"><strong>61%</strong></div>
            </li>
            <li>
              <div>CSS/SCSS</div>
              <div class="flex">
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: 39%;" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="text-dark-gray"><strong>39%</strong></div>
            </li>
            <li>
              <div>JAVASCRIPT</div>
              <div class="flex">
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar bg-dark-gray" role="progressbar" style="width: 76%;" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="text-dark-gray"><strong>76%</strong></div>
            </li>
            <li>
              <div>RUBY ON RAILS</div>
              <div class="flex">
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar bg-danger" role="progressbar" style="width: 28%;" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="text-dark-gray"><strong>28%</strong></div>
            </li>
            <li>
              <div>VUEJS</div>
              <div class="flex">
                <div class="progress" style="height: 6px;">
                  <div class="progress-bar bg-dark" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="text-dark-gray"><strong>50%</strong></div>
            </li>
          </ul>
        </div>
        <div class="card-footer text-center border-0">
          <a href="#">
            <span class="text-muted">View All</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header card-header-large bg-white">
      <h4 class="card-header__title">Current Users</h4>
    </div>
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

<!-- Vector Maps -->
<link type="text/css" href="{{ mix('vendor/jqvmap/jqvmap.min.css') }}" rel="stylesheet">
@endsection

@section('footer')
<!-- Global Settings -->
<script src="{{ mix('js/settings.js') }}" defer></script>

<!-- Flatpickr -->
<script src="{{ mix('vendor/flatpickr/flatpickr.min.js') }}" defer></script>
<script src="{{ mix('js/flatpickr.js') }}" defer></script>

<!-- Chart.js -->
<script src="{{ mix('vendor/Chart.min.js') }}"></script>
<script src="{{ mix('js/charts.js') }}" defer></script>

<!-- Chart.js Samples -->
<script src="{{ mix('js/page.dashboard.js') }}" defer></script>

<!-- Vector Maps -->
<script src="{{ mix('vendor/jqvmap/jquery.vmap.min.js') }}" defer></script>
<script src="{{ mix('vendor/jqvmap/maps/jquery.vmap.world.js') }}" defer></script>
<script src="{{ mix('js/vector-maps.js') }}" defer></script>

<!-- List.js -->
<script src="{{ mix('vendor/list.min.js') }}"></script>
<script src="{{ mix('js/list.js') }}" defer></script>

<!-- Tables -->
<script src="{{ mix('js/toggle-check-all.js') }}" defer></script>
<script src="{{ mix('js/check-selected-row.js') }}" defer></script>
@endsection
