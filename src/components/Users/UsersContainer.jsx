import React from 'react';
import {connect} from "react-redux";
import {
    unfollow,
    setCurrentPage,
    setUsers,
    follow,
    setTotalUsersCount,
    setFetching,
    setDisableButton,
    getUsersThunkCreator,
    followUsersThunkCreator,
    unFollowUsersThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onPageNumberClick = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return < >
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageNumberClick={this.onPageNumberClick}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   disableButton={this.props.disableButton}
                   setDisableButton={this.props.setDisableButton}
                   followUsersThunkCreator={this.props.followUsersThunkCreator}
                   unFollowUsersThunkCreator={this.props.unFollowUsersThunkCreator}
                   isLogin={this.props.isLogin}
            />
        < />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        disableButton: state.usersPage.disableButton,


    };

}
//
// let AuthRedirectComponent =WithAuthRedirectComponent(UsersContainer)
//
//
//
// export default connect(mapStateToProps, {
//     unfollow,
//     follow,
//     setUsers,
//     setCurrentPage,
//     setTotalUsersCount,
//     setFetching,
//     setDisableButton,
//     getUsersThunkCreator,
//     followUsersThunkCreator,
//     unFollowUsersThunkCreator,
//
//
// })(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, {
        unfollow,
        follow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setFetching,
        setDisableButton,
        getUsersThunkCreator,
        followUsersThunkCreator,
        unFollowUsersThunkCreator,


    }),

    WithAuthRedirectComponent
)(UsersContainer)
