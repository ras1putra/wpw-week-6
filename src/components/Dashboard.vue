<template>
    <div class="m-0 w-full pl-20">
      <div class="m-0 p-4 bg-gray-100">
        <div class="m-4 p-4 bg-white rounded-md shadow-md">
          <div class="text-2xl font-light text-slate-600">
            Dashboard Pengelola
          </div>
          <div class="mt-8 px-2 py-4 text-2xl text-white bg-cyan-500 font-semibold text-center items-center">
            Selamat Datang <span class="font-bold">{{ username }}</span> dari CV / PT <span class="font-extrabold">{{ perusahaan }}</span> <br> di Dashboard Pengelola Pegawai
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: "",
        perusahaan: "",
        email: "",
        password: ""
      };
    },
    mounted() {
      if (localStorage.email) {
        this.email = localStorage.email;
      }
      if (localStorage.perusahaan) {
        this.perusahaan = localStorage.perusahaan;
      }
      this.fetchUser();
    },
    watch: {
      email(newEmail) {
        localStorage.email = newEmail;
      },
      perusahaan(newPerusahaan) {
        localStorage.perusahaan = newPerusahaan;
      }
    },
    methods: {
      async fetchUser() {
          const response = await axios.get('http://localhost:3000/users', {
            params: {
              email: this.email
            }
          });
          this.username = response.data[0].username;
          this.perusahaan = response.data[0].perusahaan;
      }
    }
  };
  </script>
  