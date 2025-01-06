import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="SideBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start align-top">
          <Navbar />
        </div>

        <div className="drawer-side">
            <label htmlFor="SideBar" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li><a>Post Management</a></li>
            <li><a>Accounts Management</a></li>
            <li><a>Reports Management</a></li>
            <li><a>Adoptions List</a></li>

            <li><a>Privacy Policy</a></li>
            <li><a>Terms of Service</a></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
