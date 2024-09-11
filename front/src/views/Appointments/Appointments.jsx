import { useEffect } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"
import axios from "axios"
import style from "./Appointments.module.css"
import { useSelector, useDispatch } from "react-redux"
import { userAppointmentChange } from "../../redux/reducer";



export default function Appointments() {
    const GET_USERS_URL = "http://localhost:3000/users/";
    /* const [allAppointments, setAllAppointments] = useState([]); */

    const userId = useSelector(state => {
        return state.user.userData.user.id;
    });
    const allAppointments = useSelector(state => {
        return state.user.userAppointments;
    })
    const dispatch = useDispatch();


    
    useEffect(() => {
        axios.get(GET_USERS_URL + userId)
            .then(response => response.data)
            .then(user => dispatch(userAppointmentChange(user.appointment)))
            .catch(error => console.log(error.message))
    }, [userId,dispatch]);
    



    return (
        <div className={style.background}>
            <div className={style.backgroundAppointment}>
                <div className={style.cardContainer}>
                    <h1 className={style.h1}>Mis Reservas</h1>
                    <ul className={style.ul}>
                        {allAppointments ? allAppointments.map(appointment => (
                            <AppointmentCard
                                key={appointment.id}
                                id={appointment.id}
                                date={appointment.date}
                                time={appointment.time}
                                status={appointment.status}
                                description={appointment.description}
                            />
                        )) : <span>Aun no hay turnos</span>}
                    </ul>
                </div>
            </div>
        </div>
    )
}
