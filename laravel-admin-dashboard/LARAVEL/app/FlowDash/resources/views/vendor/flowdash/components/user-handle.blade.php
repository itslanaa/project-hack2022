@php
$item = $item ?? [
  'name' => 'Jenell D. Matney', 
  'title' => 'Founder and CEO',
  'image' => '/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg'
];
@endphp
<div class="card">
  <div class="card-body media align-items-center">
    <div class="media-left mr-3">
      <div class="avatar">
        <img src="{{ asset($item['image'] ?? '') }}" alt="Avatar" class="avatar-img rounded-circle">
      </div>
    </div>
    <div class="media-body">
      <strong>{{ $item['name'] ?? '' }}</strong><br>
      <span class="text-muted">{{ $item['title'] ?? '' }}</span>
    </div>
    <div class="media-right ml-3">
      <span class="js-dragula-handle material-icons" style="cursor: move;">drag_handle</span>
    </div>
  </div>
</div>