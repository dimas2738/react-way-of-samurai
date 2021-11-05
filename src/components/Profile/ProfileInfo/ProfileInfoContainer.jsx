import React from 'react';
import {connect} from "react-redux";
import {
    setUserProfile,
    setUserProfileThunkCreator
} from "./../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirectComponent} from "../../../hoc/withAuthRedirectComponent";
import Dialogs from "../../Dialogs/Dialogs";
import {compose} from "redux";



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
   userProfile: state.profilePage.userProfile,
});

// let AuthRedirectComponent =WithAuthRedirectComponent(ProfileInfoContainer)
//
// let withURLProfileInfoContainer=withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {
//     setUserProfile,
//     setUserProfileThunkCreator,
// })(withURLProfileInfoContainer)

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setUserProfileThunkCreator,
    }),
    withRouter,
    WithAuthRedirectComponent
)(ProfileInfoContainer)

