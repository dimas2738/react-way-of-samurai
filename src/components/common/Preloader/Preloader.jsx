import React from "react";
import loader from './loader.gif'
import s from './Preloader.module.css';

const Preloader=()=>{
    return < img className={s.preloaderImg} src={loader}/>

}

export default Preloader