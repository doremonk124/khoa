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

    import mainFooter from '~/components/partials/Footer.vue'
    import mainSidebar from '~/components/partials/Sidebar.vue'
    import mainNavbar from '~/components/partials/Navbar.vue'

    export default {
        // middleware: 'auth',
        components: {
            mainFooter, mainSidebar, mainNavbar
        },
        mounted() {
            App.initBeforeLoad();
            App.initCore();

            window.addEventListener('load', function () {
                Dashboard.initComponents();
                Dashboard.initCharts();
            })
        }

        // data() {
        //     if(localStorage.getItem('data') && !sessionStorage.getItem('data')) this.$store.dispatch('createSession')
        //     if (JSON.parse(sessionStorage.getItem('data')).location_id) this.$store.dispatch('general/account/getLocationAccount')
        //     return {
        //     }
        // },
    }
</script>
