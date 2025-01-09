function RecentLogs() {
    return (
        <>
            <div className="overflow-x-auto">
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
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>User</td>
                        <td>Updated profile information</td>
                        <td>2025-01-08 14:25:12</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>Michael Brown</td>
                        <td>Admin</td>
                        <td>Suspended user account</td>
                        <td>2025-01-07 09:05:20</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>Emily Johnson</td>
                        <td>Moderator</td>
                        <td>Deleted a post</td>
                        <td>2025-01-06 16:18:33</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>Chris Williams</td>
                        <td>Admin</td>
                        <td>Reset user password</td>
                        <td>2025-01-05 12:45:10</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>Anna Taylor</td>
                        <td>User</td>
                        <td>Changed email address</td>
                        <td>2025-01-04 18:35:50</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>David Harris</td>
                        <td>Moderator</td>
                        <td>Approved a post</td>
                        <td>2025-01-03 08:20:15</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>Sophia Clark</td>
                        <td>User</td>
                        <td>Logged in</td>
                        <td>2025-01-02 11:30:05</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>Liam Lewis</td>
                        <td>Admin</td>
                        <td>Changed site settings</td>
                        <td>2025-01-01 17:15:40</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
                    </tr>
                    <tr>
                        <td>Olivia Walker</td>
                        <td>Moderator</td>
                        <td>Flagged a comment</td>
                        <td>2024-12-31 13:10:25</td>
                        <td><button class="btn btn-xs btn-outline btn-info">View</button></td>
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
            </div>
        </>
    );
  }
  
export default RecentLogs;