import Button from './Button';
import { useState, useEffect } from "react";
import { addCourse } from '../Hooks/AddCourse';
import { useNavigate } from "react-router-dom";

 const AddCourse = ({open, onClose, onAdd}) => {

  const navigate = useNavigate();
  
  //function to submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!coursename) {
    console.log('error');
    return;
    } 
    onAdd(coursename, base64);
    onClose();
} 
 //function to convert image to base64
  const getBase64 = (file, callBack) =>{
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        callBack(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
  }
}
  const [img, setImg] = useState('');
  const [base64, setBase64]= useState('');
  const [coursename, setCourseName] = useState('');

  // get chosen image
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    getBase64(file, (result) => {
      setBase64(result);
    });
  };
  if(!open){
    return null;
  }

  return(
    <div className='assign-container flex column'>
      <form className='assign-popup flex column' onSubmit={onSubmit}>
          <div>
          <label className='select-img' for = 'image'>Select Image</label>
          <input id='image' type="file" hidden onChange={onImageChange} />
          <div className='course-image'>
            <img src={img} alt="" width='100%' height="100%" />
          </div>
        </div>
        <div className='course-info flex column'>
          <label>Course Name</label>
          <input type='text' placeholder='Enter Course Name' onChange={(e) => setCourseName(e.target.value)} required></input>
        </div>
        <div className='buttons flex'>
        <Button
        text= {'Close'}
        color={'btn-assign'}
        onClick = {onClose}/>
        <input type={"submit"} value="Add" className="btn btn-assign"/>

        </div>
      </form>
    </div>
  );
};
export default AddCourse;