import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
// store file

Vue.use(Vuex);

// const previousState = localStorage.getItem("kohi-button")
// if (previousState) {
//     localStorage.setItem("kohi-button-settins", { settings: previousState["settings"] });
// }

export default new Vuex.Store({
    modules:{
        settings,
    }
})