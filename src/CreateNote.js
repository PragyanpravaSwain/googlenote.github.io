import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const[expand, setExpand] = useState(false);

   const[note, setNote] = useState({
       title: "",
       content: "",
   });

   const handleChange = (event) => {
       const{name, value} = event.target;
       setNote(preVal => {
           return{
               ...preVal,
               [name]: value,
           };
       });
   };

   const handleExpand = () => {
       setExpand(true)
   }

   const submitButton = (event) => {
       props.onAdd(note);
       setNote({
           title: "",
           content: "",
       });
       event.preventDefault();
   }

    return(
        <>
          <div className="main_div">
              <form>
                {expand &&(
                  <input type="text" 
                  placeholder="Title" 
                  autoComplete="off" 
                  name="title"
                  value={note.title} 
                  onChange={handleChange} />
                  )}
                  <p>
                   <textarea 
                   placeholder="Take a note..." 
                   onClick={handleExpand}
                   name="content"
                   value={note.content}
                   onChange={handleChange}
                   rows={expand ? 3 : 1} />
                 </p>
                <button onClick={submitButton}><AddIcon /></button>
              </form>
          </div>
        </>
    );
};

export default CreateNote;