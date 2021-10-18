import ava from '../images.png';

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
// const SET_FETCHING='SET_FETCHING'

let initialState = {
    users: [
        // {id: 1, ava:ava, name:'Dima',city:'Moscow',status: 'Hi, how are you?', follow: false},
        // {id: 2,ava:ava, name:'Max',city:'Vl',status: 'Hi, how are you?', follow: true},
        // {id: 3, ava:ava,name:'Sam',city:'SaintP',status: 'Hi, how are you?', follow: true},
        // {id: 4,ava:ava, name:'Rita',city:'Artem',status: 'Hi, how are you?', follow: false},
    ],
    pageSize:5,
    totalUsersCount:100,
    currentPage:2,
    // isFetching:true

};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW: {
            return{...state,
            users:state.users.map((el)=>{
                if (el.id===action.userId){
                    return {...el,follow:true}
                }
                return el
            })}
        }
        case UNFOLLOW: {
            return{...state,
                users:state.users.map((el)=>{
                    if (el.id===action.userId){
                        return {...el,follow:false}
                    }
                    return el
                })}
                }
        case SET_USERS: {
            return{...state,
                users:action.users}
        }
        case SET_CURRENT_PAGE: {
            return{...state,
                currentPage:action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return{...state,
                totalUsersCount:action.totalCount}
        }
        // case SET_FETCHING: {
        //     return{...state,
        //         isFetching:action.isFetching}
        // }
        default:
            return state;
    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW,userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS,users})
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage})
export const setTotalUsersCountActionCreator=(totalCount) => ({type: SET_TOTAL_COUNT,totalCount})
// export const setFetchingActionCreator=(isFetching) => ({type: SET_FETCHING,isFetching})


export default usersReducer;