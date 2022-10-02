@extends("flowdash::layouts.{$layout}", [
  'title' => 'Loaders',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Loaders'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass }} page__container">
  <div class="row">
    <div class="col-lg">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Sizes</h4>
        </div>
        <div class="card-body">
          <p>A simple yet versatile animated spinner component. Add <code>.loader-[sm|lg]</code> or <code>.is-loading-[sm|lg]</code> to create loaders at different sizes.</p>
          <div class="loader-list">
            <div class="loader loader-lg"></div>
            <div class="loader"></div>
            <div class="loader loader-sm"></div>
          </div>
        </div>
      </div>

      <h4>Loader Helper</h4>
      <p>Indicate loading state of nearly any component with an <code>.is-loading</code> modifier.</p>

      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Loading card</h4>
        </div>
        <div class="card-body is-loading is-loading-lg">
          Loading content
        </div>
      </div>

      <div class="button-list">
        <a href="#" class="btn btn-lg btn-primary is-loading">Button</a>
        <a href="#" class="btn btn-outline-primary is-loading is-loading-sm">Button</a>
      </div>
    </div>
    <div class="col-lg">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Colors</h4>
        </div>
        <div class="card-body">
          <p>Using Bootstrap’s typical naming structure i.e. <code>.loader-primary</code>, you can create colored loaders depending on your needs.</p>

          <div class="loader-list">
            <div class="loader loader-primary"></div>
            <div class="loader loader-secondary"></div>
            <div class="loader loader-success"></div>
            <div class="loader loader-danger"></div>
            <div class="loader loader-warning"></div>
            <div class="loader loader-info"></div>
            <div class="loader loader-dark"></div>
            <div class="loader loader-light"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection