import React from 'react';
import s from './Users.module.css';
import ava from "../../images.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
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
                                        props.setDisableButton(true,el.id)
                                        usersAPI.unFollowUsersAPI(el.id)
                                       .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(el.id)
                                                }
                                           props.setDisableButton(false,el.id)
                                            })


                                    }}>unFollow</button>
                                    : <button disabled={props.disableButton.some(id=>id===el.id)} onClick={() => {
                                        props.setDisableButton(true,el.id)
                                        usersAPI.followUsersAPI(el.id)
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(el.id)
                                                }
                                                props.setDisableButton(false,el.id)

                                            })


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