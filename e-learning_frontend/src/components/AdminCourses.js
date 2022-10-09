import Course from './Course';
const AdminCourses = () =>{
  return(
    <section className = 'section flex column'>
      <h1 className = 'title'>Courses</h1>
      <div className = 'allcourses flex'>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>


      </div>
    </section>
  );
};
export default AdminCourses;
