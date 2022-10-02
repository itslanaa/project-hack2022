(function(){
  'use strict';

  var t = new Date
  const date = (t.getDate(), t.getMonth(), t.getFullYear(), new Date($.now()))

  const events = [{
    title: "Hey!",
    start: new Date($.now() + 158e6),
    className: "bg-warning"
  }, {
    title: "See John Deo",
    start: date,
    end: date,
    className: "bg-success"
  }, {
    title: "Meet John Deo",
    start: new Date($.now() + 168e6),
    className: "bg-info"
  }, {
    title: "Buy a Theme",
    start: new Date($.now() + 338e6),
    className: "bg-primary"
  }]

  const onDrop = (droppable, date, calendar) => {
    const eventObject = droppable.data('eventObject')
    const className = droppable.data('class')
    const options = $.extend({}, eventObject)
    options.start = date 
    if (className) {
      options.className = [className]
    }

    calendar.fullCalendar('renderEvent', options, true)
    if ($('#drop-remove').is(':checked')) {
      droppable.remove()
    }
  }

  const onEventClick = (event, jsEvent, view, calendar) => {
    const modal = $(MODAL)
    const form = $(`<form>
      <label>Change event name</label>
      <div class="input-group m-b-15">
        <input class="form-control" type="text" value="${ event.title }" />
        <span class="input-group-append">
          <button type="submit" class="btn btn-success">
            <i class="material-icons mr-2">check</i> Save
          </button>
        </span>
      </div>
    </form>`)

    modal.modal('show')
    modal
      .find('.delete-event').show().end()
      .find('.save-event').hide().end()
      .find('.modal-body').empty().prepend(form).end()
      .find('.delete-event').unbind('click').on('click', function() {
        calendar.fullCalendar('removeEvents', function(e) {
          return e._id == event._id
        })
        modal.modal('hide')
    })

    modal.find('form').on('submit', function(e) {
      e.preventDefault()
      event.title = form.find('input[type=text]').val()
      calendar.fullCalendar('updateEvent', event)
      modal.modal('hide')
    })
  }

  const onSelect = (start, end, jsEvent, calendar) => {
    const modal = $(MODAL)
    modal.modal({
      backdrop: "static"
    })
    
    const form = $(`<form>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label class="control-label">Event Name</label>
            <input class="form-control" placeholder="Insert Event Name" type="text" name="title" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label class="control-label">Category</label>
            <select class="form-control custom-select" name="category">
              <option value="bg-danger">Danger</option>
              <option value="bg-success">Success</option>
              <option value="bg-primary">Primary</option>
              <option value="bg-info">Info</option>
              <option value="bg-dark">Dark</option>
              <option value="bg-warning">Warning</option>
            </select>
          </div>
        </div>
      </div>
    </form>`);

    modal
      .find('.delete-event').hide().end()
      .find('.save-event').show().end()
      .find('.modal-body').empty().prepend(form).end()
      .find('.save-event').unbind('click').on('click', function() {
        form.submit()
      })

    modal.find('form').on('submit', function(e) {
      e.preventDefault()

      var title = form.find('input[name="title"]').val()
      const className = (
        form.find('input[name="beginning"]').val(), 
        form.find('input[name="ending"]').val(), 
        form.find('select[name="category"] option:checked').val()
      )

      if (null !== title && 0 != title.length) {
        calendar.fullCalendar('renderEvent', {
          title,
          start,
          end,
          allDay: false,
          className
        }, true)
        return modal.modal('hide')
      }
      
      alert('You have to give a title to your event')
    })

    calendar.fullCalendar('unselect')
  }

  $('[data-toggle="fullcalendar"]').each(function() {
    const element = $(this)
    const options = {
      themeSystem: 'bootstrap4',
      closeButton: void 0 !== element.data('toastr-close-button') 
        ? element.data('toastr-close-button') 
        : false,
      slotDuration: '00:15:00',
      minTime: '08:00:00',
      maxTime: '19:00:00',
      defaultView: 'month',
      handleWindowResize: true,
      height: $(window).height() - 200,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events,
      editable: true,
      droppable: true,
      eventLimit: true,
      selectable: true,
      drop: function(date) {
        onDrop($(this), date, element)
      },
      select: function(start, end, jsEvent) {
        onSelect(start, end, jsEvent, element)
      },
      eventClick: function(event, jsEvent, view) {
        onEventClick(event, jsEvent, view, element)
      }
    }

    element.fullCalendar(options)
  })

  const MODAL = '#event-modal'
  const EVENT = '#external-events div.external-event'
  const EXT_EVENTS_CONTAINER = '#external-events'
  const categoryForm = $('#add-category form')

  const enableDrag = () => {
    $(EVENT).each(function() {
      if ($(this).data('eventObject')) {
        return
      }
      $(this).data('eventObject', {
        title: $.trim($(this).find('.external-event__title').text())
      })
      $(this).draggable({
        zIndex: 999,
        revert: true,
        revertDuration: 0
      })
    })
  }

  enableDrag()

  $('.save-category').on('click', function() {
    const name = categoryForm.find('input[name="category-name"]').val()
    const color = categoryForm.find('select[name="category-color"]').val()

    if (null !== name && 0 != name.length) {
      $(EXT_EVENTS_CONTAINER).append(`
        <div class="external-event bg-${ color }" data-class="bg-${ color }">
          <i class="mr-2 material-icons">drag_handle</i>
          <span class="external-event__title">${ name }</span>
        </div>
      `)
      enableDrag()
    }
  })

})()