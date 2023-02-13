<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <diV class="greetings">
    <header>
      <div class="about">
        <h1 id="h-jenny">Jenny</h1>
        <h3>Lärare som skolar om sig till frontend-utvecklare</h3>
      </div>
      <nav class="right">
        <ul>
          <li>
            <h2>
              <RouterLink to="/experience" @click="scrollToTitle"
                >Experience</RouterLink
              >
            </h2>
          </li>
          <li>
            <h2>
              <RouterLink to="/about" @click="scrollToTitle">About</RouterLink>
            </h2>
          </li>
          <li>
            <h2>
              <RouterLink to="/contact" @click="scrollToTitle"
                >Contact</RouterLink
              >
            </h2>
          </li>
        </ul>
      </nav>
      <div ref="scrollToHere"></div>
    </header>
  </diV>
</template>

<style scoped>
/* .greetings {
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  top: 0px;
} */
header {
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  min-height: 90vh;
  top: 0%;
  background-color: rgb(231, 221, 249);
}
#h-jenny {
  color: black;
  font-weight: 300;
  font-size: 3em;
  top: -10px;
}

.about {
  justify-content: center;
  text-align: left;
  width: 50vw;
  left: 6vw;
  top: 30vh;
  padding-left: 2vw;
}

h3 {
  font-size: 1em;
}

.jImg {
  border-radius: 50%;
  left: 35px;
}

ul {
  list-style-type: none;
  color: grey;
  position: relative;
  padding-top: 6vh;
  padding-bottom: 6vh;
}

.right {
  justify-content: flex-end;
}

a:link {
  text-decoration: none;
  color: rgb(40, 40, 40);
  font-size: 4em;
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

.greetings h1,
.greetings h3 {
  text-align: left;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
<script>
export default {
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    scrollToTitle() {
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
      //   this.$refs["scrollToHere"].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
