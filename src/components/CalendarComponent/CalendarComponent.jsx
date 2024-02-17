import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({date,onChange}) => {

  return (
    <div>
        <h1>Calendar</h1>
        <Calendar
            onChange={onChange}
            value={date}
        />
    </div>
);
}

export default CalendarComponent;