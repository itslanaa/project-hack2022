@extends("flowdash::layouts.{$layout}", [
  'title' => 'Alerts',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Alerts'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="card">
    <div class="card-header card-header-large bg-white">
      <h4 class="card-header__title">Toast</h4>
    </div>
    <div class="card-body">
      <p>Toasts based notifications can be used to to show important alerts or information to users.</p>
      <div class="row align-items-end">
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Primary Example</p>
            <button 
              type="button" 
              class="btn btn-primary"
              data-toggle="toastr"
              data-toastr-type="primary"
              data-toastr-title="Heads up!"
              data-toastr-message="This alert needs your attention, but it is not super important.">
              Click me
            </button>
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Info Example</p>
            <button 
              type="button" 
              class="btn btn-info"
              data-toggle="toastr"
              data-toastr-type="info"
              data-toastr-title="Heads up!"
              data-toastr-message="This alert needs your attention, but it is not super important.">
              Click me
            </button>
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Warning Example</p>
            <button 
              type="button" 
              class="btn btn-warning"
              data-toggle="toastr"
              data-toastr-type="warning"
              data-toastr-title="Heads up!"
              data-toastr-message="Check below fields please.">
              Click me
            </button>
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Success Example</p>
            <button 
              type="button" 
              class="btn btn-success"
              data-toggle="toastr"
              data-toastr-type="success"
              data-toastr-title="Well Done!"
              data-toastr-message="You successfully read this important alert message.">
              Click me
            </button>
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Danger Example</p>
            <button 
              type="button" 
              class="btn btn-danger"
              data-toggle="toastr"
              data-toastr-type="error"
              data-toastr-title="Oh snap!"
              data-toastr-message="Change a few things up and try submitting again.">
              Click me
            </button>
          </div>
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Close Button</p>
            <button 
              type="button" 
              class="btn btn-light"
              data-toggle="toastr"
              data-toastr-type="info"
              data-toastr-title="null"
              data-toastr-message="Set the closeButton to true and the toast will have a close button."
              data-toastr-time-out="0"
              data-toastr-extended-time-out="0"
              data-toastr-progress-bar="false"
              data-toastr-close-button="true">
              Click me
            </button>
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Put some HTML in the text</p>
            <button 
              type="button" 
              class="btn btn-light"
              data-toggle="toastr"
              data-toastr-type="info"
              data-toastr-title="Can I add <em>icons</em>?"
              data-toastr-message="Yes! check this <a href='https://github.com'>update</a>.">
              Click me
            </button>
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Making them sticky</p>
            <button 
              type="button" 
              class="btn btn-light"
              data-toggle="toastr"
              data-toastr-type="success"
              data-toastr-title="null"
              data-toastr-message="Set the timeOut and extendedTimeOut options to 0 and the toast will persist until selected."
              data-toastr-time-out="0"
              data-toastr-extended-time-out="0"
              data-toastr-progress-bar="false">
              Click me
            </button>
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3">
            <p class="text-label">Fade/Slide animation</p>
            <button 
              type="button" 
              class="btn btn-light"
              data-toggle="toastr"
              data-toastr-type="info"
              data-toastr-title="null"
              data-toastr-message="Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery."
              data-toastr-show-method="slideDown"
              data-toastr-hide-method="slideUp"
              data-toastr-close-method="slideUp">
              Click me
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Alerts</h4>
        </div>
        <div class="card-body">
          <p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight contextual classes (i.e. <code>.alert-success</code>). For background color use class <code>.bg-*</code> and <code>.text-white</code>.</p>

          <div class="alert alert-primary" role="alert">
            <strong>Primary - </strong> A simple primary alert - check it out!
          </div>
          <div class="alert alert-secondary" role="alert">
            <strong>Secondary - </strong> A simple secondary alert - check it out!
          </div>
          <div class="alert alert-success" role="alert">
            <strong>Success - </strong> A simple success alert - check it out!
          </div>
          <div class="alert alert-danger" role="alert">
            <strong>Danger - </strong> A simple danger alert - check it out!
          </div>
          <div class="alert alert-warning" role="alert">
            <strong>Warning - </strong> A simple warning alert - check it out!
          </div>
          <div class="alert alert-info" role="alert">
            <strong>Info - </strong> A simple info alert - check it out!
          </div>
          <div class="alert alert-light" role="alert">
            <strong>Light - </strong> A simple light alert - check it out!
          </div>
          <div class="alert alert-dark" role="alert">
            <strong>Dark - </strong> A simple dark alert - check it out!
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Dismissible Alerts</h4>
        </div>
        <div class="card-body">
          <p>Add a button and the <code>.alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the <code>.close</code> button.</p>

          <div class="alert alert-dismissible bg-primary text-white border-0 fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Primary - </strong> A simple primary alert - check it out!
          </div>

          <div class="alert alert-dismissible bg-secondary text-white border-0 fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Secondary - </strong> A simple secondary alert - check it out!
          </div>

          <div class="alert alert-dismissible bg-success text-white border-0 fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Success - </strong> A simple success alert - check it out!
          </div>

          <div class="alert alert-dismissible bg-danger text-white border-0 fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Danger - </strong> A simple danger alert - check it out!
          </div>

          <div class="alert alert-dismissible bg-warning text-white border-0 fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Warning - </strong> A simple warning alert - check it out!
          </div>

          <div class="alert alert-dismissible bg-info text-white border-0 fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Info - </strong> A simple info alert - check it out!
          </div>

          <div class="alert alert-dismissible bg-light border-0 fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Light - </strong> A simple light alert - check it out!
          </div>

          <div class="alert alert-dismissible bg-dark text-white border-0 fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Dark - </strong> A simple dark alert - check it out!
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header card-header-large bg-white">
      <h4 class="card-header__title">Soft Alerts</h4>
    </div>
    <div class="card-body">
      <p>Alternate styles for alerts with softer background color by replacing classes like <code>.alert-primary</code> with <code>.alert-soft-primary</code>. Alerts can also contain additional HTML elements like icons and paragraphs.</p>

      <div class="row">
        <div class="col-lg">
          <div class="alert alert-soft-primary d-flex align-items-center" role="alert">
            <i class="material-icons mr-3">flag</i>
            <div class="text-body"><strong>Tip:</strong> Holding <code>Shift</code> and pressing <code>Enter</code> will create a new line in your message without posting it in channel. Learn more about <a href="">formatting your messages</a>.</div>
          </div>
          
          <div class="alert alert-soft-success d-flex  align-items-center" role="alert">
            <i class="material-icons mr-3">edit</i>
            <div class="text-body"><strong>Note:</strong> If you have two-factor authentication turned on, you will need to enter the 6-digit authentication code we send to your phone.</div>
          </div>

          <div class="alert alert-soft-warning d-flex  align-items-center m-0" role="alert">
            <i class="material-icons mr-3">error_outline</i>
            <div class="text-body"><strong>PRO and FREE versions are now available.</strong> Stack Admin is the easiest way to build or style your dashboard/application. Please visit our <a href="">product page</a> for more information.</div>
          </div>
        </div>
        <div class="col-lg">
          <div class="alert alert-soft-secondary d-flex align-items-center" role="alert">
            <i class="material-icons mr-3">adjust</i>
            <div class="text-body"><strong>Secondary - </strong> A simple secondary alert - check it out!.</div>
          </div>
          <div class="alert alert-soft-danger d-flex align-items-center" role="alert">
            <i class="material-icons mr-3">error_outline</i>
            <div class="text-body"><strong>Danger - </strong> A simple danger alert - check it out!.</div>
          </div>
          <div class="alert alert-soft-info d-flex align-items-center" role="alert">
            <i class="material-icons mr-3">info_outline</i>
            <div class="text-body"><strong>Info - </strong> A simple info alert - check it out!.</div>
          </div>
          <div class="alert alert-soft-dark d-flex align-items-center" role="alert">
            <i class="material-icons mr-3">info</i>
            <div class="text-body"><strong>Dark - </strong> A simple dark alert - check it out!.</div>
          </div>
          <div class="alert alert-soft-light d-flex align-items-center" role="alert">
            <i class="material-icons mr-3">access_time</i>
            <div class="text-body"><strong>Light - </strong> A simple light alert - check it out!.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Badges</h4>
        </div>
        <div class="card-body">
          <p>A small count and labeling component. Please read the <a href="https://getbootstrap.com/docs/4.1/components/badge/" target="_blank">official Bootstrap documentation</a> for a full list of options.</p>

          <span class="badge badge-primary">Primary</span>
          <span class="badge badge-secondary">Secondary</span>
          <span class="badge badge-success">Success</span>
          <span class="badge badge-danger">Danger</span>
          <span class="badge badge-warning">Warning</span>
          <span class="badge badge-info">Info</span>
          <span class="badge badge-light">Light</span>
          <span class="badge badge-dark">Dark</span><br><br>
          <span class="badge badge-pill badge-primary">Primary</span>
          <span class="badge badge-pill badge-secondary">Secondary</span>
          <span class="badge badge-pill badge-success">Success</span>
          <span class="badge badge-pill badge-danger">Danger</span>
          <span class="badge badge-pill badge-warning">Warning</span>
          <span class="badge badge-pill badge-info">Info</span>
          <span class="badge badge-pill badge-light">Light</span>
          <span class="badge badge-pill badge-dark">Dark</span>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header card-header-large bg-white">
          <h4 class="card-header__title">Badges Soft</h4>
        </div>
        <div class="card-body">
          <p>A variation of inversed badges color.</p>

          <span class="badge badge-soft-primary">Primary</span>
          <span class="badge badge-soft-secondary">Secondary</span>
          <span class="badge badge-soft-success">Success</span>
          <span class="badge badge-soft-danger">Danger</span>
          <span class="badge badge-soft-warning">Warning</span>
          <span class="badge badge-soft-info">Info</span>
          <span class="badge badge-soft-light">Light</span>
          <span class="badge badge-soft-dark">Dark</span><br><br>
          <span class="badge badge-pill badge-soft-primary">Primary</span>
          <span class="badge badge-pill badge-soft-secondary">Secondary</span>
          <span class="badge badge-pill badge-soft-success">Success</span>
          <span class="badge badge-pill badge-soft-danger">Danger</span>
          <span class="badge badge-pill badge-soft-warning">Warning</span>
          <span class="badge badge-pill badge-soft-info">Info</span>
          <span class="badge badge-pill badge-soft-light">Light</span>
          <span class="badge badge-pill badge-soft-dark">Dark</span>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection

@section('head')
<!-- Toastr -->
<link type="text/css" href="{{ mix('vendor/toastr.min.css') }}" rel="stylesheet">
@endsection

@section('footer')
<!-- Toastr -->
<script src="{{ mix('vendor/toastr.min.js') }}" defer></script>
<script src="{{ mix('js/toastr.js') }}" defer></script>
@endsection