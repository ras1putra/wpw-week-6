<template>
    <div>
        <form @submit.prevent="signupForm">
            <div class="w-2/4 mx-auto bg-gray-200 rounded-md">
                <div class="text-2xl font-semibold text-slate-600 text-center mt-8 pt-8 pb-8">
                    Daftar Akun
                </div>
                <input-component type="text" label="Nama Perusahaan" placeholder="Nama Perusahaan" v-model="perusahaan"
                    :error="errors['perusahaan']"></input-component>
                <input-component type="text" label="Username" placeholder="Username Anda" v-model="username"
                    :error="errors['username']"></input-component>
                <input-component type="text" label="Email" placeholder="Email Anda" v-model="email"
                    :error="errors['email']"></input-component>
                <input-component type="password" label="Password" placeholder="Password" v-model="password"
                    :error="errors['password']"></input-component>
                <div class="flex mx-auto px-8 pt-6 pb-8 items-center font-bold justify-center">
                    <button type="submit" class="w-full bg-red-400 px-6 py-2 text-white rounded-md hover:opacity-80">
                        Daftar
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import InputComponent from "./InputComponent.vue";
import { register } from '../apis/auth-api';
import { setState } from '../store';

export default {
    components: {
        InputComponent,
    },
    data() {
        return {
            perusahaan: "",
            username: "",
            email: "",
            password: "",
            errors: {},
        };
    },
    methods: {
        async signupForm() {
            if (!this.perusahaan || !this.username || !this.email || !this.password) {
                this.errors = {
                    perusahaan: "Nama perusahaan belum diisi",
                    username: "Username belum diisi",
                    email: "Email belum diisi",
                    password: "Password belum diisi",
                };
            } else {
                const { data } = await register({ perusahaan: this.perusahaan, username: this.username, email: this.email, password: this.password });
                setState(data);
            }
            this.$router.push("/login")
        },
    },
};
</script>