import style from "./About.module.css";
//import backgroundImage from "../../assets/img/sven-mieke-jO6vBWX9h9Y-unsplash.jpg"; // Ruta correcta de la imagen de fondo

export default function About() {
    return (
        <div className={style.backgroundImage}>
            <div className={style.about}>
                <div className={style.container}>
                    <h2>¡Bienvenido a FitZone! Somos un gimnasio comprometido con tu bienestar integral.</h2>
                    <p className={style.large}>En FitZone, te ofrecemos instalaciones de primera categoría equipadas con todo lo que necesitas para lograr tus objetivos fitness. Nuestro equipo de entrenadores altamente capacitados está aquí para guiarte y apoyarte en cada paso del camino.</p>
                    <p className={style.large}>Ofrecemos programas de entrenamiento personalizados, asesoramiento nutricional y una comunidad acogedora donde puedes conectar con otros apasionados por el fitness.</p>
                    <p className={style.large}>Únete a FitZone y comienza tu viaje hacia una vida más saludable y activa hoy mismo.</p>
                </div>
            </div>
        </div>
    );
}
