export default {
    namespaced: true,
    state: {
        items: []
    },
    mutations: {
        UPDATE_ITEMS_CART(state, payload) {
            state.items.push(payload)
        }
    }
}
