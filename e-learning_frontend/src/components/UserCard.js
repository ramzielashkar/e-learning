import Button from './Button';

const UserCard = ({onClick, name, email}) => {
  return(
    <>
    <div className = "course-card flex column">
      <div className='course-img'>
        <img src = {require('../assets/default.png')} width = "100%" height = "100%"></img>
      </div>
      <div className='user-info'>{name}</div>
      <div className='user-info'>{email}</div>
    </div>
    </>
  );
};
export default UserCard;
