import React from 'react';
import s from './Users.module.css';
import ava from "../../images.png";
import * as axios from 'axios'

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return (

            <div>
                {this.props.users.map(el => {
                    return <div key={el.id}>
                        <div className={s.usersWrapper}>
                            <div>
                                <img className={s.usersImg} src={el.photos.small != null
                                    ? el.photos.small
                                    : ava}/>

                                <div>
                                    {el.follow
                                        ? <button onClick={() => {
                                            this.props.onUnFollowClick(el.id)
                                        }}>unFollow</button>
                                        : <button onClick={() => {
                                            this.props.onFollowClick(el.id)
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

}

export default Users;