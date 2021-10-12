import React from 'react';
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../redux/users-reducer";
import Users from "./Users";



let mapStateToProps=(state)=> {
  return{
    users:state.usersPage.users,

};
}

let mapDispatchToProps=(dispatch)=>{
    return{
        onFollowClick:(userId)=>dispatch(followActionCreator(userId)),
        onUnFollowClick:(userId)=>dispatch(unFollowActionCreator(userId)),
        setUsers:(users)=>dispatch(setUsersActionCreator(users)),



    };
}


const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)



export default UsersContainer;