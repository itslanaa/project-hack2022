@extends("flowdash::layouts.{$layout}", [
  'title' => 'Discussions',
  'breadcrumb' => [[
    'title' => 'Discussions'
  ]],
  'new_button_label' => false
])

@section('content')
@php
$stories = [[
  'avatar' => "/vendor/flowdash/images/logos/vuejs.svg",
  'title' => "How can I use props in Vue.js?",
  'date' => "5 min ago",
  'avatar_name' => "Adrian",
  'tag' => "VUE.JS",
  'tag_class' => 'vuejs',
  'avatars' => [
    "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
    "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
    "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg"
  ]
], [
  'avatar' => "/vendor/flowdash/images/logos/angular.svg",
  'title' => "How can I scaffold an App?",
  'date' => "34 min ago",
  'avatar_name' => "Bob",
  'tag' => "ANGULAR",
  'tag_class' => 'angular',
  'avatars' => [
    "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
    "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
    "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg"
  ]
], [
  'avatar' => "/vendor/flowdash/images/logos/rails.svg",
  'title' => "Selecting The MVC",
  'date' => "1 day ago",
  'avatar_name' => "Jimmy",
  'tag' => "RAILS",
  'tag_class' => 'angular',
  'avatars' => [
    "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
    "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
    "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg"
  ]
],[
  'avatar' => "/vendor/flowdash/images/logos/vuejs.svg",
  'title' => "How can I use props in Vue.js?",
  'date' => "5 min ago",
  'avatar_name' => "Adrian",
  'tag' => "VUE.JS",
  'tag_class' => 'vuejs',
  'avatars' => [
    "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
    "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
    "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg"
  ]
], [
  'avatar' => "/vendor/flowdash/images/logos/angular.svg",
  'title' => "How can I scaffold an App?",
  'date' => "34 min ago",
  'avatar_name' => "Bob",
  'tag' => "ANGULAR",
  'tag_class' => 'angular',
  'avatars' => [
    "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
    "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
    "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg"
  ]
]]
@endphp

<div class="{{ $containerClass ?? 'container' }} page__container">

  <div class="row">
    <div class="col-md-3">
      <a href="#" class="btn btn-success mb-3 btn-block">New Thread <i class="material-icons">add_circle_outline</i></a>
      <ul class="list-group">
        <li class="list-group-item active"><a href="#" class="text-white"><strong>All Threads</strong></a></li>
        <li class="list-group-item"><a href="#"><strong> Posts</strong></a></li>
        <li class="list-group-item"><a href="#"><strong>Following</strong></a></li>
        <li class="list-group-item"><a href="#"><strong>Resolved</strong></a></li>
        <li class="list-group-item"><a href="#"><strong>Unresolved</strong></a></li>
      </ul>
    </div>
    <div class="col-md-9">
      <div class="d-flex mb-3">
        <div class="form-inline">
          <div class="search-form search-form--light">
            <input type="text" class="form-control" placeholder="Search ..." id="searchSample03">
            <button class="btn" type="button"><i class="material-icons">search</i></button>
          </div>
        </div>
        <div class="ml-auto d-flex">
          <div class="form-group form-inline mb-0">
            <label for="sort" class="mr-2">Sort by</label>
            <select class="form-control" id="sort">
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div class="stories-cards mb-4">
        @foreach($stories as $item)
        <div class="card">
          <div class="d-flex align-items-center flex-wrap">
            <div class="m-4">
              <a href="#" class="d-flex align-items-center text-muted">
                <!-- LOGO -->
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <g stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M26.09 37.272l-7.424 1.06 1.06-7.424 19.092-19.092c1.758-1.758 4.606-1.758 6.364 0s1.758 4.606 0 6.364L26.09 37.272zM12 1.498h12c.828 0 1.5.672 1.5 1.5v3c0 .828-.672 1.5-1.5 1.5H12c-.828 0-1.5-.672-1.5-1.5v-3c0-.828.672-1.5 1.5-1.5zM25.5 4.498h6c1.656 0 3 1.344 3 3" stroke-width="3"></path>
                    <path d="M34.5 37.498v6c0 1.656-1.344 3-3 3h-27c-1.656 0-3-1.344-3-3v-36c0-1.656 1.344-3 3-3h6M10.5 16.498h15M10.5 25.498h6" stroke-width="3"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div class="stories-card__title flex">
              <h5 class="card-title m-0"><a href="" class="text-body">{{ $item['title'] }}</a></h5>
              <small class="text-muted"><a href="#"><strong>{{ $item['avatar_name'] }}</strong></a>  replied {{ $item['date'] }}</small>
            </div>
            <div class="ml-auto d-flex align-items-center">
              <div class="avatar-group mr-3">
                @foreach($item['avatars'] as $avatar)
                <div class="avatar avatar-xxs"  data-toggle="tooltip" data-placement="top" title="Author Name">
                  <img src="{{ asset($avatar) }}" alt="Avatar" class="avatar-img rounded-circle">
                </div>
                @endforeach
              </div>
              <div class="badge badge-soft-{{ $item['tag_class'] }} badge-pill mr-3">{{ $item['tag'] }}</div>
            </div>
          </div>
        </div>
        @endforeach
      </div>
      <div class="d-flex flex-row align-items-center mb-3">
        <div class="form-inline">
          View 
          <select class="custom-select ml-2">
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
  </div>
</div>
@endsection