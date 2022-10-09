import Button from './Button';
const Students = () => {
  return(
    <section className = 'section flex column'>
      <h1 className = 'title'>Students</h1>
      <div className='add-course-btn flex'>
        <Button
        text = {'Add Student'}
        color = {'btn-purple'}
        onClick = {() => {
        }}
        />
      </div>
      <div className = 'all-students flex'>
      </div>
    </section>
  );
};
export default Students;
