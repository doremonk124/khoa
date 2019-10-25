<template>
  <div class="page-content">
    <nuxt />
  </div>
</template>

<script>
    export default {
        mounted() {
            App.initBeforeLoad();
            App.initCore();

            // When page is fully loaded
            window.addEventListener('load', function () {
                Custom.init();
                App.initAfterLoad();
            });
        }
    }
</script>

<style>
    .page-content {
        min-height: 80vh;
    }
</style>
