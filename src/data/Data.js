import img1 from '../assets/Zee.jpg';
import img2 from '../assets/Indah.jpg';
import img3 from '../assets/Ashel.jpg';
import img4 from '../assets/Flora.jpg';
import img5 from '../assets/Freya.jpg';
import img6 from '../assets/Gracia.jpg';
import img7 from '../assets/Jessi.jpg';
import img8 from '../assets/Shani.jpg';

import laravel from "../assets/laravel.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import html from "../assets/HTML.png"
import css from "../assets/CSS.png"
import vue from "../assets/VueJS.png"
import angular from "../assets/AngularJS.png"
import python from "../assets/Python.png"
import mysql from "../assets/MySQL.png"

export const mentorItems = [
    { id: 1, image: img1, title: "Adel", detail: "Adel adalah seorang pengembang front-end yang berpengalaman dengan fokus pada pembuatan antarmuka pengguna yang responsif dan interaktif.", tools: 'ReactJS, Material UI, Redux' },
    { id: 2, image: img2, title: "Ashel", detail: "Ashel memiliki keahlian dalam membangun aplikasi web menggunakan teknologi terbaru dan kerangka kerja modern.", tools: 'ReactJS, Bootstrap, Redux-Toolkit' },
    { id: 3, image: img3, title: "Azizi", detail: "Azizi adalah seorang programmer yang ahli dalam menggunakan TypeScript dan Redux untuk mengelola keadaan aplikasi yang kompleks.", tools: 'ReactJS, TypeScript, Redux, Bootstrap' },
    { id: 4, image: img4, title: "Flora", detail: "Flora adalah seorang desainer web yang mahir dalam HTML, CSS, dan JavaScript untuk menciptakan halaman web yang menarik dan fungsional.", tools: 'HTML, CSS, JS' },
    { id: 5, image: img5, title: "Freya", detail: "Freya berfokus pada pengembangan aplikasi dengan ReactJS dan menggunakan Context API untuk manajemen keadaan secara efisien.", tools: 'ReactJS, Context API, Tilt.js' },
    { id: 6, image: img6, title: "Gracia", detail: "Gracia adalah seorang full-stack developer yang berpengalaman dengan NodeJS dan MongoDB, serta membangun aplikasi yang skalabel.", tools: 'NodeJS, ReactJS, MongoDB' },
    { id: 7, image: img7, title: "Jessi", detail: "Jessi ahli dalam menggunakan AngularJS dan Material UI untuk membangun aplikasi web yang cepat dan responsif.", tools: 'AngularJS, Material UI' },
    { id: 8, image: img8, title: "Shani", detail: "Shani adalah seorang pengembang front-end yang berpengalaman dalam menggunakan VueJS dan Vuex untuk manajemen keadaan aplikasi.", tools: 'VueJS, Vuex' },
];

export const serviceItems = [
    { id: 1, title: "REACT", desc: "React adalah sebuah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) dalam aplikasi web. React dikembangkan oleh Facebook dan sering digunakan untuk membangun aplikasi web yang dinamis dengan menggunakan komponen-komponen UI yang dapat digunakan kembali", image: react},
    { id: 2, title: "JAVASCRIPT", desc: "JavaScript adalah bahasa pemrograman yang digunakan untuk mengembangkan aplikasi web interaktif. JavaScript sering digunakan untuk menambahkan interaksi dan fungsionalitas dinamis ke halaman web, seperti validasi formulir, animasi, dan pengolahan data.", image: js },
    { id: 3, title: "LARAVEL", desc: "Laravel adalah sebuah framework aplikasi web berbasis PHP yang menggunakan konsep MVC (Model-View-Controller). Laravel menyediakan berbagai fitur dan alat bantu untuk mempercepat pengembangan aplikasi web, termasuk autentikasi pengguna, pengelolaan sesi, dan migrasi database.", image: laravel },
    { id: 4, title: "HTML", desc: "HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat dan mendesain halaman web. HTML digunakan untuk mendefinisikan struktur dan konten sebuah halaman web, seperti teks, gambar, dan hyperlink.", image: html },
    { id: 5, title: "CSS", desc: "CSS (Cascading Style Sheets) adalah bahasa stylesheet yang digunakan untuk mendesain tampilan atau gaya (style) sebuah halaman web. CSS digunakan untuk mengontrol tata letak, warna, jenis huruf, dan tampilan visual lainnya dari elemen-elemen HTML dalam halaman web.", image: css },
    { id: 6, title: "VUE", desc: "Vue.js adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) dalam aplikasi web. Vue.js dirancang untuk menjadi mudah digunakan dan dapat diintegrasikan dengan proyek-proyek yang sudah ada.", image: vue },
    { id: 7, title: "PYTHON", desc: "Python adalah bahasa pemrograman tingkat tinggi yang sering digunakan untuk pengembangan web, pengembangan perangkat lunak, analisis data, dan kecerdasan buatan. Python memiliki sintaks yang mudah dipahami dan kuat, serta memiliki berbagai pustaka dan framework yang mendukung berbagai jenis pengembangan aplikasi.", image: python },
    { id: 8, title: "ANGULAR", desc: "Angular adalah sebuah platform dan framework aplikasi web yang digunakan untuk membangun aplikasi web single-page (SPA). Angular menyediakan alat dan fitur yang kuat untuk membangun aplikasi web yang kompleks dan dinamis dengan menggunakan HTML, CSS, dan JavaScript.", image: angular },
    { id: 9, title: "MYSQL", desc: "MySQL adalah sebuah sistem manajemen basis data relasional (RDBMS) yang banyak digunakan untuk mengelola dan menyimpan data dalam aplikasi web dan perangkat lunak lainnya. MySQL mendukung berbagai jenis operasi database termasuk penyimpanan, pengambilan, penghapusan, dan pembaruan data.", image: mysql }
];