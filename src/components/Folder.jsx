import { useState } from 'react';
import Folder from './Folder';

export default function({explorer,insertData}){

    const [expand, setExpand] = useState(false);
    const [showInput ,setShowInput] = useState({
        visible:false,
        folder:null
    });

    const handleClick = (e,show) => {
      e.stopPropagation();
      setExpand(true);
      setShowInput({
        visible:true,
        folder:show
      })
    }

    const onAddFolder = (e)=>{
       if( e.keyCode ===13 && e.target.value){
        insertData(explorer.id,e.target.value,showInput.folder);
        setShowInput({
            ...showInput,
            visible:false,
        })
       }
    }

    if(explorer.isFolder){
        return (
            <div>
                <div><span  onClick = {() => setExpand(!expand)}>{explorer.name}</span>
                    <button onClick ={(e)=>handleClick(e,true)}> Folder +</button>
                    <button onClick = {(e)=>handleClick(e,false)}>file +</button>
                </div>
                <div>
                    {showInput.visible && 
                        <input onKeyDown={onAddFolder} type = "text" onBlur={()=>setShowInput({...showInput,visible:false})} autoFocus/>
                    }
                </div>

                <div style={{display:expand?"block":"none"}}>
                {explorer.items.map((exp) => (

<Folder explorer={exp} insertData= {insertData} key = {exp.id}/>
                )
                    
               
                     
                )}
                </div>
                
            </div>
            
    
        )
    }
    else{
        return <div>{explorer.name}</div>
    }

}