<p class="text-dark-gray d-flex align-items-center mt-3">
  <i class="material-icons icon-muted mr-2">event</i>
  <strong>Wednesday, 24 Oct</strong>
</p>

@php
$items1 = [[
  'time' => "12:30 PM",
  'title' => "#4813 - Fix email alignment on iPhone 7",
  'badge_label' => "NEW",
  'badge_class' => "badge-light-gray",
  'started_by' => "Michael S.",
  'tag' => "DEPLOYED",
  'assigned_image' => "vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg",
  'assigned' => "Sherri Cardenas"
], [
  'time' => "07:48 PM",
  'title' => "#4813 - Create account profile page",
  'badge_label' => "RESOLVED",
  'badge_class' => "badge-success",
  'started_by' => "Adrian D.",
  'tag' => "CONCEPT",
  'assigned_image' => "vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
  'assigned' => "Jenell Matney"
], [
  'time' => "03:13 PM",
  'title' => "#4811 - Design new Dashboard",
  'badge_label' => "PRO",
  'badge_class' => "badge-warning",
  'started_by' => "John L.",
  'tag' => "WIREFRAME",
  'assigned_image' => "vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg",
  'assigned' => "Joseph Ferland"
], [
  'time' => "12:30 PM",
  'title' => "#4901 - Design Pricing Table",
  'badge_label' => "NEW",
  'badge_class' => "badge-light-gray",
  'started_by' => "Michael S.",
  'tag' => "DEPLOYED",
  'assigned_image' => "vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg",
  'assigned' => "Bryan Davis"
]]
@endphp

@foreach($items1 as $item)
  @component('flowdash::components.project-activity-item', [
    'time' => $item['time'],
    'title' => $item['title'],
    'badge_label' => $item['badge_label'],
    'badge_class' => $item['badge_class'],
    'started_by' => $item['started_by'],
    'tag' => $item['tag'],
    'assigned_image' => $item['assigned_image'],
    'assigned' => $item['assigned']
  ]) @endcomponent
@endforeach

<p class="text-dark-gray d-flex align-items-center mt-3">
  <i class="material-icons icon-muted mr-2">event</i>
  <strong>Tuesday, 23 Oct</strong>
</p>

@php
$items2 = [[
  'time' => "07:48 PM",
  'title' => "#4923 - Fix spacings on Stories page",
  'badge_label' => "RESOLVED",
  'badge_class' => "badge-success",
  'started_by' => "Adrian D.",
  'tag' => "CONCEPT",
  'assigned_image' => "vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg",
  'assigned' => "Elizabeth Ohara"
], [
  'time' => "03:13 PM",
  'title' => "#4813 - Fix email alignment on iPhone 7",
  'badge_label' => "NEW",
  'badge_class' => "badge-light-gray",
  'started_by' => "John L.",
  'tag' => "WIREFRAME",
  'assigned_image' => "vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
  'assigned' => "Kaci Langston"
]]
@endphp

@foreach($items2 as $item)
  @component('flowdash::components.project-activity-item', [
    'time' => $item['time'],
    'title' => $item['title'],
    'badge_label' => $item['badge_label'],
    'badge_class' => $item['badge_class'],
    'started_by' => $item['started_by'],
    'tag' => $item['tag'],
    'assigned_image' => $item['assigned_image'],
    'assigned' => $item['assigned']
  ]) @endcomponent
@endforeach

<div class="mt-4">
  @component('flowdash::components.pagination', [
    'pages' => 4, 
    'first' => true, 
    'last' => true, 
    'align' => 'center'
  ]) @endcomponent
</div>