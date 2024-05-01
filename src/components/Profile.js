import React ,{useState,useEffect} from "react";
import {connect} from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileById } from "../redux/modules/profiles";
import { getProfileImage } from "../utils";
import defaultImage from "../assets/default.png"
import BasicInfo from "./ProfileInfo/BasicInfo"
import Education from "./ProfileInfo/Education";
import Experience from "./ProfileInfo/Experience";
const Profile = ({
    getProfileById,
    profiles: {profile},
   
})=>{
    const [image,setImage]= useState("")
    const [errored,setErrored]= useState(false)
    let {id} = useParams();
    
    useEffect(()=>{
        getProfileById(id);//get the id from the route
       setImage(getProfileImage(id))
    },[getProfileById,id])// to  get the id each time when refresh the page
    function onError(){
        if(!errored){
            setErrored(true);;
            setImage(defaultImage)
        }
        
    }
    return(
        <div className="home">
            {profile ===null ?null:(
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
                   
                </div> 
                <Education profile={profile} />
            </div>
             <div className="home-column">
            <div className="home-row">
                    <div className="home-column">
                        <h3>Experience</h3>
                    </div>
                
                <Experience profile={profile}/>
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

})

export default connect(mapToStateToProps,{getProfileById})(Profile);