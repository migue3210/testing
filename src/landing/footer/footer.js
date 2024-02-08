import React from "react";
import { Link } from "react-router-dom";
import './footer.css'
import logo from '../../assets/unimetLogo.png'

const items = [
    { title: "Iniciar sesión", link: "/login" },
    { title: "Crear cuenta", link: "/register" },
]
export default function Footer() {
    return (
        <div className="Footer">
            <div className="footer-content">
                <img src={logo} alt="Logo Unimet" className="logoFooter" />
                <div className="navigation-footer">
                    <h3 className="footer-title">Links</h3>
                    <ul className="nav-footer">
                        {items.map(item =>
                            <li className="list-item-footer"><Link className="nav-links-footer" to={item.link}>{item.title}</Link></li>
                        )}
                        <li className="list-item-footer"><a className="nav-links-footer" href="#about">Sobre nosotros</a></li>
                    </ul>
                </div>
                <div className="navigation-footer">
                    <h3 className="footer-title">Contáctanos</h3>
                    <ul className="nav-footer">
                        <div className="icon-text">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="white" />
                            </svg>
                            <li className="contact-footer">vinculacionuniversitaria@unimet.edu.ve</li>
                        </div>
                    </ul>

                </div>
            </div>

        </div>

    )
}

