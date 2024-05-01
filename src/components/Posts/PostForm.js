import React ,{useState} from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/modules/posts";
import { Link, Navigate } from "react-router-dom";


const PostForm = ({addPost})=>{
    const [text, setText] = useState("");

    const onSubmit = (event)=>{
        event.preventDefault();
        addPost({text});
        setText("");
        <Navigate to="/home"/>
    }
    return(
        <div className="post-card">
            <p className="form-title center">Create Post</p>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <div>                                                                                         
                    <textarea placeholder="whats on your mind" name="text" value={text} required onChange={(e)=> setText(e.target.value)}/>
                </div>
                <input type="submit" value="Post" className="btn btn-primary" >
                    
                </input>
            </form>
        </div>
    )
}

export default connect(null,{addPost})(PostForm);