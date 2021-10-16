
import {
    likePostActionCreator,
} from "../../../../redux/profile-reducer";
import Post from "./Post";

import {connect} from "react-redux";




let mapStateToProps=(state)=> {
    return {
        posts:state.profilePage.posts,
    };
}

let mapDispatchToProps=(dispatch)=>{
    return {
        likePlus:(postId)=> dispatch(likePostActionCreator(postId)),

    }}


const PostContainer=connect(mapStateToProps,mapDispatchToProps)(Post)






export default PostContainer;