import "./App.css";
import UploadSimc from "./components/pages/UploadSimc";
import ReportPage from "./components/pages/ReportPage";
import FakeReport from "./components/pages/FakeReport";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-bgmain">
      <Router>
        <Routes>
          <Route path="/" element={<UploadSimc />} />

          <Route path="/report" element={<ReportPage />} />
          <Route
            path="/report/a7F9j2K0zPq5L1uR3T8wX"
            element={<FakeReport />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
