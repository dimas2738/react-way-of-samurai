import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators/validator";
import {TextArea} from "../common/FormsControls/FormControls";


const maxLength30=maxLength(30)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsElements.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesElements.map(m => <Message message={m.message}/>);


    let addNewMessage = (values) => {
        props.onSendMessageClick(values.message)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'message'}
                       placeholder='Enter your message'
                       component={TextArea}
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>


    )
}

const DialogsReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(DialogsForm)

export default Dialogs;