import style from "./Register.module.css"
import { useState } from "react"
import validacion from "../../helpers/validation";
import axios from "axios";



export default function Register() {


    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        confirmpassword: ""
    };


const[allErrors,setAllErrors] = useState(initialState);
const [user,setUser] = useState(initialState);



const handleChange = (event) => { 
    const {value, name} = event.target;
    setUser({...user, [name]: value});
    setAllErrors(validacion({ ...user, [name]: value }));
    console.log(allErrors);
}



const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
        name: user.name, 
        email: user.email, 
        birthdate: user.birthdate, 
        nDni: user.nDni, 
        username: user.username, 
        password: user.password
    }

    if (Object.keys(allErrors).length || user.password !== user.confirmpassword) {
        return alert("Datos no válidos");
    }
    
    axios.post("http://localhost:3000/users/register",newUser)
    .then(({data}) => data)
    .then(alert("Registro exitoso"))
    .catch(error => alert(error.message))
    
}

const handleReset = (event) => {
    event.preventDefault();
    setUser(initialState);
    setAllErrors(initialState);
}

    //datos del formulario
    const formData = [
        {label: "Nombre: ", name: "name", type: "text", placeholder: "Ingresar nombre..."},
        {label: "Email: ", name: "email", type: "email", placeholder: "Ingresar email..."},
        {label: "Birthdate: ", name: "birthdate", type: "date", placeholder: "Ingresar fecha de nacimiento..."},
        {label: "Numero de DNI: ", name: "nDni", type: "text", placeholder: "Ingresar numero de documento..."},
        {label: "Nombre de usuario: ", name: "username", type: "text", placeholder: "Ingresar nombre de usuario..."},
        {label: "Contraseña: ", name: "password", type: "password", placeholder: "Ingresar password..."},
        {label: "Verificar contraseña: ", name: "confirmpassword", type: "password", placeholder: "Verificar contraseña..."}
    ];


    return(
        <div className={style.background}>
            <div className={style.backgroundRegister}>
                <div className={style.div}>
                    <h2>Regístrate Aquí!</h2>
                    <form className={style.form} onSubmit={handleSubmit}>
                
                        {formData.map(({ label, name, type, placeholder }) => (
                            <div key={name}>
                                <label htmlFor={name}>{label}</label>
                                <input 
                                    type={type}
                                    id={name}
                                    name={name}
                                    value={user[name]}
                                    placeholder={placeholder}
                                    onChange={handleChange}
                                />
                                {allErrors[name] && <span style={{ color: "red" }}>{allErrors[name]}</span>}
                            </div>
                        ))}

                        <button type="submit" disabled={Object.values(user).some(e => !e)}>Enviar</button>
                        <button onClick={handleReset}>Borrar formulario</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
