import React ,{useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import {connect} from "react-redux";
import { addEducation } from "../../redux/modules/profiles";


const AddEducation =({addEducation})=>{
    const history = useNavigate();
    const [formData, setFormData]= useState({
        school:"",
        degree:"",
        fieldofstudy:"",
        from:"",
        to:"",
        current:false 
    })

    const {
        school,
        degree,
        fieldofstudy,  
        from,
        to,
        current 
    }= formData
    const onChange =(event) => setFormData({...formData,[event.target.name]: event.target.value})
    const onSubmit = (event)=>{
        event.preventDefault()
        addEducation(formData,history);
        history("/home");
       
    }
    return(
        <div className="main" style={{textAlign:"center" ,width:700 , padding:15}}>
            <p className="form-title">Add education</p>
            <small>* = required</small>
            <form className="form1" onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="*school" name="school" value={school} onChange={onChange}/>
                </div>
                <div>
                    <input type="text" placeholder="*degree" name="degree" value={degree} onChange={onChange}/>
                </div>
                <div>
                    <input type="text" placeholder="filed of study " name="fieldofstudy" value={fieldofstudy} onChange={onChange}/>
                </div>
                <div>
                    <h3 style={{marginLeft:110, textAlign:"left" , marginBottom:20}}>from date</h3>
                    <input type="date" name="from" value={from} onChange={onChange}/>
                </div>
                <div>
                    <p style={{marginLeft:110,textAlign:"left",marginBottom:20}}> 
                     <input type="checkbox" name="current" value={current} checked={current} onChange={()=> setFormData({...formData,current: !current})}/>
                        Current School</p>
                </div>
 
                <div>
                    <h3 style={{marginLeft:110, textAlign:"left" , marginBottom:20}}>to</h3>
                    <input type="date" name="to" value={to} onChange={onChange} disabled={current}/>
                </div>
                <input type="submit" className="btn btn-primary" >
                </input>
                <Link to="/home" className="btn btn-light">Go back</Link>
                
            </form> 
        </div>
    )
}
AddEducation.propTypes ={
    addEducation: PropTypes.func.isRequired
}
 
export default connect(null ,{addEducation})(AddEducation)