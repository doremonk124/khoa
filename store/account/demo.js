import axios from 'axios'

export const state = () => ({
    alert: null,
    filter: null
})

export const mutations = {
    SET_ALERT (state, data) {
        state.alert = data
    },
}

export const actions = {

    async getItems ({ commit }, data) {
        let result;
        await axios.get(process.env.baseUrlAPI +'/items', {params : data.data}).then((res) => {
            // res.data.data.data.forEach(doc => {
            //     doc['text'] = doc.name
            // })
            return res.data.data
        }).then((res) => {
            result = res
        }).catch((error) => {
            commit('SET_ALERT', {type: 'error', content: error })
        });
        return result
    },

    async changeStatus ({ commit}, data) {
        let result = data;
        await axios.put(process.env.baseUrlAPI +'/items/toggle', {id : data.list_ids, value : data.status}).then((res) => {
        }).catch((error) => {
            console.log(error)
        })
        return result
    },

    async deleteItems ({ commit}, data) {
        let result = data;
        await axios.delete(process.env.baseUrlAPI +'/items/truncate', { id : data.list_ids }).then((res) => {
        }).catch((error) => {
            console.log(error)
        })
        return result
    }

}
