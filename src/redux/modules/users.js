
import {api,setAuthToken} from "../../utils" // javascript will detict index.js file 
import { showAlertMessage } from "./alerts";

const REGISTER_SUCCESS = "users/REGISTER_SUCCESS";
const REGISTER_FAIL= "users/REGISTER_FAIL";
const USER_LOADED = "users/USERS_LOADED";
const USER_ERROR = "users/USERS_ERROR";
const LOGIN_SUCCESS = "users/LOGIN_SUCCESS";
const LOGIN_FAIL = "users/LOGIN_FAIL"
const LOGOUT = "users/LOGIN_LOGOUT";

export const loadUser = ()=> async (dispatch)=>{
    try{
        const res = await api.get("/users");
        dispatch({ 
            type:USER_LOADED,
            payload:res.data
        })
    }catch(error){
        dispatch({
            type:USER_ERROR
        })

    }
}// dispatch is the onlu way to update redux store 
export function register(formData){
    return async function registerThunk(dispatch){
        try{
            const res = await api.post('/users/register',formData)
            dispatch({ //dispatch token and update redux store 
                type: REGISTER_SUCCESS,
                payload:res.data
            });
            dispatch(loadUser());//to get user date and put them in redux store 
        }catch(error){
            const errors = error.response.data.errors;//array of error
            if(errors){
                errors.forEach(error =>{
                    dispatch(showAlertMessage(error.msg , "error"))
                })
            }
            dispatch({
                type:REGISTER_FAIL
            });
        }
    }
}

export function login(email, password) {
    return async function loginThunk(dispatch) {
        try {
            console.log(email);
            console.log(password); 
            const res = await api.post('/users/login', { email, password });
           
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            dispatch(loadUser());
        } catch (error) {
            const errors = error.response.data.errors;
            if (errors) {
                errors.forEach(error => {
                    dispatch(showAlertMessage(error.msg, "error"));
                });
            }
            dispatch({
                type: LOGIN_FAIL
            });
        }
    };
}

export const logout = ()=>(disptch)=>{
    disptch({
        type:LOGOUT
    })
};

const initialState={
    token:localStorage.getItem("token"),//local storage an object that store data from browser
    isAuthenticated: null, //to know if the user is Auth
    loading: true, // to know if the component is loading 
    user: null // will get the information from the server
}
export default function reducer(state= initialState,action){
    const {type,payload} = action;
    switch(type){
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            setAuthToken(payload.token)
            return{
                ...state,
                token : payload.token,
                isAuthenticated:true,
                loading:false,
            }
            case REGISTER_FAIL:
            case LOGIN_FAIL:
                setAuthToken();
                return{
                    ...state,
                    token:null,
                    isAuthenticated:false,
                    loading:false
                }
                case USER_ERROR:
                case LOGOUT:
                setAuthToken();
                return{
                    ...state,
                    token:null,
                    isAuthenticated:false,
                    loading:false,
                    user:null
                }
                default :
                return state;
    }

}   