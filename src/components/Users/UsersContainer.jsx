import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage


    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollowClick: (userId) => dispatch(followActionCreator(userId)),
        onUnFollowClick: (userId) => dispatch(unFollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),

    };
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;