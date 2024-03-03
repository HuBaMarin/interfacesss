/**
 * Se realiza la autenticación del usuario en el sistema.
 * @author Alex
 */
$(document).ready(function () {
    /*check if user and passoword are in sessionStorage*/
    if (sessionStorage.getItem("username") && sessionStorage.getItem("password")) {
        $("#usuario").val(sessionStorage.getItem("username"));
        $("#password").val(sessionStorage.getItem("password"));

        let div = document.createElement("div");
        div.innerHTML = "Bienvenido " + sessionStorage.getItem("username");
        document.body.appendChild(div);



    }
})