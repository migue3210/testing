import React from "react";
import './login.css'
import {
    Link
} from "react-router-dom";
import CustomInput from '../components/form/form'
import email_icon from '../assets/email.svg';
import lock_icon from '../assets/lock.svg';
import eye_icon from '../assets/eye.svg';
import saman from '../assets/saman.jpg';
import google_icon from '../assets/google.svg';

export default function Login() {
    return (
        <div className="Login">
            <div className="login-form">
                <h2 className="title">Inicio de Sesión</h2>
                <CustomInput label={"Email"} preffixIcon={<img src={email_icon} className="icon" alt="icon" />} type={'email'} placeholder={"mail@correo.unimet.edu.ve"}></CustomInput>
                <CustomInput label={"Contraseña"} preffixIcon={<img src={lock_icon} className="icon" alt="icon" />} suffixIcon={<img src={eye_icon} className="icon" alt="icon" />} type={'password'} placeholder={"123"}></CustomInput>
                <a href="" className="forgot">Olvidé mi contraseña</a>
                <button type="button" class="send">Login</button>
                <hr></hr>
                <button type="button" class="google"><img src={google_icon} className="icon" alt="icon" /><p>Acceder con Google</p></button>
                <p className="register">¿No estás registrado? <Link to="/register">Crear Cuenta</Link></p>
            </div>
            <div className="banner">
                <img src={saman} alt="saman" className="saman-image" />
            </div>
        </div>

    )
}

