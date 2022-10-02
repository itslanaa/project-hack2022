@php
$badgeLabel = $badgeLabel ?? 'OPEN';
$badgeClass = $badgeClass ?? 'badge-light-gray';
$title = $title ?? 'Add UI Buttons Page';
$comments = $comments ?? 28;
$assigned = $assigned ?? '';
$avatarGroup = $avatarGroup ?? false;
$avatars = $avatars ?? [
  "vendor/flowdash/images/256_rsz_1andy-lee-642320-unsplash.jpg",
  "vendor/flowdash/images/256_michael-dam-258165-unsplash.jpg",
  "vendor/flowdash/images/256_luke-porter-261779-unsplash.jpg"
];
$avatarCount = count($avatars);
@endphp

<div class="trello-board__tasks-item card shadow-none border">
  <div class="p-3">
    <p class="m-0 d-flex align-items-center">
      <strong>{{ $title }}</strong> <span class="badge {{ $badgeClass }} ml-auto">{{ $badgeLabel }}</span></p>
    
    <p class="d-flex align-items-center mb-2 small">
      <i class="material-icons icon-14pt mr-1 text-muted">folder_open</i>
      <span class="text-muted mr-2">Stack</span>
      <i class="material-icons icon-14pt mr-1 text-muted">comment</i>
      <span class="text-muted"><strong>{{ $comments }}</strong> comments</span>
    </p>
    <div class="media align-items-center">
      <div class="media-left mr-2 {{ $avatarGroup ? 'avatar-group' : '' }}">
        @for($avatar=0;$avatar<=($avatarCount-1);$avatar++)
        <div class="avatar avatar-xxs" data-toggle="tooltip" data-placement="top" title="Janell D.">
          <img src="{{ asset($avatars[$avatar]) }}" alt="Avatar" class="avatar-img rounded-circle">
        </div>
        @endfor
      </div>
      <div class="media-body small media-middle">
        @if($avatarCount > 1)
        <a href="">+{{ ($avatarCount - 1) }} more</a>
        @endif
      </div>
    </div>
  </div>
</div>