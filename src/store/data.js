import axios from 'axios';

export default {
    namespaced: true,
    state: {
        base: [],
        loader: true
    },
    mutations: {
        SET_DATA(state, payload){
            const payloadToArray = Object.values(payload);
            const payloadSlice = payloadToArray.slice(0,8);

            state.base = payloadSlice;
            state.loader = false;
        }
    },
    actions: {
        async getData({ commit }) {
            try {
                let { data } = await axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.VUE_APP_KEY}`);
                commit('SET_DATA', data.photos)
            } catch (e) {
                console.log(e)
            }
        }
    }
}
