import React,{useEffect} from "react";
import { connect } from "react-redux";
import { getPosts } from "../../redux/modules/posts";
import PostForm from "./PostForm";
import PostItem from "./PostItem";

function Posts({getPosts,posts}){
    useEffect(()=>{
        getPosts();
    },[getPosts])// everytime we change a post we call useEffect
    return(
        <div className="home">
            <div>
                <PostForm/>
               <div>
                {posts.map(post =>(
                    <PostItem key={post._id} post={post}/>
                ))}
                </div> 
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>({
    posts: state.posts.posts //fet tha data from redux file
})

export default connect (mapStateToProps,{getPosts})(Posts);