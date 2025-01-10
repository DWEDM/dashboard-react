function RecentLogs() {
    return (
        <>
            <div className="overflow-x-auto flex flex-col align-middle gap-y-2">
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
                <table className="table table-xs text-center">
                    <thead>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                        <th>Action taken</th>
                        <th>Timestamp</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Admin</td>
                            <td>Created a new account</td>
                            <td>2025-01-09 10:32:45</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>User</td>
                            <td>Updated profile information</td>
                            <td>2025-01-08 14:25:12</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>Michael Brown</td>
                            <td>Admin</td>
                            <td>Suspended user account</td>
                            <td>2025-01-07 09:05:20</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>Emily Johnson</td>
                            <td>Moderator</td>
                            <td>Deleted a post</td>
                            <td>2025-01-06 16:18:33</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>Chris Williams</td>
                            <td>Admin</td>
                            <td>Reset user password</td>
                            <td>2025-01-05 12:45:10</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>Anna Taylor</td>
                            <td>User</td>
                            <td>Changed email address</td>
                            <td>2025-01-04 18:35:50</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>David Harris</td>
                            <td>Moderator</td>
                            <td>Approved a post</td>
                            <td>2025-01-03 08:20:15</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>Sophia Clark</td>
                            <td>User</td>
                            <td>Logged in</td>
                            <td>2025-01-02 11:30:05</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>Liam Lewis</td>
                            <td>Admin</td>
                            <td>Changed site settings</td>
                            <td>2025-01-01 17:15:40</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                        <tr>
                            <td>Olivia Walker</td>
                            <td>Moderator</td>
                            <td>Flagged a comment</td>
                            <td>2024-12-31 13:10:25</td>
                            <td><button className="btn btn-xs btn-outline btn-info">View</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                        <th>Action taken</th>
                        <th>Timestamp</th>
                        <th></th>
                    </tr>
                    </tfoot>
                </table>
                <div className="join p-2 w-full items-center flex justify-center">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">Page 22</button>
                    <button className="join-item btn">»</button>
                </div>
            </div>
        </>
    );
  }
  
export default RecentLogs;