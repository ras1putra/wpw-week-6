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
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
import InputComponent from "./InputComponent.vue";
import { login } from '../apis/auth-api';
import { setState } from '../store';

export default {
    components: {
        InputComponent,
    },
    data() {
        return {
            email: "",
            password: "",
            errors: {},
        };
    },
    mounted() {
        if (localStorage.email) {
            this.email = localStorage.email;
        }
        if (localStorage.password) {
            this.password = localStorage.password;
        }
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
                const response = await login({ email: this.email, password: this.password });
                setState(response);
                this.$router.push("/dashboard")
            }
        },
        
    },
};
</script>
  