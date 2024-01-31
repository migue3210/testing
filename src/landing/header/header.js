import React from "react";
import './header.css'
import logo from '../../assets/unimetLogo.png'
import { Link } from "react-router-dom";

const items = [
    { title: "¿Quiénes somos?", link: "" },
    { title: "Misión", link: "" },
    { title: "Visión", link: "" },
]
export default function Header() {
    return (
        <div className="Header">
            <img src={logo} alt="Logo Unimet" className="logo" />
            <div className="navigation">
                <ul className="nav">
                    {items.map(item =>
                        <li ><a className="nav-links" href={item.link}>{item.title}</a></li>
                    )}
                </ul>
                <Link to="/login"><button type="button" class="login">Ingresar</button></Link>
                <Link to="/register"><button type="button" class="create">Regístrate</button></Link>
            </div>
        </div>

    )
}

