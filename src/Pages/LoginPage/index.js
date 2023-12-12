import React, { useRef, useState } from "react";
import './style.scss';
import { useDispatch } from "react-redux";
import { getUsersAction, setUserAction } from "src/Redux/Actions";
import _ from 'lodash';
import { toast } from "react-toastify";
import JSRSASign from "jsrsasign";
import { useNavigate } from "react-router-dom";
import { accounts } from "src/Constant";

export default function LoginPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nameref = useRef(null)
    const passwordRef = useRef(null)
 
    const login = () => {
       if (_.isEmpty(username)) {
            toast("Please enter your user name")
            nameref.current?.focus()
            return
       }
       if (_.isEmpty(password)) {
            toast("Please enter your password")
            passwordRef.current?.focus()
            return
        }

        const userIndex = accounts.findIndex(item => {
            return item.username === username && item.password === password
        })
        try {
            if (userIndex < 0) {
                toast("Invalid credentials")
                return
            } else {
                const user = accounts[userIndex]
                const payload = JSON.stringify({
                    username: user.username,
                    password: user.password,
                    roles: user.roles,
                    exp: Date.now() + 3600000, // Expire in 1 hour
                });
                const secret = process.env.REACT_APP_SECRET;
                const header = { typ: "JWT", alg: "HS256" };
                // const token = JSRSASign.jws.JWS.sign(header, payload, secret);
                // console.log("token", token)
                localStorage.setItem("token", "12345678");
                dispatch(setUserAction(user))
                dispatch(getUsersAction())
                navigate('/')
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="login-page">
            <div className="form-wrapper">
                <h4>Login</h4>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" name="email" value={username} onChange={(e) => setUsername(e.target.value)} ref={nameref}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef}/>
                </div>
                <div className="btn btn-primary" onClick={() => login()}>Login</div>
            </div>
        </div>
    )
}