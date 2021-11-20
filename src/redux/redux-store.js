import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer,

});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));


export default store;

// var runLengthEncoding = function(str){
//     let res={}
//     let newstr=str.split('')
//     for (let i=0;i<=newstr.length; i++){
//         res[newstr[i]]=1
//         if (newstr[i]===newstr[i+1]){
//             res[newstr[i]]=res[newstr[i]]+1
//         }
//         i++
//
//
//     }
//
//     return [] // << fix this
// }
//
// runLengthEncoding("hello world!")
//
// //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]