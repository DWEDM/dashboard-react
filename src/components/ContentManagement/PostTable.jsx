function ContentManagement() {
    return (
      <>
        <div className="overflow-x-auto flex flex-col align-middle gap-y-2 card shadow-lg bg-base-100 p-8 border border-warning">
          <h1 className="sm:text-3xl text-2xl font-medium title-font m-auto">Post Management</h1>
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
            <table className="table text-center justify-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Application for Moderator role</td>
                        <td><button className="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Content report on inappropriate post</td>
                        <td><button className="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Michael Brown</td>
                        <td>Admin application - waiting for approval</td>
                        <td><button className="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Emily Johnson</td>
                        <td>Report a user for spam activity</td>
                        <td><button className="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Chris Williams</td>
                        <td>Moderator application for reviewing posts</td>
                        <td><button className="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Anna Taylor</td>
                        <td>Report for abusive content on a post</td>
                        <td><button className="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>David Harris</td>
                        <td>Admin application - pending background check</td>
                        <td><button className="btn btn-sm">View</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </>
    );
  }
  
export default ContentManagement;