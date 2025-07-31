import { defineStore } from 'pinia'
import {
  getLoginStudentsUsingPost as getLoginStudents,
  logoutUsingPost1 as logout,
} from '@/api/studentsController.ts'
import type { LoginStudentsVO } from '@/api/typings'

interface StudentState {
  token: string | null
  studentInfo: LoginStudentsVO
  isLoading: boolean
}

/**
 * 存储登录用户信息的状态
 */
export const useLoginStudentStore = defineStore('loginStudents', {
  state: (): StudentState => ({
    token: localStorage.getItem('student_token'),
    studentInfo: null,
    isLoading: false,
  }),
  getters: {
    isLogin: (state) => !!state.token,
  },
  actions: {
    setToken(token: string | null, tokenName: string | null) {
      this.token = token
      if (token) {
        localStorage.setItem('student_token', token)
        localStorage.setItem('student_tokenName', tokenName || '')
      } else {
        localStorage.removeItem('student_token')
        localStorage.removeItem('student_tokenName')
      }
    },
    async fetchLoginStudents() {
      if (!this.token) return

      this.isLoading = true
      try {
        const response = await getLoginStudents()
        if (response.data.code === 0 && response.data.data) {
          this.studentInfo = response.data.data
        } else {
          // 令牌无效，清除登录状态
          this.setToken(null, null)
          this.studentInfo = null
        }
      } catch (error) {
        console.error('获取学生信息失败', error)
        this.setToken(null, null)
        this.studentInfo = null
      } finally {
        this.isLoading = false
      }
    },
    async logout() {
      try {
        await logout()
      } catch (error) {
        console.error('登出失败', error)
      } finally {
        this.setToken(null, null)
        this.studentInfo = null
      }
    },
  },
})
