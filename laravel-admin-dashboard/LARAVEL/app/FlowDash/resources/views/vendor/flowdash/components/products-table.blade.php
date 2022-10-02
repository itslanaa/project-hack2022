<div class="table-responsive">
  @if($search ?? false !== false)
  <div class="m-3">
    <div class="row">
      <div class="col-md-4">
        <select name="#" class="form-control">
          <option value="-1">All</option>
          <option value="1">Hats</option>
          <option value="2">Coats</option>
          <option value="3">Jeans</option>
          <option value="4">T-Shirt</option>
          <option value="5">Other</option>
        </select>
      </div>
      <div class="col-md-8">
        <div class="search-form search-form--light">
          <input type="text" class="form-control search" placeholder="Search">
          <button class="btn" type="button" role="button"><i class="material-icons">search</i></button>
        </div>
      </div>
    </div>  
  </div>
  @endif

  <table class="table mb-0 thead-border-top-0 table-striped">
    <thead>
      <tr>
        @if($checkboxes ?? true !== false)
        <th style="width: 18px;">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input js-toggle-check-all" data-target="#{{ $id ?? 'products' }}" id="customCheckAll">
            <label class="custom-control-label" for="customCheckAll"><span class="text-hide">Toggle all</span></label>
          </div>
        </th>
        @endif
        <th style="width: 30px;" class="text-center">#ID</th>
        <th>Product</th>
        <th class="text-center">Stock</th>
        <th class="">Category</th>
        <th class="text-right">Price</th>
        <th style="width: 100px; text-align: right;">
          <div class="dropdown pull-right">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">Bulk</a>
            <div class="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0)" class="dropdown-item"><i class="material-icons icon-18pt mr-1">work</i> Set Price</a>
              <a href="javascript:void(0)" class="dropdown-item"><i class="material-icons icon-18pt mr-1">archive</i> Archive</a>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="list" id="{{ $id ?? 'products' }}">
      @foreach($items ?? [] as $item)
      <tr>
        @if($checkboxes ?? true !== false)
        <td class="pr-0">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input js-check-selected-row" {{ isset($item['selected']) ? 'checked=""' : '' }} id="customCheck1_{{ ($loop->index + 1) }}">
            <label class="custom-control-label" for="customCheck1_{{ ($loop->index + 1) }}"><span class="text-hide">Check</span></label>
          </div>
        </td>
        @endif
        <td>
          <div class="badge badge-soft-dark">#{{ 100 + $loop->index }}</div>
        </td>
        <td>
          <img src="{{ $item['image'] ?? '' }}" alt="product" style="width:35px" class="rounded mr-2">
          <a href="#">{{ $item['name'] ?? '' }}</a>
        </td>
        <td style="width: 120px;" class="text-center">
          {{ $item['stock'] ?? '' }} items
        </td>
        <td style="width:200px">
          <i class="material-icons icon-18pt text-muted mr-1">list</i> <a href="#">{{ $item['category'] ?? '' }}</a>
        </td>
        <td class="text-right">{{ $item['amount'] ?? '' }}</td>
        <td class="text-right"><a href="#" class="btn btn-sm btn-primary">EDIT</td>
      </tr>
      @endforeach
    </tbody>
  </table>
</div>
@if($pagination ?? '' !== false)
<div class="card-body text-right">
  15 <span class="text-muted">of 25</span> <a href="#" class="text-muted-light"><i class="material-icons ml-1">arrow_forward</i></a>
</div>
@endif