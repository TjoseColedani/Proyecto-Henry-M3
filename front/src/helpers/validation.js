const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validacion(formData) {
    const errors = {}

    if (!formData.name) { errors.name = "Este campo es requerido" }
    if (!formData.email) { errors.email = "Este campo es requerido" }
    else if (!emailRegex.test(formData.email)) { errors.email = "Formato de correo electrónico inválido" }
    if (!formData.birthdate) { errors.birthdate = "Este campo es requerido" }
    if (!formData.nDni) { errors.nDni = "Este campo es requerido" }
    if (!formData.username) { errors.username = "Este campo es requerido" }
    if (!formData.password) { errors.password = "Este campo es requerido" }

    return errors;
}

export default validacion;
