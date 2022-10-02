@extends("flowdash::layouts.{$layout}", [
  'title' => 'Quick Access',
  'breadcrumb' => [[
    'title' => 'Quick Access'
  ]],
  'new_button_label' => 'Settings',
  'new_button_class' => 'light',
  'new_button_icon_label' => 'settings',
  'new_button_icon_class' => 'text-muted',
])

@section('content')
@if($layout === 'fluid')
<div class="page__header page__header-nav">
  <div class="{{ $containerClass ?? 'container' }} page__container">
    @include('flowdash::partials.navbar-secondary')
  </div>
</div>
@endif

@php
$chat = [[
  'avatar' => '/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg',
  'name' => 'Jenell D. Matney', 
  'date' => '4 days ago'
], [
  'avatar' => '/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg',
  'name' => 'Sherri J. Cardenas', 
  'date' => '3 days ago'
], [
  'avatar' => '/vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg',
  'name' => 'Joseph S. Ferland', 
  'date' => '2 days ago'
], [
  'avatar' => '/vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg',
  'name' => 'Bryan K. Davis', 
  'date' => '1 day ago'
], [
  'avatar' => '/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg',
  'name' => 'Elizabeth J. Ohara', 
  'date' => '4 hours ago'
], [
  'avatar' => '/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg',
  'name' => 'Kaci M. Langston', 
  'date' => 'just now'
]];

$companies = [[
  'name' => "Moon Ltd", 
  'growth' => "3%",
  'growth_icon' => "arrow_upward",
  'status_color' => "success",
  'amount' => "$32,124",
  'status' => "PAID"
], [
  'name' => "Blue Space Ltd", 
  'growth' => "5%",
  'growth_icon' => "arrow_upward",
  'status_color' => "success",
  'amount' => "$13,593",
  'status' => "PAID"
], [
  'name' => "Visual Design", 
  'growth' => "12%",
  'growth_icon' => "arrow_upward",
  'status_color' => "danger",
  'amount' => "$2,229",
  'status' => "DUE"
], [
  'name' => "Fox Technologies", 
  'growth' => "54%",
  'growth_icon' => "arrow_upward",
  'status_color' => "success",
  'amount' => "$41,139",
  'status' => "PAID"
], [
  'name' => "JMS Ltd", 
  'growth' => "5%",
  'growth_icon' => "arrow_upward",
  'status_color' => "danger",
  'amount' => "$3,002",
  'status' => "DUE"
], [
  'name' => "Langston Corp", 
  'growth' => "9%",
  'growth_icon' => "arrow_upward",
  'status_color' => "success",
  'amount' => "$2,884",
  'status' => "PAID"
], [
  'name' => "Compare Solutions", 
  'growth' => "3%",
  'growth_icon' => "arrow_upward",
  'status_color' => "success",
  'amount' => "$15,844",
  'status' => "PAID"
], [
  'name' => "Hill Enterprises", 
  'growth' => "12%",
  'growth_icon' => "arrow_upward",
  'status_color' => "success",
  'amount' => "$9,772",
  'status' => "PAID"
], [
  'name' => "Monday Ltd", 
  'growth' => "17%",
  'growth_icon' => "arrow_upward",
  'status_color' => "success",
  'amount' => "$44,172",
  'status' => "PAID"
], [
  'name' => "Hexio Enterprise", 
  'growth' => "31%",
  'growth_icon' => "arrow_upward",
  'status_color' => "success",
  'amount' => "$21,984",
  'status' => "PAID"
]] 
@endphp

