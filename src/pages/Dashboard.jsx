import RecentLogs from '../components/Dashboard/RecentLogs';
import Statistics from '../components/Dashboard/Statistics';
import Pendings from '../components/Dashboard/Pendings';

function Dashboard() {
    return (
      <>
        <div className="flex flex-col gap-y-8">
          <div className='flex flex-col gap-y-8 justify-center'>
            <Statistics />
          </div>
          <div className='flex flex-col gap-y-8 justify-center my-8 card shadow-lg px-4 py-8 bg-base-100'>
              <h1 className="sm:text-3xl text-2xl font-medium title-font m-auto">Recent Logs</h1>
              <RecentLogs />
          </div>
          <div className='flex flex-col gap-y-8 justify-center my-8 card shadow-lg px-4 py-8 bg-base-100'>
            <h1 className="sm:text-3xl text-2xl font-medium title-font m-auto">Pendings</h1>
            <Pendings />
          </div>
        </div>  
      </>
    );
  }
  
export default Dashboard;