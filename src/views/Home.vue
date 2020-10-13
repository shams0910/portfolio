<template>
<div>
    <section class="text-white bg-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Hello there, <br class="hidden lg:inline-block" />
                    I'm Shams
                </h1>
                <p class="mb-8 leading-relaxed">Software Engineer</p>
                <div class="flex justify-center flex-col">
                    <button class="inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                        Download Resume
                    </button>
                    <button @click="githublink" class="text-white bg-gray-900 border-0 p-2 mt-2 focus:outline-none hover:bg-gray-800 rounded text-lg">
                        <span class="fa fa-github"></span> Github
                    </button>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="border-8 border-white rounded-full shadow-2xl" alt="hero" src="https://portfolio-shams.s3.us-east-2.amazonaws.com/shams.jpg" />
            </div>
        </div>
    </section>
    <section class="text-gray-700 body-font min-h-screen flex items-center">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img class="object-cover object-center rounded" alt="hero" src="https://portfolio-shams.s3.us-east-2.amazonaws.com/model.png" />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    More about me
                </h1>
                <p class="mb-8 leading-relaxed">
                    Hello, I am Shamsiddin Parpiev, Python developer with primary
                    interest on Machine Learning and Deep Learning. I like to build
                    software products mainly to healthcare and education industries. I
                    am also passionate about Math and Physics.
                    <br />
                    Here are some of my skills:
                </p>
                <div class="flex justify-center flex-wrap">
                    <p v-for="skill in skills" :key="skill" class="inline-flex m-1 text-white bg-gray-700 border-0 py-2 px-4 focus:outline-none rounded-full">
                        {{ skill }}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="text-white bg-gray-700 body-font min-h-screen">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="text-2xl font-medium title-font tracking-widest">
                    MY PORTFOLIO
                </h1>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/2" v-for="project in projects" :key="project.title">
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" :src="project.image" />
                        <div class="flex-grow sm:pl-8">
                            <h2 class="title-font font-medium text-lg">
                                {{ project.title }}
                            </h2>
                            <h3 class="text-gray-500 mb-3">Role: {{ project.role }}</h3>
                            <p class="mb-4">
                                {{ project.description }}
                            </p>
                            <a class="text-indigo-200 inline-flex items-center hover:text-indigo-300" target="_blank" style="cursor: pointer" :href="`${project.link}`">Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="text-gray-700 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
            <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" style="min-height: 300px">
                <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312776.97976712295!2d20.781009198346794!3d52.233026860140804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1602255429262!5m2!1sen!2spl" style="filter: grayscale(1) contrast(1.2) opacity(0.4)"></iframe>
                <div class="bg-white relative flex flex-wrap py-6">
                    <div class="px-6 mt-4 lg:mt-0">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">
                            EMAIL
                        </h2>
                        <a class="text-indigo-500 leading-relaxed">shamsiddin2000.09@gmail.com</a>
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                            PHONE
                        </h2>
                        <p class="leading-relaxed">+48 792 962 084</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Contact me
                </h2>

                <input v-model="message.name" class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="text" />

                <input v-model="message.subject" class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Subject" type="text" />
                <input v-model="message.email" class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
                <textarea v-model="message.message" class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
                <button @click="sendEmail" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Send message
                </button>
            </div>
        </div>
    </section>

    <footer class="text-gray-700 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
                Find me in
            </a>

            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-500 fa fa-facebook ml-2" style="cursor: pointer" target="_blank" href="https://www.facebook.com/parpiev.shamsiddin">
                </a>

                <a class="text-gray-500 fa fa-instagram ml-2" style="cursor: pointer" target="_blank" href="https://www.instagram.com/shams0910/">
                </a>
                <a class="text-gray-500 fa fa-whatsapp ml-2" style="cursor: pointer" target="_blank" href="https://wa.me/48792962084">
                </a>
                <a class="text-gray-500 fa fa-telegram ml-2" style="cursor: pointer" target="_blank" href="https://t.me/Shamsiddin_Parpiev">
                </a>
            </span>
            <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                © 2020 tailblocks
            </p>
        </div>
    </footer>
</div>
</template>

<script>
// @ is an alias to /src
// import http from "../http-common";
// import axios from "axios";

import socratus from "../assets/socratus.jpg";
export default {
    name: "Home",
    components: {},
    data() {
        return {
            message: {
                name: null,
                subject: null,
                message: null,
                email: null,
            },
            defaultmsg: {
                name: null,
                subject: null,
                message: null,
                email: null,
            },
            skills: [
                "Python",
                "Django",
                "PosgreSQL",
                "VueJS/Vuetify/Vuex",
                "Seaborn/Matplotlib",
                "Numpy/Pandas",
                "Scikit-learn",
            ],
            projects: [{
                image: socratus,
                title: "Socratus",
                role: "Frond-end Developer, Database architecture",
                link: "socratus.pl",
                description: "Socratus - software platform for school management. It is a team project, which I did with my friends. STACK: VueJS, Vuetify, PostgreSQL, NodeJS, Flutter",
            }, ],
        };
    },
    methods: {
        githublink() {
            window.open("https://github.com/shams0910", "_blank");
        },
        dowloadresume() {
            window.open("https://github.com/shams0910", "_blank");
        },

        sendEmail() {
            var finalmsg = "";
            for (var i in this.message) {
                if (this.message[i] == "" || this.message[i] == null) {
                    alert(`Please fill up the field '${i}'`);
                    return;
                }
                finalmsg += `${i}: ${this.message[i]}    `;
            }
            const Http = new XMLHttpRequest();
            Http.open(
                "POST",
                `https://api.telegram.org/bot1325955696:AAEEalx3-BQh-dPX9cxCyjOud3XKO8HQT-M/sendMessage?chat_id=236140339&text=${finalmsg}`
            );
            Http.send();
            Http.onreadystatechange = () => {
                if (Http.status == 200 && Http.readyState == XMLHttpRequest.DONE) {
                    alert("I`ll get back to you soon");
                    this.message = Object.assign({}, this.defaultmsg);
                }
            };
        },
    },
};
</script>

<style lang="scoped">
</style>
