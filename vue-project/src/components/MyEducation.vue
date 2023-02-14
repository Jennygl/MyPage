<template>
  <div id="grid-container">
    <div id="grid1">
      <h2 class="page-title">Experience</h2>
    </div>

    <div id="grid2"></div>
    <!-- Använder resultat från axios -->
    <div id="grid3">
      <ul v-for="experience in experiences" :key="experience.id">
        <li>
          <h3>{{ experience.exp }}</h3>
          <button v-on:click="show = !show" value="experience.id">
            <ion-icon
              name="chevron-down-outline"
              id="moreInfo"
              alt="more info"
            ></ion-icon>
          </button>
          <transition name="fade">
            <span v-if="show">
              {{ experience.place }}
              , {{ experience.year }}
            </span></transition
          >
        </li>
      </ul>
    </div>

    <div id="grid4">
      <ul id="courses">
        <li>
          <!-- Adressparameter -->
          <router-link to="/exp/Courses"
            ><h3>
              Innan min LIA börjar kommer jag att ha genomfört följande kurser:
            </h3></router-link
          >
        </li>
        <li>HTML & CSS</li>
        <li>Native Javascript</li>
        <li>UX- & UI-design</li>
        <li>Javascript med ramverk</li>
        <li>Agil utveckling</li>
        <li>Fullstackutveckling</li>
        <li>
          <RouterLink to="/code">
            <ion-icon name="code-slash-outline" id="codeIcon"
              ><MyCode></MyCode
            ></ion-icon>
          </RouterLink>
        </li>
        <li></li>
      </ul>
    </div>
  </div>

  <router-view></router-view>
</template>

<style>
body {
  background-color: rgb(231, 221, 249);
}
/* @media (min-width: 1024px) { */
#grid-container {
  display: grid;
  padding-left: 2vw;
  grid-template-rows: 25vh auto auto;
  grid-template-columns: 40vw 30vw;
  grid-template-areas:
    "grid1 grid2"
    "grid3 grid4";
}

.page-title {
  font-size: 4em;
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
  font-size: 1.5em;
  color: blue;
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

a:link {
  text-decoration: none;
  color: rgb(40, 40, 40);
  font-size: 1.5em;
}
a:visited {
  text-decoration: none;
  color: rgb(40, 40, 40);
}
a:hover {
  text-decoration: none;
  font-style: italic;
}
a:active {
  text-decoration: none;
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
</script>
