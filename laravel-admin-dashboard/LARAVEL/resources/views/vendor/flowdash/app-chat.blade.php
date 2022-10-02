@extends("flowdash::layouts.{$layout}", [
  'title' => 'Chat',
  'user_header' => false,
  'bodyClass' => 'app-chat'
])

@section('content')
@php
$chat = [[
  'avatar' => "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
  'name' => "Jenell D. Matney", 
  'date' => "4 days ago",
  'message' => "Hey guys, just kicking things off here in the chat window. Hope you're all ready to tackle this great project. Let's smash some Brand Concept & Design!"
], [
  'avatar' => "/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg",
  'name' => "Sherri J. Cardenas", 
  'date' => "3 days ago",
  'message' => "Nice one @Claire, we've got some killer ideas kicking about already.",
  'image' => "/vendor/flowdash/images/stories/256_rsz_dex-ezekiel-761373-unsplash.jpg"
], [
  'avatar' => "/vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg",
  'name' => "Joseph S. Ferland", 
  'date' => "2 days ago",
  'message' => "Roger that boss! @Ravi and I have already started gathering some stuff for the mood boards, excited to start! 🔥"
], [
  'avatar' => "/vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg",
  'name' => "Bryan K. Davis", 
  'date' => "1 day ago",
  'message' => "😉"
], [
  'avatar' => "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg",
  'name' => "Elizabeth J. Ohara", 
  'date' => "4 hours ago",
  'message' => "Can't wait! @David how are we coming along with the Client Objective Meeting?"
], [
  'avatar' => "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
  'name' => "Kaci M. Langston", 
  'date' => "just now",
  'message' => "Coming along nicely, we've got a draft for the client questionnaire completed, take a look! 🤓",
  'file' => [
    'name' => "draft.doc",
    'size' => "15kb"
  ]
]];

$members = [[
  'avatar' => "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
  'name' => "Jenell D. Matney", 
  'title' => "Founder and CEO"
], [
  'avatar' => "/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg",
  'name' => "Sherri J. Cardenas", 
  'title' => "Software Engineer"
], [
  'avatar' => "/vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg",
  'name' => "Joseph S. Ferland", 
  'title' => "Web Designer"
], [
  'avatar' => "/vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg",
  'name' => "Bryan K. Davis", 
  'title' => "Web Developer"
], [
  'avatar' => "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg",
  'name' => "Elizabeth J. Ohara", 
  'title' => "Business Analyst"
], [
  'avatar' => "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
  'name' => "Kaci M. Langston", 
  'title' => "Human Resources"
]]
@endphp

<div class="app-chat-container {{ $layout === 'fixed' ? ($containerClass ?? 'container') . ' page__container' : '' }}">
  <div class="row h-100 m-0">
    <div class="col-lg-8 py-3 d-flex flex-column h-100">
      <div class="search-form form-control-rounded search-form--light">
        <input type="text" class="form-control" placeholder="Search messages" id="searchSample02">
        <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
      </div>

      <div class="flex p-3" data-perfect-scrollbar>
        @foreach($chat as $item)
        <div class="media {{ !$loop->last ? 'border-bottom' : '' }} py-3">
          <a href="#" class="avatar avatar-sm mr-3">
            <img src="{{ $item['avatar'] }}" class="avatar-img rounded-circle" alt="avatar">
          </a>
          <div class="media-body">
            <div class="d-flex align-items-center">
              <div class="flex">
                <a href="#" class="text-body bold">{{ $item['name'] }}</a>
              </div>
              <small class="text-muted">{{ $item['date'] }}</small>
            </div>
            <div>{{ $item['message'] }}</div>
            @if(isset($item['image']))
            <a href="" class="avatar avatar-xxl avatar-4by3 mt-2">
              <img src="{{ asset($item['image']) }}" alt="image" class="avatar-img rounded">
            </a>
            @endif
            @if(isset($item['file']))
            <a href="#" class="media align-items-center mt-2 text-underline-0 bg-white p-2">
              <span class="avatar avatar-xs mr-2">
                <span class="avatar-title rounded-circle">
                  <i class="material-icons">attach_file</i>
                </span>
              </span>
              <span class="media-body" style="line-height: 1.5">
                <span class="text-primary">{{ $item['file']['name'] }}</span><br>
                <span class="text-muted">{{ $item['file']['size'] }}</span>
              </span>
            </a>
            @endif
          </div>
        </div>
        @endforeach
      </div>

      <div class="input-group input-group-merge">
        <input type="text" class="form-control form-control-appended" required="" placeholder="Type message">
        <div class="input-group-append">
          <div class="input-group-text pr-2">
            <button class="btn btn-flush" type="button"><i class="material-icons">tag_faces</i></button>
          </div>
          <div class="input-group-text pl-0">
            <div class="custom-file custom-file-naked d-flex" style="width: 24px">
              <input type="file" class="custom-file-input" id="customFile">
              <label class="custom-file-label" style="color: inherit;" for="customFile">
                <i class="material-icons">attach_file</i>
              </label>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="col-lg-4 py-3 px-0 bg-white border-left d-flex flex-column h-100">
      <div class="form-group px-3">
        <div class="input-group input-group-merge input-group-rounded">
          <input type="text" class="form-control form-control-prepended" placeholder="Filter members">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <span class="material-icons">filter_list</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex d-flex flex-column" data-perfect-scrollbar>
        <div class="list-group list-group-flush" style="position: relative; z-index: 0;">

          @foreach($members as $item)
          <div class="list-group-item d-flex media align-items-center">
            <a href="#" class="avatar avatar-sm media-left mr-3">
              <img src="{{ asset($item['avatar']) }}" alt="Avatar" class="avatar-img rounded-circle">
            </a>
            <div class="media-body">
              <p class="m-0">
                <a href="#" class="text-body"><strong>{{ $item['name'] }}</strong></a><br>
                <span class="text-muted">{{ $item['title'] }}</span>
              </p>
            </div>
          </div>
          @endforeach

        </div>
      </div>
    </div>
  </div>
</div>
@endsection
