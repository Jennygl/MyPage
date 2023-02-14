<script setup>
import ContactOption from "./ContactOption.vue";
import SubmitButton from "./SubmitButton.vue";
</script>

<template>
  <div id="grid-container-contact">
    <div id="gridHeader">
      <h2 class="page-title">Contact</h2>
    </div>

    <div id="gridEmpty"></div>

    <div id="gridContact">
      <ContactOption></ContactOption>
    </div>
    <!-- Jag behövde peppa mig själv lite :) -->
    <div id="grid4">
      <p>Tell pontential employers how amazing Jenny is!</p>
      <p>Your name</p>
      <input type="text" label="Your email" v-model="newName" />
      <p>Your message</p>
      <textarea v-model="newAwesome" rows="7" cols="72">hej</textarea>

      <SubmitButton
        @thank-you="feedbackSent"
        class="sendButton"
        @click="soAwesome"
        type="button"
        value="Tell them"
      ></SubmitButton>
      <p>Here it is:</p>

      <p>
        <span>{{ initials }} says: </span>{{ awesome }}
      </p>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) { */
#grid-container-contact {
  display: grid;
  padding-left: 2vw;
  grid-template-rows: 25vh auto;
  grid-template-columns: 40vw 40vw;
  grid-template-areas:
    "grid1 grid2"
    "grid3 grid4";
}

#gridHeader {
  display: grid;
  grid-area: grid1;
}
#gridEmpty {
  display: grid;
  grid-area: grid2;
}

#gridContact {
  display: grid;
  grid-area: grid3;
}
#gridForm {
  display: grid;
  grid-area: grid4;
}

ul {
  list-style: none;
}
</style>

<script>
export default {
  computed: {
    initials() {
      return this.newName
        .split(" ")
        .map((newName) => newName.charAt(0))
        .join(".");
    },
  },
  data() {
    return {
      awesome: null,
      emptyName: null,
      newAwesome: "",
      name: "",
      newName: "",
    };
  },
  //   watch: {
  //     name(name) {
  //       if (name.includes("")) {
  //         this.soAwesome();
  //       }
  //     },
  //   },

  methods: {
    soAwesome() {
      `${this.newName}`, (this.awesome = `${this.newAwesome}`);
    },

    feedbackSent() {
      console.log("Feedback har skickats.");
    },
  },
  components: { SubmitButton },
};
</script>
