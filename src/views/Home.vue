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
          <p class="mb-8 leading-relaxed">
            I am Junior Python developer with good knowledge of Django, Django Rest, PostgresSQL, Docker and Celery. Also have elementary knowledge and experience in Redis(as cache), Pandas, Numpy, Web scraping, MongoDB, VueJS and Web sockets.
            Have been programming in Python for more than 1 year. Commercial experience less than half year.
          </p>
          <div class="flex justify-center flex-col">
            <a
              href="https://drive.google.com/file/d/1u7p412zBdXAO6AOxpVf0Jia7vHdCeV_s/view?usp=sharing"
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
          <div>
            <img
                class="border-8 border-white rounded-full shadow-2xl object-contain"
                src="https://drive.google.com/uc?export=view&id=1K9cCJNGzV4XWlYt0uHfq_DNLANRpMhcO"
            />
          </div>

        </div>
      </div>
    </section>
<!--    <section class="text-gray-700 body-font min-h-screen flex items-center">-->
<!--      <div-->
<!--        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"-->
<!--      >-->
<!--        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">-->
<!--          <img-->
<!--            class="object-cover object-center rounded"-->
<!--            alt="hero"-->
<!--            src="https://drive.google.com/uc?export=view&id=1-VGNYwhbKgG2_SqG7CTOO81oX_uTOeWy"-->
<!--          />-->
<!--        </div>-->
<!--        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">-->
<!--          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">-->
<!--            More about me-->
<!--          </h1>-->
<!--          <p class="mb-8 leading-relaxed"></p>-->
<!--          <div class="flex justify-center flex-wrap">-->
<!--            <p-->
<!--              v-for="skill in skills"-->
<!--              :key="skill"-->
<!--              class="inline-flex m-1 text-white bg-gray-700 border-0 py-2 px-4 focus:outline-none rounded-full"-->
<!--            >-->
<!--              {{ skill }}-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <section class="text-gray-800 body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">More about my skills
          <br class="hidden sm:block">With more details
        </h1>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex" v-for="detail in skill_details" :key="detail.skill">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-200 text-indigo-500 mb-4 flex-shrink-0">
              <svg class="h-6 w-6 text-indigo-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{{ detail.skill }}</h2>
              <p class="leading-relaxed text-base">{{detail.description}}</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              </a>
            </div>
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
  components: {
    Contact,
    Portfolio,
  },
  data() {
    return {
      skills: [
        "Python",
        "Django",
        "Celery",
        "PosgreSQL",
        "Docker",
        "AWS Lambda, S3, EC2",
        "VueJS(elementary)",
        "Numpy/Pandas (elementary)",
      ],
      skill_details: [
        {
          skill: 'Python',
          description: 'well familiar with OOP, but there is always something to learn. Know how to use and write decorators, context managers, dataclasses.'
        },
        {
          skill: 'Django',
          description: 'know how migrations work and can write data migrations. Worked often with\n' +
              'middlewares, signals, generic relations, decorators, permissions. Very handful with DjangoORM\n' +
              'and also can write raw SQL queries when needed. Worked with DRF with more than 5 projects,\n' +
              'quite good with serializers. Can write basic tests, and have little experience.'
        },
        {
          skill: 'Docker',
          description: 'quite well in development, know how containers, images, volumes of different types\n' +
              'and networking work. Can write DockerFiles and docker-compose files. I worked with docker for\n' +
              'more that 6-7 projects.'
        },
        {
          skill: 'Celery',
          description: 'have basic knowledge to apply it for problems, mainly used for email and sms\n' +
              'sending. Also twice build web scraper with celery and celery beat, for scheduled web scrapping.'
        },
        {
          skill: 'SQL',
          description: 'quite good in building structured and organized tables for business needs. Can writefrom basic to medium level queries. Had experience building multi tenant SaaS application as\n' +
              'side project'
        },
        {
          skill: 'Flask',
          description: 'elementary knowledge, build 1 small app'
        },
        {
          skill: 'MongoDB',
          description: 'elementary knowledge, build small app, but really interested to further develop\n' +
              'this skill'
        },
      ]
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
