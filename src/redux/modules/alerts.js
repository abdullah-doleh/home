
const SHOW_ALERT_MESSAGE = "alerts/SHOW_ALERT_MESSAGE";//define action

//define Action creater 
//action creator
export function showAlertMessage(msg, type="info"){

    return function showAlertMessageThunk(dispatc){
        dispatc({
            type: SHOW_ALERT_MESSAGE,
            payload:{
                show: true,
                msg,
                type
            }
        })
    }
}
const initialState ={
    show:false,
    msg:"",
    type:"info"

}
// reducer take a copy from the information from the state and change it 
export default function reducer(state=initialState,action){
    switch(action.type){
        case SHOW_ALERT_MESSAGE:
            return{
                ...state,//take a copy and change it 
                show:true,
                msg:action.payload.msg,
                type:action.payload.type
            }
            default :
            return state;
    }

};

