import { useParams } from "react-router-dom";
import CalendarDay from "../components/CalendarDay/CalendarDay";

const CalendarDayPage = () => {
  const { day } = useParams();

  return (
    <div>
      <CalendarDay date={day}></CalendarDay>
    </div>
  );
}

export default CalendarDayPage;