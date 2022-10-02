@extends("flowdash::layouts.{$layout}", [
  'title' => 'Trello App',
  'breadcrumb' => [[
    'title' => 'Trello'
  ]],
  'new_button_label' => 'New Task'
])

@section('content')
<div class="trello-container">
  <div class="trello-board {{ $containerClass ?? 'container' }} page__container">
    <div 
      class="trello-board__tasks"
      data-toggle="dragula"
      data-dragula-containers='["#trello-tasks-1", "#trello-tasks-2", "#trello-tasks-3", "#trello-tasks-4"]'>
      <div class="card bg-light border">
        <div class="card-header card-header-sm bg-white border-primary">
          <h4 class="card-header__title m-0">Todo (3)</h4>
        </div>
        <div class="card-body p-2">
          <div class="trello-board__tasks-list card-list" id="trello-tasks-1">
            
            @php
            $tasks1 = [[
              'badgeLabel' => 'OPEN',
              'badgeClass' => 'badge-light-gray',
              'date' => 'Oct 28, 2018',
              'title' => 'Add UI Buttons Page',
              'comments' => 28,
              'assigned' => 'Janell D. Matney'
            ], [
              'badgeLabel' => 'RESOLVED',
              'badgeClass' => 'badge-success',
              'date' => 'Nov 1, 2018',
              'title' => 'Envato Item Presentation',
              'comments' => 28,
              'assigned' => 'Adrian Demian',
              'avatarGroup' => true
            ], [
              'badgeLabel' => 'NEED HELP',
              'badgeClass' => 'badge-warning',
              'date' => 'Nov 1, 2018',
              'title' => 'Add Trello App Page',
              'comments' => 28,
              'assigned' => 'Laza Bogdan'
            ]] 
            @endphp

            @foreach($tasks1 as $task)
              @component('flowdash::components.trello-task', [
                'badgeLabel' => $task['badgeLabel'], 
                'badgeClass' => $task['badgeClass'],
                'date' => $task['date'],
                'title' => $task['title'],
                'comments' => $task['comments'],
                'assigned' => $task['assigned'],
                'avatarGroup' => $task['avatarGroup'] ?? null
              ]) @endcomponent
            @endforeach

          </div>
          <a href="#" class="btn btn-link text-muted btn-block mt-2">+ Add Card</a>
        </div>
      </div>
    </div>
    <div class="trello-board__tasks">
      <div class="card bg-light border">
        <div class="card-header card-header-sm bg-white border-warning">
          <h4 class="card-header__title m-0">In Progress (2)</h4>
        </div>
        <div class="card-body p-2">
          <div class="trello-board__tasks-list card-list" id="trello-tasks-2">
          
            @php
            $tasks2 = [[
              'badgeLabel' => 'HIGH',
              'badgeClass' => 'badge-danger',
              'date' => 'Nov 1, 2018',
              'title' => 'Add Trello App Page',
              'comments' => 28,
              'assigned' => 'Laza Bogdan',
              'avatarGroup' => true
            ], [
              'badgeLabel' => 'OPEN',
              'badgeClass' => 'badge-light-gray',
              'date' => 'Oct 28, 2018',
              'title' => 'Add UI Alerts Page',
              'comments' => 28,
              'assigned' => 'Janell D. Matney'
            ]];
            @endphp

            @foreach($tasks2 as $task)
              @component('flowdash::components.trello-task', [
                'badgeLabel' => $task['badgeLabel'], 
                'badgeClass' => $task['badgeClass'],
                'date' => $task['date'],
                'title' => $task['title'],
                'comments' => $task['comments'],
                'assigned' => $task['assigned'],
                'avatarGroup' => $task['avatarGroup'] ?? null
              ]) @endcomponent
            @endforeach

          </div>
          <a href="#" class="btn btn-link text-muted btn-block mt-2">+ Add Card</a>
        </div>
      </div>
    </div>
    <div class="trello-board__tasks">
      <div class="card bg-light border">
        <div class="card-header card-header-sm bg-white border-purple">
          <h4 class="card-header__title m-0">Review (1)</h4>
        </div>
        <div class="card-body p-2">
          <div class="trello-board__tasks-list card-list" id="trello-tasks-3">
          
            @php
            $tasks3 = [[
              'badgeLabel' => 'RESOLVED',
              'badgeClass' => 'badge-success',
              'date' => 'Oct 28, 2018',
              'title' => 'Add UI Modals Page',
              'comments' => 28,
              'assigned' => 'Janell D. Matney'
            ]]
            @endphp

            @foreach($tasks3 as $task)
              @component('flowdash::components.trello-task', [
                'badgeLabel' => $task['badgeLabel'], 
                'badgeClass' => $task['badgeClass'],
                'date' => $task['date'],
                'title' => $task['title'],
                'comments' => $task['comments'],
                'assigned' => $task['assigned'],
                'avatarGroup' => $task['avatarGroup'] ?? null
              ]) @endcomponent
            @endforeach
          
          </div>
          <a href="#" class="btn btn-link text-muted btn-block mt-2">+ Add Card</a>
        </div>
      </div>
    </div>
    <div class="trello-board__tasks">
      <div class="card bg-light border">
        <div class="card-header card-header-sm bg-white border-success">
          <h4 class="card-header__title m-0">Done (1)</h4>
        </div>
        <div class="card-body p-2">
          <div class="trello-board__tasks-list card-list" id="trello-tasks-4">
          
            @php
            $tasks4 = [[
              'badgeLabel' => 'NEED HELP',
              'badgeClass' => 'badge-warning',
              'date' => 'Oct 28, 2018',
              'title' => 'Add UI Avatars Page',
              'comments' => 28,
              'assigned' => 'Janell D. Matney'
            ]]
            @endphp

            @foreach($tasks4 as $task)
              @component('flowdash::components.trello-task', [
                'badgeLabel' => $task['badgeLabel'], 
                'badgeClass' => $task['badgeClass'],
                'date' => $task['date'],
                'title' => $task['title'],
                'comments' => $task['comments'],
                'assigned' => $task['assigned'],
                'avatarGroup' => $task['avatarGroup'] ?? null
              ]) @endcomponent
            @endforeach

          </div>
          <a href="#" class="btn btn-link text-muted btn-block mt-2">+ Add Card</a>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection

@section('head')
<!-- Dragula -->
<link type="text/css" href="{{ mix('vendor/dragula/dragula.min.css') }}" rel="stylesheet">
@endsection

@section('footer')
<!-- Dragula -->
<script src="{{ mix('vendor/dragula/dragula.min.js') }}" defer></script>
<script src="{{ mix('js/dragula.js') }}" defer></script>
@endsection
