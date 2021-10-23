const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId:null,
    email:null,
    login:null,
    isLogin: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            isLogin: true}
        }
        default:
            return state;
    }
}



export const setUserData = (id,login,email) => ({type:SET_USER_DATA,data:{id,login,email}})


export default authReducer;