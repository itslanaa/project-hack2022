<li class="sidebar-menu-item {{ activeClass('app-activities') }}">
  <a class="sidebar-menu-button" href="{{ route('app-activities') }}">
    <span class="sidebar-menu-text">Activities</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('app-trello') }}">
  <a class="sidebar-menu-button" href="{{ route('app-trello') }}">
    <span class="sidebar-menu-text">Trello</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('app-projects') }}">
  <a class="sidebar-menu-button" href="{{ route('app-projects') }}">
    <span class="sidebar-menu-text">Projects</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('app-fullcalendar') }}">
  <a class="sidebar-menu-button" href="{{ route('app-fullcalendar') }}">
    <span class="sidebar-menu-text">Event Calendar</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('app-chat') }}">
  <a class="sidebar-menu-button" href="{{ route('app-chat') }}">
    <span class="sidebar-menu-text">Chat</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass('app-email') }}">
  <a class="sidebar-menu-button" href="{{ route('app-email') }}">
    <span class="sidebar-menu-text">Email</span>
  </a>
</li>
<li class="sidebar-menu-item {{ activeClass(['app-browse-courses', 'app-course', 'app-lesson'], 'active open') }}">
  <a class="sidebar-menu-button" data-toggle="collapse" href="#course_menu">
    <span class="sidebar-menu-text">Education</span>
    <span class="ml-auto d-flex align-items-center">
      <span class="badge badge-primary">NEW</span>
      <span class="sidebar-menu-toggle-icon"></span>
    </span>
  </a>
  <ul class="sidebar-submenu collapse {{ activeClass(['app-browse-courses', 'app-course', 'app-lesson'], 'show') }}" id="course_menu">
    <li class="sidebar-menu-item {{ activeClass('app-browse-courses') }}">
      <a class="sidebar-menu-button" href="{{ route('app-browse-courses') }}">
        <span class="sidebar-menu-text">Browse Courses</span>
      </a>
    </li>
    <li class="sidebar-menu-item {{ activeClass('app-course') }}">
      <a class="sidebar-menu-button" href="{{ route('app-course') }}">
        <span class="sidebar-menu-text">Course</span>
      </a>
    </li>
    <li class="sidebar-menu-item {{ activeClass('app-lesson') }}">
        <a class="sidebar-menu-button" href="{{ route('app-lesson') }}">
        <span class="sidebar-menu-text">Lesson</span>
      </a>
    </li>
  </ul>
</li>