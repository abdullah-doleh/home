import React,{Fragment,useState,useEffect}from "react";
import {api} from "../../utils";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import{
    createProfile,
    getCurrentProfile,
    uploadProfileImage
}from "../../redux/modules/profiles";
const initialState = {
    company:"",
    website:"",
    location:"",
    country:"",
    status:"",
    skills:"",
    bio:"",
    twitter:"",
    facebook:"",
    linkedin:"",
    youtube:"",
    instagram:"",
    github:"",
}
const ProfileForm =({
    
    profiles:{profile,loading},
    createProfile,
    getCurrentProfile,
    uploadProfileImage,
    //history //for backword and forword in web
})=>{
    const history = useNavigate();
    const [formData,setFormData]= useState(initialState)
    const [displaySocialInputs,toggleSocialInputs]= useState(false)

    useEffect(()=>{//what i want to do when the component is loading 
        if(!profile){
            getCurrentProfile()
        }
        if(profile && !loading){
            const profileData={...initialState}
           //TODO
            setFormData(profileData)
        }
    },[loading,getCurrentProfile,profile])
    const {
        company,
    website,
    location,
    country,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    github,
    }= formData

    const onSubmit=(event)=>{
        event.preventDefault();
        history("/home");
        createProfile(formData,history,profile ? true : false)
        
    }
    const onFileChange = (event)=>{
        const data = new FormData();
        data.append("file",event.target.files[0])
        uploadProfileImage(data);
       
    }
    const onChange =(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }
 
    return(
        <div className="main" style={{width:600, textAlign:"center"}}>
            <p className="form-title">Edit profile</p>
            <form className="form1" onSubmit={onSubmit}>
                <div className="form-group">
                    <select name="status" value={status} onChange={onChange}>
                        <option>* Select you current jop</option>
                        <option value="developer">developer</option>
                        <option value="senior developer">senior developer</option>
                        <option value="junior developer">junior developer</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="file" onChange={onFileChange}></input>
                </div>
                <div className="form-group">
                    <input type="text"
                    placeholder="Company"
                    name="company"
                    value={company}
                    onChange={onChange}></input>
                </div>

                <div className="form-group">
                    <input type="text"
                    placeholder="Website"
                    name="website"
                    value={website}
                    onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <input type="text"
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <input type="text"
                    placeholder="Country"
                    name="country"
                    value={country}
                    onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <input type="text"
                    placeholder="Skills"
                    name="skills"
                    value={skills}
                    onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <textarea type="text"
                    placeholder="Bio"
                    name="bio"
                    value={bio} 
                    onChange={onChange}></textarea>
                </div>
                <div>
                    <button type="button" className="btn btn-light" onClick={()=>toggleSocialInputs(!displaySocialInputs)}>Social networks</button>
                </div>
                {displaySocialInputs ?(
                    <Fragment>
                        <div>
                            <i className="fa-fa-twitter fa=2x" />
                        <input
                        type="text"
                        placeholder="Twittwe Url"
                        name="twitter"
                        value={twitter}
                        onChange={onChange}
                        />
                        </div>
                        <div>
                            <i className="fa-fa-linkedin fa=2x" />
                        <input
                        type="text"
                        placeholder="linkedin Url"
                        name="linkedin"
                        value={linkedin}
                        onChange={onChange}
                        />
                        </div>
                        <div>
                            <i className="fa-fa-linkedin fa=2x" />
                        <input
                        type="text"
                        placeholder="facebook Url"
                        name="facebook"
                        value={facebook}
                        onChange={onChange}
                        />
                        </div>
                        <div>
                            <i className="fa-fa-linkedin fa=2x" />
                        <input
                        type="text"
                        placeholder="instagram Url"
                        name="instagram"
                        value={instagram}
                        onChange={onChange}
                        />
                        </div>
                        <div>
                            <i className="fa-fa-linkedin fa=2x" />
                        <input
                        type="text"
                        placeholder="github Url"
                        name="github"
                        value={github}
                        onChange={onChange}
                        />
                        </div>
                        <div>
                            <i className="fa-fa-linkedin fa=2x" />
                        <input
                        type="text"
                        placeholder="youtube Url"
                        name="youtube"
                        value={youtube}
                        onChange={onChange}
                        />
                        </div>
                    </Fragment>
                ):<Fragment/>}
                <input
                type="submit"
                className="btn btn-primary"
                ></input>
            </form>
        </div>
    )

}

ProfileForm.propTypes={
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    uploadProfileImage: PropTypes.func.isRequired,
    Profiles: PropTypes.object.isRequired,
}

const mapStateToProps =(state)=>({
    profiles: state.profiles
})

export default connect(mapStateToProps,{createProfile,getCurrentProfile,uploadProfileImage})(ProfileForm)
