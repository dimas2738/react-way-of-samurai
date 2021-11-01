import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

import {connect} from "react-redux";
import Dialogs from "./Login";



let mapStateToProps=(state)=> {
  return{
    dialogsElements:state.dialogsPage.dialogs,
    messagesElements:state.dialogsPage.messages,
    newMessageBody:state.dialogsPage.newMessageBody
};
}

let mapDispatchToProps=(dispatch)=>{
    return{
    onSendMessageClick:()=>dispatch(sendMessageCreator()),
    onNewMessageChange:(body)=>dispatch(updateNewMessageBodyCreator(body)),

};
}


const LoginContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)



export default LoginContainer;