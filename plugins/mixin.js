import Vue from 'vue'
import axios from 'axios'
Vue.mixin({
    mounted: function(){
        if (sessionStorage.getItem('token')) {
            axios.defaults.headers['common'][['authorization']] = 'bearer '+ sessionStorage.getItem('token')
        }
        Custom.init();
        // When page is fully loaded
        window.addEventListener('load', function () {
            App.initAfterLoad();
        });
    }
});
