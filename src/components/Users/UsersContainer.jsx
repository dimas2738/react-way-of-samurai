import React from 'react';
import {connect} from "react-redux";
import {
    unfollow,
    setCurrentPage,
    setUsers,
    follow,
    setTotalUsersCount,
    setFetching
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} & count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)


            })
    }

    onPageNumberClick = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} & count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)

            })

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
        isFetching:state.usersPage.isFetching

    };

}


export default connect(mapStateToProps, {
    unfollow,
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
})(UsersContainer)


