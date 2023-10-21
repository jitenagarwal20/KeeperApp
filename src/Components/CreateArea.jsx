import React from "react";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useState } from "react";

function CreateArea(props) {
    const [note,setNote]=useState({
        title: "",
        content: ""
    });
    const [expand,setExpand]=useState(false)

    function HandleChange(event){
        const {value,name}=event.target
        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })
    }

    function HandleClick(event){
        props.onAdd(note)
        setNote({title:"", content:""})
        event.preventDefault()
    }

    function Expand(){
        setExpand(true)
    }
  return (
    <div>
      <form className="create-note">
        {expand && <input onChange={HandleChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea onChange={HandleChange} onClick={Expand} name="content" placeholder="Take a note..." rows={expand?"3":"1"} value={note.content}/>
        <Zoom in={expand}>
            <Fab onClick={HandleClick}>
                <AddIcon />
            </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
