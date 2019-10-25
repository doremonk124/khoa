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

    async login ({ commit }, {data}) {
        var result = {};

        await axios.post('https://core0817.herokuapp.com/api/login',
            {
                email: data.data_post.email,
                password: data.data_post.password
            }).then((response) => {
            if (response.data.success === true) {
                result = 'success'
                if (data.save) {
                    if (data.save[0] === 'true') {
                        localStorage.setItem('data', JSON.stringify(response.data.data));
                        localStorage.setItem('token', response.data.data.token);
                    }
                } else {
                    sessionStorage.setItem('data', JSON.stringify(response.data.data));
                    sessionStorage.setItem('token', response.data.data.token);
                }
            } else {
                commit('SET_ALERT', {type: 'error', content : response.data.msg })
            }
        }).catch((error) => {
            commit('SET_ALERT', {type: 'error', content : error })
        });
        return result;
    },

    async logout ({ commit }) {
        localStorage.removeItem('data');
        localStorage.removeItem('token');
        localStorage.removeItem('locations');
        sessionStorage.removeItem('data');
        sessionStorage.removeItem('token');
    },

    async changeStatus ({ commit}, data) {
        let result = data;
        await axios.put(process.env.baseUrlAPI +'/items/toggle', {id : data.list_ids, value : data.status}).then((res) => {
        }).catch((error) => {
            console.log(error)
        })
        return result
    },

    async getItems ({ commit }, data) {
        let result;
        await axios.get(process.env.baseUrlAPI +'/items', {params : data.data}).then((res) => {
            return res.data.data
        }).then((res) => {
            result = res
        }).catch((error) => {
            commit('SET_ALERT', {type: 'error', content: error })
        });
        return result
    },

    async getItem ({ commit }, data) {
        let result;
        await axios.get(process.env.baseUrlAPI +'/items/' + data.data).then((res) => {
            return res.data.data
        }).then((res) => {
            result = res
        }).catch((error) => {
            commit('SET_ALERT', {type: 'error', content: error })
        });
        return result
    },

    async deleteItems ({ commit}, data) {
        let result = data;
        await axios.delete(process.env.baseUrlAPI +'/items/truncate', { id : data.list_ids }).then((res) => {
        }).catch((error) => {
            console.log(error)
        })
        return result
    },

    async add ({commit}, data) {
        return data
    },

    async edit ({commit}, data) {
        return data
    },

    async getLocations ({commit}, data) {

    },

    async createSession () {
        sessionStorage.setItem('data', localStorage.getItem('data'));
        sessionStorage.setItem('token', localStorage.getItem('token'));
    },

}
