import React from "react";
import * as axios from "axios";


const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ad46e6f1-8546-42c9-a3b2-93d7577d6419'
    }


})
export const usersAPI={
    getUsersAPI (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage} & count=${pageSize}`,)
    },

    unFollowUsersAPI(id){
        return instance.delete(`follow/${id}`,)
    },
   followUsersAPI(id){
        return instance.post(`follow/${id}`,)

    },

    setUserProfileAPI(userId){
        return instance.get(`profile/` + userId,)
    },
    setUserDataAPI(){
        return instance.get('auth/me',)
    }

}
