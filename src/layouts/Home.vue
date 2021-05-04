<template>
    <div id="home">
        <header id="ecolls-header">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="header-menu">
                    <div id="header-logo">
                        <img src="../assets/logo1.png" />
                    </div>
                    <div id="header-options">
                        <div id="icons-cont">
                            <q-icon name="fas fa-cog"> </q-icon>
                            <q-icon name="fas fa-bell">
                                <q-badge floating color="red" rounded />
                            </q-icon>
                        </div>
                        <q-avatar class="user-avatar" size="10em">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </q-avatar>
                        <div id="user-facts">
                            <div>
                                <p><b>{{ user }}</b></p>
                                <p>{{ mail }}</p>
                            </div>
                            <div id="logout">
                                <a id="logout-btn" @click="confirm_exit = true">Cerrar sesion</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="opt-menu">
                    <q-tabs id="menu" v-model="tab" inline-label outside-arrows mobile-arrows
                        class="bg-primary text-white shadow-2">
                        <q-tab name="inicio" label="Inicio"></q-tab>
                        <q-tab name="opa" label="Opcion A"></q-tab>
                        <q-tab name="opb" label="Opcion B"></q-tab>
                        <q-tab name="opc" label="Opcion C"></q-tab>
                        <q-tab name="opd" label="Opcion D"></q-tab>
                        <q-tab name="ope" label="Opcion E"></q-tab>
                    </q-tabs>
                </div>
            </div>
        </header>
        <q-dialog v-model="confirm_exit" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <q-icon name="fa fa-warning" color="error" />
                    <span class="q-ml-sm">Cerrar sesion?</span>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="No" color="primary" v-close-popup />
                    <q-btn flat label="Si, cerrar" color="primary" v-close-popup @click="logOut" />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    import api from "../shared/api/index";

    export default {
        name: "Home",
        data() {
            return {
                confirm_exit: false,
                tab: "opb",
                user: localStorage.getItem('user'),
                mail: localStorage.getItem('mail')
            };
        },
        methods: {
            async logOut() {
                api.logout();
                this.$router.push('login')
            },
        },
    };
</script>

<style>
    #home {
        background-color: #f6f7f6;
        min-height: 100vh;
    }

    #header-menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #header-logo {
        margin-left: 100px;
    }

    #header-logo>img {
        max-width: 180px;
        margin-top: 20px;
    }

    .user-avatar i {
        color: #4c81c2;
    }

    #header-options {
        min-width: 40%;
        display: flex;
        align-items: center;
        margin-right: 50px;
    }

    #user-facts {
        line-height: 10px;
        font-size: 14pt;
        display: flex;
    }

    #logout {
        border-left: 1px solid #979797;
        margin-left: 60px;
        display: flex;
        align-items: center;
    }

    #logout-btn {
        margin-left: 20px;
        text-decoration: none;
        font-weight: 700;
        color: var(--q-color-warning);
        cursor: pointer;
    }

    #icons-cont>.q-icon {
        font-size: 22pt;
        margin-right: 30px;
        color: var(--q-color-gray_text);
    }

    #opt-menu .q-tab__indicator {
        height: 5px;
        margin-bottom: 5px;
    }

    #menu .q-tabs__content {
        display: flex;
        justify-content: space-around;
        margin-right: 10%;
        margin-left: 10%;
    }

    @media (max-width: 425px) {
        #header-menu {
            flex-direction: column;
        }

        #header-options {
            margin-top: 15px;
            flex-flow: column;
            margin-right: 0px;
        }

        #header-logo {
            margin-left: 5px;
            margin-top: 2px;
            align-self: center;
        }

        #menu .q-tabs__content {
            justify-content: flex-start;
            margin-right: 0px;
            margin-left: 0px;
        }

        #icons-cont .q-icon {
            margin-right: 5px;
        }

        #icons-cont {
            align-self: flex-end;
            position: absolute;
            margin-right: 10px;
        }

        .user-avatar {
            height: 0;
        }

        #logout {
            margin-left: 5px;
            line-height: normal;
            border: none;
            text-align: right;
        }

        #logout-btn {
            margin-left: 5px;
        }

        #user-facts {
            width: 100%;
            justify-content: space-between;
            padding: 0px 15px;
        }
    }
</style>