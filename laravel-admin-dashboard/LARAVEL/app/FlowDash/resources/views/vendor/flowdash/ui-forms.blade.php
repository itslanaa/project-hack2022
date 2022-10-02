@extends("flowdash::layouts.{$layout}", [
  'title' => 'Forms',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Forms'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Default Forms</strong></p>
        <p class="text-muted">Stack supports all of Bootstrap's default form styling in addition to a handful of new input types and features. Please <a href="https://getbootstrap.com/docs/4.1/components/forms/" target="_blank">read the official documentation</a> for a full list of options from Bootstrap's core library.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Your email:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your email address ..">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Your password:</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password ..">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Form Validation</strong></p>
        <p class="text-muted">Provide valuable, actionable feedback to your users with HTML5 form validation. Indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code> classes.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body">
        <form>
          <div class="was-validated">
            <div class="form-row">
              <div class="col-12 col-md-6 mb-3">
                <label for="validationSample01">First name</label>
                <input type="text" class="form-control" id="validationSample01" placeholder="First name" value="Mark" required="">
                <div class="invalid-feedback">Please provide a first name.</div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-12 col-md-6 mb-3">
                <label for="validationSample02">Last name</label>
                <input type="text" class="form-control" id="validationSample02" placeholder="Last name" value="Otto" required="">
                <div class="invalid-feedback">Please provide a last name.</div>
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-12 col-md-6 mb-3">
                <label for="validationSample03">City</label>
                <input type="text" class="form-control" id="validationSample03" placeholder="City" required="">
                <div class="invalid-feedback">Please provide a valid city.</div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-12 col-md-6 mb-3">
                <label for="validationSample04">State</label>
                <input type="text" class="form-control" id="validationSample04" placeholder="State" required="">
                <div class="invalid-feedback">Please provide a valid state.</div>
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" value="" id="invalidCheck01" required="" checked="">
              <label class="custom-control-label" for="invalidCheck01">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Search</strong></p>
        <p class="text-muted">A dedicated form group alternative for search forms that always keeps the submit button as part of the form control.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body">
        <form action="#">
          <div class="form-group">
            <div class="row">
              <div class="col-lg">
                <label for="searchSample03">Regular</label>
                <div class="search-form search-form--light">
                  <input type="text" class="form-control" placeholder="Search icons" id="searchSample03">
                  <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
                </div>
              </div>
              <div class="col-lg">
                <label for="searchSample04">Flush</label>
                <div class="search-form form-control-flush search-form--light">
                  <input type="text" class="form-control px-0" placeholder="Search icons" id="searchSample04">
                  <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="searchSample01">Large</label>
            <div class="search-form search-form--light input-group-lg">
              <input type="text" class="form-control" placeholder="Search icons" id="searchSample01">
              <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
            </div>
          </div>
          <div class="form-group m-0">
            <label for="searchSample02">Rounded</label>
            <div class="search-form form-control-rounded search-form--light input-group-lg">
              <input type="text" class="form-control" placeholder="Search icons" id="searchSample02">
              <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Merge Group</strong></p>
        <p class="text-muted">A slightly modified version of the default input groups that always keeps icons as a part of the form control. Also works with validation.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body">
        <form action="#">
          <div class="form-group">
            <div class="input-group input-group-merge">
              <input type="text" class="form-control form-control-prepended" required="" placeholder="Input group prepended">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <span class="material-icons">remove_red_eye</span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group input-group-merge">
              <input type="text" class="form-control form-control-appended" required="" placeholder="Input group appended">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="material-icons">lock_outline</span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group input-group-merge">
              <input type="text" class="form-control form-control-prepended is-valid" required="" placeholder="Input group prepended">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <span class="material-icons">remove_red_eye</span>
                </div>
              </div>
            </div>
          </div>
          <div class="input-group input-group-merge">
            <input type="text" class="form-control form-control-appended is-invalid" required="" placeholder="Input group appended">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="material-icons">lock_outline</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Rounded</strong></p>
        <p class="text-muted">Form control with rounded corners with the <code>.form-control-rounded</code> modifier.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body d-flex align-items-center">
        <div class="flex">
          <label for="roundedSample01">Rounded</label>
          <input type="text" class="form-control form-control-rounded" placeholder="Rounded form control ..." id="roundedSample01">
        </div>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Flush</strong></p>
        <p class="text-muted">Remove paddings and borders from a form control with the <code>.form-control-flush</code> modifier.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body d-flex align-items-center">
        <div class="flex">
          <label for="flushSample01">Flush</label>
          <input type="text" class="form-control form-control-flush" placeholder="Flush form control ..." id="flushSample01">
        </div>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Toggle</strong></p>
        <p class="text-muted">Replaces a standard checkbox input with a toggle button.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body d-flex align-items-center">
        <div class="flex">
          <label for="subscribe">Subscribe to newsletter</label><br>
          <div class="custom-control custom-checkbox-toggle custom-control-inline mr-1">
            <input checked="" type="checkbox" id="subscribe" class="custom-control-input">
            <label class="custom-control-label" for="subscribe">Yes</label>
          </div>
          <label for="subscribe" class="mb-0">Yes</label>
        </div>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Date Picker</strong></p>
        <p class="text-muted">
          A simple yet powerful datepicker powered by Flatpickr. Please read the <a target="_blank" href="https://flatpickr.js.org/">official plugin documentation</a> for a full list of options.
        </p>
      </div>
      <div class="col-lg-8 card-form__body card-body">
        <div class="form-group">
          <label for="flatpickrSample01">Date</label>
          <input id="flatpickrSample01" type="text" class="form-control" placeholder="Flatpickr example" data-toggle="flatpickr" value="today">
        </div>
        <div class="form-group">
          <label for="flatpickrSample02">Range</label>
          <input id="flatpickrSample02" type="text" class="form-control" placeholder="Flatpickr range example" data-toggle="flatpickr" data-flatpickr-mode="range" value="2018-10-07 to 2018-10-15">
        </div>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Input Masking</strong></p>
        <p class="text-muted">Mask your form controls depending on the context with the jQuery Mask plugin. Please read the <a href="https://igorescobar.github.io/jQuery-Mask-Plugin/" target="_blank">official plugin documentation</a> for a full list of options.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body">
        <div class="form-group">
          <label for="maskSample01">Number</label>
          <input id="maskSample01" type="text" class="form-control" placeholder="Number: 2.342,42" data-mask="#.##0,00" data-mask-reverse="true">
        </div>
        <div class="form-group">
          <label for="maskSample02">Phone</label>
          <input id="maskSample02" type="text" class="form-control" placeholder="US phone: (000) 000-0000)" data-mask="(000) 000-0000">
        </div>
        <div class="form-group">
          <label for="maskSample03">Date</label>
          <input id="maskSample03" type="text" class="form-control" placeholder="US date: 00/00/0000" data-mask="00/00/0000">
        </div>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Rich Text Editor</strong></p>
        <p class="text-muted">Powerful WYSIWYG text editor powered by Quill. Please read the <a href="https://quilljs.com/" target="_blank">official plugin documentation</a> for a full list of options.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body">
        <label>Default</label>
        <div
          style="height: 150px;"
          data-toggle="quill" 
          data-quill-placeholder="Quill WYSIWYG editor">
          <h1>Hello World!</h1>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br></p>
        </div>

        <label>Custom toolbar</label>
        <div
          style="height: 150px;"
          data-toggle="quill" 
          data-quill-placeholder="Quill WYSIWYG editor"
          data-quill-modules-toolbar='[["bold", "italic"], ["link", "blockquote", "code", "image"], [{"list": "ordered"}, {"list": "bullet"}]]'>
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br></p>
        </div>
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Drag &amp; Drop File Uploads</strong></p>
        <p class="text-muted">Drag and drop file uploads with image previews powered by Dropzone.js. Please read the <a href="http://www.dropzonejs.com/" target="_blank">official plugin documentation</a> for a full list of options.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body d-flex align-items-center">

        <div 
          class="dropzone dropzone-multiple w-100" 
          data-toggle="dropzone" 
          data-dropzone-multiple 
          data-dropzone-url="http://"
          data-dropzone-files='["{{ asset('/vendor/flowdash/images/avatar/blue.svg') }}", "{{ asset('/vendor/flowdash/images/avatar/demi.png') }}", "{{ asset('/vendor/flowdash/images/avatar/green.svg') }}"]'>

          <div class="fallback">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFileUploadMultiple" multiple>
              <label class="custom-file-label" for="customFileUploadMultiple">Choose file</label>
            </div>
          </div>

          <ul class="dz-preview dz-preview-multiple list-group list-group-flush">
            <li class="list-group-item">
              <div class="form-row align-items-center">
                <div class="col-auto">
                  <div class="avatar">
                    <img src="{{ asset('/vendor/flowdash/images/avatar/blue.svg') }}" class="avatar-img rounded" alt="..." data-dz-thumbnail>
                  </div>
                </div>
                <div class="col">
                  <div class="font-weight-bold" data-dz-name>...</div>
                  <p class="small text-muted mb-0" data-dz-size>...</p>
                </div>
                <div class="col-auto">
                  <a href="#" class="text-muted-light" data-dz-remove>
                    <i class="material-icons">close</i>
                  </a>
                </div>
              </div>
            </li>
          </ul>

        </div>

      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Select</strong></p>
        <p class="text-muted">Customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options powered by Select2. Please read the <a href="https://select2.org/" target="_blank">official plugin documentation</a> for a full list of options.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body">
        <div class="form-group">
          <label for="select01">Basic</label>
          <select 
            id="select01" 
            data-toggle="select"
            class="form-control">
            <option selected="">My first option</option>
            <option>Another option</option>
            <option>Third option is here</option>
          </select>
        </div>
        <div class="form-group">
          <label for="select02">Avatars</label>
          <select 
            id="select02" 
            data-toggle="select" 
            data-minimum-results-for-search="-1"
            class="form-control">
            <option 
              data-avatar-src="{{ asset('/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg') }}">
              Adelle Sherley
            </option>
            <option 
              data-avatar-src="{{ asset('/vendor/flowdash/images/avatar/demi.png') }}">
              Adrian Demian
            </option>
            <option 
              data-avatar-src="{{ asset('/vendor/flowdash/images/avatar/green.svg') }}">
              Green Doe
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="select03">Multiple</label>
          <select 
            id="select03" 
            data-toggle="select" 
            multiple
            class="form-control">
            <option selected="">CSS</option>
            <option selected="">HTML</option>
            <option>JavaScript</option>
            <option>Bootstrap</option>
          </select>
        </div>
        <div class="form-group">
          <label for="select04">Large</label>
          <select 
            id="select04" 
            data-toggle="select" 
            multiple
            class="form-control form-control-lg">
            <option>CSS</option>
            <option>HTML</option>
            <option selected="">JavaScript</option>
            <option>Bootstrap</option>
          </select>
        </div>
        <label for="select05">Small</label>
        <select 
          id="select05" 
          data-toggle="select"
          class="form-control form-control-sm">
          <option>My first option</option>
          <option>Another option</option>
          <option>Third option is here</option>
        </select>
      </div>
    </div>
  </div>

  <!-- <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Basic Information</strong></p>
        <p class="text-muted">Edit your account details and settings.</p>
      </div>
      <div class="col-lg-8 card-form__body card-body">

      </div>
    </div>
  </div> -->
</div>
@endsection

@section('head')
<!-- Flatpickr -->
<link type="text/css" href="{{ mix('css/vendor/flatpickr.css') }}" rel="stylesheet">
<link type="text/css" href="{{ mix('css/vendor/flatpickr-airbnb.css') }}" rel="stylesheet">

<!-- Quill Theme -->
<link type="text/css" href="{{ mix('css/vendor/quill.css') }}" rel="stylesheet">

<!-- Dropzone -->
<link type="text/css" href="{{ mix('css/vendor/dropzone.css') }}" rel="stylesheet">

<!-- Select2 -->
<link type="text/css" href="{{ mix('vendor/select2/select2.min.css') }}" rel="stylesheet">
<link type="text/css" href="{{ mix('css/select2.css') }}" rel="stylesheet">
@endsection

@section('footer')
<!-- Flatpickr -->
<script src="{{ mix('vendor/flatpickr/flatpickr.min.js') }}" defer></script>
<script src="{{ mix('js/flatpickr.js') }}" defer></script>

<!-- Dropzone -->
<script src="{{ mix('vendor/dropzone.min.js') }}" defer></script>
<script src="{{ mix('js/dropzone.js') }}" defer></script>

<!-- jQuery Mask Plugin -->
<script src="{{ mix('vendor/jquery.mask.min.js') }}" defer></script>

<!-- Quill -->
<script src="{{ mix('vendor/quill.min.js') }}" defer></script>
<script src="{{ mix('js/quill.js') }}" defer></script>

<!-- Select2 -->
<script src="{{ mix('vendor/select2/select2.min.js') }}" defer></script>
<script src="{{ mix('js/select2.js') }}" defer></script>
@endsection