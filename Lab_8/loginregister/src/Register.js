import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register=()=>{

    let history = useNavigate();
    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password
        }

        axios.post('http://localhost/php-react/register-login-php-simple/insert.php',sendData)
        .then((result)=>{
            if (result.data.Status == 'Invalid') {
                alert('Invalid User');
            }
            else {
                history('/dashboard');
            }
        })
    }

    return(
        <div className="main-box">
            <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-md-12 text-center"><h1>Register</h1></div>
            </div>
            <div className="row">
                <div className="col-md-6">First Name</div>
                <div className="col-md-6">
                    <input onChange={handleChange} value={data.first_name} type="text" name="first_name" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Last Name</div>
                <div className="col-md-6">
                    <input onChange={handleChange} value={data.last_name} type="text" name="last_name" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input onChange={handleChange} value={data.email} type="email" name="email" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input onChange={handleChange} value={data.password} type="password" name="password" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <input type="submit" name="submit" value="Register" className="btn btn-success"/>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Register;
