/**
 * Se realiza la autenticación del usuario en el sistema.
 * @author Alex
 */
$(document).ready(function () {
    /*check if user and passoword are in sessionStorage*/


    let arrayUsuarios = JSON.parse(sessionStorage.getItem("usuarios"));

    let usuarioSesion = arrayUsuarios[0].username;
    let passwordSesion = arrayUsuarios[0].password;



    let usuario = $("#usuario").val();
    let password = $("#password").val();
    if (usuario === usuarioSesion && password === passwordSesion) {
        window.location.href = "../../Inicio/inicio.html";
    }

})