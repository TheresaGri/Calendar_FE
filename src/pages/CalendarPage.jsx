import CalendarComponent from "../components/CalendarComponent/CalendarComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CalendarPage = () => {
  const navigate = useNavigate();
  const [dateValue, setDateValue] = useState(new Date());
  

  const handleChangeDate = (e) => {
    const selectedDateMillis = e.getTime();
    const currentDateMillis = dateValue.getTime();
    if(selectedDateMillis === currentDateMillis) {
      console.log("double click");
      const clickedDate = `${dateValue.getDate()}.${dateValue.getMonth() + 1}.${dateValue.getFullYear()}`;
      navigate(`/calendar/${clickedDate}`);
    }
    setDateValue(e);

  }
 

  return (
    <div className="calendar_page">
      <CalendarComponent
        value={dateValue}
        onChange={handleChangeDate}
      ></CalendarComponent>
    </div>
  );
};

export default CalendarPage;
