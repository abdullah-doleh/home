import React from "react";
import {Link} from "react-router-dom";

const Landing = ()=>{
    return(
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="logo">TawaSol</h1>
                    <div className="buttons"></div>
                    <Link to="/register" className="btn btn-primary dispaly-block">SignUp</Link>
                    <Link to="/login" className="btn btn-light dispaly-block">Login</Link>
                </div>
            </div>
        </div>
    )
}
export default Landing;