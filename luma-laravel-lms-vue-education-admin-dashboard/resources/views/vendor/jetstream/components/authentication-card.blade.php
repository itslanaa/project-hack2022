<div 
  class="d-flex align-items-center" 
  style="min-height: 100vh">
  <div 
    class="col-sm-8 col-md-6 col-lg-4 mx-auto"
    style="min-width: 300px;">
    {{ $logo }}

    <card 
      title="Account"
      header-class="text-center"
      class="navbar-shadow">
      {{ $slot }}
    </card>

  </div>
</div>
