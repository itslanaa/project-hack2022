@extends("flowdash::layouts.{$layout}", [
  'title' => 'Products',
  'breadcrumb' => [[
    'title' => 'Products'
  ]],
  'new_button_label' => 'Create'
])

@section('content')
@php
$products = [[
  'name' => "Bleu Snow Coat", 
  'amount' => "$22",
  'stock' => "4",
  'category' => "Coats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/clem-onojeghuo-192088.jpg"
], [ 
  'name' => "Navy Hat with Stripes", 
  'amount' => "$54",
  'stock' => "10",
  'category' => "Hats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/lobostudio-hamburg-64728.jpg"
], [
  'name' => "Bleu Snow Coat", 
  'amount' => "$22",
  'stock' => "4",
  'category' => "Coats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/nina-strehl-140734.jpg"
], [ 
  'name' => "Navy Hat with Stripes", 
  'amount' => "$54",
  'stock' => "10",
  'category' => "Hats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/lobostudio-hamburg-64728.jpg"
], [
  'name' => "Bleu Snow Coat", 
  'amount' => "$22",
  'stock' => "4",
  'category' => "Coats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/clem-onojeghuo-192088.jpg"
], [ 
  'name' => "Navy Hat with Stripes", 
  'amount' => "$54",
  'stock' => "10",
  'category' => "Hats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/nina-strehl-140734.jpg"
], [
  'name' => "Bleu Snow Coat", 
  'amount' => "$22",
  'stock' => "4",
  'category' => "Coats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/clem-onojeghuo-192088.jpg"
], [ 
  'name' => "Navy Hat with Stripes", 
  'amount' => "$54",
  'stock' => "10",
  'category' => "Hats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/nina-strehl-140734.jpg"
], [
  'name' => "Bleu Snow Coat", 
  'amount' => "$22",
  'stock' => "4",
  'category' => "Coats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/lobostudio-hamburg-64728.jpg"
], [ 
  'name' => "Navy Hat with Stripes", 
  'amount' => "$54",
  'stock' => "10",
  'category' => "Hats",
  'status' => "ACTIVE",
  'image' => "/vendor/flowdash/images/avatars/clem-onojeghuo-192088.jpg"
]];
@endphp

<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="card">
    @component('flowdash::components.products-table', [
      'items' => $products
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