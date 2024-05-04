import React,{useEffect} from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";// to get the id from the route
import PostItem from "./PostItem";
import CommentForm from "./CommentForm"
import CommentItem from "./CommentItem"
import { getPost } from "../../redux/modules/posts";
import { getProfileImage } from "../utils";

function Post({getPost, posts: {post,loading}}){
    let {id} = useParams()
    const [image,setImage]= useState("")
    const [errored,setErrored]= useState(false)
    useEffect(()=>{
        getCurrentProfile();
        if(user){
            setImage(getProfileImage(user._id))
        }
        getPost(id)
    },[getPost,id,getProfileImage])

    return loading || post === null ? null :(
        <div className="home">
            <div>
                <PostItem post={post} showActions={false}/>
                <CommentForm postId={post._id}/>
            </div>
            {
                post.comments.map(comment =>(
                    <CommentItem comment={comment} postId={post._id} key={comment._id}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state)=>({
    posts: state.posts
})

export default connect(mapStateToProps,{getPost})(Post)