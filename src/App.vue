<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <router-view />
        </div>
    </a-config-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
    name: "App",
    components: {},
    data() {
        return {
            locale: zhCN,
        };
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
