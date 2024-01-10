import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/UserStore";
import './index.css'

export default function Login() {
    const {user, setUser} = useContext(MyContext);
    const navigate = useNavigate();

    const fetchData = () => {
        localStorage.setItem('username', user.username)
        navigate('/home');
    };

    return (
        <div id="login">
            <h1>Login</h1>
            <div>
                <input
                className="input"
                    id="name"
                    placeholder="name"
                    value={user.username}
                    onChange={(e) => {
                        setUser((prevData) => ({
                            ...prevData,
                            username: e.target.value,
                        }));
                    }}
                ></input>
            </div>
            <div>
                <input
                className="input"
                    id="password"
                    type="password"
                    placeholder="password"
                    value={user.password}
                    onChange={(e) => {
                        setUser((prevData) => ({
                            ...prevData,
                            password: e.target.value,
                        }));
                    }}
                ></input>
            </div>
            <button id="submitButton" onClick={fetchData}>
                Login
            </button>
        </div>
    );
}