import React from "react";

import south from './images/south.jpg'
import north from './images/north.jpg'



    const Hemisphere= ({latitude})=>{
        const hemisphere= latitude>0?'you are currently in the northern hemisphere' : 'you are currently in the southern hemisphere'
        const picture = latitude>0 ? north : south
    
        if(picture == north){
             return(
                <center>
            <div className="north">
            <div className="inner">
            <img src={picture} alt="" />
            </div>
            <h1> {hemisphere} </h1>
        </div></center>)}
        else{
             return(
                 <center><div className="south">
                 <div className="inner">
                 <img src={picture} alt="" />
                 </div>
                 <h1> {hemisphere} </h1>
                 </div></center>
                    
                    )
            }
        }
   

export default Hemisphere