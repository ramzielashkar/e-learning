
const Header = ({name}) => {
  return(
  <div className = "top-bar flex">
    <h1 className = "title">Learn Your Way</h1>
    <div className='profile flex'>
    <div className='user-img'>
    <img src = {require('../assets/default.png')} width = '100%' height = '100%'></img>
    </div>
    <h3 className = "user-name">{name}</h3>
    </div>
  </div>
);
};
export default Header;
