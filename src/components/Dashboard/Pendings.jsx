function Pendings() {
    return (
        <>
            <div class="overflow-x-auto">
            <table class="table text-center justify-center">
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
                        <td><button class="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Content report on inappropriate post</td>
                        <td><button class="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Michael Brown</td>
                        <td>Admin application - waiting for approval</td>
                        <td><button class="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Emily Johnson</td>
                        <td>Report a user for spam activity</td>
                        <td><button class="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Chris Williams</td>
                        <td>Moderator application for reviewing posts</td>
                        <td><button class="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>Anna Taylor</td>
                        <td>Report for abusive content on a post</td>
                        <td><button class="btn btn-sm">View</button></td>
                    </tr>
                    <tr>
                        <td>David Harris</td>
                        <td>Admin application - pending background check</td>
                        <td><button class="btn btn-sm">View</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    );
}

export default Pendings;