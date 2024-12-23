import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl">Dashboard</h1>
      </header>
      <main className="flex-grow p-6">
        <h2 className="text-xl">Welcome to the React Dashboard</h2>
      </main>
      <footer className="bg-neutral text-neutral-content p-4 text-center">
        <p>&copy; 2024 Dashboard Inc.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));