<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="row card-group-row">
    <div class="col-lg-3 col-md-4 card-group-row__col">
        <div class="card card-group-row__card">
          <div class="p-2 d-flex flex-row align-items-center">
            <div class="avatar avatar-xs mr-2">
              <span class="avatar-title rounded-circle text-center bg-primary">
                <i class="material-icons text-white icon-18pt">business</i> 
              </span>
            </div>
            <a href="#" class="text-dark">
              <strong>Companies</strong>
            </a>
          </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-4 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="p-2 d-flex flex-row align-items-center">
          <div class="avatar avatar-xs mr-2">
            <span class="avatar-title rounded-circle text-center">
              <i class="material-icons text-white icon-18pt">person_add</i> 
            </span>
          </div>
          <a href="#" class="text-dark">
            <strong>Create New User</strong>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="p-2 d-flex flex-row align-items-center">
          <div class="avatar avatar-xs mr-2">
            <span class="avatar-title rounded-circle text-center bg-success">
              <i class="material-icons text-white icon-18pt">receipt</i> 
            </span>
          </div>
          <a href="#" class="text-dark">
            <strong>Manage Invoices</strong>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="p-2 d-flex flex-row align-items-center">
          <div class="avatar avatar-xs mr-2">
            <span class="avatar-title rounded-circle text-center bg-info">
              <i class="material-icons text-white icon-18pt">monetization_on</i> 
            </span>
          </div>
          <a href="#" class="text-dark">
            <strong>Earnings</strong>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="p-2 d-flex flex-row align-items-center">
          <div class="avatar avatar-xs mr-2">
            <span class="avatar-title rounded-circle text-center bg-purple">
              <i class="material-icons text-white icon-18pt">shop</i> 
            </span>
          </div>
          <a href="#" class="text-dark">
            <strong>Products</strong>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="p-2 d-flex flex-row align-items-center">
          <div class="avatar avatar-xs mr-2">
            <span class="avatar-title rounded-circle text-center bg-warning">
              <i class="material-icons text-white icon-18pt">account_balance</i> 
            </span>
          </div>
          <a href="#" class="text-dark">
            <strong>Account Balance</strong>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="p-2 d-flex flex-row align-items-center">
          <div class="avatar avatar-xs mr-2">
            <span class="avatar-title rounded-circle text-center bg-primary">
              <i class="material-icons text-white icon-18pt">assignment</i> 
            </span>
          </div>
          <a href="#" class="text-dark">
            <strong>Assignments</strong>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 card-group-row__col">
      <div class="card card-group-row__card">
        <div class="p-2 d-flex flex-row align-items-center">
          <div class="avatar avatar-xs mr-2">
            <span class="avatar-title rounded-circle text-center bg-danger">
              <i class="material-icons text-white icon-18pt">phone</i> 
            </span>
          </div>
          <a href="#" class="text-dark">
            <strong>Calls</strong>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Top Companies</h4>
        </div>
        
          <table class="table table-striped border-bottom mb-0">
          @foreach([0,1,2,3,4,5,6] as $i)
          <tr>
            <td style="width: 40px;">{{ $i+1 }}.</td>
            <td>
              <div>
                <a href="#" class="text-15pt d-flex align-items-center"><i class="material-icons icon-16pt mr-1">business</i> <strong>{{ $companies[$i]['name'] ?? '' }}</strong></a>
              </div>
              <small class="text-muted">({{ $i+2 }} invoices)</small>
            </td>
            <td>
              
            </td>
            <td class="text-right" style="width: 100px">
              {{ $companies[$i]['growth'] ?? '' }} <i class="material-icons icon-16pt text-success">{{ $companies[$i]['growth_icon'] ?? '' }}</i>
            </td>
            <td class="text-right" style="width: 60px">
              <div class="badge badge-soft-{{ $companies[$i]['status_color'] ?? '' }}">{{ $companies[$i]['status'] ?? '' }}</div>
            </td>
            <td class="text-right"  style="width: 80px">
              {{ $companies[$i]['amount'] ?? '' }}
            </td>
          </tr>
            
          @endforeach
          </table>

          <div class="card-footer text-center border-0">
            <a class="text-muted" href="">View All (391)</a>
          </div>
        
      </div>
    </div>
    <div class="col">
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
            <div class="list-group-item list-group-item-action d-flex align-items-center {{ $i > 1 ? 'bg-light' : '' }}">
              <div class="avatar avatar-xs mr-3">
                <span class="avatar-title rounded-circle  {{ $list_items[$i]['icon_bg'] ?? '' }}">
                  <i class="material-icons">{{ $list_items[$i]['icon'] ?? '' }}</i>
                </span>
              </div>
              
              <div class="flex">
                <div class="d-flex align-items-middle">
                  <div class="avatar avatar-xxs mr-1">
                      <img src="{{ $chat[$i]['avatar'] ?? '' }}" alt="Avatar" class="avatar-img rounded-circle">
                  </div>
                
              @if($i == 1)
                  <strong class="text-15pt mr-1">{{ $list_items[$i]['name'] ?? '' }}</strong>
                </div>
                <small>{{  $list_items[$i]['message'] ?? '' }}</small>
              </div>
              <small class="text-muted">{{ $list_items[$i]['date'] ?? '' }}</small>
              @else
                  <strong class="text-15pt mr-1">{{ $list_items[$i]['name'] ?? '' }}</strong>    
                </div>
                <small class="text-muted">{{ $list_items[$i]['date'] ?? '' }}</small>
              </div>
              <div>{{ $list_items[$i]['amount'] ?? '' }}</div>
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
            <div class="list-group-item list-group-item-action d-flex align-items-center {{ $i > 2 ? 'bg-light' : '' }}">
              <div class="avatar avatar-xs mr-3">
                <span class="avatar-title rounded-circle {{ $i < 3 ? 'bg-purple' : '' }}">
                  <i class="material-icons">monetization_on</i>
                </span>
              </div>
              
              <div class="flex">
                <div class="d-flex align-items-middle">
                  <div class="avatar avatar-xxs mr-1">
                      <img src="{{ $list_items[$i]['avatar'] ?? '' }}" alt="Avatar" class="avatar-img rounded-circle">
                  </div>
                  <strong class="text-15pt mr-1">{{ $list_items[$i]['name'] ?? '' }}</strong>
                  
                </div>
                <small class="text-muted">{{ $list_items[$i]['date'] ?? '' }}</small>
              </div>
              <div>{{ $list_items[$i]['amount'] ?? '' }}</div>
              <i class="material-icons icon-muted ml-3">arrow_forward</i>
            </div>
            @endforeach
          </div>
          <div class="tab-pane" id="activity_emails">
            @foreach([0,1,2,3,4] as $i)
            <div class="list-group-item list-group-item-action d-flex align-items-center {{ $i > 2 ? 'bg-light' : '' }}">
              <div class="avatar avatar-xs mr-3">
                <span class="avatar-title rounded-circle {{ $i < 3 ? 'bg-teal' : '' }}">
                  <i class="material-icons">email</i>
                </span>
              </div>
              
              <div class="flex">
                <div class="d-flex align-items-middle">
                  <div class="avatar avatar-xxs mr-1">
                      <img src="{{ $chat[$i]['avatar'] ?? '' }}" alt="Avatar" class="avatar-img rounded-circle">
                  </div>
                  <strong class="text-15pt mr-1">{{ $list_items[$i]['name'] ?? '' }}</strong>
                  
                </div>
                <small>{{ $list_items[$i]['message'] ?? '' }}</small>
              </div>
              <small class="text-muted">{{ $list_items[$i]['date'] ?? '' }}</small>
              <i class="material-icons icon-muted ml-3">arrow_forward</i>
            </div>
            @endforeach
          </div>
          <div class="tab-pane" id="activity_quotes"></div>
        </div>
      </div>
    </div>
  </div>

</div>
@endsection