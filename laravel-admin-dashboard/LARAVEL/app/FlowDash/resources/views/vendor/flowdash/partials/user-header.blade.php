@if($layout === 'fluid')
<div class="page__header">
@endif

@if(request()->routeIs('staff'))
<div class="bg-white border-bottom">
  <div class="{{ $containerClass ?? 'container' }} page__container">
    <div class="card-header-tabs-basic nav" role="tablist">
      <a href="#" class="active">All</a>
      <a href="#">Pro</a>
      <a href="#">Active</a>
      <a href="#">Temporary</a>
    </div>
  </div>
</div>
@endif

<div class="{{ $containerClass ?? 'container' }} page__heading-container">
  <div class="page__heading d-flex align-items-center">
    <div class="flex">

      @if($breadcrumb ?? [])
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          @foreach($breadcrumb as $item)
          <li class="breadcrumb-item @if($loop->last) active @endif">
            @if($loop->last)
              {{ $item['title'] }}
            @else
              <a href="{{ $item['slug'] ?? '' }}">{{ $item['title'] }}</a>
            @endif
          </li>
          @endforeach
        </ol>
      </nav>
      @endif

      <h1 class="m-0">{{ $title ?? '' }}</h1>
    </div>
    @if($new_button_label ?? null !== false)
    <a href="{{ url($new_button_slug ?? '/') }}" class="btn btn-{{ $new_button_class ?? 'success' }} ml-3" {!! ($new_button_toggle ?? null) ? 'data-toggle="' . $new_button_toggle . '"' : '' !!} {!! ($new_button_target ?? null) ? 'data-target="' . $new_button_target . '"' : '' !!}>
      @if(isset($new_button_icon_label))
        <i class="material-icons icon-16pt {{ $new_button_icon_class ?? '' }} mr-1">{{ $new_button_icon_label ?? 'settings' }}</i>
      @endif
      {{ $new_button_label ?? 'New Report' }}
    </a>
    @endif
  </div>
</div>

@if($layout === 'fluid')
</div> <!-- // END page__header -->
@endif