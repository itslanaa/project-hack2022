<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ config('flowdash.rtl') ? 'rtl' : 'ltr' }}">
<head>
    @include('flowdash::partials.header')
</head>

@php
    $layout = 'default';
@endphp

<body class="{{ $bodyClass ?? 'layout-fluid' }}">

  @include('flowdash::partials.preloader')
  
  @yield('content')

  @include('flowdash::partials.footer')
  @yield('footer')
</body>
</html>