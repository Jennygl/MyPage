<template>
  <div id="grid-container">
    <div id="grid1">
      <h2 class="about-title">Experience</h2>
    </div>

    <div id="grid2">
      <!-- <li v-for="experience in experiences" :key="experience.id">
        <router-link :to="`/${experience.id}`"><h2></h2>{{
          experience.exp
        }}</router-link>
      </li> -->
    </div>

    <div id="grid3">
      <ul v-for="experience in experiences" :key="experience.id">
        <li>
          <h4>{{ experience.exp }}</h4>
          <button v-on:click="show = !show" value="experience.id">
            <ion-icon
              name="chevron-down-outline"
              id="moreInfo"
              alt="more info"
            ></ion-icon>
          </button>
          <transition name="fade">
            <span v-if="show">
              {{ experience.place }}, {{ experience.year }}
            </span></transition
          >
        </li>
      </ul>
    </div>

    <div id="grid4">
      <ul id="courses">
        <li>
          <h3>
            Innan min LIA börjar kommer jag att ha genomfört följande kurser:
          </h3>
        </li>
        <li>HTML & CSS</li>
        <li>Native Javascript (med bland annat API-hantering)</li>
        <li>UX- & UI-design (Figma, WCAG)</li>
        <li>Javascript med ramverk (Vue)</li>
        <li>Agil utveckling</li>
        <li>Fullstackutveckling (React)</li>
        <li>
          <RouterLink to="/code">
            <ion-icon name="code-slash-outline" id="codeIcon"></ion-icon>
          </RouterLink>
        </li>
        <li></li>
      </ul>
    </div>
  </div>

  <!-- <div class="grid-container">
    <div class="grid1">Experience</div>
    <div class="grid2">Experience</div>

    <div class="grid3" v-for="experience in experiences" :key="experience.id">
      <div class="card" style="width: 18rem">
        <h3 class="card-title" @click="moreInfo">{{ experience.exp }}</h3>

        <p class="card-text">{{ experience.place }}, {{ experience.year }}</p>
      </div>
    </div>

    <div class="grid4">Experience</div>
  </div> -->
</template>

<style>
body {
  background-color: rgb(231, 221, 249);
}
/* @media (min-width: 1024px) { */
#grid-container {
  display: grid;
  grid-template-rows: 25vh auto auto;
  grid-template-columns: 40vw 30vw;
  grid-template-areas:
    "grid1 grid2"
    "grid3 grid4";
}
@media (max-width: 900px) {
  #grid-container {
    display: grid;
    grid-template-rows: 20vh auto;
    grid-template-columns: 80vw;
    grid-template-areas:
      "grid1"
      "grid3"
      "grid4";
  }
}

#grid1 {
  display: grid;
  grid-area: grid1;
}
#grid2 {
  display: grid;
  grid-area: grid2;
}

#grid3 {
  display: grid;
  grid-area: grid3;
}
#grid4 {
  display: grid;
  grid-area: grid4;
}

#grid5 {
  display: grid;
  grid-area: grid5;
}
#codeIcon {
  font-size: 2em;
}
/* More info button */
button {
  border: none;
  background-color: rgb(231, 221, 249);
}
ul {
  list-style: none;
  padding-bottom: 0;
}

li {
  padding-bottom: 5px;
}

#courses {
  color: blue;
}

.title {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 4vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      experiences: [],
      show: false,
    };
  },
  mounted() {
    axios
      .get("experience.json")
      .then((response) => (this.experiences = response.data));
  },
};

// axios
//   .get("experience.json")
//   .then((response) => {
//     const filteredData = response.data.filter(
//       (item) => item.category === "edu"
//     );
//     return filteredData
//     // console.log(filteredData);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//?filter[$and][][name]=Iphone&filter[$and][][name]=Samsung
</script>
