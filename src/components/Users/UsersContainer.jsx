import React from 'react';
import {connect} from "react-redux";
import {
    unfollow,
    setCurrentPage,
    setUsers,
    follow,
    setTotalUsersCount,
    setFetching,
    setDisableButton
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setFetching(true)
        usersAPI.getUsersAPI(this.props.currentPage,this.props.pageSize)
       .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)


            })
    }

    onPageNumberClick = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsersAPI(pageNumber,this.props.pageSize)
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
                   disableButton={this.props.disableButton}
                   setDisableButton={this.props.setDisableButton}
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
        isFetching:state.usersPage.isFetching,
        disableButton:state.usersPage.disableButton

    };

}


export default connect(mapStateToProps, {
    unfollow,
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    setDisableButton
})(UsersContainer)


