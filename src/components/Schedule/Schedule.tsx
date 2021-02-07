import React from 'react';
import { Lesson } from '../../utils/domain';
import styles from './Schedule.module.scss';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

class Schedule extends React.PureComponent <{
  onSelectedEvent: Function
  events: Lesson[]
}, any>{
  render() {
    return (
      <div className={styles.Schedule}>
        <FullCalendar
          plugins={[ timeGridPlugin ]}
          initialView="timeGridWeek"
          allDaySlot={false}
          weekends={false}
          headerToolbar={false}
          nowIndicator={false}
          dayHeaderFormat={{
            month: undefined,
            year: undefined,
            day: undefined,
            weekday: 'long'
          }}
          slotMinTime={"08:00:00"}
          slotMaxTime={"20:00:00"}
          slotLabelFormat={{
            hour: '2-digit',
            minute: '2-digit',
            omitZeroMinute: false,
            meridiem: undefined,
            hour12: false
          }}
          slotEventOverlap={false}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            omitZeroMinute: false,
            meridiem: undefined,
            hour12: false
          }}
          expandRows={false}
          height={"auto"}
          contentHeight={"auto"}
          events={this.props.events}
          eventClick={(info) => this.props.onSelectedEvent(info.event.id)}
          locale="pt"
        />
      </div>
    );
  }
}

export default Schedule;
