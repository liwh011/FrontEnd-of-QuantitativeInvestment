<template>
    <!-- 全局页面顶端的导航条 -->
    <a-layout-header class="header">
        <a-menu
            :style="{ lineHeight: '64px' }"
            class="remove-border"
            v-model="current"
            mode="horizontal"
            theme="dark"
        >
            <a-menu-item key="main">
                <router-link to="/">主页</router-link>
            </a-menu-item>
            <a-menu-item key="account_book">
                <router-link to="/account_book">记账本</router-link>
            </a-menu-item>

            <!-- 右上角部分,如果没有登录就显示登录和注册按钮,登录了就显示用户名 -->
            <template v-if="!isLoggedIn()">
                <a-menu-item class="right" key="signup">
                    <router-link to="/signup">注册</router-link>
                </a-menu-item>
                <a-menu-item class="right" key="login">
                    <router-link to="/login">登录</router-link>
                </a-menu-item>
            </template>
            <template v-else>
                <a-menu-item class="right">
                    <router-link to="/user">XXX用户</router-link>
                </a-menu-item>
            </template>
        </a-menu>
    </a-layout-header>
</template>

<script>
import { isLoggedIn } from '../common/auth';
export default {
    name: 'TopNavBar',
    props: ['currentTab'],
    data () {
        return {
            current: [this.currentTab],
            isLoggedIn,
        };
    },
};
</script>

<style scoped>
.header {
    box-shadow: 0 2px 8px #f0f1f2;
    height: auto;
    /* border-bottom: 2px solid #000; */
    background-color: #001529;
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
