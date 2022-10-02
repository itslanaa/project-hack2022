<div class="table-responsive" data-toggle="lists" data-lists-values='["js-lists-values-employee-name"]'>
  @if($search ?? false !== false)
  <div class="search-form search-form--light m-3">
    <input type="text" class="form-control search" placeholder="Search">
    <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
  </div>
  @endif

  <table class="table mb-0 thead-border-top-0 table-striped">
    <thead>
      <tr>
        @if($checkboxes ?? true !== false)
        <th style="width: 18px;" class="pr-0">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input js-toggle-check-all" data-target="#{{ $id ?? 'companies' }}" id="customCheckAll">
            <label class="custom-control-label" for="customCheckAll"><span class="text-hide">Toggle all</span></label>
          </div>
        </th>
        @endif
        <th style="width: 30px;" class="text-center">#ID</th>
        <th>Company Name</th>
        <th style="width: 120px;" class="text-center">Created</th>
        <th class="text-center">Members</th>
        <th class="text-center">Growth</th>
        <th style="width: 50px;">#INV</th>
        <th style="width: 120px;" class="text-right">Total Sales</th>
        <th style="width: 50px;">
          <div class="dropdown pull-right">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">Bulk</a>
            <div class="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0)" class="dropdown-item"><i class="material-icons  mr-1">work</i> Update Status</a>
              <a href="javascript:void(0)" class="dropdown-item"><i class="material-icons  mr-1">pin_drop</i> Add Location</a>
              <div class="dropdown-divider"></div>
              <a href="javascript:void(0)" class="dropdown-item"><i class="material-icons  mr-1">archive</i> Archive</a>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="list" id="{{ $id ?? 'companies' }}">
      @foreach($items ?? [] as $item)
      <tr class="{{ ($checkboxes ?? true !== false) && isset($item['selected']) ? 'selected' : '' }}">

        @if($checkboxes ?? true !== false)
        <td class="pr-0">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input js-check-selected-row" {{ isset($item['selected']) ? 'checked=""' : '' }} id="customCheck1_{{ ($loop->index + 1) }}">
            <label class="custom-control-label" for="customCheck1_{{ ($loop->index + 1) }}"><span class="text-hide">Check</span></label>
          </div>
        </td>
        @endif

        <td>
          <div class="badge badge-light">#{{ 29177 + ($loop->index + 1) }}</div>
        </td>
        <td>
          <div  class="d-flex align-items-center">
            <div class="d-flex align-items-center">
              <i class="material-icons icon-16pt mr-1 text-primary">business</i> 
              <a href="#">{{ $item['name'] ?? '' }}</a>
            </div>
            @if(($loop->index + 1) == 1 || ($loop->index + 1) == 5 || ($loop->index + 1) == 6 || ($loop->index + 1) == 8)
              <div class="badge badge-warning ml-2">PRO</div>
            @endif
          </div>
          <div class="d-flex align-items-center">
            <small class="text-muted"><i class="material-icons icon-16pt mr-1">pin_drop</i> Miami, Florida, USA</small>
          </div>
        </td>
        <td style="width: 140px;"><i class="material-icons icon-16pt text-muted-light mr-1">today</i> 05-05-2019</td>
        <td style="width:80px" class="text-center">
          <i class="material-icons icon-16pt text-muted mr-1">account_circle</i> <a href="#">{{ ($loop->index + 1) }}</a>
        </td>
        <td class="text-center">{{ $item['growth'] ?? '' }} <i class="material-icons icon-16pt text-{{ $item['growth_color'] ?? '' }}">{{ $item['growth_icon'] ?? '' }}</i></td>
        <td class="text-center">{{ ($loop->index + 1) }}</td>
        <td class="text-right"><strong>{{ $item['amount'] ?? '' }}</strong></td>
        <td><a href="#" class="btn btn-sm btn-link"><i class="material-icons icon-16pt">arrow_forward</i></a> </td>
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