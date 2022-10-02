@extends("flowdash::layouts.{$layout}", [
  'title' => 'Courses',
  'breadcrumb' => [[
    'title' => 'Education',
  ], [
    'title' => 'Browse Courses',
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">

  <form action="#" class="card-margin">
    <div class="d-flex">
      <div class="search-form mr-3 search-form--light">
        <input type="text" class="form-control" placeholder="Search courses" id="searchSample02">
        <button class="btn" type="button"><i class="material-icons">search</i></button>
      </div>

      <div class="form-inline ml-auto">
        <div class="form-group mr-3">
          <label for="custom-select" class="text-label mr-2">Category</label>
          <select id="custom-select" class="form-control custom-select" style="width: 200px;">
            <option selected="">All categories</option>
            <option value="1">Vue.js</option>
            <option value="2">Node.js</option>
            <option value="3">GitHub</option>
          </select>
        </div>
        <div class="form-group">
          <label for="published01" class="text-label mr-2">Status</label>
          <select id="published01" class="form-control custom-select" style="width: 200px;">
            <option selected="">All</option>
            <option value="1">In Progress</option>
            <option value="3">New Releases</option>
          </select>
        </div>
      </div>
    </div>
  </form>

  @php
  $items = [[
    'title' => "React",
    'subtitle' => "Learn the Basics",
    'logo' => "/vendor/flowdash/images/logos/react.svg"
  ], [
    'title' => "Vue.js",
    'subtitle' => "Quick Tips",
    'logo' => "/vendor/flowdash/images/logos/vuejs.svg"
  ], [
    'title' => "Angular",
    'subtitle' => "Back to Basics",
    'logo' => "/vendor/flowdash/images/logos/angular.svg"
  ], [
    'title' => "Javascript",
    'subtitle' => "ES6 and Beyond",
    'logo' => "/vendor/flowdash/images/logos/javascript.svg"
  ], [
    'title' => "Node",
    'subtitle' => "ES6 and Beyond",
    'logo' => "/vendor/flowdash/images/logos/node.svg"
  ], [
    'title' => "Gitlab",
    'subtitle' => "Git Workflows",
    'logo' => "/vendor/flowdash/images/logos/gitlab.png"
  ], [
    'title' => "Angular",
    'subtitle' => "Typescript and Beyond",
    'logo' => "/vendor/flowdash/images/logos/angular.svg"
  ]];
  @endphp

  <div class="row">
    @foreach($items as $item)
    <div class="col-md-3">
      <div class="card card__course">
        <div class="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">          
          <a class="card-header__title  justify-content-center align-self-center d-flex flex-column" href="#" >
            <span><img src="{{ $item['logo'] }}" class="mb-1" style="width:34px;" alt="logo"></span>
            <span class="course__title">{{ $item['title'] }}</span>
            <span class="course__subtitle">{{ $item['subtitle'] }}</span>
          </a>
        </div>
        <div class="p-3">
          <div class="mb-2"> 
            <span class="mr-2">
              <a href="#" class="rating-link active"><i class="material-icons icon-16pt">star</i></a> 
              <a href="#" class="rating-link active"><i class="material-icons icon-16pt">star</i></a>
              <a href="#" class="rating-link active"><i class="material-icons icon-16pt">star</i></a>
              <a href="#" class="rating-link active"><i class="material-icons icon-16pt">star</i></a>
              <a href="#" class="rating-link active"><i class="material-icons icon-16pt">star_half</i></a>
            </span>
            <strong>4.7</strong><br/>
            <small class="text-muted">(391 ratings)</small>
          </div>
          <div class="d-flex align-items-center">  
            <strong class="h4 m-0">$49</strong>
            <a href="#" class="btn btn-primary ml-auto"><i class="material-icons">add_shopping_cart</i></a>
          </div>
        </div>
      </div>
    </div>
    @endforeach
  </div>

  <div class="d-flex flex-row align-items-center mb-3">
    <div class="form-inline">
      <label for="custom-select" class="text-label mr-2">View</label>
      <select class="custom-select ml-2">
        <option value="20" selected>20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
    </div>
    <div class="ml-3">
      20 <span class="text-muted">of 100</span> <a href="#" class="icon-muted"><i class="material-icons">arrow_forward</i></a>
    </div>
  </div>

</div>
@endsection