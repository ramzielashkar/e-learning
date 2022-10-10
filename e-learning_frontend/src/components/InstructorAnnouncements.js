import Button from './Button';
import AnnouncementCard from './AnnouncementCard';
import AddAnnouncement from './AddAnnouncement'
import { useState, useEffect } from "react";

const InstructorAnnouncements = () => {
  const showAddPopup = () => {
    setShowAddAnnouncement(true);
  };
  const closeAddPopup = () => {
    setShowAddAnnouncement(false);
  };

  const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);

  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Announcements</h1>
      <div className='add-course-btn flex'>
        <Button
        text = {'Add Announcement'}
        color = {'btn-purple'}
        onClick = {() => {
          showAddPopup();
        }}
        />
      </div>
      <div className = 'all-students flex'>
      <AnnouncementCard/>
      </div>
    </section>
    <AddAnnouncement
    open = {showAddAnnouncement}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default InstructorAnnouncements;
