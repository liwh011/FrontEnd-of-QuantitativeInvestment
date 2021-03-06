import axios from 'axios';
import Vue from 'vue';
import { isLoggedIn, getToken, ClearToken, RedirectToLogin } from '../common/auth';

axios.defaults.baseURL = 'http://localhost:5000/';
// axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.timeout = 5000;

// 接口请求拦截
axios.interceptors.request.use(
    config => {
        if (isLoggedIn()) { config.headers.Token = getToken(); };
        return config;
    },
    error => {
        return Promise.error(error);
    }
);

// 接口响应拦截
axios.interceptors.response.use(
    // 2XX开头的状态码
    response => {
        return Promise.resolve(response);
        // if (response.status === 200) {
        //     return Promise.resolve(response);
        // } else {
        //     return Promise.reject(response);
        // }
    },
    // 其他状态码
    error => {
        // token过期,将清除过期token,并重定向到登陆页面
        if (error.response.status === 401) {
            ClearToken();
            RedirectToLogin();
        }
        const errMsg = error.response.data.msg || error.response.status;
        Vue.prototype.$message.error(errMsg, 5);
        return Promise.reject(error.response);
    }
);

/**
 * 发送Http GET请求
 * @param  {string} url 接口网址
 * @param  {object} params url参数
 */
export function get (url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
    });
}

/**
 * 发送Http POST请求
 * @param  {string} url 接口网址
 * @param  {object} params 请求参数
 */
export function post (url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            });
    });
}
