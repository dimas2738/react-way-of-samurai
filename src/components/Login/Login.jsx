import React from 'react';
import {Field,reduxForm} from "redux-form";

const Login = (props) => {
    
    const onSubmit = (formData) => {
        console.log(formData)
      
    }


    return (
        <div> LOGIN
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'login'} placeholder='login' component={'input'}/>
            <div>
                <Field name={'password'} placeholder='password' component={'input'}/>
            </div>
            <div>

                <Field name={'remember_me'} type={'checkbox'} component={'input'}/>remember me
            </div>
            <div>
                <button>logIn</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)


export default Login;