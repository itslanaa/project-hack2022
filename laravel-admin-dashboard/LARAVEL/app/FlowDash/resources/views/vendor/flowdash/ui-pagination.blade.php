@extends("flowdash::layouts.{$layout}", [
  'title' => 'Pagination',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Pagination'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass }} page__container">
  <div class="row">
    <div class="col-lg">
      <div class="card card-body">
        // content above this line
        <hr>
        <div class="d-flex flex-row align-items-center">
          <div class="form-inline">
            View 
            <select class="custom-select ml-2" style="width: 70px;">
              <option value="20" selected>20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
          </div>
          <div class="ml-auto">
            20 <span class="text-muted">of 100</span> <a href="#" class="icon-muted"><i class="material-icons float-right">arrow_forward</i></a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Pagination Light</h4>
        </div>
        <div class="card-body">
          <div class="pagination-light">
            @component('flowdash::components.pagination', [
              'pages' => 4, 
              'first' => true, 
              'last' => true
            ]) @endcomponent
            @component('flowdash::components.pagination', [
              'pages' => 2, 
              'labels' => true, 
              'class' => "m-0"
            ]) @endcomponent
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Pagination Square</h4>
        </div>
        <div class="card-body">
          @component('flowdash::components.pagination', [
            'pages' => 4, 
            'first' => true, 
            'last' => true
          ]) @endcomponent
          @component('flowdash::components.pagination', [
            'pages' => 2, 
            'labels' => true, 
            'class' => "m-0"
          ]) @endcomponent
        </div>
      </div>
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Pagination Rounded</h4>
        </div>
        <div class="card-body">
          <div class="pagination-rounded">
            @component('flowdash::components.pagination', [
              'pages' => 4, 
              'first' => true, 
              'last' => true
            ]) @endcomponent
            @component('flowdash::components.pagination', [
              'pages' => 2, 
              'labels' => true, 
              'class' => "m-0"
            ]) @endcomponent
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection