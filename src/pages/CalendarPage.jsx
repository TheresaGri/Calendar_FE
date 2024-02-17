import CalendarComponent from "../components/CalendarComponent/CalendarComponent";
import { useState } from "react";

const CalendarPage = () => {
  const [dateValue, setDateValue] = useState(new Date());
  //const [dateClickCounter, setDateClickCounter] = useState(0);
  

  const handleChangeDate = (e) => {
    const selectedDateMillis = e.getTime();
    const currentDateMillis = dateValue.getTime();
    if(selectedDateMillis === currentDateMillis) {
      console.log("double click");
    }
    setDateValue(e);

  }
 

  return (
    <div className="calendar_page">
      <CalendarComponent
        value={dateValue}
        onChange={handleChangeDate}
      ></CalendarComponent>
      <button onDoubleClick={() => console.log("double click")}>click twice</button>
    </div>
  );
};

export default CalendarPage;
