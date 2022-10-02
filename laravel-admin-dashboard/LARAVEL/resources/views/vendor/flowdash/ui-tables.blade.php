@extends("flowdash::layouts.{$layout}", [
  'title' => 'Tables',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Tables'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass ?? 'container' }}">
  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Toggle Checkboxes</strong></p>
        <p class="text-muted">A tiny plugin which adds the ability to toggle all checkboxes within a table.</p>
      </div>
      <div class="col-lg-8 card-form__body">
        @component('flowdash::components.staff-table', [
          'employer' => false, 
          'projects' => false, 
          'pagination' => false, 
          'items' => [[
            'selected' => true,
            'avatar' => [ 
              'image' => '/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg' 
            ],
            'name' => 'Michael Smith',
            'status_name' => 'Admin',
            'date' => '3 days ago',
            'earnings' => '12,402'
          ], [
            'avatar' => [ 
              'image' => '/vendor/flowdash/images/avatar/green.svg' 
            ],
            'name' => 'Connie Smith',
            'email' => 'paolo.zieme@gmail.com',
            'status_name' => 'User',
            'status_class' => 'badge-success',
            'date' => '1 week ago',
            'earnings' => '1,943'
          ], [
            'avatar' => [ 
              'image' => '/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg' 
            ],
            'name' => 'John Connor',
            'email' => 'vida_glover@gmail.com',
            'status_name' => 'Manager',
            'status_class' => 'badge-primary',
            'date' => '2 weeks ago',
            'earnings' => '1,401'
          ], [
            'selected' => true,
            'avatar' => [ 
              'image' => '/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg' 
            ],
            'name' => 'Michael Smith',
            'status_name' => 'Admin',
            'date' => '3 days ago',
            'earnings' => '12,402'
          ], [
            'avatar' => [ 
              'image' => '/vendor/flowdash/images/avatar/green.svg' 
            ],
            'name' => 'Connie Smith',
            'email' => 'paolo.zieme@gmail.com',
            'status_name' => 'User',
            'status_class' => 'badge-success',
            'date' => '1 week ago',
            'earnings' => '1,943'
          ], [
            'avatar' => [ 
              'image' => '/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg' 
            ],
            'name' => 'John Connor',
            'email' => 'vida_glover@gmail.com',
            'status_name' => 'Manager',
            'status_class' => 'badge-primary',
            'date' => '2 weeks ago',
            'earnings' => '1,401'
          ]]
        ]) @endcomponent
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Search</strong></p>
        <p class="text-muted">Add search functionality to your tables with List.js. Please read the <a href="http://listjs.com/" target="_blank">official plugin documentation</a> for a full list of options.</p>
      </div>
      <div class="col-lg-8 card-form__body">
        @component('flowdash::components.staff-table', [
          'id' => 'search',
          'checkboxes' => false, 
          'avatar' => false, 
          'employer' => false, 
          'projects' => false, 
          'pagination' => false, 
          'search' => true, 
          'items' => [[
            'selected' => true,
            'name' => 'Michael Smith',
            'status_name' => 'Admin',
            'date' => '3 days ago',
            'earnings' => '12,402'
          ], [
            'name' => 'Connie Smith',
            'email' => 'paolo.zieme@gmail.com',
            'status_name' => 'User',
            'status_class' => 'badge-success',
            'date' => '1 week ago',
            'earnings' => '1,943'
          ], [
            'name' => 'John Connor',
            'email' => 'vida_glover@gmail.com',
            'status_name' => 'Manager',
            'status_class' => 'badge-primary',
            'date' => '2 weeks ago',
            'earnings' => '1,401'
          ], [
            'selected' => true,
            'name' => 'Michael Smith',
            'status_name' => 'Admin',
            'date' => '3 days ago',
            'earnings' => '12,402'
          ], [
            'name' => 'Connie Smith',
            'email' => 'paolo.zieme@gmail.com',
            'status_name' => 'User',
            'status_class' => 'badge-success',
            'date' => '1 week ago',
            'earnings' => '1,943'
          ], [
            'name' => 'John Connor',
            'email' => 'vida_glover@gmail.com',
            'status_name' => 'Manager',
            'status_class' => 'badge-primary',
            'date' => '2 weeks ago',
            'earnings' => '1,401'
          ]]
        ]) @endcomponent
      </div>
    </div>
  </div>

  <div class="card card-form">
    <div class="row no-gutters">
      <div class="col-lg-4 card-body">
        <p><strong class="headings-color">Sort Columns</strong></p>
        <p class="text-muted">Add sorting functionality to your tables with by List.js. Please read the <a href="http://listjs.com/" target="_blank">official plugin documentation</a> for a full list of options.</p>
      </div>
      <div class="col-lg-8 card-form__body border-left">
        @component('flowdash::components.sort-table') @endcomponent
      </div>
    </div>
  </div>

</div>
@endsection

@section('footer')
<!-- List.js -->
<script src="{{ mix('vendor/list.min.js') }}"></script>
<script src="{{ mix('js/list.js') }}" defer></script>

<!-- Tables -->
<script src="{{ mix('js/toggle-check-all.js') }}" defer></script>
<script src="{{ mix('js/check-selected-row.js') }}" defer></script>
@endsection