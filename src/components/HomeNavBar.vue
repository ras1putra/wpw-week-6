<template>
    <div class="flex justify-between w-screen z-102 bg-white px-2">
        <router-link :to="{ name: 'home' }" class="flex items-center">
            <img src="/src/assets/logo.svg" class="w-10">
            <div class="font-semibold text-xl text-gray-500 items-center px-2">
                pekerja.go.di
            </div>
        </router-link>
        <div class="flex space-x-4 p-4">
            <router-link :to="{ name: 'login' }" class="py-2 px-4 bg-blue-500 rounded-md items-center font-bold text-white hover:opacity-80">
                Login
            </router-link>
            <router-link :to="{ name: 'signup' }" class="py-2 px-4 bg-red-400 rounded-md items-center font-bold text-white hover:opacity-80">
                Sign Up
            </router-link>
        </div>
    </div>
    <router-view></router-view>
</template>
<script>

</script>