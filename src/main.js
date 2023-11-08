import "./set-public-path";
import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import router from "./router";
import store from './store';
import vuetify from './plugins/vuetify';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import Http from './services/http'

Vue.config.productionTip = false;
Vue.use(VueToast);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    created: () => Http.init(),
    render: h => h(App),
    vuetify,
    router,
    store
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
