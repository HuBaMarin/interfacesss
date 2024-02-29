/**
 * Se realiza el registro de un usuario
 * @author Alex
 */
$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();
        let repeatPassword = $("#repeatPassword").val();
        let email = $("#email").val();

        if (username === "" || password === "" || email === "") {
            $(".error").text("Todos los campos son obligatorios");
            return;
        }

        if (password !== repeatPassword) {
           $(".error").text("Las contraseñas no coinciden");
            return;
        }
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("email", email);
        window.location.href = "login.html";
    });

});