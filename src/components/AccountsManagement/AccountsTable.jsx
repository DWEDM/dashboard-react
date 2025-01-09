function AccountsTable() {
    return (
      <>
        <div className="overflow-x-auto py-4">
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