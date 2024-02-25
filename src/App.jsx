import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Register/Register';
import NotFoundPage from './pages/NotFoundPage';
import RedirectToLoginPage from './pages/components/HomePageRedirect/UseRedirect';
import "./App.css"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/registerpage" element={<RegisterPage />} />
                <Route path="/home" element={<ProtectedHomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

function ProtectedHomePage() {
    RedirectToLoginPage();
    return <HomePage />;
}

export default App;
