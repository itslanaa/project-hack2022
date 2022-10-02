<li class="sidebar-menu-item {{ ($layout ?? '') === 'default' ? 'active' : '' }}">
  <a class="sidebar-menu-button" href="{{ route(Route::currentRouteName(), ['layout' => 'default']) }}">
    <span class="sidebar-menu-text">Default</span>
  </a>
</li>
<li class="sidebar-menu-item {{ ($layout ?? '') === 'fluid' ? 'active' : '' }}">
  <a class="sidebar-menu-button" href="{{ route(Route::currentRouteName(), ['layout' => 'fluid']) }}">
    <span class="sidebar-menu-text">Full Width Navs</span>
  </a>
</li>
<li class="sidebar-menu-item {{ ($layout ?? '') === 'fixed' ? 'active' : '' }}">
  <a class="sidebar-menu-button" href="{{ route(Route::currentRouteName(), ['layout' => 'fixed']) }}">
    <span class="sidebar-menu-text">Fixed Navs</span>
  </a>
</li>
<li class="sidebar-menu-item {{ ($layout ?? '') === 'mini' ? 'active' : '' }}">
  <a class="sidebar-menu-button" href="{{ route(Route::currentRouteName(), ['layout' => 'mini']) }}">
    <span class="sidebar-menu-text">Mini Sidebar + Navs</span>
  </a>
</li>