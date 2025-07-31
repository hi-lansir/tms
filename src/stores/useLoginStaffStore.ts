import { defineStore } from 'pinia'
import {
  getLoginStaffUsingPost as getLoginStaff,
  logoutUsingPost as logout,
} from '@/api/staffController'
import type { LoginStaffVO } from '@/api/typings'

interface StaffState {
  token: string | null
  staffInfo: LoginStaffVO | null
  isLoading: boolean
}

export const useLoginStaffStore = defineStore('loginStaff', {
  state: (): StaffState => ({
    token: localStorage.getItem('staff_token'),
    staffInfo: null,
    isLoading: false,
  }),
  getters: {
    isLogin: (state) => !!state.token,
  },
  actions: {
    setToken(token: string | null, tokenName: string | null) {
      this.token = token
      if (token) {
        localStorage.setItem('staff_token', token)
        localStorage.setItem('staff_tokenName', tokenName || '')
      } else {
        localStorage.removeItem('staff_token')
        localStorage.removeItem('staff_tokenName')
      }
    },
    async fetchLoginStaff() {
      if (!this.token) return

      this.isLoading = true
      try {
        const response = await getLoginStaff()
        if (response.data.code === 0 && response.data.data) {
          this.staffInfo = response.data.data
        } else {
          // 令牌无效，清除登录状态
          this.setToken(null, null)
          this.staffInfo = null
        }
      } catch (error) {
        console.error('获取教职工信息失败', error)
        this.setToken(null, null)
        this.staffInfo = null
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
        this.staffInfo = null
      }
    },
  },
})
