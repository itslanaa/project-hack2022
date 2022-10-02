@extends("flowdash::layouts.{$layout}", [
  'title' => 'Icons',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Icons'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">
  <div id="app-icons">
    <app-icons-app></app-icons-app>
  </div>
</div>
@endsection

@section('footer')
<!-- UI Icons Page JS -->
<script src="{{ mix('js/app-icons.js') }}" defer></script>
@endsection