import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login=()=>{
    let navigate = useNavigate();

    const [user, setUser]=useState({email:'',password:''})

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            email:user.email,
            password:user.password
        }

        axios.post('http://localhost/php-react/register-login-php-simple/login.php',sendData)
        .then((result)=>{
            console.log(result.data.status)
            console.log(result.data)
            if (result.data.Status === '200') {
                window.localStorage.setItem('email', result.data.email);
                window.localStorage.setItem('userName', (result.data.first_name + ' ' + result.data.last_name));
                navigate('/dashboard');
            }
            else {
                alert('Invalid User'); 
            }
        })
    }

    return(
        <form onSubmit={submitForm}>
            <div className="main-box">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Login Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">Email</div>
                    <div className="col-md-6"><input onChange={handleChange} value={user.email} type="email" name="email"/></div>
                </div>
                <div className="row">
                    <div className="col-md-6">Password</div>
                    <div className="col-md-6"><input onChange={handleChange} value={user.password} type="password" name="password"/></div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <input className="btn btn-success" type="submit" name="submit" value="Login"/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;