import React from "react";
import styles from './FormControls.module.css'
export const  TextArea=(props)=>{
    return (
            <div>
                <textarea {...props}/>
            </div>

        )

}

export const  Input=({input,meta,...props})=>{
    return (
        <div className={styles.formControl+" "+styles.error}>
            <input {...props.input} {...props}/>
        </div>

    )

}