<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar";
export default {
    name: "App",
    components: {
        TopNavBar,
    },
};
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* color: #2c3e50; */
    min-height: 100vh;
    /* margin-top: 60px; */
}
</style>
