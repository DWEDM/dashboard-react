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
            <ul className="menu gap-y-2 bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <a className="align-center justify-center items-left">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5M10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM13 8h-2V6h2z"/>
                  </svg>
                  Post Management
                </a>
              </li>
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
