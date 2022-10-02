<ul class="nav navbar-nav">
  <li class="nav-item dropdown {{ ($dashboards_menu ?? false) ? 'active' : '' }}">
    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Dashboards</a>
    <div class="dropdown-menu">
      <a class="dropdown-item {{ activeClass('home') }}" href="{{ route('home') }}">Default</a>
      <a class="dropdown-item {{ activeClass('analytics') }}" href="{{ route('analytics') }}">Analytics</a>
      <a class="dropdown-item {{ activeClass('staff') }}" href="{{ route('staff') }}">Staff</a>
      <a class="dropdown-item {{ activeClass('ecommerce') }}" href="{{ route('ecommerce') }}">E-commerce</a>
      <a class="dropdown-item {{ activeClass('quick-access') }}" href="{{ route('quick-access') }}">Quick Access</a>
    </div>
  </li>
  <li class="nav-item dropdown {{ ($apps_menu ?? false) ? 'active' : '' }}">
    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Apps</a>
    <div class="dropdown-menu">
      <a class="dropdown-item {{ activeClass('app-activities') }}" href="{{ route('app-activities') }}">Activities</a>
      <a class="dropdown-item {{ activeClass('app-trello') }}" href="{{ route('app-trello') }}">Trello</a>
      <a class="dropdown-item {{ activeClass('app-projects') }}" href="{{ route('app-projects') }}">Projects</a>
      <a class="dropdown-item {{ activeClass('app-fullcalendar') }}" href="{{ route('app-fullcalendar') }}">Event Calendar</a>
      <a class="dropdown-item {{ activeClass('app-chat') }}" href="{{ route('app-chat') }}">Chat</a>
      <a class="dropdown-item {{ activeClass('app-email') }}" href="{{ route('app-email') }}">Email</a>
      <div class="dropdown-divider"></div>
      <div class="dropdown-header">Education</div>
      <a class="dropdown-item {{ activeClass('app-browse-courses') }}" href="{{ route('app-browse-courses') }}">Browse Courses</a>
      <a class="dropdown-item {{ activeClass('app-course') }}" href="{{ route('app-course') }}">Course</a>
      <a class="dropdown-item {{ activeClass('app-lesson') }}" href="{{ route('app-lesson') }}">Lesson</a>
    </div>
  </li>
  <li class="nav-item dropdown {{ ($pages_menu ?? false) ? 'active' : '' }}">
    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
    <div class="dropdown-menu">
      <a class="dropdown-item {{ activeClass('companies') }}" href="{{ route('companies') }}">Companies</a>
      <a class="dropdown-item {{ activeClass('stories') }}" href="{{ route('stories') }}">Stories</a>
      <a class="dropdown-item {{ activeClass('discussions') }}" href="{{ route('discussions') }}">Discussions</a>
      <a class="dropdown-item {{ activeClass('invoice') }}" href="{{ route('invoice') }}">Invoice</a>
      <a class="dropdown-item {{ activeClass('pricing') }}" href="{{ route('pricing') }}">Pricing</a>
      <a class="dropdown-item {{ activeClass('edit-account') }}" href="{{ route('edit-account') }}">Edit Account</a>
      <a class="dropdown-item {{ activeClass('profile') }}" href="{{ route('profile') }}">Profile</a>
      <a class="dropdown-item {{ activeClass('payout') }}" href="{{ route('payout') }}">Payout</a>
      <a class="dropdown-item" href="{{ route('login') }}">Login</a>
      <a class="dropdown-item" href="{{ route('register') }}">Sign Up</a>
      <a class="dropdown-item d-flex align-items-center {{ activeClass('digital-product') }}" href="{{ route('digital-product') }}">
        <span class="flex mr-2">Digital Product</span>
        <span class="badge badge-primary">NEW</span>
      </a>
      <a class="dropdown-item d-flex align-items-center {{ activeClass('product-listing') }}" href="{{ route('product-listing') }}">
        <span class="flex mr-2">Product Listing</span>
        <span class="badge badge-primary">NEW</span>
      </a>
      <a class="dropdown-item d-flex align-items-center {{ activeClass('blank') }}" href="{{ route('blank') }}">
        <span class="flex mr-2">Blank Page</span>
        <span class="badge badge-primary">NEW</span>
      </a>
    </div>
  </li>
  <li class="nav-item dropdown {{ ($components_menu ?? false) ? 'active' : '' }}">
    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Components</a>
    <div class="dropdown-menu">
      <a class="dropdown-item {{ activeClass('ui-buttons') }}" href="{{ route('ui-buttons') }}">Buttons</a>
      <a class="dropdown-item {{ activeClass('ui-alerts') }}" href="{{ route('ui-alerts') }}">Alerts</a>
      <a class="dropdown-item {{ activeClass('ui-avatars') }}" href="{{ route('ui-avatars') }}">Avatars</a>
      <a class="dropdown-item {{ activeClass('ui-modals') }}" href="{{ route('ui-modals') }}">Modals</a>
      <a class="dropdown-item {{ activeClass('ui-charts') }}" href="{{ route('ui-charts') }}">Charts</a>
      <a class="dropdown-item {{ activeClass('ui-icons') }}" href="{{ route('ui-icons') }}">Icons</a>
      <a class="dropdown-item {{ activeClass('ui-forms') }}" href="{{ route('ui-forms') }}">Forms</a>
      <a class="dropdown-item {{ activeClass('ui-range-sliders') }}" href="{{ route('ui-range-sliders') }}">Range Sliders</a>
      <a class="dropdown-item {{ activeClass('ui-datetime') }}" href="{{ route('ui-datetime') }}">Time &amp; Date</a>
      <a class="dropdown-item {{ activeClass('ui-tables') }}" href="{{ route('ui-tables') }}">Tables</a>
      <a class="dropdown-item {{ activeClass('ui-tabs') }}" href="{{ route('ui-tabs') }}">Tabs</a>
      <a class="dropdown-item {{ activeClass('ui-loaders') }}" href="{{ route('ui-loaders') }}">Loaders</a>
      <a class="dropdown-item {{ activeClass('ui-drag') }}" href="{{ route('ui-drag') }}">Drag &amp; Drop</a>
      <a class="dropdown-item {{ activeClass('ui-pagination') }}" href="{{ route('ui-pagination') }}">Pagination</a>
      <a class="dropdown-item {{ activeClass('ui-vector-maps') }}" href="{{ route('ui-vector-maps') }}">Vector Maps</a>
    </div>
  </li>
  <li class="nav-item dropdown">
    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Layouts</a>
    <div class="dropdown-menu">
      <a class="dropdown-item {{ ($layout ?? '') === 'default' ? 'active' : '' }}" href="{{ route(Route::currentRouteName(), ['layout' => 'default']) }}">Default</a>
      <a class="dropdown-item {{ ($layout ?? '') === 'fluid' ? 'active' : '' }}" href="{{ route(Route::currentRouteName(), ['layout' => 'fluid']) }}">Full Width Navs</a>
      <a class="dropdown-item {{ ($layout ?? '') === 'fixed' ? 'active' : '' }}" href="{{ route(Route::currentRouteName(), ['layout' => 'fixed']) }}">Fixed Navs</a>
      <a class="dropdown-item {{ ($layout ?? '') === 'mini' ? 'active' : '' }}" href="{{ route(Route::currentRouteName(), ['layout' => 'mini']) }}">Mini Sidebar + Navs</a>
    </div>
  </li>
</ul>