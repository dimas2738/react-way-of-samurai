import React from 'react';
import {connect} from "react-redux";
import {
    setUserProfile,
    setUserProfileThunkCreator
} from "./../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import {withRouter} from "react-router-dom";



class ProfileInfoContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setUserProfileThunkCreator(this.props.match.params.userId)

    }



    render() {
        return <ProfileInfo userProfile={this.props.userProfile}/>
    }
}


let mapStateToProps = (state) => ({
   userProfile: state.profilePage.userProfile
});



let withURLProfileInfoContainer=withRouter(ProfileInfoContainer)
export default connect(mapStateToProps, {
    setUserProfile,
    setUserProfileThunkCreator,
})(withURLProfileInfoContainer)


