<template>
    <!-- 全局页面顶端的导航条 -->
    <a-layout-header class="header">
        <a-menu
            :style="{ lineHeight: '64px' }"
            class="remove-border"
            v-model:selectedKeys="current"
            mode="horizontal"
            theme="dark"
        >
            <a-menu-item key="main">
                <a href="/">主页</a>
            </a-menu-item>
            <a-menu-item key="account_book">
                <a href="/account_book">记账本</a>
            </a-menu-item>
            <a-menu-item class="right" key="signup">
                <a href="/signup">注册</a>
            </a-menu-item>
            <a-menu-item class="right" key="login">
                <a href="/login">登录</a>
            </a-menu-item>
        </a-menu>
    </a-layout-header>
</template>



<script>
export default {
    name: "TopNavBar",
    props: ["currentTab"],
    data() {
        return {
            current: [this.currentTab],
        };
    },
};
</script>



<style scoped>
.header {
    box-shadow: 0 2px 8px #f0f1f2;
    height: auto;
    /* border-bottom: 2px solid #000; */
    background-color: #001529;;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
}

.remove-border {
    border: none;
}

.left {
    float: left;
}

.right {
    float: right;
}
</style>
