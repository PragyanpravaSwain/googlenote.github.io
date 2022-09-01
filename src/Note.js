import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = ({title, content, onDelete, id}) => {
    return(
        <>
         <div className="note_div">
             <h1>{title}</h1>
             <br/>
             <p>{content}</p>
             <button onClick={() => onDelete(id)}><DeleteOutlineIcon /></button>
         </div>
        </>
    );
};

export default Note;