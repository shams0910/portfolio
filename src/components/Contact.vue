<template>
  <section class="text-gray-700 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        style="min-height: 300px"
      >
        <iframe
          width="100%"
          height="100%"
          class="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312776.97976712295!2d20.781009198346794!3d52.233026860140804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1602255429262!5m2!1sen!2spl"
          style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
        ></iframe>
        <div class="bg-white relative flex flex-wrap py-6">
          <div class="px-6 mt-4 lg:mt-0">
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm"
            >
              EMAIL
            </h2>
            <a class="text-indigo-500 leading-relaxed">me@shamsiddin.xyz</a>
          </div>
        </div>
      </div>
      <div
        class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Contact me
        </h2>

        <input
          v-model="message.name"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          placeholder="Name"
          type="text"
        />

        <input
          v-model="message.subject"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          placeholder="Subject"
          type="text"
        />
        <input
          v-model="message.email"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          placeholder="Email"
          type="email"
        />
        <textarea
          v-model="message.message"
          class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
          placeholder="Message"
        ></textarea>
        <button
          @click="sendEmail"
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Send message
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
    };
  },
  methods: {
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