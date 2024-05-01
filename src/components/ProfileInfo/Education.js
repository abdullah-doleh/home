
import React from "react";
import {formatDate} from "../../utils";

const Education =({profile, deleteEducation})=>{
    return(
        <div>
            {profile.education.map(e =>(
                <div key={e._id }className="container">
                    {deleteEducation !== undefined ?(
                        <a href="#!" onClick={()=>deleteEducation(e._id)}>
                            <i className="fas fa-trash delete"></i>
                        </a>
                    ):null}
                    <p>
                        &#127891; {e.current ?"Studies ":"studed "}<b>{e.degree}</b> as a <b>{e.fieldofstudy}</b> at  <b>{e.school}</b>
                    </p>
                    <small>
                        from {formatDate(e.from)} to {e.current ? "current ": formatDate(e.to)}
                    </small>
                </div>
            ))}
        </div>
    )
}
export default Education;