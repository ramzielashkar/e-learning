
const AnnouncementCard = ({course, details}) => {
  return(
    <div className='assignment-card flex column'>
      <div className='assignment-info '>
        <div className='assignment'>Announcement</div>
        <div>{details}</div>
      </div>
      <div className='assignment-info '>
        <div className='assignment'>Course</div>
        <div>{course}</div>
      </div>
    </div>
  );
};
export default AnnouncementCard;
