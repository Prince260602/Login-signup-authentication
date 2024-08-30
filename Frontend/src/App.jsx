import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <div className="absolute bg-blue-600 text-white top-0 right-0 bottom-0 left-0 flex flex-col">
        <header className="p-4">
          <div className="container flex justify-between items-center mx-auto">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-10 h-10"
              >
                {/* Facebook Logo */}
                <path d="M16 1C7.163 1 0 8.163 0 17c0 8.074 6.48 14.843 14.5 15.9v-11.2h-4.4v-4.7h4.4v-3.5c0-4.3 2.6-6.7 6.4-6.7 1.8 0 3.3 0.1 3.8 0.1v4.4h-2.6c-2 0-2.4 1.2-2.4 2.4v3.1h4.8l-0.7 4.7h-4.1v11.2c8.02-1.048 14.5-7.778 14.5-15.9C32 8.163 24.837 1 16 1z"/>
              </svg>
              <span className="text-4xl font-bold">Facebook</span>
            </a>
            <div className="space-x-4 hidden md:flex">
              <Link to="/login" className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600">Login</Link>
              <Link to="/registration" className="px-4 py-2 bg-green-500 rounded text-white hover:bg-green-600">Sign Up</Link>
            </div>
            <button className="flex md:hidden p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>
        <main className="flex flex-col items-center justify-center min-h-screen space-y-8">
          <h1 className="text-5xl font-bold text-white">Welcome to Facebook</h1>
          <div className="space-x-4">
            <Link to="/login" className="px-6 py-3 bg-blue-500 rounded text-white hover:bg-blue-600">Login</Link>
            <Link to="/registration" className="px-6 py-3 bg-green-500 rounded text-white hover:bg-green-600">Sign Up</Link>
          </div>
        </main>
      </div>
      
    </>
  );
}

export default App;
