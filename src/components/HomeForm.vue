<template>
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
            <form @submit.prevent="add">
                <div v-show="show"
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 bg-gray-200 w-[600px] text-slate-600 rounded-xl shadow-xl">
                    <div class="p-4 text-center text-xl font-bold mt-4 text-black">
                        Tambah Pekerja Baru
                    </div>
                    <input-component type="text" v-model="form.nama" label="Nama Lengkap" placeholder="Nama Lengkap Anda"
                        :error="errors['nama']"></input-component>
                    <div class="mx-4 p-4 flex justify-between font-bold items-center">
                        <div class="w-1/4">
                            Jenis Kelamin
                        </div>
                        <div class="w-3/4 flex flex-row">
                            <radio-component label="Laki-laki" :value="1" v-model="form.kelamin"
                                :error="errors['kelamin']"></radio-component>
                            <radio-component label="Perempuan" :value="0" v-model="form.kelamin"></radio-component>
                        </div>
                    </div>
                    <input-component type="number" v-model="form.umur" label="Umur" placeholder="Umur Anda"
                        :error="errors['umur']"></input-component>
                    <select-component label="Posisi" v-model="form.posisi" :options="lowongan"
                        placeholder="Pilih Posisi Yang Dilamar" :error="errors['posisi']"></select-component>
                    <input-component type="date" v-model="form.entry" label="Tanggal Masuk"
                        :error="errors['entry']"></input-component>
                    <checkbox-component label="Penerima Bantuan" v-model="form.lainnya"
                        :options="keterangan"></checkbox-component>
                    <div class="flex mx-8 p-4 items-center space-x-6 font-bold justify-end">
                        <button v-show="!updateSubmit" class="bg-green-600 px-4 py-2 text-white rounded-md" type="submit">
                            Simpan
                        </button>
                        <button type="button" v-show="updateSubmit" @click="update(form)"
                            class="bg-green-600 px-4 py-2 text-white rounded-md">
                            Update
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
                    <div class="col-span-1">Umur</div>
                    <div class="col-span-2">Posisi</div>
                    <div class="col-span-1">Tanggal Masuk</div>
                    <div class="col-span-2">Bantuan</div>
                </div>
                <div class="p-2 bg-gray-200 grid grid-cols-12 text-center items-center" v-for="(items, index) in pegawai"
                    :key="index">
                    <div class="col-span-1">{{ index + 1 }}</div>
                    <div class="col-span-2 text-left">{{ items.nama }}</div>
                    <div class="col-span-1">{{ items.kelamin }}</div>
                    <div class="col-span-1">{{ items.umur }}</div>
                    <div class="col-span-2">{{ items.posisi }}</div>
                    <div class="col-span-1">{{ items.entry }}</div>
                    <div class="col-span-2" v-if="items.lainnya.length > 0">
                        <ul>
                            <li v-for="(bantuan, index) in items.lainnya" :key="index">{{ bantuan }}</li>
                        </ul>
                    </div>
                    <div class="col-span-2" v-else>Tidak ada</div>
                    <div>
                        <button @click="edit(items)"
                            class="font-bold text-white bg-green-600 rounded-md py-2 w-16 hover:opacity-40">
                            Edit
                        </button>
                    </div>
                    <div class="col-span-1">
                        <button @click="del(items)"
                            class="font-bold text-white bg-red-600 rounded-md py-2 w-16 hover:opacity-40">
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
import RadioComponent from './RadioComponent.vue'
import CheckboxComponent from './CheckboxComponent.vue'
import axios from 'axios'

export default {
    components: {
        InputComponent,
        SelectComponent,
        RadioComponent,
        CheckboxComponent
    },
    data() {
        return {
            show: false,
            pegawai: [],
            form: {
                nama: "",
                kelamin: "",
                umur: "",
                posisi: "",
                entry: "",
                lainnya: [],
            },
            lowongan: [
                { value: 1, text: "Head Marketing" },
                { value: 2, text: "Supervisor" },
                { value: 3, text: "Secretary" },
                { value: 4, text: "Customer Service" },
                { value: 5, text: "Cleaning Service" }
            ],
            keterangan: [
                { value: 1, text: "BLT" },
                { value: 2, text: "KIS" },
                { value: 3, text: "Prakerja" }
            ],
            updateSubmit: false,
            errors: {}
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        showClass() {
            this.show = true;
        },
        closeShow() {
            this.show = false;
            this.form.id = "";
            this.form.nama = "";
            this.form.kelamin = "";
            this.form.umur = "";
            this.form.posisi = "";
            this.form.entry = "";
            this.form.lainnya = [];
        },
        load() {
            axios
                .get("http://localhost:3000/pegawai")
                .then((res) => {
                    this.pegawai = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        add() {
            if (this.form.nama === "" || this.form.kelamin === "" || this.form.umur === "" || this.form.posisi === "" || this.form.entry === "") {
                this.show = true;
                this.errors = {
                    nama: 'Nama belum diisi',
                    kelamin: 'Jenis kelamin belum diisi',
                    umur: 'Umur belum diisi',
                    posisi: 'Posisi belum diisi',
                    entry: 'Tanggal masuk belum diisi'
                }
            }
            else {
                axios.post("http://localhost:3000/pegawai/", this.form).then((res) => {
                    this.load();
                })
                this.form.nama = "";
                this.show = false;
            }
        },
        edit(items) {
            this.show = true;
            this.updateSubmit = true;
            this.form.id = items.id;
            this.form.nama = items.nama;
            this.form.kelamin = items.kelamin;
            this.form.umur = items.umur;
            this.form.posisi = items.posisi;
            this.form.entry = items.entry;
            this.form.lainnya = items.lainnya;
        },
        update(form) {
            return axios
                .put("http://localhost:3000/pegawai/" + form.id, {
                    nama: form.nama,
                    kelamin: form.kelamin,
                    umur: form.umur,
                    posisi: form.posisi,
                    entry: form.entry,
                    lainnya: this.form.lainnya,
                })
                .then((res) => {
                    this.load();
                    this.updateSubmit = false;
                    this.show = false
                    this.form.id = "";
                    this.form.nama = "";
                    this.form.kelamin = "";
                    this.form.umur = "";
                    this.form.posisi = "";
                    this.form.entry = "";
                    this.form.lainnya = [];
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        del(items) {
            axios.delete("http://localhost:3000/pegawai/" + items.id).then((res) => {
                this.load();
                let index = this.pegawai.indexOf(form.nama);
                this.pegawai.splice(index, 1);
            });
        },
    }
};
</script>