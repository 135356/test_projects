<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        },
        created() {
            this.$An_link.this_(this); //An2_Link全局引入this
            this.$An_data.this_(this); //An2_Data全局引入this
        },
        watch: {},
        destroyed() {
        }
    }
</script>

<style lang="scss">
    @import '../static/css/initialize.css';

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
