import axios from 'axios'
import { message } from 'ant-design-vue'

// 定义常量 - 登录相关路径
const LOGIN_PATHS = {
  STUDENT: '/student/login',
  STAFF: '/staff/login',
  REGISTER: '/register',
}

// 创建 Axios 实例 http://192.168.10.115:8081
const myAxios = axios.create({
  // baseURL: "",
  baseURL: 'http://192.168.10.115:8081/',
  timeout: 86400,
  withCredentials: true,
})
// 全局请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 动态设置 token
    const prefix = window.location.pathname.includes('/staff') ? 'staff' : 'student'

    const token = localStorage.getItem(`${prefix}_token`)
    const tokenName = localStorage.getItem(`${prefix}_tokenName`) || 'token'
    if (token) {
      config.headers[tokenName] = token
      console.log('请求拦截器', config)
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
      // 检查是否是学生或管理员登录相关请求/页面
      // 使用常量检查登录状态
      const isStudentLogin =
        response.request.responseURL.includes('student/get/login') ||
        window.location.pathname.includes(LOGIN_PATHS.STUDENT)
      const isStaffLogin =
        response.request.responseURL.includes('staff/get/login') ||
        window.location.pathname.includes(LOGIN_PATHS.STAFF)
      // 检查是否在注册页面
      const isRegisterPage = window.location.pathname.includes(LOGIN_PATHS.REGISTER)

      // 不在登录和注册页面时才重定向
      if (!isStudentLogin && !isStaffLogin && !isRegisterPage) {
        message.warning('请先登录')
        // 根据当前路径决定重定向到学生还是管理员登录页面
        // 使用常量构建重定向路径
        const redirectPath = window.location.pathname.includes('/staff')
          ? LOGIN_PATHS.STAFF
          : LOGIN_PATHS.STUDENT
        window.location.href = `${redirectPath}?redirect=${window.location.href}`
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
