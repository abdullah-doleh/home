import React ,{useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addExperience } from "../../redux/modules/profiles";


const AddExperience =({addExperience})=>{
    const history=useNavigate();
    const [formData, setFormData]= useState({
        title:"",
        company:"",
        from:"",
        to:"",
        current:false 
    })

    const {
        title,
        company,  
        from,
        to,
        current 
    }= formData
    const onChange =(event) => setFormData({...formData,[event.target.name]: event.target.value})
    const onSubmit = (event)=>{
        event.preventDefault()
        addExperience(formData,history);
        history("home");
    }
    return(
        <div className="main" style={{textAlign:"center" ,width:700 , padding:15}}>
            <p className="form-title">Add experience</p>
            <small>* = required</small>
            <form className="form1" onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="*title" name="title" value={title} onChange={onChange}/>
                </div>
                <div>
                    <input type="text" placeholder="*company" name="company" value={company} onChange={onChange}/>
                </div>
                
                <div>
                    <h3 style={{marginLeft:110, textAlign:"left" , marginBottom:20}}>from date</h3>
                    <input type="date" name="from" value={from} onChange={onChange}/>
                </div>
                <div>
                    <p style={{marginLeft:110,textAlign:"left",marginBottom:20}}> 
                     <input type="checkbox" name="current" value={current} checked={current} onChange={()=> setFormData({...formData,current: !current})}/>
                        Current work</p>
                </div>
 
                <div>
                    <h3 style={{marginLeft:110, textAlign:"left" , marginBottom:20}}>to</h3>
                    <input type="date" name="to" value={to} onChange={onChange} disabled={current}/>
                </div>
                <input type="submit" className="btn btn-primary"/>
                <Link to="/home" className="btn btn-light">Go back</Link>
                
            </form>
        </div>
    )
}
AddExperience.propTypes ={
    addExperience: PropTypes.func.isRequired
}
 
export default connect(null ,{addExperience})(AddExperience)