@php
$item = $item ?? [
  'name' => 'Jenell D. Matney', 
  'title' => 'Founder and CEO',
  'image' => '/vendor/flowdash/images/256_rsz_nicolas-horn-689011-unsplash.jpg'
];
@endphp
<div class="card">
  <div class="card-body media">
    <div class="media-left mr-3">
      <div class="avatar">
        <img src="{{ $item['image'] ?? '' }}" alt="Avatar" class="avatar-img rounded-circle">
      </div>
    </div>
    <div class="media-body">
      <p>
        <strong>{{ $item['name'] ?? '' }}</strong><br>
        <span class="text-muted">{{ $item['title'] ?? '' }}</span>
      </p>
      <p class="text-muted mb-0"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</em></p>
    </div>
  </div>
</div>