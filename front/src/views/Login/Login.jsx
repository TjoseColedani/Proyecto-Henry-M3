import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css"; 
import { useDispatch }  from "react-redux"
import { loginUser } from "../../redux/reducer";

export default function Login() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const dispatch = useDispatch();


    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        // Validación de campos de inicio de sesión
        if (!loginData.username || !loginData.password) {
            alert("Por favor, ingrese su usuario y contraseña");
            return;
        }

        axios.post("http://localhost:3000/users/login", loginData)
            .then(response => {
                if (response.status === 200) {
                    dispatch(loginUser(response.data))
                    alert("Inicio de sesión exitoso");
                } else {
                    alert("Ha ocurrido un error al iniciar sesión");
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    alert("Usuario o contraseña incorrectos");
                } else {
                    alert("Ha ocurrido un error al iniciar sesión");
                }
            });
    };

    return (
        <div className={styles.background}>
            <div className={styles.backgroundLogin}>
                <div className={styles.div}>
                    <h2>Iniciar Sesión</h2>
                    <form className={styles.form} onSubmit={handleLoginSubmit}>
                        <label htmlFor="username">Usuario</label>
                        <input id="username" name="username" type="text" onChange={handleLoginChange} value={loginData.username} />
        
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" name="password" type="password" onChange={handleLoginChange} value={loginData.password} />
        
                        <input type="submit" value="Iniciar Sesión" className={styles.btn} />
                    </form>
                </div>
            </div>
        </div>
    );
}
