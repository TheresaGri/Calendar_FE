import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CalendarDay.css";

const CalendarDay = ({ date }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);
  const hours = Array.from({ length: 24 }, (_, index) => index);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onClickAddAppointment = () => {
    console.log("add appointment");
  }

  const onClickBackToOverview = () => {
    navigate(`/calendar_overview`);
  }
  return (
    <div>
      <button onClick = {onClickBackToOverview}>back to calendar overview</button>
      <p>{date}</p>
      <div className="calendar_day">
        <div className="timetable">
          {hours.map((hour) => (
            <div key={hour}>
              <p>{hour}:00</p>
              <p onClick={onClickAddAppointment}> termin</p>
            </div>
          ))}
        </div>
        <div className="daily_notes">
          <label>Daily note:</label>{" "}
          <textarea name="daily_note_content" rows={4} cols={40} />
          <button>save</button>
        </div>
        <div className="to_do_list">
          <div className = "checkbox_container">
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <p>termin</p>
          </div>
          <button>add new todo</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarDay;
