import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    setTotalUsersCountActionCreator,
    // setFetchingActionCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";


class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.setFetchingActionCreator(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} & count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                // this.props.setFetchingActionCreator(false)

            })
    }

    onPageNumberClick=(pageNumber)=>{
        this.props.setFetchingActionCreator(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} & count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                // this.props.setFetchingActionCreator(false)

            })

    }

    render() {
        return <Users  totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageNumberClick={this.onPageNumberClick}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onUnFollowClick={this.props.onUnFollowClick}
                       onFollowClick={this.props.onFollowClick}
        />
    }}





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
        setTotalUsersCount:(totalCount)=>dispatch(setTotalUsersCountActionCreator(totalCount))
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


