import React from 'react';
import s from './ProfileInfo.module.css';
import ava from '../../../index.png';
import wall from '../../../wall.jpeg';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.mainWall}
                     src={wall}/>
            </div>
            <div className={s.descriptionBlock}>
                {props.userProfile.photos.large ?
                    <img src={props.userProfile.photos.large}/>
                    : <img src={ava}/>}
                <div><b>Name:</b> {props.userProfile.fullName}</div>
                <div><b>About Me:</b> {props.userProfile.aboutMe}</div>
                <div><b>Contact Me:</b></div>
                <div><b>facebook: </b>{props.userProfile.contacts['facebook']}</div>
                <div><b>сайт: </b>{props.userProfile.contacts["сайт"]}</div>
                <div><b>vk:</b> {props.userProfile.contacts["vk"]}</div>
                <div><b>twitter: </b>{props.userProfile.contacts["twitter"]}</div>
                <div><b>instagram: </b>{props.userProfile.contacts['instagram']}</div>
                <div><b>youtube: </b>{props.userProfile.contacts["youtube"]}</div>
                <div><b>github: </b>{props.userProfile.contacts["github"]}</div>
                <div><b>mainLink: </b>{props.userProfile.contacts["mainLink"]}</div>


                {/*<div>DoB:{props.date}</div>*/}
                {/*<div>City:{props.name}</div>*/}
            </div>
        </div>
    )
}

export default ProfileInfo;