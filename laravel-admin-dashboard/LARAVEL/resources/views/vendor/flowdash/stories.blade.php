@extends("flowdash::layouts.{$layout}", [
  'title' => 'Stories',
  'new_button_label' => 'New Post',
  'breadcrumb' => [[
    'title' => 'Pages'
  ], [
    'title' => 'Stories'
  ]]
])

@section('content')
@php
$posts = [[
  'avatar' => '/vendor/flowdash/images/stories/256_rsz_clem-onojeghuo-193397-unsplash.jpg',
  'title' => 'Cheap Romantic Vacations',
  'views' => 35,
  'tag' => 'future',
  'date' => '11 Nov, 2018 07:46 AM',
  'avatarGroup' => true,
  'avatarCount' => 3,
  'avatars' => [
    '/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg',
    '/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg',
    '/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg'
  ]
], [
  'avatar' => '/vendor/flowdash/images/stories/256_rsz_dex-ezekiel-761373-unsplash.jpg',
  'title' => 'Copper Canyon',
  'views' => 78,
  'tag' => 'future',
  'date' => '10 Nov, 2018 08:25 AM',
  'avatarGroup' => true,
  'avatarCount' => 2,
  'avatars' => [
    '/vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg',
    '/vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg',
    '/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg'
  ]
], [
  'avatar' => '/vendor/flowdash/images/stories/256_rsz_rhema-kallianpur-275251-unsplash.jpg',
  'title' => 'Selecting The Right Hotel',
  'views' => 78,
  'tag' => 'video',
  'date' => '09 Nov, 2018 07:13 PM',
  'avatarGroup' => true,
  'avatarCount' => 1,
  'avatars' => [
    '/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg',
    '/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg',
    '/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg'
  ]
]]; 
@endphp

<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="my-3"><strong class="text-dark-gray">Popular</strong></div>

  <div class="stories-cards mb-4">
    @foreach($posts as $item)
    <div class="card stories-card">
      <div class="stories-card__content d-flex align-items-center flex-wrap">
        <div class="avatar avatar-lg mr-3">
          <a href=""><img src="{{ $item['avatar'] ?? '' }}" alt="avatar" class="avatar-img rounded"></a>
        </div>
        <div class="stories-card__title flex d-flex flex-column">
          <h5 class="card-title m-0"><a href="" class="headings-color">{{ $item['title'] ?? '' }}</a></h5>
          <small class="text-dark-gray">{{ $item['views'] ?? '' }} views last week</small>
        </div>
        <div class="d-flex align-items-center flex-column flex-sm-row stories-card__meta">
          <div class="mr-3 text-dark-gray text-uppercase stories-card__tag d-flex align-items-center">
            <i class="material-icons text-muted-light mr-1">folder_open</i> {{ $item['tag'] ?? '' }}
          </div>
          <div class="mr-3 text-dark-gray stories-card__date">
            <small>{{ $item['date'] ?? '' }}</small>
          </div>
          <div class="media mr-2 ml-sm-auto align-items-center">
            <div class="media-left mr-2 {{ $item['avatarGroup'] ?? '' ? 'avatar-group' : '' }}">
              @foreach($item['avatars'] ?? [] as $avatar)
              <div class="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                <img src="{{ $avatar ?? '' }}" alt="Avatar" class="avatar-img rounded-circle">
              </div>
              @endforeach
            </div>
            <div class="media-body">
              @if($item['avatarCount'] ?? 0 > 1)
              <a href="" class="text-body">+{{ $item['avatarCount'] }} more</a>
              @endif
            </div>
          </div>
        </div>
        <div class="dropdown ml-auto">
          <a href="#" data-toggle="dropdown" data-caret="false" class="text-muted"><i class="material-icons">more_vert</i></a>
          <div class="dropdown-menu dropdown-menu-right">
            <a href="javascript:void(0)" class="dropdown-item">Action</a>
            <a href="javascript:void(0)" class="dropdown-item">Other Action</a>
            <div class="dropdown-divider"></div>
            <a href="javascript:void(0)" class="dropdown-item">Some Other Action</a>
          </div>
        </div>
      </div>
    </div>
    @endforeach
  </div>

  @php
  $popular_stories = [[
    'image' => '/vendor/flowdash/images/stories/256_rsz_euan-carmichael-666378-unsplash.jpg',
    'category' => 'blog',
    'title' => 'Tremblant In Canada',
    'avatar' => '/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg'
  ], [
    'image' => '/vendor/flowdash/images/stories/256_rsz_jared-rice-388260-unsplash.jpg',
    'category' => 'blog',
    'title' => 'Become A Travel Pro In One Easy Lesson',
    'avatar' => '/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg'
  ], [
    'image' => '/vendor/flowdash/images/stories/256_rsz_dex-ezekiel-761373-unsplash.jpg',
    'category' => 'blog',
    'title' => 'A Guide To Rocky Mountain Vacations',
    'avatar' => '/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg'
  ]];
  @endphp

  <div class="my-3"><strong class="text-dark-gray">Recent Posts</strong></div>
  <div class="row">
    @foreach($popular_stories as $item)
    <div class="col-sm-6 col-md-4">
      <div class="card stories-card-popular">
        <img src="{{ $item['image'] ?? '' }}" alt="" class="card-img">
        <div class="stories-card-popular__content">
          <div class="card-body d-flex align-items-center">
            <div class="avatar-group flex">
              <div class="avatar avatar-xs" data-toggle="tooltip" data-placement="top" title="Janell D.">
                <a href=""><img src="{{ $item['avatar'] ?? '' }}" alt="Avatar" class="avatar-img rounded-circle"></a>
              </div>
            </div>
            <a style="text-decoration: none;" class="d-flex align-items-center" href=""><i class="material-icons mr-1" style="font-size: inherit;">remove_red_eye</i> <small>327</small></a>
          </div>
          <div class="stories-card-popular__title card-body">
            <small class="text-muted text-uppercase">{{ $item['category'] ?? '' }}</small>
            <h4 class="card-title m-0"><a href="">{{ $item['title'] ?? '' }}</a></h4>
          </div>
        </div>
      </div>
    </div>
    @endforeach
  </div>
</div>
@endsection