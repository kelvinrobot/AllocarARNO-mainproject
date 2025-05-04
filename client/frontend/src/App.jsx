import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import GenerateTimeTable from "./pages/dashboard/pages/generate-timetable/GenerateTimeTable";
import FileUpload from "./pages/dashboard/pages/upload-file/FileUpload";
import SaveDraft from "./pages/dashboard/pages/saved-drafts/SaveDraft";
function App() {

  return (
    < BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/generate-timetable" element={<GenerateTimeTable />} />
        <Route path="/dashboard/upload" element={<FileUpload />} />
        <Route path="/dashboard/saved-drafts" element={<SaveDraft />} />
        {/* handle other pages */}
        <Route path="/*" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter >


  )
}

export default App
