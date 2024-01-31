import React from "react";
import './header.css'
import logo from '../../assets/unimetLogo.png'

const items = [
    { title: "¿Quiénes somos?", link: "" },
    { title: "Misión", link: "" },
    { title: "Visión", link: "" },
]
export default function Header() {
    return (
        <div className="Header">
            <img src={logo} alt="university" className="university-image" />
            <div className="navigation">
                <ul className="nav">
                    {items.map(item =>
                        <li ><a className="nav-links" href={item.link}>{item.title}</a></li>
                    )}
                </ul>

                <button type="button" class="login">Ingresar</button>
                <button type="button" class="create">Regístrate</button>
            </div>
        </div>

    )
}

