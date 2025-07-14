import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginStudents } from '@/api/studentsController.ts'

/**
 * 存储登录用户信息的状态
 */
export const useLoginStudentStore = defineStore('loginStudents', () => {
  const loginStudents= ref<API.LoginStudentsVO>({
    student_number: '空学号',
  })

  const token = ref<string>(''); // 新增 Token 状态

  /**
   * 远程获取登录用户信息
   */
  async function fetchLoginStudents() {
    const res = await getLoginStudents()
    if (res.data.code === 0 && res.data.data) {
      loginStudents.value = res.data.data
      token.value = localStorage.getItem('token') || ''
    }
  }

  function setToken(newToken: string) { // 新增 Token 设置方法
    token.value = newToken;
    localStorage.setItem("satoken", newToken);
  }

  function clearToken() { // 新增退出清理方法
    token.value = '';
    localStorage.removeItem("satoken");
  }

  /**
   * 设置登录用户
   * @param newLoginStudents
   */
  function setLoginStudents(newLoginStudents: any) {
    loginStudents.value = newLoginStudents
  }

  return { loginStudents, setLoginStudents, fetchLoginStudents,  token, setToken, clearToken }
})
