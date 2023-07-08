import NoteContext from "./noteContext"; 
import {useState} from "react";
const NoteState=(props)=> {
    const notesInitial=[
        {
            "_id": "64a7033d5d2e7de00d229308",
            "user": "64a6bb152b6f01b141cfa49e",
            "title": "title",
            "description": "lets go yeah",
            "tag": "personal",
            "date": "2023-07-06T18:09:01.902Z",
            "__v": 0
          },
          {
            "_id": "64a7033e5d2e7de00d229230a",
            "user": "64a6bb152b6f01b141cfa49e",
            "title": "title",
            "description": "lets go yeah",
            "tag": "personal",
            "date": "2023-07-06T18:09:02.649Z",
            "__v": 0
          },
          {
            "_id": "64a7033d5d2e7de002d229308",
            "user": "64a6bb152b6f01b141cfa49e",
            "title": "title",
            "description": "lets go yeah",
            "tag": "personal",
            "date": "2023-07-06T18:09:01.902Z",
            "__v": 0
          },
          {
            "_id": "64a7033e25d2e7de00d22930a",
            "user": "64a6bb152b6f01b141cfa49e",
            "title": "title",
            "description": "lets go yeah",
            "tag": "personal",
            "date": "2023-07-06T18:09:02.649Z",
            "__v": 0
          },
          {
            "_id": "64a7033d5d2e7de100d229308",
            "user": "64a6bb152b6f01b141cfa49e",
            "title": "title",
            "description": "lets go yeah",
            "tag": "personal",
            "date": "2023-07-06T18:09:01.902Z",
            "__v": 0
          },
          {
            "_id": "64a73033e5d2e7de00d22930a",
            "user": "64a6bb152b6f01b141cfa49e",
            "title": "title",
            "description": "lets go yeah",
            "tag": "personal",
            "date": "2023-07-06T18:09:02.649Z",
            "__v": 0
          },
          {
            "_id": "64a70a3e024be62589174b78c",
            "user": "64a6bb152b6f01b141cfa49e",
            "title": "title",
            "description": "lets go yeah",
            "tag": "personal",
            "date": "2023-07-06T18:38:54.254Z",
            "__v": 0
          }
    ]

    const [notes,setNotes] = useState(notesInitial)

    //add a note
    const addNote=(title,description,tag)=>{
      const note={
        "_id": "64a70a3e024be62589174b78c",
        "user": "64a6bb152b6f01b141cfa49e",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-07-06T18:38:54.254Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
    }
    //Delete a note
    const deleteNote=()=>{

    }
    //edit a note
    const editNote=()=>{
      
    }

    return(
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;