import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client'
import '../css/app.css';
import Footer from './partials/footer'; // Correct import path
import Navbar from './partials/navbar';

// Create a root element for the app
const root = ReactDOM.createRoot(document.getElementById('app')); 

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-grow p-6 h-[200vh]">
          <h2 className="text-xl">Welcome to the React Dashboard</h2>
          {/* Add any content here */}
        </main>
      <Footer />
    </div>
  );
}

// Use the root element to render the app
root.render(<App />);
