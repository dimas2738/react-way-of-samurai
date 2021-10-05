import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
    addPostActionCreator,
    delPostActionCreator,
    likePostActionCreator,
    updateNewPostTextActionCreator,


} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state=props.store.getState()



    let likePlus=()=>  {
        props.store.dispatch(likePostActionCreator());
    }

    let addPost = () => {

        props.store.dispatch(addPostActionCreator());
    }

    let delPost = () => {

        props.store.dispatch(delPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
                 addPost={addPost}
                 delPost = {delPost}
                 updateNewPostText = {onPostChange}
                 like={likePlus}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                />
    )
}

export default MyPostsContainer;