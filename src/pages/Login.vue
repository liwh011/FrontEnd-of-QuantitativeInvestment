<template>
    <page-with-navbar-template currentTab="login">
        <template #content>
            <a-form-model
                ref="loginForm"
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-form-model-item
                    ref="username"
                    label="用户名"
                    prop="username"
                >
                    <a-input v-model="form.username" />
                </a-form-model-item>
                <a-form-model-item ref="password" label="密码" prop="password">
                    <a-input v-model="form.password" />
                </a-form-model-item>
            </a-form-model>
            <a-button type="primary" @click="onLogin">登录</a-button>
            <a-button>注册</a-button>
        </template>
    </page-with-navbar-template>
</template>

<script>
import PageWithNavbarTemplate from '../components/PageWithNavbarTemplate.vue';
import { login } from '../common/auth';
export default {
    name: 'AccountBook',
    components: {
        PageWithNavbarTemplate,
    },
    data () {
        return {
            labelCol: { span: 2 },
            wrapperCol: { span: 22 },
            other: '',
            form: {
                username: '',
                password: '',
            },
            rules: {
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur',
                    },
                    {
                        min: 6,
                        max: 14,
                        message: '长度应为6~14个字符之间。',
                        trigger: 'blur',
                    },
                ],
                username: [
                    {
                        required: true,
                        message: '请输入用户名。',
                        trigger: 'blur',
                    },
                    {
                        max: 14,
                        min: 6,
                        message: '长度应为6~14个字符之间。',
                        trigger: 'blur',
                    },
                ],
            },
        };
    },
    methods: {
        onLogin () {
            const form = this.form;
            login(form.username, form.password).then((data) => {
                this.$message.success('登录成功！');
                console.log(this.$route);
                // 重定向到之前访问的页面
                this.$router.push({ path: this.$route.query.redirect || '/' });
            });
        },
    },
};
</script>
