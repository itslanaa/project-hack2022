@extends("flowdash::layouts.{$layout}", [
  'title' => 'Companies',
  'breadcrumb' => [[
    'title' => 'Companies'
  ]],
  'new_button_label' => 'Create'
])

@section('content')
@php
$companies = [[
  'name' => "Moon Ltd", 
  'growth' => "3%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$32,124",
  'status' => "PAID"
], [
  'name' => "Blue Space Ltd", 
  'growth' => "5%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$13,593",
  'status' => "PAID"
], [
  'name' => "Visual Design", 
  'growth' => "12%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "danger",
  'amount' => "$2,229",
  'status' => "DUE"
], [
  'name' => "Fox Technologies", 
  'growth' => "54%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$41,139",
  'status' => "PAID"
], [
  'name' => "JMS Ltd", 
  'growth' => "5%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "danger",
  'amount' => "$3,002",
  'status' => "DUE"
], [
  'name' => "Langston Corp", 
  'growth' => "9%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$2,884",
  'status' => "PAID"
], [
  'name' => "Compare Solutions", 
  'growth' => "3%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$15,844",
  'status' => "PAID"
], [
  'name' => "Hill Enterprises", 
  'growth' => "12%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$9,772",
  'status' => "PAID"
], [
  'name' => "Monday Ltd", 
  'growth' => "17%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$44,172",
  'status' => "PAID"
], [
  'name' => "Hexio Enterprise", 
  'growth' => "31%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$21,984",
  'status' => "PAID"
],[
  'name' => "Moon Ltd", 
  'growth' => "3%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$32,124",
  'status' => "PAID"
], [
  'name' => "Blue Space Ltd", 
  'growth' => "5%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$13,593",
  'status' => "PAID"
], [
  'name' => "Visual Design", 
  'growth' => "12%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "danger",
  'amount' => "$2,229",
  'status' => "DUE"
], [
  'name' => "Fox Technologies", 
  'growth' => "54%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$41,139",
  'status' => "PAID"
], [
  'name' => "JMS Ltd", 
  'growth' => "5%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "danger",
  'amount' => "$3,002",
  'status' => "DUE"
], [
  'name' => "Langston Corp", 
  'growth' => "9%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$2,884",
  'status' => "PAID"
], [
  'name' => "Compare Solutions", 
  'growth' => "3%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$15,844",
  'status' => "PAID"
], [
  'name' => "Hill Enterprises", 
  'growth' => "12%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$9,772",
  'status' => "PAID"
], [
  'name' => "Monday Ltd", 
  'growth' => "17%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$44,172",
  'status' => "PAID"
], [
  'name' => "Hexio Enterprise", 
  'growth' => "31%",
  'growth_icon' => "arrow_upward",
  'growth_color' => "success",
  'amount' => "$21,984",
  'status' => "PAID"
]]
@endphp

<div class="{{ $containerClass ?? 'container' }} page__container">
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
            <label for="filter_category">Industry</label><br>
            <select id="filter_category" class="custom-select" style="width: 200px;">
              <option value="all">Any</option>
              <option value="all">Software</option>
              <option value="all">Production of Goods</option>
              <option value="all">Health</option>
              <option value="all">Sports</option>
            </select>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-group">
            <label for="filter_stock">Has Sales</label>
            <div class="custom-control custom-checkbox mt-sm-2">
              <input type="checkbox" class="custom-control-input" id="filter_stock" checked="">
              <label class="custom-control-label" for="filter_stock">Yes</label>
            </div>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-group" style="width: 200px;">
            <label for="filter_date">Created Date</label>
            <input id="filter_date" type="text" class="form-control" placeholder="Select date ..." value="13/03/2018 to 20/03/2018" data-toggle="flatpickr" data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y" data-flatpickr-date-format="d/m/Y">
          </div>
        </div>
      </div>
    </div>
    <button class="btn bg-white border-left border-top border-top-sm-0 rounded-top-0 rounded-top-sm rounded-left-sm-0"><i class="material-icons text-primary icon-20pt">refresh</i></button>
  </div>

  <div class="card">
    @component('flowdash::components.companies-table', [
      'items' => $companies
    ]) @endcomponent
  </div>
</div>
@endsection

@section('footer')
<!-- List.js -->
<script src="{{ mix('vendor/list.min.js') }}"></script>
<script src="{{ mix('js/list.js') }}" defer></script>

<!-- Tables -->
<script src="{{ mix('js/toggle-check-all.js') }}" defer></script>
<script src="{{ mix('js/check-selected-row.js') }}" defer></script>
@endsection
