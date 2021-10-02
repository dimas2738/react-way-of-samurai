const ADD_POST = 'ADD-POST';
const DEL_POST = 'DEL-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const LIKE_POST= 'LIKE-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case DEL_POST:
            state.posts.pop();
            return state;
        case LIKE_POST:
            let id;
            state.posts[1].likesCount+=1;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const delPostActionCreator = () => ({type: DEL_POST})
export const likePostActionCreator = (e) => ({type: LIKE_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;