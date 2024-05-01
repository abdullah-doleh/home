import React,{useState} from "react" //use sate is used to use funcinal component
import { connect } from "react-redux"//to connect this component to redux store 

import {Link , Navigate} from "react-router-dom";


import PropTypes from "prop-types"; // to tell the component what are the expected component 

import {register} from "../../redux/modules/users";

import {showAlertMessage} from "../../redux/modules/alerts"; // to show alert 

const Register = ({isAuthenticated,register,showAlertMessage}) =>{

    const [formData, setFormDate] = useState({
        name:"",
        email:"",
        password:"", 
        password2:""
    });

    const {name,email,password,password2} =formData;//to access formdata dirictly
    const onChange = (event)=>{
        return setFormDate({...formData,[event.target.name]: event.target.value});
    };
    const onSubmit = async(event)=>{  
       
        event.preventDefault();//to prevent refresh or load on submit 
        if(password !==password2){
            showAlertMessage("Password dose not match","error");


        }else{
            register({name,email,password});
        }
    }
    if(isAuthenticated){
        return <Navigate to="/login"/>
    }
    return(
        <div className="main register">
            <p className="form-title" align="center">Sign Up</p>
        <form className="form1" onSubmit={onSubmit}>
            <input
            className="input-text"
            type="text"
            name="name"
            placeholder="Name"
            align="center"
            value={name}
            onChange={onChange}
            />
             <input
            className="input-text"
            type="text"
            name="email"
            placeholder="Email"
            align="center"
            value={email}
            onChange={onChange}
            />
             <input
            className="input-text"
            type="password"
            name="password"
            placeholder="Password"
            align="center"
            value={password}
            onChange={onChange}
            />
             <input
            className="input-text"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            align="center"
            value={password2}
            onChange={onChange}
            />
            <input className="btn btn-primary"
            style={{marginLeft:"36%"}}
            type="submit"
            align="center"
            value="Register"
            />
            <p className="forgot "align="center">Already have an account ?
             <Link to="/home">Sign In</Link></p>
        </form>
        </div>
    )

}
Register.propoTypes={//validation to make sure that the function are sent to the component
    register: PropTypes.func.isRequired,
    showAlertMessage : PropTypes.func.isRequired
};

const mapStateToProps=(state)=>{ 
    return{
        isAuthenticated: state.users.isAuthenticated
    }
};

export default connect(mapStateToProps,{showAlertMessage, register})(Register);