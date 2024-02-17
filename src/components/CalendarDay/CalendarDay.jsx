import "./CalendarDay.css";

const CalendarDay = ({ date }) => {
  const hours = Array.from({ length: 24 }, (_, index) => index);
  return (
    <div>
      <p>{date}</p>
      <div className="calendar_day">
        <div className="timetable">
          {hours.map((hour) => (
            <div key={hour}>
              <p>{hour}:00</p>
              <p> </p>
            </div>
          ))}
        </div>
        <div className="daily_notes">
          <label>Daily note:</label>{" "}
          <textarea name="daily_note_content" rows={4} cols={40} />
          <button>save</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarDay;
