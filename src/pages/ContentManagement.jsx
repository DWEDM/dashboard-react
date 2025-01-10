import PostManagement from '../components/ContentManagement/PostTable';
import AnnouncementManagement from '../components/ContentManagement/AnnoucementTable';
import EventsManagement from '../components/ContentManagement/EventsTable';

function ContentManagement() {
    return (
      <>
        <div className=' flex flex-col gap-y-12'>
          <PostManagement />
          <AnnouncementManagement />
          <EventsManagement />
        </div>
      </>
    );
}
  
export default ContentManagement;
  