import store from './storage';
import router from '../router';
import { Login as LoginApi } from '../api/api';

/**
 * 在local storage存下token
 * @param  {string} token
 */
function setToken (token) {
    store.commit('setToken', token);
}

/**
 * 从local storage获取token
 * @returns {string} token
 */
export function getToken () {
    return store.getters.token;
}

/**
 * 验证是否登录
 * @returns {boolean} 是否已经登录
 */
export function isLoggedIn () {
    return Boolean(getToken());
}

/**
 * 用户登录
 * @param  {string} username 用户名
 * @param  {string} password 密码
 */
export async function Login (username, password) {
    const data = await LoginApi(username, password);
    const token = data.token;
    if (token) {
        setToken(token);
    }
}

/**
 * 清除本地存储的token
 */
export function ClearToken () {
    store.commit('ResetToken');
}

/**
 * 重定向到登录页面
 */
export function RedirectToLogin () {
    router.push({ name: 'Login' });
}
