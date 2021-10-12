import React from 'react';
import s from './Users.module.css';
import ava from "../../images.png";

const Users = (props) => {
if (props.users.length==0){
    props.setUsers(        [
    {id: 1, ava:ava, name:'Dima',city:'Moscow',status: 'Hi, how are you?', follow: false},
    {id: 2,ava:ava, name:'Max',city:'Vl',status: 'Hi, how are you?', follow: true},
    {id: 3, ava:ava,name:'Sam',city:'SaintP',status: 'Hi, how are you?', follow: true},
    {id: 4,ava:ava, name:'Rita',city:'Artem',status: 'Hi, how are you?', follow: false},
])}


    return (

            <div >
                {props.users.map(el=>{
                    return <div key={el.id}>
                        <div className={s.usersWrapper}>
                            <div>
                                <img className={s.usersImg} src={el.ava}/>
                                <div>
                                    {el.follow
                                        ? <button onClick={()=>{props.onUnFollowClick(el.id)}}>unFollow</button>
                                            :<button onClick={()=>{props.onFollowClick(el.id)}}>Follow</button>}
                                </div>
                            </div>
                            <div>
                                <div>{el.name}</div>
                                <div>{el.city}</div>
                                <div>{el.status}</div>
                            </div>


                        </div>
                        </div>
                })}

            </div>

    )
}

export default Users;