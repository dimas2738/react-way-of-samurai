import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostContainer from "./Post/PostContainer";


const MyPosts = (props) => {



    let postsElements =
        props.posts.map( p => <PostContainer
            // dispatch={p.dispatch}
            // like={p.likePlus}
                                             message={p.message}
                                             id={p.id}
                                             likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }

    let delPost = () => {
        props.delPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange (text);

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div className={s.postsButtons}>
                    <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
                    <div>
                        <button onClick={ delPost }>Del post</button>
                    </div></div>

            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;