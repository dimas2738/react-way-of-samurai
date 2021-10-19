
import {
    addPostActionCreator,
    delPostActionCreator,
    likePostActionCreator,
    updateNewPostTextActionCreator,
    setUserProfileActionCreator


} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";




let mapStateToProps=(state)=> {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    };
}

let mapDispatchToProps=(dispatch)=>{
    return {

        // likePlus:(id)=> dispatch(likePostActionCreator(id)),

        addPost:() =>  dispatch(addPostActionCreator()),

        delPost : () => dispatch(delPostActionCreator()),

        onPostChange : (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        setUserProfile: (user) => dispatch(setUserProfileActionCreator(user)),

    }}


const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)






export default MyPostsContainer;