import React,{Fragment} from "react";
import spinner from "../assets/spinner.gif";

const Spinner =()=>(
    <Fragment>
        <img src={spinner} style={{width: "200px", margin:"auto", display:'block'}}alt="loading"></img> 
    </Fragment>
)

export default Spinner;