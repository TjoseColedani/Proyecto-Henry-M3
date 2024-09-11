//import React from "react";
import style from "./Contact.module.css";
//import backgroundImage from "../../assets/img/contact-background.jpg"; // Ruta de la imagen de fondo

export default function Contact() {
    return (
        <div className={style.background}>
            <div className={style.contact}>
                <div className={style.container}>
                    <div className={style.contactInfo}>
                        <h2>Contáctenos</h2>
                        <div>
                            <h3>Administración</h3>
                            <p>Nombre: Admin</p>
                            <p>Email: admin@example.com</p>
                            <p>Teléfono: 123-456-7890</p>
                        </div>
                        <div>
                            <h3>Entrenadores</h3>
                            <div>
                                <p>Nombre: Entrenador 1</p>
                                <p>Email: entrenador1@example.com</p>
                                <p>Teléfono: 111-222-3333</p>
                            </div>
                            <div>
                                <p>Nombre: Entrenador 2</p>
                                <p>Email: entrenador2@example.com</p>
                                <p>Teléfono: 444-555-6666</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.illustration}></div>
                </div>
            </div>
        </div>
    );
}
