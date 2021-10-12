import ava from '../images.png';

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, ava:ava, name:'Dima',city:'Moscow',status: 'Hi, how are you?', follow: false},
        // {id: 2,ava:ava, name:'Max',city:'Vl',status: 'Hi, how are you?', follow: true},
        // {id: 3, ava:ava,name:'Sam',city:'SaintP',status: 'Hi, how are you?', follow: true},
        // {id: 4,ava:ava, name:'Rita',city:'Artem',status: 'Hi, how are you?', follow: false},
    ],
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
                users:[...state.users,...action.users]}
        }
        default:
            return state;
    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW,userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS,users})



export default usersReducer;