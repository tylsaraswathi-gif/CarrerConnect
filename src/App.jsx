import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs/Jobs";

import Dashboard from "./pages/Dashboard/Dashboard";
import Overview from "./pages/Dashboard/Overview";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";

import StudentTable from "./pages/StudentTable/StudentTable";
import StudentDetails from "./pages/StudentDetails/StudentDetails";

import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Home */}
        <Route index element={<Home />} />

        {/* Navbar Pages */}
        <Route path="about" element={<About />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Student Pages */}
        <Route path="students" element={<StudentTable />} />
        <Route path="student/:id" element={<StudentDetails />} />

        {/* Dashboard */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;