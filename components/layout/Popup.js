import { React } from "react"

export const PopUp=({close,children})=>{

    return (<> 
    <div className="popUp-dialog">
        <div className="children">
        <button onClick={()=>{close()}} >X</button>
        {children}
        </div>
    </div>
    </>
       )
}