"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => {
                    dispatch(
                        login({ name: "sadra", age: 22, email: "sadra.st.st@gmail.com" })
                    );
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                LOGOUT
            </button>
        </div>
    );
}

export default Login;