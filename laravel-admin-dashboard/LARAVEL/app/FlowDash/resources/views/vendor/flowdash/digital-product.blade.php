@extends("flowdash::layouts.{$layout}", [
  'title' => 'FlowDash - Bootstrap 4 Admin Dashboard',
  'breadcrumb' => [[
    'title' => 'Products'
  ], [
    'title' => 'FlowDash'
  ]],
  'new_button_label' => 'Purchase'
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="row">
    <div class="col-lg-8">
      <a href="" class="dp-preview card mb-4">
        <img src="https://s3.eu-central-1.amazonaws.com/frontted-rails/products/stack-admin/images/stack-admin-m7i928li.png" alt="digital product" class="img-fluid">
        <span class="dp-preview__overlay">
          <span class="btn btn-light">Launch Preview</span>
        </span>
      </a>
      <div>
        <p>FlowDash is the easiest way to build or style your dashboard/application. We’ve removed the design hassle while providing hundreds of beautiful customizable ui components along with multiple dashboards, apps &amp; pages.</p>
        <p>The FlowDash admin theme features over 35+ apps &amp; pages built using various html components. All components in our theme can be modified through their source SASS and JS files.</p>

        <h2 class="mb-4">Highlights</h2>
        <ul>
          <li>Included All of Bootstrap 4.2 Components</li>
          <li>3x Dashboards</li>
          <li>4+ Layout Variations</li>
          <li>4+ Application Interfaces</li>
          <li>Customized Line, Bar, Area &amp; Donut Charts</li>
          <li>Projects, Trello (drag &amp; drop), Chat &amp; Calendar Apps</li>
          <li>10+ stats card variants</li>
          <li>5+ list card variants</li>
          <li>Forms
              <ul>
                  <li>Validation</li>
                  <li>Search</li>
                  <li>Group</li>
                  <li>Rounded</li>
                  <li>Flush</li>
                  <li>Toggle</li>
                  <li>Date pickers</li>
                  <li>Input Masking</li>
                  <li>WYSIWYG editor</li>
                  <li>File Uploads with drag and drop</li>
                  <li>Select2 Plugin</li>
                  <li>and more!</li>
              </ul>
          </li>
          <li>Navbar with buttons, menu, forms, avatars, and more!</li>
          <li>Light/Dark Sidebar Styles</li>
          <li>Material &amp; Font Awesome Icons</li>
          <li>Calendar App with drag &amp; drop events</li>
          <li>Functional listing search with list.js</li>
          <li>Extended/Customized Vector Maps</li>
      </ul>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="d-flex align-items-center mb-3">
        <div class="dropdown">
          <a href="#" class="dropdown-toggle text-body" data-toggle="dropdown">Standard License</a>
          <div class="dropdown-menu py-0">
            <div class="dropdown-item py-3 border-bottom d-flex flex-column">
              <div class="d-flex align-items-center mb-2">
                <span>Standard License</span>
                <strong class="ml-auto" style="font-style: 1rem;">$49.00</strong>
              </div>
              <ul class="pl-4 mb-2 text-muted">
                <li>Use for a single product</li>
                <li>Non-paying customers only</li>
              </ul>
              <small class="text-muted">Read the full <a href="">Standard License</a></small>
            </div>
            <div class="dropdown-item py-3 d-flex flex-column">
              <div class="d-flex align-items-center mb-2">
                <span>Extended License</span>
                <span class="ml-auto" style="font-style: 1rem;">$599.00</span>
              </div>
              <ul class="pl-4 mb-2 text-muted">
                <li>Use for a single product</li>
                <li>Paying customers allowed</li>
              </ul>
              <small class="text-muted">Read the full <a href="">Extended License</a></small>
            </div>
          </div>
        </div>
        <div class="ml-auto h2 mb-0"><strong>$49.00</strong></div>
      </div>

      <div class="mb-4">
        <button class="btn btn-primary btn-block">Purchase</button>
        <button class="btn btn-light btn-block">Live preview</button>
      </div>
      
      <div class="mb-4 text-center">
        <div class="d-flex flex-column align-items-center justify-content-center">
          
          <span class="mb-1">
            <a href="#" class="rating-link active"><i class="material-icons ">star</i></a> 
            <a href="#" class="rating-link active"><i class="material-icons ">star</i></a>
            <a href="#" class="rating-link active"><i class="material-icons ">star</i></a>
            <a href="#" class="rating-link active"><i class="material-icons ">star</i></a>
            <a href="#" class="rating-link active"><i class="material-icons ">star_half</i></a>
          </span>
          <div class="d-flex align-items-center">
            <strong>4.7/5</strong>
            <span class="text-muted ml-1">&mdash; 4 reviews</span>
          </div>

        </div>
      </div>

      <div class="list-group list-group-flush mb-4">
        <div class="list-group-item bg-transparent d-flex align-items-center px-0">
          <strong>Bootstrap</strong>
          <div class="ml-auto">v4.2.1</div>
        </div>
        <div class="list-group-item bg-transparent d-flex align-items-center px-0">
          <strong>Released</strong>
          <div class="ml-auto">21 January 2019</div>
        </div>
        <div class="list-group-item bg-transparent d-flex align-items-center px-0">
          <strong>Updated</strong>
          <div class="ml-auto">26 January 2019</div>
        </div>
      </div>
      
      <div class="card card-body">
        <ul class="list-unstyled text-muted ml-1 mb-0">
          <li class="d-flex align-items-center pb-1"><i class="material-icons icon-16pt text-primary mr-2">check_circle</i> Reviewed by the Frontted Team</li>
          <li class="d-flex align-items-center pb-1"><i class="material-icons icon-16pt text-primary mr-2">check_circle</i> 6 Months Technical Support</li>
          <li class="d-flex align-items-center"><i class="material-icons icon-16pt text-primary mr-2">check_circle</i> 100% Money Back Guarantee</li>
        </ul>
      </div>
    </div>
  </div>
</div>
@endsection