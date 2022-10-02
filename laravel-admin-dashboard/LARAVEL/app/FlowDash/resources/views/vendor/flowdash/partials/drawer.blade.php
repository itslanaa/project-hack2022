<!-- drawer -->
<div class="mdk-drawer js-mdk-drawer {{ $drawerClass ?? '' }}" data-align="{{ $drawerAlign ?? 'start' }}" id="default-drawer">
  <div class="mdk-drawer__content">
    <div class="sidebar sidebar-left sidebar-p-t {{ config("flowdash.sidebarClass.{$layout}") }}" data-perfect-scrollbar>
      
      <div class="sidebar-heading sidebar-m-t">Menu</div>
      <ul class="sidebar-menu">
        <li class="sidebar-menu-item {{ $dashboards_menu ?? '' ? 'active open' : '' }}">
          <a class="sidebar-menu-button" data-toggle="collapse" href="#dashboards_menu">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">dvr</i>
            <span class="sidebar-menu-text">Dashboards</span>
            <span class="ml-auto sidebar-menu-toggle-icon"></span>
          </a>
          <ul class="sidebar-submenu collapse {{ $dashboards_menu ?? '' ? 'show' : '' }}" id="dashboards_menu">
            @include('flowdash::partials.dashboards-sidebar-menu')
          </ul>
        </li>
        <li class="sidebar-menu-item {{ $apps_menu ?? '' ? 'active open' : '' }}">
          <a class="sidebar-menu-button" data-toggle="collapse" href="#apps_menu">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">slideshow</i>
            <span class="sidebar-menu-text">Apps</span>
            <span class="ml-auto sidebar-menu-toggle-icon"></span>
          </a>
          <ul class="sidebar-submenu collapse {{ $apps_menu ?? '' ? 'show' : '' }}" id="apps_menu">
            @include('flowdash::partials.apps-sidebar-menu')
          </ul>
        </li>
        <li class="sidebar-menu-item {{ $pages_menu ?? '' ? 'active open' : '' }}">
          <a class="sidebar-menu-button" data-toggle="collapse" href="#pages_menu">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">description</i>
            <span class="sidebar-menu-text">Pages</span>
            <span class="ml-auto sidebar-menu-toggle-icon"></span>
          </a>
          <ul class="sidebar-submenu collapse {{ $pages_menu ?? '' ? 'show' : '' }}" id="pages_menu">
            @include('flowdash::partials.pages-sidebar-menu')
          </ul>
        </li>
        <li class="sidebar-menu-item">
          <a class="sidebar-menu-button" data-toggle="collapse" href="#layouts_menu">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">view_compact</i>
            <span class="sidebar-menu-text">Layouts</span>
            <span class="ml-auto sidebar-menu-toggle-icon"></span>
          </a>
          <ul class="sidebar-submenu collapse" id="layouts_menu">
            @include('flowdash::partials.layouts-sidebar-menu')
          </ul>
        </li>
      </ul>

      <div class="sidebar-heading">UI Components</div>
      <div class="sidebar-block p-0 mb-0">
        <ul class="sidebar-menu" id="components_menu">
          @include('flowdash::partials.components-sidebar-menu')
        </ul>
  
        <div class="sidebar-p-a sidebar-b-y">
          <div class="d-flex align-items-top mb-2">
            <div class="sidebar-heading m-0 p-0 flex text-body js-text-body">Progress</div>
            <div class="font-weight-bold text-success">60%</div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center sidebar-p-a border-bottom sidebar-account">
        <a href="{{ url('/profile') }}" class="flex d-flex align-items-center text-underline-0 text-body">
          <span class="avatar mr-3">
            <img src="{{ asset('/vendor/flowdash/images/avatar/demi.png') }}" alt="avatar" class="avatar-img rounded-circle">
          </span>
          <span class="flex d-flex flex-column">
            <strong>Adrian Demian</strong>
            <small class="text-muted text-uppercase">Account Manager</small>
          </span>
        </a>
        <div class="dropdown ml-auto">
          <a href="#" data-toggle="dropdown" data-caret="false" class="text-muted"><i class="material-icons">more_vert</i></a>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-item-text dropdown-item-text--lh">
              <div><strong>Adrian Demian</strong></div>
              <div>@adriandemian</div>
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item {{ activeClass('home') }}" href="{{ route('home') }}">Dashboard</a>
            <a class="dropdown-item {{ activeClass('profile') }}" href="{{ url('/profile') }}">My profile</a>
            <a class="dropdown-item {{ activeClass('edit-account') }}" href="{{ route('edit-account') }}">Edit account</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
          </div>
        </div>
      </div>

      <div class="sidebar-p-a">
        <a href="" class="btn btn-primary btn-block">Purchase &dollar;35</a>
      </div>

    </div>
  </div>
</div>
<!-- // END drawer -->