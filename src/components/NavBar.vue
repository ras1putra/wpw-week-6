<template>
        <div class="flex flex-col bg-[#263932] h-screen fixed top-0 items-center space-y-8 w-20">
            <button @click="showBurger" class="mx-4 mt-4 p-4 space-y-2 bg-cyan-500 rounded shadow hover:bg-cyan-700">
                <span class="block w-6 h-0.5 bg-white"></span>
                <span class="block w-6 h-0.5 bg-white"></span>
                <span class="block w-6 h-0.5 bg-white"></span>
            </button>
            <div>
                <img src="/src/assets/account.svg" class="w-8 mt-6 pb-10">
            </div>
            <button>
                <span>
                    <router-link :to="{ name: 'home' }">
                        <img src="/src/assets/dashboard.svg" class="w-8" :class="{ 'bg-cyan-700 scale-150 p-2': $route.name === 'home' }">
                    </router-link>
                </span>
            </button>
            <button>
                <span>
                    <router-link :to="{ name: 'about' }">
                        <img src="/src/assets/about.svg" class="w-8" :class="{ 'bg-cyan-700 scale-150 p-2': $route.name === 'about' }">
                    </router-link>
                </span>
            </button>
            <button>
                <span>
                    <router-link :to="{ name: 'management' }">
                        <img src="/src/assets/management.svg" class="w-8" :class="{ 'bg-cyan-700 scale-150 p-2': $route.name === 'management' }">
                    </router-link>
                </span>
            </button>
        </div>
        <div v-show="hamburger" class="flex flex-col bg-[#263932] h-screen fixed ml-20 top-0 space-y-[24px] w-72 pr-8">
            <div class="font-bold text-gray-200 text-left mt-32 pb-12">
                Selamat Datang!
            </div>
            <div class="py-2 px-2 font-bold text-gray-200 text-left hover:bg-gray-100 hover:text-slate-600" @click="showBurger">
                <router-link :to="{ name: 'home' }">Dashboard</router-link>
            </div>
            <div class="py-2 px-2 font-bold text-gray-200 text-left hover:bg-gray-100 hover:text-slate-600" @click="showBurger">
                <router-link :to="{ name: 'about' }">Informasi</router-link>
            </div>
            <div class="py-2 px-2 font-bold text-gray-200 text-left hover:bg-gray-100 hover:text-slate-600" @click="showBurger">
                <router-link :to="{ name: 'management' }">Manajemen</router-link>
            </div>
        </div>
        <RouterView></RouterView>
</template>

<script>
    export default {
        data() {
            return {
                hamburger: false
            }
        },
        methods: {
            showBurger() {
                if(this.hamburger == false) {
                    this.hamburger = true;
                }
                else {
                    this.hamburger = false;
                }
            },
        }
    }
</script>
