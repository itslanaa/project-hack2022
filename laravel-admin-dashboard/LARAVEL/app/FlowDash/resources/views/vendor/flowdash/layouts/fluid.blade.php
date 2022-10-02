<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ config('flowdash.rtl') ? 'rtl' : 'ltr' }}">
<head>
    @include('flowdash::partials.header')
</head>

@php
    $layout = 'fluid';
    $navbarContainerClass = $navbarContainerClass ?? 'container-fluid';
    $drawerAlign = 'end';
    $dashboards_menu = request()->routeIs(['home', 'analytics', 'quick-access', 'staff', 'ecommerce']);
    $apps_menu = request()->routeIs(['app-trello', 'app-projects', 'app-activities', 'app-fullcalendar', 'app-chat', 'app-email', 'app-browse-courses', 'app-course', 'app-lesson']);
    $pages_menu = request()->routeIs(['companies', 'stories', 'discussions', 'product-listing', 'payout', 'invoice', 'pricing', 'edit-account', 'blank', 'profile', 'digital-product', 'login', 'register']);
    $components_menu = request()->routeIs(['ui-buttons', 'ui-alerts', 'ui-avatars', 'ui-modals', 'ui-charts', 'ui-icons', 'ui-forms', 'ui-range-sliders', 'ui-datetime', 'ui-tables', 'ui-tabs', 'ui-loaders', 'ui-drag', 'ui-pagination', 'ui-vector-maps']);
@endphp

<body class="layout-fluid layout-sticky-subnav {{ $bodyClass ?? '' }}">

    @include('flowdash::partials.preloader')

    <!-- Header Layout -->
    <div class="mdk-header-layout js-mdk-header-layout">

        <!-- Header -->
        <div id="header" class="mdk-header js-mdk-header {{ $headerClass ?? 'mb-0' }}" data-fixed>
            <div class="mdk-header__content">
                @include('flowdash::partials.navbar')
            </div>
        </div>
        <!-- // END Header -->

        <!-- Header Layout Content -->
        <div class="mdk-header-layout__content page {{ $pageContentClass ?? '' }}">

            @auth
                @if($user_header ?? true !== false)
                    @include('flowdash::partials.user-header')
                @endif
            @endauth

            @if($submenu ?? true !== false)
                <div class="page__header page__header-nav">
                    <div class="{{ $containerClass }} page__container">
                        @include('flowdash::partials.submenu')
                    </div>
                </div>
            @endif

            @yield('content')
        </div>
        <!-- // END Header Layout Content -->

    </div>
    <!-- // END Header Layout -->

    @include('flowdash::partials.drawer')
    {{-- @include('flowdash::partials.app-settings') --}}

    @include('flowdash::partials.footer')
    @yield('footer')
</body>
</html>
