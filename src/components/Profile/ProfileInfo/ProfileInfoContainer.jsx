import React from 'react';
import {connect} from "react-redux";
import {
    setUserProfileActionCreator
} from "./../../../redux/profile-reducer";
import * as axios from "axios";
import ProfileInfo from "./ProfileInfo";


class ProfileInfoContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)


            })
    }



    render() {
        return <ProfileInfo userProfile={this.props.userProfile}/>
    }
}


let mapStateToProps = (state) => ({
   userProfile: state.profilePage.userProfile
});

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (user) => dispatch(setUserProfileActionCreator(user)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer)


