@extends("flowdash::layouts.{$layout}", [
  'title' => 'Blank Page',
  'breadcrumb' => [[
    'title' => 'Blank'
  ], [
    'title' => 'Page'
  ]],
  'new_button_label' => 'Action'
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">
  // Content
</div>
@endsection