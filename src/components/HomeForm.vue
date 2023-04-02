<template>
    <div>{{ pegawai }}</div>
    <div class="m-0 p-4 bg-gray-100">
        <div class="m-4 p-4 bg-white rounded-md shadow-md">
            <div class="justify-between flex">
                <div class="text-2xl font-light text-slate-600">
                    Pekerja Baru
                </div>
                <button
                    class="flex items-center px-2 py-1 border-slate-400 border-2 rounded-[5px] hover:bg-slate-700 hover:text-white"
                    @click="showClass">
                    <img src="src/assets/plus.svg" class="w-4 mr-2 bg-white rounded-full">
                    Pekerja Baru
                </button>
            </div>
            <form>
                <div v-show="show"
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 bg-gray-200 w-[600px] text-slate-600 rounded-xl shadow-xl">
                    <div class="p-4 text-center text-xl font-bold mt-6 text-black">
                        Tambah Pekerja Baru
                    </div>
                    <input-component type="text" v-model="pegawai.nama" label="Nama Lengkap" placeholder="Nama Lengkap Anda"></input-component>
                    <div class="mx-4 p-4 flex justify-between font-bold items-center">
                        <label>Jenis Kelamin</label>
                        <div class="w-3/4 space-x-2">
                            <input type="radio" id="laki">
                            <label for="laki">Laki-laki</label>
                            <input type="radio" id="per">
                            <label for="per">Perempuan</label>
                        </div>
                    </div>
                    <input-component type="number" v-model="pegawai.umur" label="Umur" placeholder="Umur Anda"></input-component>
                    <select-component label="Posisi" v-model="pegawai.posisi" :options="lowongan" placeholder="Pilih Posisi Yang Dilamar"></select-component>
                    <div class="mx-4 p-4 flex justify-between font-bold items-center">
                        <label for="date">Tanggal Masuk</label>
                        <input type="date" name="date" class="w-3/4 px-4 py-2">
                    </div>
                    <div class="flex mx-8 p-4 items-center space-x-6 font-bold justify-end mt-6">
                        <button class="bg-green-600 px-4 py-2 text-white rounded-md" type="submit">
                            Simpan
                        </button>
                        <button type="button" class="bg-red-600 px-6 py-2 text-white rounded-md" @click="closeShow">
                            Batal
                        </button>
                    </div>
                </div>
            </form>
            <div class="pt-8">
                <div class="p-2 py-4 text-white bg-cyan-500 font-bold grid grid-cols-12 text-center">
                    <div>No.</div>
                    <div class="col-span-2">Nama</div>
                    <div>Jenis Kelamin</div>
                    <div class="col-span-2">Umur</div>
                    <div class="col-span-2">Posisi</div>
                    <div class="col-span-2">Tanggal Masuk</div>
                </div>
                <div class="p-2 bg-gray-200 grid grid-cols-12 text-center items-center">
                    <div class="col-span-1">1</div>
                    <div class="col-span-2 text-left">Paidi</div>
                    <div class="col-span-1">L</div>
                    <div class="col-span-2">12</div>
                    <div class="col-span-2">sales</div>
                    <div class="col-span-2">12-01-2020</div>
                    <div>
                        <button class="font-bold text-white bg-green-600 rounded-md py-2 w-16 hover:opacity-40">
                            Edit
                        </button>
                    </div>
                    <div class="col-span-1">
                        <button class="font-bold text-white bg-red-600 rounded-md py-2 w-16 hover:opacity-40">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputComponent from './InputComponent.vue'
import SelectComponent from './SelectComponent.vue'

export default {
    components: {
            InputComponent,
            SelectComponent
    },
    data() {
        return {
            show: false,
            pegawai: {
                nama: "",
                kelamin: "",
                umur: "",
                posisi: "",
                entry: ""
            },
            lowongan: [
                {value: 1, text: "Head Marketing"},
                {value: 2, text: "Supervisor"},
                {value: 3, text: "Secretary"},
                {value: 4, text: "Customer Service"},
                {value: 5, text: "Cleaning Service"}
            ]
        };
    },
    methods: {
        showClass() {
            this.show = true;
        },
        closeShow() {
            this.show = false;
        },
    }
};
</script>