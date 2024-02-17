import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import CalendarPage from "./pages/CalendarPage";
import CalendarDayPage from "./pages/CalendarDayPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" index element= {<LoginPage/>}/>
          <Route path="calendar_overview" element={<CalendarPage/>}/>
          <Route path = "calendar/:day" element={<CalendarDayPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
