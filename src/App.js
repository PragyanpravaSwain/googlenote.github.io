import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Count from "./Count";
import Footer from "./Footer";

const App = (props) => {
const[nnotes, setNnotes] = useState([])

  const addNote = (newNote) => {
    setNnotes((preValue) => {
      return[...preValue, newNote];
    });
  };

  const deleteNotes = (id) => {
    setNnotes((preValue) => {
      return[...preValue.filter((note, index) =>
        index !== id
      )];
    });
  };

  return(
    <>
    <div className="app_div">
       <Header />
       <Count count={nnotes.length === 0? "Empty": `Showing ${nnotes.length} Notes in Database`} />
       <CreateNote onAdd={addNote}/>
       {nnotes.map((note, index) => {
        return (<Note key={index}
         id={index} 
         title={note.title}
         content={note.content}
         onDelete={deleteNotes} />);
       })} 
       </div>
    </>
  );
};

export default App;
