import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setUserData, setUserDataThunkCreator} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setUserDataThunkCreator()
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




export default connect(mapStateToProps, {
    setUserData,
    setUserDataThunkCreator})
(HeaderContainer)


