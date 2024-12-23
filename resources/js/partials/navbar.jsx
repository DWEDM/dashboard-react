import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0); // To store the last scroll position
  const [visible, setVisible] = useState(true); // To track whether the navbar is visible

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }
    // Update the last scroll position
    setLastScrollY(window.scrollY);
  };

  // Add and remove event listener on component mount and unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // This will run whenever `lastScrollY` changes

  return (
    <div className={`navbar bg-base-200 w-full sticky top-0 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Egg</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Eggs</a></li>
          <li>
            <details>
              <summary>Types of Egg</summary>
              <ul className="p-2 w-48">
                <li><a>Fried</a></li>
                <li><a>Boiled</a></li>
                <li><a>Poached</a></li>
              </ul>
            </details>
          </li>
          <li><a>Chickens</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <label for="Sidebar" class="btn btn-primary drawer-button lg:hidden">
            Open drawer
        </label>
        <a className="btn bg-base-300">Theme of your Egg</a>
      </div>
    </div>
  );
};

export default Navbar;
