import React from 'react';
import s from './Post.module.css';
import ava from '../../../../images.png';





const Post = (props) => {

    // let likePlus=(id)=>  {
    //     props.likePlus(id);
    // }

    return (
    <div className={s.item}>
      <img src={ava} />
        { props.message }
        <button onClick={ props.likePlus}>like</button>
        <div>
            <span>like</span>
            { props.likesCount }
        </div>
    </div>
  )
}

export default Post;