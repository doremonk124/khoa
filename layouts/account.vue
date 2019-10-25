<template>
    <div>
        <mainNavbar/>
        <div class="page-content">
            <mainSidebar/>
            <div class="content-wrapper">
                <nuxt/>
                <mainFooter/>
            </div>
        </div>
    </div>
</template>


<script>

    import mainFooter from '~/components/partials/footer.vue'
    import mainSidebar from '~/components/partials/sidebar.vue'
    import mainNavbar from '~/components/partials/navbar.vue'

    export default {
        middleware: 'auth',
        components: {
            mainFooter, mainSidebar, mainNavbar
        },
        mounted() {
            App.initBeforeLoad();
            App.initCore();

            // When page is fully loaded
            window.addEventListener('load', function () {
                Custom.init();
                App.initAfterLoad();
            });
        },

        data() {
            if(localStorage.getItem('data') && !sessionStorage.getItem('data')) this.$store.dispatch('account/user/createSession')
            // if (JSON.parse(sessionStorage.getItem('data')).location_id) this.$store.dispatch('general/account/getLocationAccount')
            return {
            }
        },
    }
</script>
