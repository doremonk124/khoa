import Vue from 'vue'
import axios from 'axios'
import * as filter_input from '~/input/filter/master'
import {empty} from "~/.nuxt/utils";

// Vue.config.devtools=false
// Vue.config.productionTip = false

Vue.mixin({
    mounted: function() {
        // axios.defaults.headers['common'][['authorization']] = 'bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzNzIzYTY5YS0wZWUzLTQ4NDktYjZmMy1mYzMzYjk1NzBiYTkiLCJpYXQiOjE1NzEwNDE3OTd9.ApZyPiZchUqs_JUlbDeBehVqK4k235Nal6LNofq3Kh8'
        if (sessionStorage.getItem('token')) {
            axios.defaults.headers['common'][['authorization']] = 'bearer ' + sessionStorage.getItem('token')
        }
    },
    methods : {
        async sendData(path, data_post) {
            let result = {}
            let data = {}
            let string = path.slice(0).split("/").join(" ")
            let name_action = string.toLowerCase().split(' ').map(function(Word) {
                return Word[0].toUpperCase() + Word.substr(1);
            }).join('')
            let validate = filter_input[name_action].data().list_validate

            await this.$store.dispatch('validate/validate', { data : {list_validate: validate, data_post : data_post} } ).then((res) => {
                if (Object.entries(res).length === 0 && res.constructor === Object) {
                    result = 'success'
                } else {
                    result = res
                }
            })
            return result
        },

        async saveData(path, data_post) {
            var result
            await this.$store.dispatch(path, { data : {data_post : data_post} } ).then((res) => {
                result = res
            })
            return result
        },

        setValueInput(list_input, value) {
            list_input.forEach(doc_master => {
                doc_master.attributes.value = value[doc_master.attributes.name]
            })
        },

        removeAlert(store) {
            this.$store.commit(store + '/SET_ALERT', '');
        },
    }
});
