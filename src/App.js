
import './App.css';
import { BrowserRouter, Routes , Route,HashRouter } from 'react-router-dom';
import {Fragment , useEffect} from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import {Provider} from "react-redux";
import Register from './components/Users/Register';
import { transitions,positions ,Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
import Alert from "./components/Alert";
import Login from './components/Users/Login';
import Home from "./components/Home";
import Private from "./components/Private";
import ProfileForm from './components/ProfileForms/ProfileForm';
import AddEducation from './components/ProfileForms/AddEducation';
import AddExperience from './components/ProfileForms/AddExperience';
import { setAuthToken } from './utils';
import { loadUser } from './redux/modules/users';
import Developers from './components/Developers';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post';
const options={
  positon:positions.TOP_RIGHT,
  timeout:5000,
  offset:"30px",
  transitions:transitions.SCALE,
};

//redux is used to store data from client side called state also context do the same 
// redux  provide access to each comonent store 
//fragment dose not render in dom like div
// reducer is used to know which action is dispatched
function App() {
    useEffect(()=>{
      if(localStorage.token){
        setAuthToken(localStorage.token)
      }
      store.dispatch(loadUser())
    },[])
  return (
    
    <Provider store={store}>
    <BrowserRouter basename='/'>
    
    <AlertProvider template={AlertTemplate}  {...options}>
      
    <Fragment>
      <Alert/>
      <Navbar></Navbar>
      
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/home" element={<Private component={Home}/>}/>
        <Route  exact path="/create-profile" element={<Private component={ProfileForm}/>}/>
        <Route exact path="/add-education" element={<Private component={<AddEducation/>}/>}/>
        <Route exact path="/add-experience" element={<Private component={AddExperience}/>}/>
        <Route exact path="/developers" element={<Private component={Developers}/>}/>
        <Route exact path="/profile/:id" element={<Private component={Profile}/>}/>
        <Route exact path="/settings" element={<Private component={Settings}/>}/>
        <Route exact path="/edit-profile" element={<Private component={ProfileForm}/>}/>
        <Route exact path="/post" element={<Private component={<Posts/>}/>}/>
        <Route exact path="/posts/:id" element={<Private component={<Post/>}/>}/>
       
      </Routes>
      
      
      <script integrity="sha256-gPjlli1HEdLlR0AZTY971/wQVOdSkl9mEinLnxrPpJw=">
              
            </script>
      </Fragment>
      </AlertProvider>
      
    </BrowserRouter>
    
    </Provider>
    
  );
}

export default App;
