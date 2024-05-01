import React ,{useState} from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { deleteEducation, deleteExperience, getCurrentProfile } from "../redux/modules/profiles";
import { getProfileImage } from "../utils";
import defaultImage from "../assets/default.png"
import BasicInfo from "./ProfileInfo/BasicInfo"
import Education from "./ProfileInfo/Education";
import Experience from "./ProfileInfo/Experience";
const Home = ({
    getCurrentProfile,
    deleteEducation,
    deleteExperience,
    profiles: {profile},
    users : {user}
})=>{
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
        <div className="home">
            {profile ===null ?(
                <div>
                    <p style={{padding:10}}>Pleas create a profile</p>
                    <Link to="/create-profile" className="btn btn-primary">create profile</Link>
                </div>
    ):(
        <div>
        <div className="home-row">
        <div className="home-column" style={{textAlign:"center"}}>
        <img src={image} className="profile-picture" alt="image" onError={onError}></img>
        <p className="name">{profile.user.name}</p>
        </div>
        <div className="home-column">
            <BasicInfo profile={profile}/>
            <div className="social">
                {profile.social ? Object.keys(profile.social)
                    .filter(media=>profile.social[media]!=="")
                    .map(media =>{
                        return(
                            <a key={media} rel="noreferree" target="_blank" href={profile.social[media]}>
                                <i className={`fab fa-${media} fa-2z` }></i>
                            </a>
                        )
                    })
            :null}

            </div>
        </div>
        </div>
        <div className="home-row">
            <div className="home-column">
                <div className="home-row">
                    <div className="home-column">
                        <h3>Education</h3>
                    </div>
                    <div className="home-column">
                        <Link to="/add-education" className="add-button">
                            <i className="fa fa-plus-circle fa-2x"></i>
                        </Link>
                    </div>
                </div> 
                <Education profile={profile} deleteEducation={deleteEducation}/>
            </div>
             <div className="home-column">
            <div className="home-row">
                    <div className="home-column">
                        <h3>Experience</h3>
                    </div>
                    <div className="home-column">
                        <Link to="/add-experience" className="add-button">
                            <i className="fa fa-plus-circle fa-2x"></i>
                        </Link>
                    </div>
                
                <Experience profile={profile} deleteExperience={deleteExperience}/>
            </div>
             </div>
             </div>
            
        </div>
    )}
        </div>
    )
};

const mapToStateToProps =(state)=>({
  profiles:  state.profiles,
  users: state.users

})

export default connect(mapToStateToProps,{getCurrentProfile,deleteEducation,deleteExperience})(Home);