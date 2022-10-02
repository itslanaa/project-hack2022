<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">

<title>{{ title($title ?? '') }}</title>

<!-- Fonts -->
<link rel="dns-prefetch" href="//fonts.gstatic.com">
{{-- <link href="https://fonts.googleapis.com/css?family=Lato:400,700%7COswald:300,400,500,700%7CRoboto:400,500%7CExo+2:600&display=swap" rel="stylesheet"> --}}

<!-- Prevent the demo from appearing in search engines -->
<meta name="robots" content="noindex">

<!-- Perfect Scrollbar -->
<link type="text/css" href="{{ mix('vendor/perfect-scrollbar.css') }}" rel="stylesheet">

<!-- Material Design Icons -->
<link type="text/css" href="{{ mix('css/vendor/material-icons.css') }}" rel="stylesheet">

<!-- Font Awesome Icons -->
<link type="text/css" href="{{ mix('css/vendor/fontawesome.css') }}" rel="stylesheet">

<!-- App CSS -->
<link type="text/css" href="{{ mix('css/app.css') }}" rel="stylesheet">

@yield('head')

<script src="{{ mix('js/app.js') }}" defer></script>