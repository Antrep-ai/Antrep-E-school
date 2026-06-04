import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import SchoolLanding from './pages/school/SchoolLanding';
import SchoolSignup from './pages/school/SchoolSignup';
import SchoolLogin from './pages/school/SchoolLogin';
import SchoolDashboard from './pages/school/SchoolDashboard';
import SchoolCourses from './pages/school/SchoolCourses';
import SchoolCourseDetail from './pages/school/SchoolCourseDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Core ANTREP School of Entrepreneurship Routes */}
        <Route path="/school" element={<SchoolLanding />} />
        <Route path="/school/signup" element={<SchoolSignup />} />
        <Route path="/school/login" element={<SchoolLogin />} />
        <Route path="/school/dashboard" element={<SchoolDashboard />} />
        <Route path="/school/courses" element={<SchoolCourses />} />
        <Route path="/school/courses/:slug" element={<SchoolCourseDetail />} />

        {/* Redirect empty root path to school landing page */}
        <Route path="/" element={<Navigate to="/school" replace />} />
        
        {/* Fallback wildcard path redirects to school landing page */}
        <Route path="*" element={<Navigate to="/school" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
