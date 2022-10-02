@extends("flowdash::layouts.{$layout}", [
  'title' => 'Email',
  'user_header' => false,
  'bodyClass' => 'app-chat'
])

@section('content')
@php
$members = [[
  'avatar' => '/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg',
  'name' => 'Sherri J. Cardenas', 
  'title' => 'When will Windows 11 come out?',
  'subtitle' => 'Answer: Never. There is no Windows 11. Microsoft does not have a team of pro...',
  'date' => 'Today'
], [
  'avatar' => '/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg',
  'name' => 'Jenell D. Matney', 
  'title' => 'Thank you for contacting XBody',
  'subtitle' => 'Dear Sean, Thank you for showing and interest in our products, we are looking forward to talking to you and welcoming you in the XBody Family ..',
  'date' => 'March 24',
  'active' => true,
  'starred' => true
], [
  'avatar' => '/vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg',
  'name' => 'Joseph S. Ferland', 
  'title' => 'Why Designing Your Own UI Style Guide System Matters',
  'subtitle' => 'Stories for Sean Todays highlights Why Designing Your Own Style Guide System Matters Before divind deep into desi...',
  'date' => 'March 23'
], [
  'avatar' => '/vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg',
  'name' => 'UX Collective', 
  'title' => 'How to hire UX Researchers',
  'subtitle' => 'How to hire UX Researchers &mdash; and more design links this week How to test the skills of a UX researcher...',
  'date' => 'Feb 28'
], [
  'avatar' => '/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg',
  'name' => 'Elizabeth J. Ohara', 
  'title' => 'Business Analyst',
  'date' => 'Feb 24'
], [
  'avatar' => '/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg',
  'name' => 'Kaci M. Langston', 
  'title' => 'Human Resources',
  'date' => 'Feb 22'
]];
@endphp

<div class="app-chat-container {{ $layout === 'fixed' ? ($containerClass ?? 'container') . ' page__container' : '' }}">
  <div class="row h-100 m-0">
    <div class="col-lg-4 py-3 px-0 d-none d-lg-flex flex-column h-100">
      <div class="search-form form-control-rounded search-form--light mx-3">
        <input type="text" class="form-control" placeholder="What are you looking for?" id="searchSample02">
        <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
      </div>

      <div class="flex pt-3" data-perfect-scrollbar>
          
        <div class="list-group list-group-flush" style="position: relative; z-index: 0;">
          @foreach($members as $item)
          <div class="list-group-item d-flex align-items-start {{ isset($item['active']) ? 'border-right-3 border-right-primary' : 'bg-transparent' }}">
            <div class="mr-3 d-flex flex-column align-items-center">
              <a href="#" class="avatar avatar-xs mb-2">
                <img src="{{ $item['avatar'] ?? '' }}" alt="Avatar" class="avatar-img rounded-circle">
              </a>
              <a href="" class="{{ isset($item['starred']) ?? 'text-muted' }}"><i class="material-icons icon-16pt">star{{ !isset($item['starred']) ? '_border' : '' }}</i></a>
            </div>
            <div class="flex">
              <p class="m-0">
                <span class="d-flex align-items-center mb-1">
                  <a href="#" class="text-dark-gray"><strong>{{ $item['name'] ?? '' }}</strong></a>
                  <small class="ml-auto text-muted">{{ $item['date'] ?? '' }}</small>
                </span>
                <span class="d-flex align-items-end">
                  <span class="flex mr-3">
                    <strong class="text-body mb-1">{{ $item['title'] ?? '' }}</strong><br>
                    <small class="text-muted" style="max-height: 2.5rem; overflow: hidden; position: relative; display: inline-block;">{!! $item['subtitle'] ?? '' !!}</small>
                  </span>
                  <a href="" class="d-flex align-items-center mb-1">
                    <small class="text-muted mr-1">2</small>
                    <i class="material-icons icon-16pt">attachment</i>
                  </a>
                </span>
              </p>
            </div>
          </div>
          @endforeach
        </div>

      </div>

      <div class="border-top pt-3 px-3 text-center">
        <a href="" class="btn btn-primary">Create Message</a>
      </div>

    </div>
    <div class="col-lg-8 py-3 px-4 bg-white border-left d-flex flex-column">
      <div class="flex d-flex flex-column">
        <div data-perfect-scrollbar class="h-100">
          <div class="d-flex align-items-center mb-3">
            <a href="#" class="avatar avatar-sm mr-3">
              <img src="{{ $members[1]['avatar'] ?? '' }}" alt="Avatar" class="avatar-img rounded-circle">
            </a>
            <div class="flex">
              <p class="m-0">
                <span class="d-flex align-items-center">
                  <a href="#" class="text-dark-gray"><strong>{{ $members[1]['name'] ?? '' }}</strong></a>
                  <small class="ml-auto text-muted">{{ $members[1]['date'] ?? '' }}</small>
                </span>
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <h1 class="h4 flex">{{ $members[1]['title'] ?? '' }}</h1>
            <div class="d-flex align-items-center">
              <a href="" class="text-dark-gray">
                <i class="material-icons">reply</i>
              </a>
              <a href="" class="text-dark-gray ml-2">
                <i class="material-icons">print</i>
              </a>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex mr-3">
              <p>Dear Sean,<br><br>Thank you for contacting us, we are looking forward to talking to you and welcoming you in the XBody Family! <br><br>You have given us the following details in your message:</p>
              <blockquote class="border-left-3 pl-3">
                <p class="text-dark-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur inventore corporis maxime ipsum animi, quo voluptate hic, accusantium qui beatae assumenda praesentium exercitationem cum enim nobis cumque, voluptates nesciunt quibusdam.</p>
              </blockquote>
              <p>Please do not respond to this email (you can reach us at: <a href="">sales@xbodyworld.com</a>), this is a confirmation reply to let you know we have successfully received your message and forwarded it to our team. <br><br>
              One of our colleagues will try to contact you within two business days and answer any of your questions. <br><br>Kind regards,<br>Team XBody</p>
            </div>
            <div class="text-center ml-3">
              <a href="" class="d-flex flex-column mb-3">
                <i class="material-icons">star</i>
                <small class="text-muted">Starred</small>
              </a>

              <a href="" class="d-flex flex-column">
                <i class="material-icons">attachment</i>
                <small class="text-muted">2 Attachments</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top pt-3 px-3 text-center">
        Click here to <a class="btn btn-link px-0" href="">Reply</a> or <a class="btn btn-link px-0" href="">Forward</a> this message.
      </div>
    </div>
  </div>
</div>
@endsection