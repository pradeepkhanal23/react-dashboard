import Appbar from "./views/global/Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./views/global/Sidebar";
import Dashboard from "./views/dashboard";
import Team from "./views/team";
import Contacts from "./views/contacts";
import Invoices from "./views/invoices";
import Form from "./views/form";
import Calendar from "./views/calendar";
import Faq from "./views/faq";
import Bar from "./views/bar";
import Pie from "./views/pie";
import Line from "./views/line";
import Geo from "./views/geography";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="content">
            <Appbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geo />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
