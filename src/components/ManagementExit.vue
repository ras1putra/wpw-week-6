<template>
    <div class="m-0 w-full pl-20">
        <div class="m-0 p-4 bg-gray-100">
            <div class="m-4 p-4 bg-white rounded-md shadow-md">
                <div class="flex">
                    <div class="text-2xl font-light text-slate-600">
                        Mantan Pekerja
                    </div>
                </div>
                <div class="pt-8">
                    <div class="p-2 py-4 text-white bg-cyan-500 font-bold grid grid-cols-12 text-center items-center">
                        <div>No.</div>
                        <div class="col-span-2">Nama</div>
                        <div>Jenis Kelamin</div>
                        <div class="col-span-1">Umur</div>
                        <div class="col-span-2">Jabatan Pekerja</div>
                        <div class="col-span-1">Tanggal Masuk</div>
                        <div class="col-span-2">Jaminan Pekerja</div>
                        <div class="col-span-1">Tanggal Keluar</div>
                        <div class="col-span-1">Alasan</div>
                    </div>
                    <div v-if="buangan.length === 0" class="p-2 bg-gray-200 grid grid-cols-12 text-center items-center hover:bg-white">
                        <div class="col-span-12">
                            Belum ada data
                        </div>
                    </div>
                    <div class="p-3 bg-gray-200 grid grid-cols-12 text-center items-center hover:bg-white"
                        v-for="(items, index) in buangan" :key="index">
                        <div class="col-span-1">{{ index + 1 }}</div>
                        <div class="col-span-2 text-left">{{ items.form.nama }}</div>
                        <div class="col-span-1">{{ items.form.kelamin }}</div>
                        <div class="col-span-1">{{ items.form.umur }}</div>
                        <div class="col-span-2">{{ items.form.posisi }}</div>
                        <div class="col-span-1">{{ items.form.entry }}</div>
                        <div class="col-span-2" v-if="items.form.lainnya.length > 0">
                            <ul>
                                <li v-for="(bantuan, index) in items.form.lainnya" :key="index">{{ bantuan }}</li>
                            </ul>
                        </div>
                        <div class="col-span-2" v-else>Tidak ada</div>
                        <div class="col-span-1">{{ items.time }}</div>
                        <div class="col-span-1">{{ items.reason }}</div>
                    </div>
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
            buangan: [],
            perusahaan: "",
            Token: ""
        };
    },
    mounted() {
        if (localStorage.perusahaan) {
            this.perusahaan = localStorage.perusahaan;
        }
        this.load();
    },
    watch: {
        perusahaan(newPerusahaan) {
            localStorage.perusahaan = newPerusahaan;
        }
    },
    methods: {
        load() {
            const theres = localStorage.getItem('authState');
            this.Token = JSON.parse(theres).accessToken;
            const response = axios.get('http://localhost:3000/660/buangan', {
                params: {
                    perusahaan: this.perusahaan
                },
                headers: {
                    Authorization: 'Bearer ' + this.Token
                }
            });
            response
                .then((res) => {
                    this.buangan = res.data;
                    console.log(res.data)
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }
};
</script>
  