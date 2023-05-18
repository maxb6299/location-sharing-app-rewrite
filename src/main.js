import { createApp } from "vue";
import App from "./App.vue";

import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);
app
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBD0dirUoiHMG-LiLDqJ4-ZloDzV1DueKg",
      // language: 'de',
    },
  })
  .mount("#app");
