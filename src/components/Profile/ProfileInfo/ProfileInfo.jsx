import React from 'react';
import s from './ProfileInfo.module.css';
import ava from '../../../index.png';
import wall from '../../../wall.jpeg';
import ProfileStatus from './ProfileStatus.jsx';


const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <div>
            <div>
                <img className={s.mainWall}
                     src={wall}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={ava}/>
                <div><b>Name:</b>-</div>
                <div><b>About Me:</b>-</div>
                <div><b>Contact Me:</b>-</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/*<div><b>facebook: </b>-</div>*/}
                {/*<div><b>сайт: </b>-</div>*/}
                {/*<div><b>vk:</b>-</div>*/}
                {/*<div><b>twitter: </b>-</div>*/}
                {/*<div><b>instagram: </b>-</div>*/}
                {/*<div><b>youtube: </b>-</div>*/}
                {/*<div><b>github: </b>-</div>*/}
                {/*<div><b>mainLink: </b>-</div>*/}


                {/*<div>DoB:{props.date}</div>*/}
                {/*<div>City:{props.name}</div>*/}
            </div>
        </div>
    }
    return (
        <div>
            <div>
                <img className={s.mainWall}
                     src={wall}/>
            </div>
            <div className={s.descriptionBlock}>
                {/*{id(props.userProfile==20370){*/}
                {/*    <img src={ava}/>*/}
                {/*    <div><b>Name:</b> {props.userProfile.fullName}</div>*/}
                {/*}}*/}
                {props.userProfile.photos?.large ?
                    <img src={props.userProfile.photos.large}/>
                    : <img src={ava}/>}
                {props.userProfile.fullName?
                    <div><b>Name:</b> {props.userProfile.fullName}</div>
                    : <div><b>Name:</b> -----</div>}
                {props.userProfile.aboutMe?
                    <div><b>aboutMe:</b> {props.userProfile.aboutMe}</div>
                    : <div><b>aboutMe:</b> -----</div>}


                <div><b>Contact Me:</b></div>
                {/*<div><b>facebook: </b>{props.userProfile.contacts['facebook']}</div>*/}
                {/*<div><b>сайт: </b>{props.userProfile.contacts["сайт"]}</div>*/}
                {/*<div><b>vk:</b> {props.userProfile.contacts["vk"]}</div>*/}
                {/*<div><b>twitter: </b>{props.userProfile.contacts["twitter"]}</div>*/}
                {/*<div><b>instagram: </b>{props.userProfile.contacts['instagram']}</div>*/}
                {/*<div><b>youtube: </b>{props.userProfile.contacts["youtube"]}</div>*/}
                {/*<div><b>github: </b>{props.userProfile.contacts["github"]}</div>*/}
                {/*<div><b>mainLink: </b>{props.userProfile.contacts["mainLink"]}</div>*/}
                {/*<br/>*/}

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/*<div>DoB:{props.date}</div>*/}
                {/*<div>City:{props.name}</div>*/}
            </div>
        </div>
    )
}

export default ProfileInfo;