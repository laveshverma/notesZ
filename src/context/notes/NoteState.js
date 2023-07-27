import NoteContext from "./noteContext"; 
import {useState} from "react";


const NoteState=(props)=> {
   //const host = "http://localhost:5000"
    const host = "https://notesz-backend.onrender.com"
    const notesInitial=[]

    const [notes,setNotes] = useState(notesInitial)

    //fetch all notes
  const getNotes = async() =>{
    const url=`${host}/api/notes/fetchallnotes`
      const response = await fetch(url, {
        method: "GET", 
    
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
    
        },
      });
      const json = await response.json();
      setNotes(json);
  }

    //add a note
    const addNote= async (title,description,tag)=>{
      //api call
      const url=`${host}/api/notes/addnote`
      const response = await fetch(url, {
        method: "POST", 
    
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
    
        },
       
        body: JSON.stringify({title,description,tag}), 
      });
      const json = await response.json();
   
      setNotes(notes.concat(json))
    }
    //Delete a note
    const deleteNote= async (id)=>{
      const url=`${host}/api/notes/deletenote/${id}`
      const response = await fetch(url, {
        method: "DELETE", 
    
        headers: {
        
          "auth-token":localStorage.getItem('token')
    
        },
       
      });
      // eslint-disable-next-line
      const json = await response.json();
     
     const newNotes = notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes);
    }
    //edit a note
    const editNote=async (id, title,description,tag)=>{

      //api call
      const url=`${host}/api/notes/updatenote/${id}`
      const response = await fetch(url, {
        method: "PUT", 
    
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
    
        },
       
        body: JSON.stringify({title,description,tag}), 
      });
      // eslint-disable-next-line
      const json = await response.json();
     
      let newNotes = JSON.parse(JSON.stringify(notes))
      //edit in client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id=== id){
          newNotes[index].title = title;
          newNotes[index].description= description;
          newNotes[index].tag= tag;
          break;
        }
      }
setNotes(newNotes);
    }
    return(
    <NoteContext.Provider value={{getNotes,addNote,deleteNote,editNote,notes}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;
