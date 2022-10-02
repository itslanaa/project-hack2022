<li class="sidebar-menu-item {{ activeClass('home') }}">
  <a class="sidebar-menu-button" href="{{ route('home') }}">
    <span class="sidebar-menu-text">Default</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('analytics') }}">
  <a class="sidebar-menu-button" href="{{ route('analytics') }}">
    <span class="sidebar-menu-text">Analytics</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('staff') }}">
  <a class="sidebar-menu-button" href="{{ route('staff') }}">
    <span class="sidebar-menu-text">Staff</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('ecommerce') }}">
  <a class="sidebar-menu-button" href="{{ route('ecommerce') }}">
    <span class="sidebar-menu-text">E-commerce</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('quick-access') }}">
  <a class="sidebar-menu-button" href="{{ route('quick-access') }}">
    <span class="sidebar-menu-text">Quick Access</span>
  </a>
</li>