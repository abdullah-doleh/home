import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {deleteAccount} from "../redux/modules/profiles";

function Settings ({deleteAccount}){
    return(
        <div className="home">
            <div className="post-card center">
                <div style={{marginBottom:15}}>
                    <p>update your profile information</p>
                </div>
                <div style={{marginBottom:15}}>
                    <Link className="btn btn-primary" href="#" to="/edit-profile">
                        Edit Account
                    </Link>
                </div>
            </div>
            <div className="post-card center">
                <div>
                    <p>
                        This Action will completely delete your profile data from TawaSol but will not delete your Account.
                    </p>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={()=>deleteAccount()}>
                        Delete Profile 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{deleteAccount})(Settings);