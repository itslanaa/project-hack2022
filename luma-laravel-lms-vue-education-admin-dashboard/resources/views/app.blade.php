<!DOCTYPE html>
<html dir="ltr" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&amp;display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&amp;display=swap">

        <!-- Styles -->
        <link rel="preload" href="{{ mix('css/app.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        @preload

        <link rel="preload" href="{{ asset(hashUrl('/fonts/vendor/material-design-icons-icondist/MaterialIcons-Regular.woff2')) }}" as="font" type="font/woff2" crossorigin="anonymous">

        <noscript>
            <link 
                rel="stylesheet" 
                href="https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&amp;display=swap">
            <link 
                rel="stylesheet" 
                href="{{ mix('css/app.css') }}">
        </noscript>

        {{-- Only required for the default Jetstream Views --}}
        {{-- <link rel="stylesheet" href="{{ mix('css/app.tailwind.css') }}"> --}}

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/manifest.js') }}" defer></script>
        <script src="{{ mix('js/vendor.js') }}" defer></script>
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body class="antialiased">
        @inertia
    </body>
</html>
