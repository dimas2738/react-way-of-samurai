import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        usersAPI.setUserDataAPI()
            .then(response => {
             if(response.data.resultCode===0){
                 let {id,email,login}=response.data.data;
                 this.props.setUserData(id,login,email);
             }
            })
    }



    render() {
        return <Header {...this.props}/>
    }
}


let mapStateToProps = (state) => ({
   isLogin: state.auth.isLogin,
    login:state.auth.login,
    userId:state.auth.id
});




export default connect(mapStateToProps, { setUserData})(HeaderContainer)


