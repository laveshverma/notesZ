import React from "react";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
            <div className= "d-flex align-item-center">

          <h5 className="card-title">{note.title}</h5>
          <i className="fa-sharp fa-solid fa-pen-to-square mx-2" style={{color: "#38a7fc"}}></i>
          <i className="fa-solid fa-trash mx-2 " style={{color: "#38a7fc"}}></i>
            </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
