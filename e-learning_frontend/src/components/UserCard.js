import Button from './Button';

const UserCard = (onClick) => {
  return(
    <>
    <div className = "course-card flex column">
      <div className='course-img'>
        <img src = {require('../assets/images.jpeg')} width = "100%" height = "100%"></img>
      </div>
      <div className='user-info'>Ramzi</div>
      <div className='user-info'>Email</div>
    </div>
    </>
  );
};
export default UserCard;
