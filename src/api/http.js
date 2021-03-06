import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';
// axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.timeout = 5000;

// 接口请求拦截
axios.interceptors.request.use(
    config => {
        config.headers = {}; // 设置响应头部
        return config;
    },
    error => {
        return Promise.error(error);
    }
);

// 接口响应拦截
axios.interceptors.response.use(
    response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    error => {
        return Promise.reject(error.response);
    }
);

// 封装get
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

// 封装post
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
