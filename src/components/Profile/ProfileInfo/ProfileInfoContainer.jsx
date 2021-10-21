import React from 'react';
import {connect} from "react-redux";
import {
    setUserProfileActionCreator
} from "./../../../redux/profile-reducer";
import * as axios from "axios";
import ProfileInfo from "./ProfileInfo";
import {findRenderedComponentWithType} from "react-dom/test-utils";
import {withRouter} from "react-router-dom";


class ProfileInfoContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+this.props.match.params.userId)
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

let withURLProfileInfoContainer=withRouter(ProfileInfoContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withURLProfileInfoContainer)


