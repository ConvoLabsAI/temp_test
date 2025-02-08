import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Form from "./components/Form";
import About from "./components/About";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import People from "./components/People";
import CareersPage from "./components/CareersPage";
import BlogPage from "./components/BlogPage";  // New import for Blog component

const AppLayout = ({ handleLogin }) => {
  const location = useLocation();
  const isDashboardRoute = location.pathname === '/dashboard';

  return (
    <div className="bg-black">
      {!isDashboardRoute && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Info />
              <Features />
              <Form />
              <People />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/signin"
          element={<AuthForm onLogin={handleLogin} />}
        />
        <Route 
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/careers"
          element={<CareersPage />}
        />
        <Route
          path="/blog/:id"
          element={<BlogPage />}  // New route for blog pages
        />
      </Routes>
    </div>
  );
};

const App = () => {
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Router>
      <AppLayout handleLogin={handleLogin} />
    </Router>
  );
};

export default App;