class MyButtonGroup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

    }

    setButtons1(buttonNames) {
        this.shadowRoot.innerHTML = '';

        buttonNames.forEach((buttonName) => {

            let style = document.createElement('style');


            style.textContent = `
            @font-face {
                font-family: 'Helvetica';
                src: local('Helvetica'), url('Fuentes/Helvetica.woff') format('woff');
            }
            
            * {
                font-family:'Helvetica'
            }
            
            .btnNav  {
                padding: 2vh;
                background:none;
                border: none;
                margin: auto;
                color: black;
                font-size: min(max(1rem, 4vw), 16px);
                font-weight: bold; 
              }
              
              .btnNav:hover {
                background: linear-gradient(left, #f857a6, #ff8c7f);
                background-color: transparent;
                color: #ff8c7f;
              }
             
              .btnNav::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: #ff8c7f;
                transition: width .3s;
              }
              
              .btnNav:hover::after {
                width: 100%;
              }
              
                              
                /*
                ** Logotipo
                */
                
                .logo {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    height: 5vh;
                    width: 5vw;
                    margin: 0;
                    padding: 0;
                }
              
              `;
            const button = document.createElement('button');

            switch (buttonName) {
                case 'Inicio':

                    button.addEventListener('click', () => {
                        window.location.href = 'Inicio/index.html';
                    });

                    break;
                case 'Blog':

                    button.addEventListener('click', () => {
                        window.location.href = '../Blog/principal/blog.html';
                    });

                    break;
                case 'Conocenos':
                    button.addEventListener('click', () => {
                        window.location.href = '../Conocenos/conocenos.html';
                    });
                    break;
                case 'Catalogo':
                    button.addEventListener('click', () => {
                        window.location.href = '../Catalogo/principal/catalogo.html';
                    })
                    break;

            }

            button.className = "btnNav";
            button.textContent = buttonName;
            this.shadowRoot.appendChild(style);
            this.shadowRoot.appendChild(button);


        });

    }






            /*para el footer*/
            setButtons2(buttonNames)
            {
                this.shadowRoot.innerHTML = '';

                buttonNames.forEach((nombre) => {

                    let style = document.createElement('style');
                    style.textContent = `
            .pie  {
              
                padding: 2vh;
                color: black;
                margin: auto;
                background:none;
                border: none;
                font-size: min(max(1rem, 4vw), 16px);
                font-weight: bold;
                 
            }
            
            .pie:hover {
                background: linear-gradient(left, #f857a6, #ff8c7f);
                background-color: transparent;
                color: #ff8c7f;
              }
             
              .pie::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: #ff8c7f;
                transition: width .3s;
              }
              
              .pie:hover::after {
                width: 100%;
              }
            `;
                    const button2 = document.createElement('button');

                    switch (nombre) {
                        case 'Politica de privacidad':

                            button2.addEventListener('click', () => {
                                window.location.href = '../Privacidad/privacidad.html';
                            });

                            break;
                        case 'Condiciones de uso':

                            button2.addEventListener('click', () => {
                                window.location.href = '../Condiciones/condiciones.html';
                            });

                            break;
                        case 'Politica de cookies':
                            button2.addEventListener('click', () => {
                                window.location.href = 'cookies.html';
                            });
                            break;
                        case 'Contacto':
                            button2.addEventListener('click', () => {
                                window.location.href = '../Contacto/contacto.html';
                            });
                            break;

                    }


                    button2.className = "pie";
                    button2.textContent = nombre;
                    this.shadowRoot.appendChild(button2);
                    this.shadowRoot.appendChild(style);
                });

            }
        }
        customElements.define('conjunto-botones', MyButtonGroup);


