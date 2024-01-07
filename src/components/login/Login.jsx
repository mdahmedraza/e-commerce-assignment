

import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css';
//
import {useDispatch} from 'react-redux';
import {authActions} from '../../store/authSlice';

const Login = () => {
    //
    const dispatch = useDispatch();

    const history = useNavigate();
    const [inputs, setInputs] = useState({
        username: "kminchelle",
        password: "0lelplR"
    })
    const handleChange = (e) => {
        setInputs((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const sendRequest = async () => {
        const res = await axios
        .post("https://dummyjson.com/auth/login",{
            username: inputs.username,
            password: inputs.password
        }).catch((err)=>console.log(err));
        const data = await res.data;
        dispatch(authActions.setAuthData(data));
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/home'))
    }
    return(
        <form onSubmit={handleSubmit} className='login'>
            <label>Login</label>
            <input name="username" onChange={handleChange} value={inputs.username} type="text" placeholder="your username" />
            <input name="password" onChange={handleChange} value={inputs.password} type="password" placeholder="your password" />
            <button type="submit">Login</button>
        </form>

    )
}

export default Login;

