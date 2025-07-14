import axios from 'axios'
import { message } from 'ant-design-vue'

// 创建 Axios 实例
const myAxios = axios.create({
  // baseURL: "",
  baseURL: 'http://192.168.10.115:8081/api',
  timeout: 86400,
  withCredentials: true,
})

// 全局请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// 全局响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    const { data } = response
    // 未登录
    if (data.code === 40100) {
      localStorage.removeItem('token')
      // 不是获取学生信息的请求，并且学生目前不是已经在学生登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes('student/get/login') &&
        !window.location.pathname.includes('/student/login')
      ) {
        message.warning('请先登录')
        window.location.href = `/student/login?redirect=${window.location.href}`
      }
    }
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default myAxios
