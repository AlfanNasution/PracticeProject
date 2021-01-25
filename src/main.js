import { createApp } from "vue";

import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);

app.mount("#app");
