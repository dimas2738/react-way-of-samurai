import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import {Route} from "react-router-dom";

const Profile = (props) => {

    return (
        <div>
            <Route path='/profile/:userId?'
                   render={ () =>  <ProfileInfoContainer /> }/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;