<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ config('flowdash.rtl') ? 'rtl' : 'ltr' }}">
<head>
    @include('flowdash::partials.header')
</head>

@php
    $layout = 'default';
    $navbarContainerClass = $navbarContainerClass ?? 'container-fluid';
    $drawerFile = $drawerFile ?? 'drawer';
    $dashboards_menu = request()->routeIs(['home', 'analytics', 'quick-access', 'staff', 'ecommerce']);
    $apps_menu = request()->routeIs(['app-trello', 'app-projects', 'app-activities', 'app-fullcalendar', 'app-chat', 'app-email', 'app-browse-courses', 'app-course', 'app-lesson']);
    $pages_menu = request()->routeIs(['companies', 'stories', 'discussions', 'product-listing', 'payout', 'invoice', 'pricing', 'edit-account', 'blank', 'profile', 'digital-product', 'login', 'register']);
    $components_menu = request()->routeIs(['ui-buttons', 'ui-alerts', 'ui-avatars', 'ui-modals', 'ui-charts', 'ui-icons', 'ui-forms', 'ui-range-sliders', 'ui-datetime', 'ui-tables', 'ui-tabs', 'ui-loaders', 'ui-drag', 'ui-pagination', 'ui-vector-maps']);
@endphp

<body class="layout-default {{ $bodyClass ?? '' }}">

    @include('flowdash::partials.preloader')

    <!-- Header Layout -->
    <div class="mdk-header-layout js-mdk-header-layout">

        <!-- Header -->
        @if($header ?? true !== false)
        <div id="header" class="mdk-header js-mdk-header m-0" data-fixed>
            <div class="mdk-header__content">
                @if($navbar ?? true !== false)
                    @include('flowdash::partials.navbar')
                @endif
            </div>
        </div>
        @endif
        <!-- // END Header -->

        <!-- Header Layout Content -->
        <div class="mdk-header-layout__content">

          <div class="mdk-drawer-layout js-mdk-drawer-layout" data-push data-responsive-width="992px">
            <div class="mdk-drawer-layout__content page {{ $pageContentClass ?? '' }}">

                @auth
                    @if($user_header ?? true !== false)
                        @include('flowdash::partials.user-header')
                    @endif
                @endauth

                @yield('content')
            </div>
            <!-- // END drawer-layout__content -->

            @include("flowdash::partials.{$drawerFile}")
          </div>
          <!-- // END drawer-layout -->

        </div>
        <!-- // END header-layout__content -->

    </div>
    <!-- // END header-layout -->
    
    {{-- @include('flowdash::partials.app-settings') --}}

    @include('flowdash::partials.footer')
    @yield('footer')
</body>
</html>
