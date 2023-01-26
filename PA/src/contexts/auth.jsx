import jwtDecode from "jwt-decode";
import jwt from "jwt-decode";

import React, { createContext, useState, useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import { apiii } from "../services/apiii";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            apiii.defaults.headers.Authorization = `Bearer ${token}`;
            setIsAuthenticated(true);
        }

        setLoading(false);
    }, [])

    const login = async (email, password) => {

        try {

            await apiii.post("/login", { username: email, password }).then((response) => {

                if (response.status !== 200) {
                    console.log(response.status)
                    return
                }

                const res = jwtDecode(response.headers['authorization'].split(' ')[1])
                setUser(res.userData);
                console.log(res.userData);
                setIsAuthenticated(true);
                localStorage.setItem('token', response.headers['authorization'].split(' ')[1])
                localStorage.setItem('id', res.userData.id)
                localStorage.setItem('role', res.userData.role)

                apiii.defaults.headers.Authorization = `Bearer ${response.headers['authorization'].split(' ')[1]}`
                return navigate("/listaativos");
            })
        // return navigate("/login");
        } catch (error) {
            alert("Email e/ou senha incorretos");
        }


    };

    const logout = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        apiii.defaults.headers.Authorization = null;
        setIsAuthenticated(false);
        setUser(null);
        navigate("/login");
    };

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated, user, loading, login, logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};