import React from 'react';
import s from './ProfileInfo.module.css';
import ava from '../../../index.png';
import wall from '../../../wall.jpeg';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.mainWall}
                    src={wall}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={ava}/>
                <div>Name:</div>
                <div>DoB:</div>
                <div>City:</div>
            </div>
        </div>
    )
}

export default ProfileInfo;