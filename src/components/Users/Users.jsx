import React from 'react';
import s from './Users.module.css';
import ava from "../../images.png";
import {NavLink, Redirect} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (!props.isLogin) return <Redirect to={'/login'}/>
    return (

        <div>
            <div>
                {pages.map(e => {
                    return <span
                        onClick={() => props.onPageNumberClick(e)}
                        className={props.currentPage === e ? s.currentPage : null}>/{e}</span>
                })}

            </div>
            {props.users.map(el => {
                return <div key={el.id}>
                    <div className={s.usersWrapper}>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img className={s.usersImg} src={el.photos.small != null
                                    ? el.photos.small
                                    : ava}/>
                            </NavLink>


                            <div>
                                {el.followed
                                    ? <button disabled={props.disableButton.some(id=>id===el.id)} onClick={() => {
                                        props.followUsersThunkCreator(el.id)


                                    }}>unFollow</button>
                                    : <button disabled={props.disableButton.some(id=>id===el.id)} onClick={() => {
                                        props.unFollowUsersThunkCreator(el.id)


                                    }}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>{el.name}</div>
                            {/*<div>{el.city}</div>*/}
                            {/*<div>{el.status}</div>*/}
                        </div>


                    </div>
                </div>
            })}

        </div>

    )

}

export default Users;