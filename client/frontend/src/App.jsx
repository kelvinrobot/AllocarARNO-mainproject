import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import GenerateTimeTable from "./pages/dashboard/pages/generate-timetable/GenerateTimeTable";
import FileUpload from "./pages/dashboard/pages/upload-file/FileUpload";
import SaveDraft from "./pages/dashboard/pages/saved-drafts/SaveDraft";
// import Onboarding from "./pages/on-boarding/Onboarding";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import LandingPage from "./pages/landingPage/LandingPage";

import StudentDashboard from "./pages/dashboard/student/StudentDashboard";
import TimeTable from "./pages/dashboard/student/pages/timetable/TimeTable";
import Complain from "./pages/dashboard/student/pages/complaint/Complain";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/onboarding" element={<Onboarding />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* handle other pages */}
          <Route path="/*" element={<Dashboard />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/generate-timetable" element={<GenerateTimeTable />} />
            <Route path="/upload" element={<FileUpload />} />
            <Route path="/saved-drafts" element={<SaveDraft />} />
            <Route path="/student/timetable" element={<TimeTable />} />
            <Route path="/student/complain" element={<Complain />} />
            <Route
              path="/student/registration"
              element={<StudentDashboard />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
