@extends("flowdash::layouts.{$layout}", [
  'title' => 'Event Calendar',
  'breadcrumb' => [[
    'title' => 'Event Calendar'
  ]],
  'new_button_label' => 'New Event',
  'new_button_toggle' => 'modal',
  'new_button_target' => '#add-category'
])

@section('content')
<div class="{{ $containerClass ?? 'container' }} page__container">
  <div class="row">
    <div class="col-lg-9">
      <div class="card card-body">
        <div id="calendar" data-toggle="fullcalendar"></div>
      </div>
    </div> <!-- end col -->

    <div class="col-lg-3">
      <div id="external-events">
        <p class="text-muted">Drag and drop your event or click in the calendar.</p>
        <div class="external-event bg-success" data-class="bg-success">
          <i class="mr-2 material-icons">drag_handle</i>
          <span class="external-event__title">New Theme Release</span>
        </div>
        <div class="external-event bg-info" data-class="bg-info">
          <i class="mr-2 material-icons">drag_handle</i>
          <span class="external-event__title">My Event</span>
        </div>
        <div class="external-event bg-warning" data-class="bg-warning">
          <i class="mr-2 material-icons">drag_handle</i>
          <span class="external-event__title">Meet manager</span>
        </div>
        <div class="external-event bg-danger" data-class="bg-danger">
          <i class="mr-2 material-icons">drag_handle</i>
          <span class="external-event__title">Create New theme</span>
        </div>
      </div>

      <!-- checkbox -->
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="drop-remove">
        <label class="custom-control-label" for="drop-remove">Remove after drop</label>
      </div>
    </div> <!-- end col-->
  </div>  <!-- end row -->
</div>
@endsection

@section('head')
<!-- FullCalendar -->
<link type="text/css" href="{{ mix('vendor/fullcalendar/fullcalendar.min.css') }}" rel="stylesheet">
@endsection

@section('footer')
<!-- Add New Event MODAL -->
<div class="modal fade" id="event-modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header pr-4 pl-4 border-bottom-0 d-block">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">Add New Event</h4>
      </div>
      <div class="modal-body pt-3 pr-4 pl-4">
      </div>
      <div class="text-right pb-4 pr-4">
        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success save-event">Create event</button>
        <button type="button" class="btn btn-danger delete-event" data-dismiss="modal">Delete</button>
      </div>
    </div> <!-- end modal-content-->
  </div> <!-- end modal dialog-->
</div>
<!-- end modal-->

<!-- Modal Add Category -->
<div class="modal fade" id="add-category" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border-bottom-0 d-block">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">Add a category</h4>
      </div>
      <div class="modal-body p-4">
        <form>
          <div class="form-group">
            <label class="control-label">Category Name</label>
            <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name"/>
          </div>
          <div class="form-group">
            <label class="control-label">Choose Category Color</label>
            <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
              <option value="primary">Primary</option>
              <option value="success">Success</option>
              <option value="danger">Danger</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="dark">Dark</option>
            </select>
          </div>

        </form>

        <div class="text-right">
          <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary ml-1 save-category" data-dismiss="modal">Save</button>
        </div>

      </div> <!-- end modal-body-->
    </div> <!-- end modal-content-->
  </div> <!-- end modal dialog-->
</div>
<!-- end modal-->

<!-- jQuery UI (for draggable) -->
<script src="{{ mix('vendor/jquery-ui.min.js') }}" defer></script>

<!-- Moment.js -->
<script src="{{ mix('vendor/moment.min.js') }}" defer></script>

<!-- FullCalendar -->
<script src="{{ mix('vendor/fullcalendar/fullcalendar.min.js') }}" defer></script>
<script src="{{ mix('js/fullcalendar.js') }}" defer></script>
@endsection
