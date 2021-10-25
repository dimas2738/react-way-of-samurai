import React from 'react';
import s from './Users.module.css';
import ava from "../../images.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                                {el.follow
                                    ? <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'ad46e6f1-8546-42c9-a3b2-93d7577d6419'
                                                }
                                            })

                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(el.id)
                                                }

                                            })


                                    }}>unFollow</button>
                                    : <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'ad46e6f1-8546-42c9-a3b2-93d7577d6419'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(el.id)
                                                }

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