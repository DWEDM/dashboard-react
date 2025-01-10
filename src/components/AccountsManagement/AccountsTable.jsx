function AccountsTable() {
    return (
      <>
        <div className="overflow-x-auto py-4">
          <div className="flex w-auto align-center justify-center items-center gap-x-2">
            <details className="dropdown">
              <summary className="btn m-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
              </svg>
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </details>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Info</th>
                <th>Account Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-70">Last online:  <p className="badge badge-warning w-auto text-[10px]">Now</p></div>
                    </div>
                  </div>
                </td>
                <td>
                  HartHagerty@gmail.com
                  <br />
                  <span className="badge badge-warning badge-sm">Administrator</span>
                </td>
                <td>
                  <div className="text-sm opacity-70">2024-11-07 01:45:36</div>
                </td>
                <th>
                  <button className="btn btn-error btn-xs m-1">Suspend</button>
                  <button className="btn btn-info btn-xs m-1">Profile</button>
                  <button className="btn btn-ghost btn-xs m-1">More...</button>
                </th>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-70">Last online:  <p className="badge badge-ghost w-auto text-[10px]">2 hours ago</p></div>
                    </div>
                  </div>
                </td>
                <td>
                  BriceSwyre@gmail.com
                  <br />
                  <span className="badge badge-primary badge-sm">Moderator</span>
                </td>
                <td>
                  <div className="text-sm opacity-70">2024-11-07 01:45:36</div>
                </td>
                <th>
                  <button className="btn btn-error btn-xs m-1">Suspend</button>
                  <button className="btn btn-info btn-xs m-1">Profile</button>
                  <button className="btn btn-ghost btn-xs m-1">More...</button>
                </th>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-70">Last online: <p className="badge badge-ghost w-auto text-[10px]">30 days ago</p></div>
                    </div>
                  </div>
                </td>
                <td>
                  MarjyFerencz@gmail.com
                  <br />
                  <span className="badge badge-info badge-sm">User</span>
                </td>
                <td>
                  <div className="text-sm opacity-70">2024-11-07 01:45:36</div>
                </td>
                <th>
                  <button className="btn btn-error btn-xs m-1">Suspend</button>
                  <button className="btn btn-info btn-xs m-1">Profile</button>
                  <button className="btn btn-ghost btn-xs m-1">More...</button>
                </th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Info</th>
                <th>Account Created</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
  }
  
export default AccountsTable;