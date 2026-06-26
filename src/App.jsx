import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout & Core Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ProtectedRoute from './router/ProtectedRoute';
import useScrollTop from './hooks/useScrollTop';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Toppers = lazy(() => import('./pages/Toppers'));
const Contact = lazy(() => import('./pages/Contact'));

// Auth Pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));

// Portal Pages
const Dashboard = lazy(() => import('./pages/portal/Dashboard'));
const Notes = lazy(() => import('./pages/portal/Notes'));
const OnlineClasses = lazy(() => import('./pages/portal/OnlineClasses'));
const Enroll = lazy(() => import('./pages/portal/Enroll'));

// Simple loading spinner for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg-primary">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-brand-orange/20 border-t-brand-orange rounded-full animate-spin"></div>
      <p className="font-playfair text-navy font-semibold tracking-wider">Loading...</p>
    </div>
  </div>
);

const ScrollWrapper = ({ children }) => {
  useScrollTop();
  return children;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollWrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <div className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Public Pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/toppers" element={<Toppers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/enroll" element={<Enroll />} />

                  {/* Auth Pages */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />

                  {/* Protected Portal Pages */}
                  <Route path="/portal/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/portal/notes" element={
                    <ProtectedRoute>
                      <Notes />
                    </ProtectedRoute>
                  } />
                  <Route path="/portal/classes" element={
                    <ProtectedRoute>
                      <OnlineClasses />
                    </ProtectedRoute>
                  } />
                </Routes>
              </Suspense>
            </div>

            <Footer />
            <WhatsAppButton />
          </div>
        </ScrollWrapper>
      </Router>
    </HelmetProvider>
  );
}

export default App;
