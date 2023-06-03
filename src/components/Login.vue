<template>
    <div>
        <form @submit.prevent="loginForm">
            <div class="w-2/4 mx-auto bg-gray-200 rounded-md">
                <div class="text-2xl font-semibold text-slate-600 text-center mt-8 pt-8 pb-8">
                    Login Ke Akun
                </div>
                <input-component type="text" label="Email" placeholder="Email Anda" v-model="email"
                    :error="errors['email']"></input-component>
                <input-component type="password" label="Password" placeholder="Password" v-model="password"
                    :error="errors['password']"></input-component>
                <div class="flex mx-auto px-8 pt-6 pb-8 items-center font-bold justify-center">
                    <button type="submit" class="w-full bg-cyan-600 px-6 py-2 text-white rounded-md hover:opacity-80">
                        Login
                    </button>
                    <div v-if="feedback" class="absolute text-red-500 text-center top-[68%]">
                        {{ feedback }}
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div v-show="alert"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-200 w-screen h-screen text-slate-600 rounded-xl shadow-xl">
        <div
            class="absolute p-4 text-center text-xl font-bold mt-4 text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="pl-20">
                Anda sudah Login
                <div class="mt-4">
                    <button type="button" @click="oke()" class="bg-green-600 px-8 py-2 text-white rounded-md">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import InputComponent from "./InputComponent.vue";
import { login } from "../apis/auth-api";
import { setState } from "../store";

export default {
    components: {
        InputComponent,
    },
    data() {
        return {
            email: "",
            password: "",
            errors: {},
            feedback: "",
            alert: false,
            Token: "",
        };
    },
    mounted() {
        if (localStorage.email) {
            this.email = localStorage.email;
        }
        if (localStorage.password) {
            this.password = localStorage.password;
        }
        this.load
    },
    watch: {
        email(newEmail) {
            localStorage.email = newEmail;
        },
        password(newPassword) {
            localStorage.password = newPassword;
        }
    },
    methods: {
        async loginForm() {
            if (!this.email || !this.password) {
                this.errors = {
                    email: "Email belum diisi",
                    password: "Password belum diisi",
                };
            } else {
                try {
                    const response = await login({
                        email: this.email,
                        password: this.password,
                    });
                    setState(response);
                    this.$router.push("/dashboard");
                } catch (error) {
                    console.error(error);
                    this.feedback = error.response.data;
                }
            }
        },
        load() {
            var theres = localStorage.getItem("authState");
            if (typeof JSON.parse(theres)?.accessToken !== "undefined") {
                this.Token = JSON.parse(theres).accessToken;
                if (this.Token !== null) {
                    this.alert = true;
                }
            }
        },
        oke() {
            this.$router.push("/dashboard");
            this.alert = false;
        },
    },
};
</script>
  