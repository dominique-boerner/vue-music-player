import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPause,
  faRepeat,
  faHome,
  faMusic,
  faSliders,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const icons = [
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPause,
  faRepeat,
  faHome,
  faMusic,
  faSliders,
  faUpload,
];

icons.forEach((icon) => library.add(icon));

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
