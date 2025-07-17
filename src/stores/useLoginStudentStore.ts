import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  getLoginStudentsUsingPost as getLoginStudents,
  logoutUsingPost1 as logout,
} from '@/api/studentsController.ts'

/**
 * 存储登录用户信息的状态
 */
export const useLoginStudentStore = defineStore('loginStudents', () => {
  const loginStudents = ref<API.LoginStudentsVO>({
    student_number: '空学号',
  })

  const token = ref<string>('') // 新增 Token 状态

  /**
   * 远程获取登录用户信息
   */
  async function fetchLoginStudents() {
    // 先从本地存储恢复token
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      token.value = storedToken
    }

    // 只有token存在时才请求用户信息
    if (token.value) {
      const res = await getLoginStudents()
      if (res.data.code === 0 && res.data.data) {
        loginStudents.value = res.data.data
      } else {
        // 令牌无效，清除登录状态
        clearToken()
      }
    }
  }

  function setToken(newToken: string) {
    // 新增 Token 设置方法
    token.value = newToken
    localStorage.setItem('token', newToken)
  }

  function clearToken() {
    // 新增退出清理方法
    token.value = ''
    localStorage.removeItem('token')
  }

  /**
   * 设置登录用户
   * @param newLoginStudents
   */
  function setLoginStudents(newLoginStudents: any) {
    loginStudents.value = newLoginStudents
  }

  /**
   * 退出登录
   */
  async function logoutLoginStudents() {
    const res = await logout()
    if (res.data.code === 0) {
      loginStudents.value = {
        student_number: '空学号',
      }
      clearToken()
      return {
        success: true,
        message: '退出登录成功',
      }
    } else {
      return {
        success: false,
        message: '退出登录失败',
      }
    }
  }
  return {
    loginStudents,
    setLoginStudents,
    fetchLoginStudents,
    token,
    setToken,
    clearToken,
    logoutLoginStudents,
  }
})
