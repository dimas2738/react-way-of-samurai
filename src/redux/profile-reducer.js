import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DEL_POST = 'DEL-POST';
const LIKE_POST = 'LIKE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    userProfile: 20370,
    status:'___'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {id: 5, message: action.newPost, likesCount: 0}],

            }
        }

        case DEL_POST: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.pop();
            return stateCopy;
        }
        case LIKE_POST: {
            return {
                ...state,
                posts: state.posts.map(el => {
                    debugger
                    console.log(action)
                    if (el.id == action.postId) {
                        return {...el, likesCount: el.likesCount + 1}
                    }
                    return el
                })
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile}
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status}
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPost) => ({type: ADD_POST,newPost})
export const delPostActionCreator = () => ({type: DEL_POST})
export const likePostActionCreator = (postId) => ({type: LIKE_POST, postId})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setUserProfileThunkCreator=(userId)=>{
    return (dispatch)=>{
        usersAPI.setUserProfileAPI(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }}
export const getStatusThunkCreator=(userId)=>{
    return (dispatch)=>{
        usersAPI.getStatus(userId)
            .then(response => {
                debugger
                dispatch(setStatus(response.data))
            })
    }}
export const updateStatusThunkCreator=(status)=>{
    return (dispatch)=>{
        usersAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode===0){
                    dispatch(setStatus(status))}

            })
    }}
export default profileReducer;