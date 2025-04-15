// import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Quiz from "./Pages/Quiz";
import Contact from "./Pages/Contact"
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Loader from "./Pages/Loader";
import Assessment from "./Pages/Assessment";
import CareerResource from "./Pages/CareerResource";
import Exams from "./Pages/Exams";
import Universities from "./Pages/Universities";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasShownLoader = localStorage.getItem('loaderShown');
    
    if (hasShownLoader) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('loaderShown', 'true');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="transition-opacity duration-1000 ease-in-out">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/CareerResource" element={<CareerResource/>} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/universities" element={<Universities />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