window.onload = function () {

    let usuarios = sessionStorage.getItem("usuarios");

    if (usuarios !== null) {

        /**
         * Se crea un div para el usuario
         */
        let div = document.createElement('div');
        div.className = 'user';

        /**
         * Imagen por defecto
         * https://www.pngkey.com/png/detail/230-2301779_best-classified-apps-default-user-profile.png
         */
        let imagen = document.createElement('img');
        imagen.src = '../Imagenes/Usuario/Imagen/user_profile.png';
        imagen.className = 'logo';

        div.appendChild(imagen);

        let usuario = JSON.parse(usuarios);


        let text = document.createElement('p');
        for (let usuarioElement of usuario) {
            text.textContent = usuarioElement.username;
        }

        div.appendChild(text);


        let dropdown = document.createElement('dropdown');
        let link = document.createElement('a');
        let haCerradoSesion = false;
        sessionStorage.setItem("haCerradoSesion", haCerradoSesion);

        if (!haCerradoSesion) {
            link.href = '../Login/login.html';
            link.textContent = 'Iniciar sesión';
        }

        link.onclick = () => {
            /*crea un enlace para iniciar sesión*/

            haCerradoSesion = true;
            let enlace = document.createElement('a');
            enlace.href = '../Login/login.html';
            enlace.textContent = 'Iniciar sesión';
            enlace.className = 'enlace';
            let estilos = document.createElement('style');

            estilos.textContent = `
                       
                        @font-face {
                            font-family: 'Helvetica';
                            src: local('Helvetica'), url('Fuentes/Helvetica.woff') format('woff');
                        }
                    
                        * {
                            font-family:'Helvetica'
                        }
                        
                        .enlace  {
                            padding: 2vh;
                            background:none;
                            border: none;
                            margin: auto;
                            color: black;
                            font-size: min(max(1rem, 4vw), 16px);
                            font-weight: bold;
                            text-decoration: none; 
                          }
                          
                          .enlace:hover {
                            background: linear-gradient(left, #f857a6, #ff8c7f);
                            background-color: transparent;
                            color: #ff8c7f;
                          }
                         
                          .enlace::after {
                            content: '';
                            display: block;
                            width: 0;
                            height: 2px;
                            background: #ff8c7f;
                            transition: width .3s;
                          }
                          
                          .enlace:hover::after {
                            width: 100%;
                          }
                        
                        `;

            enlace.appendChild(estilos);
            dropdown.appendChild(enlace);
            dropdown.appendChild(link);
            div.appendChild(dropdown);
            div.appendChild(link);

            dropdown.style.display = 'none';
            div.style.display = 'none';
            imagen.style.display = 'none';
            text.style.display = 'none';

            document.body.appendChild(div);
            return false;
        }

        document.body.appendChild(div);
    }else{
        let enlace = document.createElement("a");
        enlace.href = "../Register/register.html";
        enlace.textContent = "Registrarse";
        let estilos = document.createElement('style');

        estilos.textContent = `
                       
                        @font-face {
                            font-family: 'Helvetica';
                            src: local('Helvetica'), url('Fuentes/Helvetica.woff') format('woff');
                        }
                    
                        * {
                            font-family:'Helvetica'
                        }
                        
                        a  {
                        display: inline-block;
                            padding: 2vh;
                            background:none;
                            border: none;
                            margin: auto;
                            color: black;
                            font-size: min(max(1rem, 4vw), 16px);
                            font-weight: bold;
                            text-decoration: none;
                            width: 6vw; 
                            bottom: 30.9rem;
                            left: 58rem;
                            position: relative;
                          }
                          
                          a:hover {
                            background: linear-gradient(left, #f857a6, #ff8c7f);
                            background-color: transparent;
                            color: #ff8c7f;
                          }
                         
                          a::after {
                            content: '';
                            display: block;
                            width: 0;
                            height: 2px;
                            background: #ff8c7f;
                            transition: width .3s;
                          }
                          
                          a:hover::after {
                            width: 100%;
                          }
                          
                          
                        
                        `;

        enlace.appendChild(estilos);
        document.body.appendChild(enlace);
    }
}