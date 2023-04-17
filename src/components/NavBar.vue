<template>
    <div style="z-index: 99;" class="flex flex-col bg-[#263932] h-screen fixed top-0 items-center space-y-8 w-20">
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
                    <img src="/src/assets/dashboard.svg" class="w-8"
                        :class="{ 'bg-cyan-700 scale-150 p-2': $route.name === 'home' }">
                </router-link>
            </span>
        </button>
        <button>
            <span>
                <router-link :to="{ name: 'about' }">
                    <img src="/src/assets/about.svg" class="w-8"
                        :class="{ 'bg-cyan-700 scale-150 p-2': $route.name === 'about' }">
                </router-link>
            </span>
        </button>
        <button @click="showMakan">
            <span>
                <img src="/src/assets/management.svg" class="w-8"
                    :class="{ 'bg-cyan-700 scale-150 p-2': $route.name === 'management.active' || $route.name === 'management.exit' }">
            </span>
        </button>
    </div>
    <div v-show="makan" class="flex flex-col space-y-4 text-white font-bold pl-20 bg-[#263932] w-60 fixed top-[58%]">
        <router-link :to="{ name: 'management.active' }" class="hover:bg-cyan-200 hover:text-gray-400 p-2"
            @click="showMakan">Pegawai Aktif</router-link>
        <router-link :to="{ name: 'management.exit' }" class="hover:bg-cyan-200 hover:text-gray-400 p-2"
            @click="showMakan">Pegawai Keluar</router-link>
    </div>
    <div v-show="hamburger" class="flex flex-col bg-[#263932] h-screen fixed ml-20 top-0 space-y-[24px] w-72 pr-8">
        <div class="font-bold text-gray-200 text-left mt-32 pb-12">
            Selamat Datang!
        </div>
        <router-link :to="{ name: 'home' }">
            <div class="py-2 px-2 font-bold text-gray-200 text-left hover:bg-cyan-200 hover:text-white" @click="showBurger">
                Dashboard
            </div>
        </router-link>
        <router-link :to="{ name: 'about' }">
            <div class="py-2 px-2 font-bold text-gray-200 text-left hover:bg-cyan-200 hover:text-white" @click="showBurger">
                Informasi
            </div>
        </router-link>
        <div class="py-2 px-2 flex font-bold text-gray-200 text-left hover:bg-cyan-200 hover:text-white cursor-pointer"
            @click="showDropdown">
            Manajemen
            <span>
                <img src="/src/assets/dropdown.svg" class="w-6">
            </span>
        </div>
        <div v-show="dropdown" class="flex flex-col space-y-6 text-white font-bold pl-4">
            <router-link :to="{ name: 'management.active' }" class="hover:bg-cyan-200 hover:text-gray-400 p-2"
                @click="showBurger">Pegawai Aktif</router-link>
            <router-link :to="{ name: 'management.exit' }" class="hover:bg-cyan-200 hover:text-gray-400 p-2"
                @click="showBurger">Pegawai Keluar</router-link>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            hamburger: false,
            dropdown: false,
            makan: false
        }
    },
    methods: {
        showBurger() {
            this.hamburger = !this.hamburger;
        },
        showDropdown() {
            this.dropdown = !this.dropdown;
        },
        showMakan() {
            this.makan = !this.makan;
        }
    }
}
</script>
