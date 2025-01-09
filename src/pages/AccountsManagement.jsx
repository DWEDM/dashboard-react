import AccountsTable from '../components/AccountsManagement/AccountsTable';
import StatAccounts from '../components/AccountsManagement/AccountMonitoringLineChart';

function AccountsManagement() {
    return (
      <>
        <h1 className="text-4xl font-bold">Accounts Management</h1>
        <p className="text-lg">View, edit, and manage user accounts within the platform. You can update user details, assign roles, and handle account permissions.</p>
        <div className="card bg-white shadow-md my-4 p-4 text-neutral">
          <StatAccounts />
        </div>
        <AccountsTable />
      </>
    );
  }
  
export default AccountsManagement;