<template>
    <div class="flex flex-row px-8 justify-center items-center space-x-8">
        <h1 class="text-6xl max-w-md text-left">
            <div class="font-bold py-1 text-[30px]"><span class="text-[#0300AE]">Selamat Datang</span>
                di</div>
            <div class="font-extrabold py-1 text-[30px] text-[64px] text-[#5C0094]">MANAJEMEN
            </div>
            <div class="font-extrabold py-1 text-[30px] text-[64px] text-[#5C0094]">PEKERJA
            </div>
            <div class="font-bold py-1 text-[26px]">Kementrian <span class="text-[#D90D0D]">Tenaga </span><span
                    class="text-[#7900BB]">Kerja! </span><span class="text-[#D90D0D]">Kerja! Kerja!</span></div>
            <div class="text-lg font-normal pt-3 text-gray-500 max-w-md text-left">
                Mari Sejahterakan Para Pekerja
            </div>
        </h1>
        <div>
            <img src="/src/assets/banner.svg" class="w-[500px]">
        </div>
    </div>
    <div v-show="alert" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-200 w-screen h-screen text-slate-600 rounded-xl shadow-xl">
        <div class="absolute p-4 text-center text-xl font-bold mt-4 text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
export default {
    data() {
        return {
            Token: "",
            alert: false
        };
    },
    updated() {
        this.load();
    },
    methods: {
        load() {
            var theres = localStorage.getItem('authState');
            if (typeof JSON.parse(theres)?.accessToken !== 'undefined') {
                this.Token = JSON.parse(theres).accessToken;
                if (this.Token !== null) {
                    this.alert = true;
                }
            }
        },
        oke() {
            this.$router.push("/dashboard");
            this.alert = false;
        }
    }
};
</script>
