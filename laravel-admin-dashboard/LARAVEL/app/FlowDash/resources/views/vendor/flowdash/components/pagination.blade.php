<nav aria-label="Page navigation example">
  <ul class="pagination {{ $align ?? 'left' === 'center' ? 'justify-content-center' : '' }} {{ $align ?? 'left' === 'right' ? 'justify-content-end' : '' }} pagination-sm {{ $class ?? '' }}">
    @if($first ?? false !== false)
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true" class="material-icons">first_page</span>
        <span class="{{ $labels ?? false ? '' : 'sr-only' }}">First</span>
      </a>
    </li>
    @endif
    @if($prev ?? true !== false)
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true" class="material-icons">chevron_left</span>
        <span class="{{ $labels ?? false ? '' : 'sr-only' }}">Prev</span>
      </a>
    </li>
    @endif
    @for($page=1;$page<=($pages ?? 2);$page++)
    <li class="page-item {{ $page === 1 ? 'active' : '' }}">
      <a class="page-link" href="#" aria-label="{{ $page }}">
        <span>{{ $page }}</span>
      </a>
    </li>
    @endfor
    @if($next ?? true !== false)
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span class="{{ $labels ?? false ? '' : 'sr-only' }}">Next</span>
        <span aria-hidden="true" class="material-icons">chevron_right</span>
      </a>
    </li>
    @endif
    @if($last ?? false !== false)
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span class="{{ $labels ?? false ? '' : 'sr-only' }}">Last</span>
        <span aria-hidden="true" class="material-icons">last_page</span>
      </a>
    </li>
    @endif
  </ul>
</nav>