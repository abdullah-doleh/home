
import React from "react";
import {formatDate} from "../../utils";

const Experience =({profile, deleteExperience})=>{
    return(
        <div>
            {profile.experience.map(e =>(
                <div key={e._id }className="container">
                    {deleteExperience !== undefined ?(
                        <a href="#!" onClick={()=>deleteExperience(e._id)}>
                            <i className="fas fa-trash delete"></i>
                        </a>
                    ):null}
                    <p>
                         {e.current ?"workes":"worked"}as <b>{e.title}</b> at {" "} <b>{e.company}</b>
                       
                    </p>
                    <small>
                        from {formatDate(e.from)} to {e.current ? "current": formatDate(e.to)}
                    </small>
                </div>
            ))}
        </div>
    )
}
export default Experience;