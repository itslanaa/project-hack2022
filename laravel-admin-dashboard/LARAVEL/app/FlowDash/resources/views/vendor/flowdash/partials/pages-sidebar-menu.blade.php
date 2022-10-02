<li class="sidebar-menu-item {{ activeClass('companies') }}">
  <a class="sidebar-menu-button" href="{{ route('companies') }}">
    <span class="sidebar-menu-text">Companies</span>
    <span class="badge badge-primary ml-auto">NEW</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('stories') }}">
  <a class="sidebar-menu-button" href="{{ route('stories') }}">
    <span class="sidebar-menu-text">Stories</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('discussions') }}">
  <a class="sidebar-menu-button" href="{{ route('discussions') }}">
    <span class="sidebar-menu-text">Discussions</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('invoice') }}">
  <a class="sidebar-menu-button" href="{{ route('invoice') }}">
    <span class="sidebar-menu-text">Invoice</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('pricing') }}">
  <a class="sidebar-menu-button" href="{{ route('pricing') }}">
    <span class="sidebar-menu-text">Pricing</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('edit-account') }}">
  <a class="sidebar-menu-button" href="{{ route('edit-account') }}">
    <span class="sidebar-menu-text">Edit Account</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('profile') }}">
  <a class="sidebar-menu-button" href="{{ route('profile') }}">
    <span class="sidebar-menu-text">User Profile</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('payout') }}">
  <a class="sidebar-menu-button" href="{{ route('payout') }}">
    <span class="sidebar-menu-text">Payout</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('digital-product') }}">
  <a class="sidebar-menu-button" href="{{ route('digital-product') }}">
    <span class="sidebar-menu-text">Digital Product</span>
    <span class="badge badge-primary ml-auto">NEW</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('product-listing') }}">
  <a class="sidebar-menu-button" href="{{ route('product-listing') }}">
    <span class="sidebar-menu-text">Product Listing</span>
    <span class="badge badge-primary ml-auto">NEW</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('blank') }}">
  <a class="sidebar-menu-button" href="{{ route('blank') }}">
    <span class="sidebar-menu-text">Blank Page</span>
    <span class="badge badge-primary ml-auto">NEW</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('login') }}">
  @guest
  <a class="sidebar-menu-button" href="{{ route('login') }}">
    <span class="sidebar-menu-text">Login / Background Image</span>
  </a>
  @else
  <a class="sidebar-menu-button" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
    <span class="sidebar-menu-text">Login / Background Image</span>
  </a>
  @endguest
</li>
<li class="sidebar-menu-item {{ activeClass('register') }}">
  <a class="sidebar-menu-button" href="{{ route('register') }}">
    <span class="sidebar-menu-text">Sign Up / Background Image</span>
  </a>
</li>