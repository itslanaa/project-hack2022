<div class="avatar {{ isset($size) ? 'avatar-' . $size : '' }} {{ $class ?? '' }}">
  @if(isset($image))
    <img src="{{ $image ?? '' }}" alt="Avatar" class="avatar-img rounded{{ isset($circle) ? '-circle' : ''}}">
  @elseif(isset($title))
    <span class="avatar-title rounded{{ isset($circle) ? '-circle' : ''}} {{ $title_class ?? '' }}">{{ $title ?? '' }}</span>
  @endif
</div>