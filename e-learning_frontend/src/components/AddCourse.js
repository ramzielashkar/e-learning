import Button from './Button';
import { useState, useEffect } from "react";

const AddCourse = ({open, onClose}) => {
  const [img, setImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  if(!open){
    return null;
  }

  return(
    <div className='assign-container flex column'>
      <div className='assign-popup flex column'>
          <div>
          <label className='select-img' for = 'image'>Select Image</label>
          <input id='image' type="file" hidden onChange={onImageChange} />
          <div className='course-image'>
            <img src={img} alt="" width='100%' height="100%" />
          </div>
        </div>
        <div className='course-info flex column'>
          <label>Course Name</label>
          <input type='text' placeholder='Enter Course Name'></input>
        </div>
        <div className='buttons flex'>
        <Button
        text= {'Close'}
        color={'btn-assign'}
        onClick = {onClose}/>
        <Button
        text= {'Add'}
        color={'btn-assign'}
        onClick = {onClose}/>
        </div>
      </div>
    </div>
  );
};
export default AddCourse;
