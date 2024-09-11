//import React, {useState} from "react";
import style from "./AppointmentCard.module.css";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { userAppointmentChange } from "../../redux/reducer";



export const AppointmentCard = ({ id, date, time, status, description }) => {
    const formattedDate = new Date(date);
    const formatDate = `
        ${formattedDate.getDate()}/
        ${formattedDate.getMonth() + 1}/
        ${formattedDate.getFullYear()}
    `;

    const GET_USERS_URL = "http://localhost:3000/users/";


    const userId = useSelector(state => {
        return state.user.userData.user.id;
    });

    const dispatch = useDispatch();

    const [appointmenStatus, setAppointmentStatus] = useState(status)


    const handleCancelAppointment = () => {
        setAppointmentStatus("cancelado")
        axios.put(`http://localhost:3000/appointments/cancel/${id}`)
        .then(() => {
            alert("Turno cancelado");
            axios.get(GET_USERS_URL + userId)
            .then(response => response.data)
            .then(user => dispatch(userAppointmentChange(user.appointment)))
            .catch(error => console.log(error.message))
        })
        .catch((error) => error.message)
    }

    return (
        <div className={style.cardContainer}>
            <span>{formatDate}</span>
            <span>{time}</span>
            <span>{description}</span>
            <span className={appointmenStatus === "active" ? style.active : style.cancelled}>
                {appointmenStatus === "active" ? <span className={style.spanCancel} onClick={handleCancelAppointment}>Activo (cancelar)</span> : "Cancelado"}
            </span>
        </div>
    );
};
