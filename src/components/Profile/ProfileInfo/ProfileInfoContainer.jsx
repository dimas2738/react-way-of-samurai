import React from 'react';
import {connect} from "react-redux";
import {
    setUserProfileActionCreator
} from "./../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import {withRouter} from "react-router-dom";
import { usersAPI} from "../../../api/api";


class ProfileInfoContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        usersAPI.setUserProfileAPI(this.props.match.params.userId)
            .then(response => {
            this.props.setUserProfile(response.data)
    })}



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

let withURLProfileInfoContainer=withRouter(ProfileInfoContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withURLProfileInfoContainer)


