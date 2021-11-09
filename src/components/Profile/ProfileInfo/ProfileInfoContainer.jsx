import React from 'react';
import {connect} from "react-redux";
import {
    getStatusThunkCreator, setStatus,
    setUserProfile,
    setUserProfileThunkCreator, updateStatusThunkCreator
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
        this.props.getStatusThunkCreator(this.props.match.params.userId)

    }


    render() {
        return <ProfileInfo userProfile={this.props.userProfile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunkCreator}/>
    }
}


let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
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
        getStatusThunkCreator, updateStatusThunkCreator,setStatus,

    }),
    withRouter,
    WithAuthRedirectComponent
)(ProfileInfoContainer)

