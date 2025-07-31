<template>
  <a-card id="userLoginPage">
    <h2 class="title">学生登录</h2>
    <div class="desc">教学与仿真实训平台</div>
    <a-form :model="formState" name="basic" autocomplete="off" @finish="handleSubmit">
      <a-form-item label="学号" name="student_number" :rules="[{ required: true, message: '请输入学号' }]">
        <a-input v-model:value="formState.student_number" placeholder="请输入学号" />
      </a-form-item>
      <a-form-item label="密码" name="password_hash" :rules="[
        { required: true, message: '请输入密码' },
      ]">
        <a-input-password v-model:value="formState.password_hash" placeholder="请输入密码" />
      </a-form-item>
      <div class="tips">
        没有账号？
        <RouterLink to="/student/register">立即注册</RouterLink>
      </div>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import router from '@/router'
import { useLoginStudentStore } from '@/stores/useLoginStudentStore.ts'
import { studentsLoginUsingPost as studentsLogin, generateCaptchaUsingGet } from '@/api/studentsController.ts' // 用于接受表单输入的值

// 用于接受表单输入的值
const formState = reactive<API.StudentsLoginRequest>({
  student_number: '',
  password_hash: '',
  captcha: '',
  captcha_key: ''
})

const loginStudentStore = useLoginStudentStore()

const handleCaptcha = async () => {
  const res = await generateCaptchaUsingGet()
  if (res.data.code === 0 && res.data.data) {
    console.log(res.data.data)
    formState.captcha_key = res.data.data.captchaKey
    formState.captcha = res.data.data.captchaCode
  } else {
  }
}

// 页面加载时检查登录状态
onMounted(() => {
  const token = loginStudentStore.token;
  if (token) {
    message.info('您已登录，正在跳转到首页...')
    router.push('/student')
  }
  //加载验证码
  handleCaptcha()
})

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: any) => {
  const res = await studentsLogin(values)
  // 登录成功，把登录态保存到全局状态中
  if (res.data.code === 0 && res.data.data) {

    // 新增：从响应中提取 Token 并存储
    const token = res.data.data.token;
    const tokenName = res.data.data.tokenName;
    if (token && tokenName) {
      loginStudentStore.setToken(token, tokenName);
    }

    await loginStudentStore.fetchLoginStudents()
    message.success('登录成功')

    // 处理重定向 - 修复URL解析问题
    const redirectParam = new URLSearchParams(window.location.search).get('redirect') || '/student'
    let redirectPath = redirectParam

    // 如果是完整URL，提取路径部分
    try {
      const url = new URL(redirectParam)
      redirectPath = url.pathname + url.search
      console.log(url, redirectPath)
    } catch (e) {
      // 不是完整URL，直接使用
    }

    // 检查是否为不需要重定向的路径（登录或引导页）
    const excludedPaths = ['/', '/login', '/register'];
    try {
      const parsedUrl = new URL(redirectPath, window.location.origin);
      if (excludedPaths.includes(parsedUrl.pathname)) {
        redirectPath = '/student';
      }
    } catch (e) {
      // 如果解析失败，直接检查路径是否在排除列表中
      if (excludedPaths.includes(redirectPath)) {
        redirectPath = '/student';
      }
    }

    router.push(redirectPath)
  } else {
    message.error('登录失败，' + res.data.message)
  }
}
</script>

<style>
.content {
  display: flex;
  align-items: center;
}

#userLoginPage {
  max-width: 50em;
  min-width: 30em;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 16px;
}

.desc {
  text-align: center;
  color: #bbb;
  margin-bottom: 16px;
}

.tips {
  color: #bbb;
  text-align: right;
  font-size: 13px;
  margin-bottom: 16px;
}
</style>
