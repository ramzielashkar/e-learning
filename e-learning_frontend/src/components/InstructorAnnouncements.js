import Button from './Button';
import AnnouncementCard from './AnnouncementCard';
import AddAnnouncement from './AddAnnouncement';
import { getAnnounecements } from '../Hooks/getInstructorAnnouncements';
import { useState, useEffect } from "react";
import { addAnnouncement } from '../Hooks/AddAnnouncement';


const InstructorAnnouncements = () => {

  const [announcement, setAnnouncements] = useState([]);
  const token = localStorage.getItem('token');

  const showAddPopup = () => {
    setShowAddAnnouncement(true);
  };
  const closeAddPopup = () => {
    setShowAddAnnouncement(false);
  };

  //function to add Announcement
  const addAnn = async (coursename, anouncement) =>{
    const res = await addAnnouncement({coursename, anouncement}, token);
    console.log(res);
  }
  const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);

     //function to fetch get Assignments API
     useEffect(() => {
      const getInstructorAnn = async () => {
        const announecementsFromServer = await getAnnounecements(token);
        console.log(announecementsFromServer.data.anouncements);
        setAnnouncements(announecementsFromServer.data.anouncements);
      };
      getInstructorAnn(token);
      
    },[]);

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
      {  announcement.map((course, index)  => {
            let announcements = course.anouncements; 
              return (
                <>
                {course.anouncements.map((ann, key)  => {
                  return(
                <AnnouncementCard
                course={course.name}
                details = {ann}
                />
                  );
              })}
            </>
              );
  })}


      </div>
    </section>
    <AddAnnouncement
    onAdd={addAnn}
    open = {showAddAnnouncement}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default InstructorAnnouncements;
