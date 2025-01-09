function Navbar() {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1 gap-2">
                <label htmlFor="SideBar" className="btn drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                        <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/>
                    </svg>
                </label>
                <a className="btn btn-ghost text-xl">LOGO</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex="0"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-y-1">
                    <li>
                        <a className="justify-between">
                            Profile
                        </a>
                    </li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
  }
  
export default Navbar;