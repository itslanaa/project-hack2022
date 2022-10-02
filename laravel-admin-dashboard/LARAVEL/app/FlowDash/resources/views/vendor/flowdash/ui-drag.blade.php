@extends("flowdash::layouts.{$layout}", [
  'title' => 'Drag & Drop',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Drag & Drop'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass }}">

  <div class="card">
    <div class="card-header card-header-large bg-white">
      <h4 class="card-header__title">Simple Drag and Drop</h4>
    </div>
    <div class="card-body">
      <p>Just add the data attribute <code>data-toggle="dragula"</code> to have drag and drop support in your container.</p>

      <div class="form-row" data-toggle="dragula">
        <div class="col-md col-lg-4">
          <div class="card form-row__card text-white bg-primary">
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div>
        <div class="col-md col-lg-4">
          <div class="card form-row__card bg-dark text-white">
            <div class="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div>
        <div class="col-md col-lg-4">
          <div class="card form-row__card text-white bg-success">
            <div class="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div> <!-- end col-->   
        
        <div class="col-md col-lg-4">
          <div class="card form-row__card text-white bg-info">
            <div class="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div> <!-- end col-->

        <div class="col-md col-lg-4">
          <div class="card form-row__card text-white bg-warning">
            <div class="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div> <!-- end col-->

        <div class="col-md col-lg-4">
          <div class="card form-row__card text-white bg-danger">
            <div class="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div> <!-- end col--> 

      </div>
    </div>
  </div>

  @php
  $leftCards = [[
    'image' => "/vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
    'name' => "Jenell D. Matney", 
    'title' => "Founder and CEO"
  ], [
    'image' => "/vendor/flowdash/images/256_daniel-gaffey-1060698-unsplash.jpg",
    'name' => "Sherri J. Cardenas", 
    'title' => "Software Engineer"
  ], [
    'image' => "/vendor/flowdash/images/256_jeremy-banks-798787-unsplash.jpg",
    'name' => "Joseph S. Ferland", 
    'title' => "Web Designer"
  ]];

  $rightCards = [[
    'image' => "/vendor/flowdash/images/256_joao-silas-636453-unsplash.jpg",
    'name' => "Bryan K. Davis", 
    'title' => "Web Developer"
  ], [
    'image' => "/vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg",
    'name' => "Elizabeth J. Ohara", 
    'title' => "Business Analyst"
  ], [
    'image' => "/vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
    'name' => "Kaci M. Langston", 
    'title' => "Human Resources"
  ]];
  @endphp

  <h4>Containers</h4>
  <p class="measure-paragraph-max text-70 p-0 mb-32pt">Add the data attribute <code>data-dragula-containers='["#cards-left", "#cards-right"]'</code> to allow the user to drag an element in any of the containers and drop it in any other container in the list.</p>

  <div class="row" data-toggle="dragula" data-dragula-containers='["#cards-left", "#cards-right"]'>
    <div class="col-md">
      <div class="card shadow-none border border-style-dashed">
        <div class="card-body">
          <div class="h6 mb-3">Container #1</div>
          <div id="cards-left" class="card-list">
            @foreach($leftCards as $card)
              @component('flowdash::components.user-feedback', ['item' => $card]) @endcomponent
            @endforeach
          </div>
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="card shadow-none border border-style-dashed">
        <div class="card-body">
          <div class="h6 mb-3">Container #2</div>
          <div id="cards-right" class="card-list">
            @foreach($rightCards as $card)
              @component('flowdash::components.user-feedback', ['item' => $card]) @endcomponent
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card card-body">
    @component('flowdash::components.hljs')
<div class="row" data-toggle="dragula" data-dragula-containers='["#cards-left", "#cards-right"]'>
<div class="col-md" id="cards-left">...</div>
<div class="col-md" id="cards-right">...</div>
</div>
    @endcomponent
  </div>

  <h4>Handles</h4>
  <p class="measure-paragraph-max text-70 p-0 mb-32pt">Add the data attribute <code>data-dragula-moves="js-dragula-handle"</code> to allow the user to drag an element in any of the containers and drop it in any other container in the list <strong>using a handle</strong>.</p>

  <div 
    class="row" 
    data-toggle="dragula" 
    data-dragula-containers='["#cards-moves-left", "#cards-moves-right"]'
    data-dragula-moves="js-dragula-handle">
    <div class="col-md">
      <div class="card shadow-none border border-style-dashed">
        <div class="card-body">
          <div class="h6 mb-3">Container #1</div>
          <div id="cards-moves-left" class="card-list">
            @foreach($leftCards as $card)
              @component('flowdash::components.user-handle', ['item' => $card]) @endcomponent
            @endforeach
          </div>
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="card shadow-none border border-style-dashed">
        <div class="card-body">
          <div class="h6 mb-3">Container #2</div>
          <div id="cards-moves-right" class="card-list">
            @foreach($rightCards as $card)
              @component('flowdash::components.user-handle', ['item' => $card]) @endcomponent
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
@endsection

@section('head')
<!-- Dragula -->
<link type="text/css" href="{{ mix('vendor/dragula/dragula.min.css') }}" rel="stylesheet">
@endsection

@section('footer')
<!-- Dragula -->
<script src="{{ mix('vendor/dragula/dragula.min.js') }}" defer></script>
<script src="{{ mix('js/dragula.js') }}" defer></script>
@endsection