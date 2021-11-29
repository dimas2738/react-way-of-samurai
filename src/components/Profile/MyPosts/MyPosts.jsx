import React from 'react';
import s from './MyPosts.module.css';
import PostContainer from "./Post/PostContainer";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormControls";
import {maxLength, requiredField} from "../../../utils/validators/validator";

const maxLength20=maxLength(20)


const MyPosts = (props) => {


    let postsElements =
        props.posts.map(p => <PostContainer message={p.message}
                                            id={p.id}
                                            likesCount={p.likesCount}/>);


    let addPost = (value) => {
        // alert(value.newPost)
        props.addPost(value.newPost);

    }
    // const onSubmit = (formData) => {
    //     console.log(formData)
    //
    // }

    // let delPost = () => {
    //     props.delPost();
    //
    // }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostsReduxForm
                    onSubmit={addPost}
                    // onSubmit={onSubmit}
                    // delPost={delPost}

                />

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPost'} placeholder='new Post'
                component={TextArea}
                validate={[requiredField, maxLength20]}/>
            <div className={s.postsButtons}>
                <div>
                    <button  >Add post</button>
                </div>
                {/*<div>*/}
                {/*    <button onClick={props.delPost}>Del post</button>*/}
                {/*</div>*/}
            </div>

        </form>


    )
}

const MyPostsReduxForm = reduxForm({
    form: 'newPostElement'
})(MyPostsForm)

export default MyPosts;