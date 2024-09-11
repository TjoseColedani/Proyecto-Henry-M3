//import React from "react";
import { Link } from 'react-router-dom'
import style from "./Home.module.css"


export default function Home() {
  return (
      <div className={style.background}>
        <div className={style.backgroundHome}>
          <section className={style.welcome}>
            <div className={style.containerWelcome}>
              <h2>¡Bienvenido a FitZone, tu destino para una vida más saludable y activa!</h2>
            </div>
          </section>

          <section className={style.servicesSchedule}>
            <div className={style.service}>
              <h2>Servicios Destacados</h2>
              <div>
                <p>entrenamientos personalizados</p>
                <p>clases grupales</p>
                <p>asesoramiento nutricional</p>
                <p>y mucho mas!.</p>
              </div>
            </div>
            <div className={style.schedule}>
              <h2>Horarios</h2>
              <p>¡Te esperamos desde las 8:00 am hasta las 22:00 pm con horario corrido para ofrecerte nuestros servicios de entrenamiento Funcional, Crossfit y Boxeo!</p>
                <Link to="/register" className={style.btnRegister}>
                  ¡Regístrate ahora!.
                </Link>
            </div>
          </section>

          <section className={style.promotions}>
            <div className={style.promos}>
              <h2>Promociones Especiales</h2>
              <div className={style.promo1}>
                <h3>Paga 3 meses y ahorra</h3>
                <p>Paga los próximos 3 meses en un solo pago y ahorra un <b>10%</b> en tu membresía.</p>
              </div>
              <div className={style.promo2}>
                <h3>Paga 6 meses y ahorra más</h3>
                <p>Aprovecha nuestra oferta especial y paga 6 meses por adelantado con un descuento del <b>15%</b> en tu membresía.</p>
              </div>
              <div className={style.promo3}>
                <h3>Año completo de entrenamiento</h3>
                <p>Obtén acceso ilimitado a nuestras instalaciones durante todo el año pagando por adelantado y disfruta de un <b>20%</b> de descuento en tu membresía.</p>
              </div>
            </div>
          </section>

          <section className={style.cta}>
            <div className={style.ctaContainer}>
              <h2>¡Únete a FitZone hoy mismo!</h2>
            </div>
          </section>
        </div>
      </div>
  );
}
