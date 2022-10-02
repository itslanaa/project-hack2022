<div class="table-responsive" data-toggle="lists" data-lists-sort-by="js-lists-values-employee-name" data-lists-values='["js-lists-values-employee-name", "js-lists-values-employer-name", "js-lists-values-projects", "js-lists-values-activity", "js-lists-values-earnings"]'>
  @if($search ?? false !== false)
  <div class="card-header">
    <div class="search-form">
      <input type="text" class="form-control search" placeholder="Search ...">
      <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
    </div>
  </div>
  @endif

  <table class="table mb-0 thead-border-top-0">
    <thead>
      <tr>
        @if($checkboxes ?? true !== false)
        <th style="width: 18px;" class="pr-0">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input js-toggle-check-all" data-target="#{{ $id ?? 'staff' }}" id="customCheckAll">
            <label class="custom-control-label" for="customCheckAll"><span class="text-hide">Toggle all</span></label>
          </div>
        </th>
        @endif
        <th>
          <a 
            href="javascript:void(0)" 
            class="sort" 
            data-sort="js-lists-values-employee-name">Employee</a>
        </th>
        @if($employer ?? true !== false)
        <th style="width: 150px;">
          <a 
            href="javascript:void(0)" 
            class="sort" 
            data-sort="js-lists-values-employer-name">Employer</a>
        </th>
        @endif
        @if($projects ?? true !== false)
        <th class="text-center" style="width: 48px;">
          <a 
            href="javascript:void(0)" 
            class="sort" 
            data-sort="js-lists-values-projects">Projects</a>
        </th>
        @endif
        @if($status ?? true !== false)
        <th style="width: 37px;">Status</th>
        @endif
        <th style="width: 120px;">
          <a 
            href="javascript:void(0)" 
            class="sort" 
            data-sort="js-lists-values-activity">Activity</a>
        </th>
        <th style="width: 51px;">
          <a 
            href="javascript:void(0)" 
            class="sort" 
            data-sort="js-lists-values-earnings">Earnings</a>
        </th>
        <th style="width: 24px;" class="pl-0"></th>
      </tr>
    </thead>
    <tbody class="list" id="{{ $id ?? 'staff' }}">
      @foreach($items ?? [] as $item)
      <tr class="{{ ($checkboxes ?? true !== false) && isset($item['selected']) ? 'selected' : '' }}">

        @if($checkboxes ?? true !== false)
        <td class="pr-0">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input js-check-selected-row" {{ isset($item['selected']) ? 'checked=""' : '' }} id="customCheck1_{{ $loop->index }}">
            <label class="custom-control-label" for="customCheck1_{{ $loop->index }}"><span class="text-hide">Check</span></label>
          </div>
        </td>
        @endif

        <td>
          @if($avatar ?? true !== false)
          <div class="media flex-nowrap align-items-center" style="white-space: nowrap;">
            <div class="avatar avatar-xs mr-2">
              @if(isset($item['avatar']['image']))
                <img src="{{ asset($item['avatar']['image']) }}" alt="Avatar" class="avatar-img rounded-circle">
              @endif
              @if(isset($item['avatar']['title']))
                <span class="avatar-title rounded-circle">{{ $item['avatar']['title'] }}</span>
              @endif
            </div>
            <div class="media-body">
          @endif

          <span class="js-lists-values-employee-name">{{ $item['name'] }}</span>

          @if($avatar ?? true !== false)
            </div>
          </div>
          @endif
        </td>
        
        @if($employer ?? true !== false)
        <td>
          <div class="media align-items-center">
            <a href=""><span class="js-lists-values-employer-name">{{ $item['employer'] }}</span></a>
            <a href="#" class="rating-link {{ isset($item['employer_rating_active']) ? 'active' : '' }}"><i class="material-icons ml-2">star</i></a>
          </div>
        </td>
        @endif

        @if($projects ?? true !== false)
        <td class="text-center js-lists-values-projects small">{{ $item['projects'] }}</td>
        @endif

        @if($status ?? true !== false)
        <td>
          <span class="badge {{ $item['status_class'] ?? 'badge-warning' }}">{{ $item['status_name'] ?? 'ADMIN' }}</span>
        </td>
        @endif

        <td class="js-lists-values-activity"><small class="text-muted">{{ $item['date'] }}</small></td>
        <td class="js-lists-values-earnings">&dollar;{{ $item['earnings'] }}</td>
        <td><a href="" class="text-muted"><i class="material-icons">more_vert</i></a></td>
      </tr>
      @endforeach
    </tbody>
  </table>
</div>

@if($pagination ?? '' !== false)
<div class="card-body text-right">
  15 <span class="text-muted">of 1,430</span> <a href="#" class="text-muted-light"><i class="material-icons ml-1">arrow_forward</i></a>
</div>
@endif