export default {
    state: {
        language: null,
        // dark:"system"
    },
    mutations: {
        changeLocale: (state, newLanguage) => state.language = newLanguage
    },
    getters: {
        language: state => state.language
    }
}