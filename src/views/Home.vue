<template>
  <div>
    <section class="text-white bg-gray-700 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hello there, <br class="hidden lg:inline-block" />
            I'm Shams
          </h1>
          <p class="mb-8 leading-relaxed">Software Engineer</p>
          <div class="flex justify-center flex-col">
            <a
              href="https://drive.google.com/file/d/16Dd08Jw4-hwsBNsH12ueNjcK_zgrwOTZ/view?usp=sharing"
              target="_blank"
              class="inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Download Resume
            </a>
            <button
              @click="githublink"
              class="text-white bg-gray-900 border-0 p-2 mt-2 focus:outline-none hover:bg-gray-800 rounded text-lg"
            >
              <span class="fa fa-github"></span> Github
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="border-8 border-white rounded-full shadow-2xl"
            alt="hero"
            src="https://portfolio-shams.s3.us-east-2.amazonaws.com/shams.jpg"
          />
        </div>
      </div>
    </section>
    <section class="text-gray-700 body-font min-h-screen flex items-center">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://portfolio-shams.s3.us-east-2.amazonaws.com/model.png"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            More about me
          </h1>
          <p class="mb-8 leading-relaxed">
            Hello, I am Shamsiddin Parpiev. I am Python Developer with 1 year in
            Python/Django and half year in frontend with Vue. To be professional
            at work, write clean and understandable code and design fit software
            architecture are among the most important things for me that I love
            doing.

            <br />
            Here are some of my skills:
          </p>
          <div class="flex justify-center flex-wrap">
            <p
              v-for="skill in skills"
              :key="skill"
              class="inline-flex m-1 text-white bg-gray-700 border-0 py-2 px-4 focus:outline-none rounded-full"
            >
              {{ skill }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Portfolio />
    <Contact />
    <footer class="text-gray-700 body-font">
      <div
        class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
      >
        <a
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-500"
        >
          Find me in
        </a>

        <span
          class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
        >
          <a
            class="text-gray-500 fa fa-facebook ml-2"
            style="cursor: pointer"
            target="_blank"
            href="https://www.facebook.com/parpiev.shamsiddin"
          >
          </a>

          <a
            class="text-gray-500 fa fa-instagram ml-2"
            style="cursor: pointer"
            target="_blank"
            href="https://www.instagram.com/shams0910/"
          >
          </a>
          <a
            class="text-gray-500 fa fa-whatsapp ml-2"
            style="cursor: pointer"
            target="_blank"
            href="https://wa.me/48792962084"
          >
          </a>
          <a
            class="text-gray-500 fa fa-telegram ml-2"
            style="cursor: pointer"
            target="_blank"
            href="https://t.me/Shamsiddin_Parpiev"
          >
          </a>
        </span>
        <p
          class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
        >
          © 2020 tailblocks
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";
import Portfolio from "@/components/Portfolio.vue";
export default {
  name: "Home",
  components: { Contact, Portfolio },
  data() {
    return {
      skills: [
        "Python",
        "Django",
        "PosgreSQL",
        "Docker",
        "AWS Lambda, S3, EC2",
        "VueJS/Vuetify/Vuex",
        "Seaborn/Matplotlib",
        "Numpy/Pandas",
        "Scikit-learn",
      ],
    };
  },
  methods: {
    githublink() {
      window.open("https://github.com/shams0910", "_blank");
    },
    dowloadresume() {
      window.open("https://github.com/shams0910", "_blank");
    },
  },
};
</script>

<style lang="scoped">
</style>
