
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { useEffect,useState } from "react";
import { getCurrentProfile } from "../redux/modules/profiles";
import { getProfileImage } from "../utils";
import defaultImage from "../assets/default.png"

function Sidebar({users: {user},getCurrentProfile}){

    const [image,setImage]= useState("")
    const [errored,setErrored]= useState(false)
    
    
    useEffect(()=>{
        getCurrentProfile();
        if(user){
            setImage(getProfileImage(user._id))
        }
    },[getCurrentProfile,user])
    function onError(){
        if(!errored){
            setErrored(true);;
            setImage(defaultImage)
        }
        
    }
    return(
        <div>
            <div className="sidebar">
                <div>
                    <Link to="/home"><img src={image} onError={onError} className="profile" alt=""></img></Link>
                </div>
                <Link to="/home">home</Link> 
                <Link to="/post">Posts</Link>
                <Link to="/developers">Developers</Link>
                <Link to="/settings">Setting</Link>
            </div>
        </div>
    )
}
const mapToStateToProps =(state)=>({
    users: state.users
  
  })
export default connect(mapToStateToProps,{getCurrentProfile})(Sidebar);