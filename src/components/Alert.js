import React,{useEffect}from"react";
import {connect} from "react-redux";
import {useAlert} from "react-alert";
                //= props.alert
const Alert = ({alert})=>{
    const showAlert = useAlert();
    useEffect(()=>{
        if(alert.show){
        showAlert.show(alert.msg, {type: alert.type})
        }
    })
    return <></>//return empty jxs element
}
const mapStateToProps = (state)=>{//get the state of one of the moduls and map it to props
    return{
        alert:state.alerts
    }
}
//connect to redux store
export default connect(mapStateToProps)(Alert);
