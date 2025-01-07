function Dashboard() {
    return (
      <>
        <div className="overflow-x-auto p-4">
          <h1 className="text-5xl font-bold mb-4">Dashboard</h1>
          <table className="table">
            <thead>
              <tr>
                <th>
                </th>
                <th>Name</th>
                <th>Info</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                      <div className="text-sm opacity-50">Last online: Now</div>
                    </div>
                  </div>
                </td>
                <td>
                  HartHagerty@gmail.com
                  <br />
                  <span className="badge badge-warning badge-sm">Administrator</span>
                </td>
                <td>
                  <span className="badge badge-sm badge-success">Online</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">More...</button>
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                      <div className="text-sm opacity-50">Last online: 2 hours ago</div>
                    </div>
                  </div>
                </td>
                <td>
                  BriceSwyre@gmail.com
                  <br />
                  <span className="badge badge-primary badge-sm">Moderator</span>
                </td>
                <td>
                  <span className="badge badge-sm badge-outline badge-ghost">Offline</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">More...</button>
                </th>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                      <div className="text-sm opacity-50">Last online: 30 days ago</div>
                    </div>
                  </div>
                </td>
                <td>
                  MarjyFerencz@gmail.com
                  <br />
                  <span className="badge badge-info badge-sm">User</span>
                </td>
                <td>
                  <span className="badge badge-sm badge-outline badge-ghost">Offline</span>
                </td>
                <th>
                  <button className="btn btn-error btn-xs m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-exclamation" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                  </svg>
                  </button>
                  <button className="btn btn-info btn-xs m-1">Profile</button>
                  <button className="btn btn-ghost btn-xs m-1">More...</button>
                </th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Info</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
  }
  
export default Dashboard;