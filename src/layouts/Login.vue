<template>
    <div id="login">
        <div id="empty-column"></div>
        <div class="row justify-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" id="form-container">
                <img src="../assets/logo1.png" width="90%" id="logo" />
                <p id="welcome-message">
                    Bienvenido a <br />
                    <span>Plataforma eCollS</span>
                </p>
                <q-form @submit="login" class="q-gutter-md" id="login-form">
                    <label for="email">Correo Electronico</label>
                    <q-input class="login-input" id="email" name="email" v-model="user.email" type="email" outlined
                        :dense="true" placeholder="email@correo.com" />
                    <q-input class="login-input" id="password" name="password" v-model="user.password" type="password"
                        outlined :dense="true" placeholder="••••••••" />
                    <div id="login-btn-container">
                        <q-btn id="login-btn" label="Ingresar" type="submit" color="primary" />
                    </div>
                </q-form>
                <p id="pass-message">¿Olvidaste tu <span>contraseña</span>?</p>
                <div id="company-info">
                    <a href="" id="terms">Términos y Condiciones</a>
                    <a href="" id="privacy">Privacidad</a>
                    <br />
                    <p id="copyright">© 2020 EOC SA de CV, Queretaro, México</p>
                </div>
            </div>
        </div>
        <q-dialog v-model="error_login" seamless position="bottom">
            <q-card>
                <q-card-section class="row items-center">
                    <q-icon name="fa fa-exclamation-triangle" />
                    <span class="q-ml-sm">Datos incorrectos.</span>
                </q-card-section>
                <q-card-actions align="right">
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    import api from "../shared/api/index";

    export default {
        name: "Login",
        data() {
            return {
                user: {
                    email: "",
                    password: "",
                },
                error_login: false,
            };
        },
        methods: {
            login() {
                api
                    .login(this.user)
                    .then(res => {
                        localStorage.setItem("user", res.user);
                        localStorage.setItem("mail", res.mail);
                        localStorage.setItem("api_token", res.message);
                        if (localStorage.getItem("api_token")) {
                            this.$router.push("home");
                        }
                    })
                    .catch((err) => {
                        this.error_login = true;
                        setTimeout(() => {
                            this.error_login = false;
                        }, 3000);
                        console.error(err);
                    });
            },
        },
    };
</script>

<style>
    #empty-column {
        position: fixed;
        width: 24%;
        height: 100vh;
        background-color: #0b4ca3;
    }

    #form-container {
        padding: 80px;
        background-color: #fff;
        text-align: center;
        min-height: 100vh;
        position: relative;
    }

    #logo {
        margin-top: 80px;
    }

    #welcome-message {
        font-weight: 900;
        color: #f25822;
        font-size: 24pt;
    }

    #welcome-message>span {
        color: #0b4ca3;
    }

    #login-form,
    #copyright,
    #pass-message {
        text-align: left;
        color: #9b9b9b;
    }

    .login-input,
    #welcome-message {
        margin-bottom: 55px;
    }

    #login-btn-container {
        text-align: center;
    }

    #login-btn {
        width: 85%;
        margin-bottom: 25px;
    }

    #pass-message {
        font-size: small;
        text-align: center;
    }

    #pass-message>span {
        color: #000;
        cursor: pointer;
    }

    #company-info {
        bottom: 50px;
        padding-left: 8.5%;
        padding-right: 8.5%;
        font-size: 14px;
        margin-top: 25%;
    }

    #terms {
        float: left;
    }

    #privacy {
        float: right;
    }

    #terms,
    #privacy {
        color: var(--q-color-primary);
        text-decoration: none;
    }

    #copyright {
        margin-top: 20px;
        position: absolute;
    }

    @media (max-width: 425px) {
        #form-container {
            position: absolute;
            margin-top: 10px;
            min-height: 100%;
            padding: 25px;
        }

        #logo {
            margin-top: 25px;
        }

        #empty-column {
            min-width: 100%;
        }

        #company-info {
            margin-bottom: 0px;
            margin-top: 10%;
        }
    }
</style>