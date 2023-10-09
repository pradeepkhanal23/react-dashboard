import Appbar from "./views/global/Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./views/global/Sidebar";
import Dashboard from "./views/dashboard";
import Team from "./views/team";
import Contacts from "./views/contacts";
import Invoices from "./views/invoices";
import Form from "./views/form";
import Calendar from "./views/calendar";

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
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
