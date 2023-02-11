import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import AlertIcon from "vue-ionicons/dist/ios-alert.vue";

{
  AlertIcon;
}

const app = createApp(App);

const state = {
    someValue: 'Detta är den centrala platsen för information',
    someOtherValue: 'Vi kan ha massor av värden i detta objekt'
}
const store = Vuex.createStore(state);
app.use(store);
app.use(router);

app.mount("#app");
import "bootstrap/dist/js/bootstrap.bundle.js";
