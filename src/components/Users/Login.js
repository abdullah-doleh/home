import React, { useState } from "react" //use sate is used to use funcinal component
import { connect } from "react-redux"//to connect this component to redux store 

import {Link , Navigate} from "react-router-dom";

import PropTypes from "prop-types"; // to tell the component what are the expected component 

import {login} from "../../redux/modules/users";


const Login = ({isAuthenticated,login}) =>{

    const [formData, setFormDate] = useState({
        email:"",
        password:""
    });

    const {email,password} = formData;//to access formdata dirictly
    const onChange = (event)=>{
        return setFormDate({...formData,[event.target.name]: event.target.value});
    };
    const onSubmit = async(event)=>{
        event.preventDefault();//to prevent refresh or load on submit 
       login(email, password);
        
    }
    if(isAuthenticated){
        return <Navigate to="/home"/>
    }
    return(
        <div className="main login">
            <p className="form-title" align="center">SignIn</p>
        <form className="form1" onSubmit={onSubmit}>
           
             <input
            className="input-text"
            type="text"
            name="email"
            placeholder="Email"
            align="center"
            value={email}
            onChange={onChange}
            required
            />
             <input
            className="input-text"
            type="password"
            name="password"
            placeholder="Password"
            align="center"
            value={password}
            onChange={onChange}
            required
            />
        
            <input className="btn btn-primary"
            style={{marginLeft:"36%"}}
            type="submit"
            align="center"
            value="Login"
            />
            <p className="forgot "align="center">New To TawaSol?
             <Link to="/">SignUp</Link></p>
        </form>
        </div>
    )

} 
Login.propTypes={//validation to make sure that the function are sent to the component
   login: PropTypes.func.isRequired,
    };

const mapStateToProps=(state)=>{
    return{
        isAuthenticated: state.users.isAuthenticated
    }
};

export default connect(mapStateToProps,{login})(Login);