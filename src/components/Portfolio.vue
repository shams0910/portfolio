<template>
  <section class="text-white bg-gray-700 body-font min-h-screen">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font tracking-widest">
          MY PORTFOLIO
        </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="p-4 mt-2 lg:w-1/2"
          v-for="project in projects"
          :key="project.title"
        >
          <div
            class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
          >
            <img
              alt="team"
              class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              :src="project.image"
            />
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg">
                {{ project.title }}
              </h2>
              <h3 class="text-gray-500 mb-3">Roles: {{ project.role }}</h3>
              <p class="mb-4">
                {{ project.description }}
              </p>
              <a
                class="text-indigo-200 inline-flex items-center hover:text-indigo-300"
                target="_blank"
                style="cursor: pointer"
                :href="`${project.link}`"
                >Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import socratus from "../assets/socratus.jpg";
import agro from "@/assets/agro_logo.png";
import moviestore from "@/assets/walter_white.png";
export default {
  data() {
    return {
      projects: [
        {
          image: agro,
          title: "AgroMoninoring",
          role: "Backend, Software Architect",
          link: "https://info.agrm.uz/",
          description:
            "CMS software made for the Administration of Qashqadaryo Region, Uzbekistan, to analyze, control and manage agricultural processes of the different types of crops in government lands.",
        },
        {
          image: socratus,
          title: "Socratus",
          role: "Front-end Developer, Database architecture",
          link: "https://www.facebook.com/socratus.platform",
          description:
            "Socratus - CMS software platform for elementary/high school management. ",
        },
        {
          image: moviestore,
          title: "MovieStore",
          role: "Backend Development",
          link: "https://documenter.getpostman.com/view/14428637/TzRLkqB8",
          description:
            "MovieStore is an open source movie api, containing information about over 1 million movies, tv series and shows. The database was built from the famous IMDB dataset ",
        },
      ],
    };
  },
};
</script>