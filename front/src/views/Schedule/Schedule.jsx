import { useState } from "react"
import style from "./Schedule.module.css"
import { useSelector } from "react-redux"
import axios from "axios"


export const Schedule = () => {
    const { userData } = useSelector( state => state.user )
    console.log(userData.user.id);
    const [scheduleData,setScheduleData] = useState({
        date: "",
        time: "",
        description: ""
    })

    const handleChange = (event) => {
        setScheduleData({
            ...scheduleData,
            [event.target.name]: event.target.value,
        });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(scheduleData);
        if([scheduleData.time,
            scheduleData.date,
            scheduleData.description].includes("")) {
                console.log("Todos los campos son obligatorios...")
                return;
            }
            alert("Turno agendado")
            console.log("Datos enviados");
            try {
                const { data } = await axios.post('http://localhost:3000/appointments/schedule', {...scheduleData, userId: userData.user.id, status: "active" })
            console.log(data);
            } catch (error) {
                console.log(error)
            }
            return setScheduleData({
                date: "",
                time: "",
                description: ""
            });
    }



    return (
        <>
        <div className={style.background}>
            <div className={style.backgroundSchedule}>
                <div className={style.div}>Agendar turno</div>
                <form className={style.form} onSubmit={handleSubmit}>
                    <label htmlFor="date">Fecha</label>
                    <input id="date" name="date" type="date" onChange={handleChange} value={scheduleData.date} />
            
                    <label htmlFor="time">Hora</label>
                    <input id="time" name="time" type="time" onChange={handleChange} value={scheduleData.time} />

                    <label htmlFor="description">Descripcion...</label>
                    <input id="description" name="description" type="text" onChange={handleChange} value={scheduleData.description} />
            
                    <input type="submit" value="Enviar" className={style.btn} />
                </form>
            </div>
            </div>
        </>
    )
}
