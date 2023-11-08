<template>
    <div>
        <v-app id="login-page">
            <v-main>
                <v-flex pb-3 class="text-xs-center pb-4" style="margin-top: 114px">
                    <div class="text-center pb-4">
                        <img src="../assets/telkomlogo.png"/>
                    </div>
                </v-flex>
                <div style="height:8px"/>
                <v-card class="mx-auto rounded-xl OpenSans" max-width="300">
                    <v-container>
                        <div class="d-flex justify-center pt12">
                            <span class="fs14 bold">Dashboard</span>
                        </div>
                        <div class="d-flex justify-center px12 pt24">
                            <v-text-field
                                data-unq="login-input-email"
                                dense
                                outlined
                                prepend-inner-icon="person_outline"
                                label="Email"
                                name="email"
                                type="text"
                                v-model="form.email"
                                :error-messages="error.password"
                            ></v-text-field>
                        </div>
                        <div class="d-flex justify-center px12 -mt10">
                            <v-text-field
                                data-unq="login-input-password"
                                outlined
                                dense
                                :append-icon="show ? 'visibility' : 'visibility_off'"
                                :type="show ? 'text' : 'password'"
                                @click:append="show = !show"
                                label="Password"
                                name="password"
                                prepend-inner-icon="lock_outline"
                                @keyup.enter="onSubmit"
                                :error-messages="error.email"
                                v-model="form.password"
                            ></v-text-field>
                        </div>
                        <div class="d-flex justify-center px12">
                            <v-btn
                                data-unq="login-button-loginButton"
                                name="loggin-btn"
                                block
                                class="only-btn white--text"
                                depressed
                                color="#50ABA3"
                                :disabled="validation"
                                @click="onSubmit"
                            ><span>Login</span></v-btn
                            >
                        </div>
                        <div class="d-flex justify-center px12 mt16 mb4">
                            <a 
                                data-unq="login-link-forgetPassword"
                                @click="modalForgetPw = true"
                                style="color:#858585"
                                href="#"
                            >Forget Password?</a>
                        </div>
                    </v-container>
                </v-card>
            </v-main>
        </v-app>
        <LoadingBar :value="overlay"/>
    </div>
</template>
<style scoped>
    #login-page {
        background-image: url("../assets/bg_login.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        margin-top : -25px
    }
</style>

<script>
    import { mapActions } from 'vuex'
    import LoadingBar from "../components/LoadingBar.vue"

    import { ImageLogoLogin } from "@vue-mf/global";

    export default {
        name: "Login",
        components: { LoadingBar, ImageLogoLogin },
        data() {
            return {
                modalForgetPw: false,
                form: {
                    email: "",
                    password: "",
                    firebase_token_dashboard : ""
                },
                error: {},
                show: false,
                loading: false,
                overlay: false,
                logo_url: "",
                publicPath: process.env.BASE_URL
            };
        },
        mounted() {
            localStorage.setItem('bearer', "")
            // this.checkMaintenance()
        },
        computed: {
            validation() {
                if (this.form.email.length > 0 && this.form.password.length > 0) {
                    return false
                } else {
                    return true
                }
            }
        },
        created() {
            // let env = process.env.VUE_APP_LOGO_ENV
            // if (env == 'dev') {
            //     this.logo_url = "/img/logo_login_dev.png"
            // } else if (env == 'staging') {
            //     this.logo_url = "/img/logo_login_staging.png"
            // } else {
            //     this.logo_url = "/img/logo_login.png"
            // }
            this.logo_url = ImageLogoLogin
        },
        methods: {
            ...mapActions([
                'login', 'fetchPriv', 'checkMaintenance'
            ]),
            async onSubmit() {
                this.overlay = true
                await this.login(this.form)
                this.overlay = false
            },
        },
    };
</script>
