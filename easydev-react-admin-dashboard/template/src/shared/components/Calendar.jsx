import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

const formats = {
  dayFormat: (date, culture) => localizer.format(date, 'DD', culture),
};

const CalendarComponent = ({ small, events: propEvents, dir }) => {
  const [events, setEvents] = useState(propEvents);

  const moveEvent = ({ event, start, end }) => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  const eventStyleGetter = (event) => {
    let color;

    switch (event.priority) {
      case 'high':
        color = '#fa697d';
        break;

      case 'family':
        color = '#4ce1b6';
        break;

      case 'non':
        color = '#70bbfd';
        break;
      default:
        color = '$color-additional';
        break;
    }

    const style = {
      backgroundColor: color,
      border: 'none',
    };

    return {
      style,
    };
  };

  return (
    <div className={`calendar${small ? ' calendar--small' : ''}`}>
      <DragAndDropCalendar
        rtl={dir === 'rtl'}
        localizer={localizer}
        events={events}
        views={['month', 'week', 'day']}
        popup
        formats={formats}
        step={60}
        timeslots={1}
        showMultiDayTimes
        onEventDrop={moveEvent}
        defaultDate={new Date(moment().format('MMMM DD YY'))}
        eventPropGetter={eventStyleGetter}
        messages={{
          previous: <span className="lnr lnr-chevron-left" />,
          next: <span className="lnr lnr-chevron-right" />,
          today: <span className="lnr lnr-calendar-full" />,
        }}
      />
    </div>
  );
};

CalendarComponent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    allDay: PropTypes.bool,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    priority: PropTypes.string,
  })).isRequired,
  small: PropTypes.bool,
  dir: PropTypes.string,
};

CalendarComponent.defaultProps = {
  small: false,
  dir: '',
};

export default CalendarComponent;
