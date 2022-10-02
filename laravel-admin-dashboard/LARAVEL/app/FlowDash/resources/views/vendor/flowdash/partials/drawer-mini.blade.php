<!-- drawer -->
<div class="mdk-drawer {{ $drawerClass ?? '' }} js-mdk-drawer" id="default-drawer" data-align="{{ $drawerAlign ?? 'start' }}">
  <div class="mdk-drawer__content js-sidebar-mini" data-responsive-width="992px">

    <div class="sidebar sidebar-mini sidebar-primary sidebar-dark bg-dark sidebar-left" data-perfect-scrollbar>
      <ul class="nav flex-column sidebar-menu mt-3" id="sidebar-mini-tabs" role="tablist">
        <li class="sidebar-menu-item {{ ($dashboards_menu ?? false) ? 'active' : '' }}" {!! ($layout ?? 'mini') === 'mini' ? 'data-toggle="tooltip"' : '' !!} data-title="Dashboards" data-placement="right" data-boundary="window">
          <a class="sidebar-menu-button" href="#sm_dashboards" data-toggle="tab" role="tab" aria-controls="sm_dashboards" aria-selected="true">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">dvr</i>
            <span class="sidebar-menu-text">Dashboard</span>
          </a>
        </li>
        <li class="sidebar-menu-item {{ ($apps_menu ?? false) ? 'active' : '' }}" {!! ($layout ?? 'mini') === 'mini' ? 'data-toggle="tooltip"' : '' !!} data-title="Apps" data-placement="right" data-container="body" data-boundary="window">
          <a class="sidebar-menu-button" href="#sm_apps" data-toggle="tab" role="tab" aria-controls="sm_apps" aria-selected="false">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">slideshow</i>
            <span class="sidebar-menu-text">Apps</span>
          </a>
        </li>
        <li class="sidebar-menu-item {{ ($pages_menu ?? false) ? 'active' : '' }}" {!! ($layout ?? 'mini') === 'mini' ? 'data-toggle="tooltip"' : '' !!} data-title="Pages" data-placement="right" data-container="body" data-boundary="window">
          <a class="sidebar-menu-button" href="#sm_pages" data-toggle="tab" role="tab" aria-controls="sm_pages">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">description</i>
            <span class="sidebar-menu-text">Pages</span>
          </a>
        </li>
        <li class="sidebar-menu-item {{ ($components_menu ?? false) ? 'active' : '' }}" {!! ($layout ?? 'mini') === 'mini' ? 'data-toggle="tooltip"' : '' !!} data-title="UI Components" data-placement="right" data-container="body" data-boundary="window">
          <a class="sidebar-menu-button" href="#sm_components" data-toggle="tab" role="tab" aria-controls="sm_components">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">list</i>
            <span class="sidebar-menu-text">UI Components</span>
          </a>
        </li>
        <li class="sidebar-menu-item" {!! ($layout ?? 'mini') === 'mini' ? 'data-toggle="tooltip"' : '' !!} data-title="Layouts" data-placement="right" data-boundary="window">
          <a class="sidebar-menu-button" href="#sm_layouts" data-toggle="tab" role="tab" aria-controls="sm_layouts" aria-selected="false">
            <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">view_compact</i>
            <span class="sidebar-menu-text">Layouts</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="sidebar sidebar-light sidebar-left flex sidebar-secondary" data-perfect-scrollbar>
      <div class="tab-content">
        <div class="tab-pane {{ $dashboards_menu ?? false ? 'fade active show' : '' }}" id="sm_dashboards">
          <div class="sidebar-heading">Dashboards</div>
          <ul class="sidebar-menu">
            @include('flowdash::partials.dashboards-sidebar-menu')
          </ul>
        </div>
        <div class="tab-pane {{ $apps_menu ?? false ? 'fade active show' : '' }}" id="sm_apps">
          <div class="sidebar-heading">Apps</div>
          <ul class="sidebar-menu">
            @include('flowdash::partials.apps-sidebar-menu')
          </ul>
        </div>
        <div class="tab-pane {{ $pages_menu ?? false ? 'fade active show' : '' }}" id="sm_pages">
          <div class="sidebar-heading">Pages</div>
          <ul class="sidebar-menu">
            @include('flowdash::partials.pages-sidebar-menu')
          </ul>
          <div class="sidebar-p-a sidebar-b-y layout-mini__d-none">
            <div class="d-flex align-items-center mb-2">
              <div class="sidebar-heading m-0 p-0 flex">Progress</div>
              <div>60%</div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <div class="tab-pane {{ $components_menu ?? false ? 'fade active show' : '' }}" id="sm_components">
          <div class="sidebar-heading">UI Components</div>
          <ul class="sidebar-menu">
            @include('flowdash::partials.components-sidebar-menu')
          </ul>
        </div>
        <div class="tab-pane" id="sm_layouts">
          <div class="sidebar-heading">Layouts</div>
          <ul class="sidebar-menu">    
            @include('flowdash::partials.layouts-sidebar-menu')
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>
<!-- // END drawer -->