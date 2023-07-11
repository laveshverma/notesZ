import React from "react";
import {useContext}  from "react";
import noteContext from "../context/notes/noteContext";

function NoteItem(props) {
  const context= useContext(noteContext);
  const {deleteNote} = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
            <div className= "d-flex align-item-center">

          <h5 className="card-title">{note.title}</h5>
          <i className="fa-sharp fa-solid fa-pen-to-square mx-2" style={{color: "#38a7fc"}} onClick={()=>{updateNote(note)}}></i>
          <i className="fa-solid fa-trash mx-2 " style={{color: "#38a7fc"}} onClick={()=>{deleteNote(note._id); props.showAlert("Note Deleted Successfully","success")}}></i>
            </div>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
