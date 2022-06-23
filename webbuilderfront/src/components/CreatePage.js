import React from 'react'
import "../styles/main.css"
import { IoAddOutline } from 'react-icons/io5';
import { useHistory } from "react-router-dom";


export default function CreatePage() {
    let history = useHistory();

    const CreatePageHandle = () =>{
        history.push(`/CreatePage`);

    }
  return (
    <div className="createpagediv">
        <div className="createpagecircle">
            <IoAddOutline className="addicon" size={"50px"} onClick={CreatePageHandle}/>
        </div>
        <span className="createpagetext">Create Page</span>
    </div>  
    )
}
