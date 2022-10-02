@extends("flowdash::layouts.{$layout}", [
  'title' => 'Pricing',
  'breadcrumb' => [[
    'title' => 'Pages'
  ], [
    'title' => 'Pricing'
  ]],
  'new_button_label' => false
])

@section('content')
@php
$pricing = [[
  'title' => 'Personal',
  'amount' => 29,
  'features' => [
    'HTML/SCSS/JS',
    '6 Months Support'
  ]
], [
  'title' => 'Developers',
  'amount' => 59,
  'popular' => true,
  'btn_variant' => 'primary',
  'features' => [
    'HTML/SCSS/JS',
    '6 Months Support',
    'HTML/SCSS/JS',
    '6 Months Support'
  ]
], [
  'title' => 'Personal',
  'amount' => 199,
  'features' => [
    'HTML/SCSS/JS',
    '6 Months Support',
    'HTML/SCSS/JS',
    '6 Months Support',
    'HTML/SCSS/JS',
    '6 Months Support'
  ]
]]
@endphp

<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="row card-group-row  pt-2">
    @foreach($pricing as $item)
    <div class="col-md-6 col-lg-4 card-group-row__col">
      <div class="card card-group-row__card pricing__card {{ isset($item['popular']) ? 'pricing__card--popular' : '' }}">
        @if(isset($item['popular']))
        <span class="pricing__card-badge">most popular</span>
        @endif
        <div class="card-body d-flex flex-column">
          <div class="text-center">
            <h4 class="pricing__title mb-0">{{ $item['title'] }}</h4>
            <div class="d-flex align-items-center justify-content-center border-bottom-2 flex pb-3">
              <span class="pricing__amount headings-color">{{ $item['amount'] }}</span>
              <span class="d-flex flex-column">
                <span class="pricing__currency text-dark-gray text-left">USD</span>
                <span class="pricing__duration text-dark-gray">*monthly</span>
              </span>
            </div>
          </div>
          <div class="card-body d-flex flex-column">
            <ul class="list-unstyled pricing__features">
              @foreach($item['features'] as $feature)
              <li>{{ $feature }}</li>
              @endforeach
            </ul>
            <a href="https://themeforest.net/item/stack-admin-bootstrap-4-dashboard-template/22959011" class="btn btn-{{ $item['btn_variant'] ?? 'success' }} mt-auto">Purchase Now</a>
          </div>
        </div>
      </div>
    </div>
    @endforeach
  </div>
</div>
@endsection