// Función que valida si un email tiene formato correcto
function validarEmail(email) {
    // Expresión regular para validar el formato del email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}  


// Verifica que el email tenga un símbolo @ y dominio válido
function validarEmailBasico(email) {
    return email.includes('@') && email.includes('.');
}  


// Comprueba que el correo no esté vacío y tenga estructura básica
function validarEmailSimple(email) {
    if (email.trim() === '') {
        return false; // El email no puede estar vacío
    }   
    return validarEmailBasico(email);
}  


// Evalúa si el email cumple con reglas comunes de validación
function validarEmailCompleto(email) {
    if (email.trim() === '') {
        return false; // El email no puede estar vacío
    }                                                                                                   
    if (!validarEmailBasico(email)) {
        return false; // El email debe contener @ y un dominio
    }
    return validarEmail(email); // Verifica el formato completo del email
}


// Método para asegurar que un email sea válido antes de guardarlo
function guardarEmail(email) {
    if (validarEmailCompleto(email)) {
        console.log('Email guardado:', email);
    } else {
        console.log('Email inválido:', email);
    }       
}