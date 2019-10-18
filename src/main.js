import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
import Ionic from  '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';


Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDLluDkfqWS0nAKOuHTH2miZHxsvE0ESxI",
    libraries: "places" // necessary for places input
  }
});
Vue.use(Ionic);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
