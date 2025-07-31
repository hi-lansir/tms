<template>
  <a-card id="staffLoginPage">
    <h2 class="title">教职工登录</h2>
    <div class="desc">教学与仿真实训平台</div>
    <a-form :model="formState" name="basic" autocomplete="off" :label-col="labelCol" @finish="handleSubmit">
      <a-form-item label="用户名" name="staff_number" :rules="[{ required: true, message: '请输入用户名' }]">
        <a-input v-model:value="formState.staff_number" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item label="密码" name="password_hash" :rules="[{ required: true, message: '请输入密码' }]">
        <a-input-password v-model:value="formState.password_hash" placeholder="请输入密码" />
      </a-form-item>
      <div class="tips">
        没有账号？
        <RouterLink to="/staff/register">立即注册</RouterLink>
      </div>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { message } from 'ant-design-vue'
import router from '@/router'
import { useLoginStaffStore } from '@/stores/useLoginStaffStore'
import { staffLoginUsingPost as staffLogin } from '@/api/staffController'

// 用于接受表单输入的值
const formState = reactive<API.StaffLoginRequest>({
  staff_number: '',
  password_hash: '',
})

// 用于接受表单输入的值
const labelCol = {
  span: 4,
}

const loginStaffStore = useLoginStaffStore()

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: any) => {
  const res = await staffLogin(values)
  // 登录成功，把登录态保存到全局状态中
  if (res.data.code === 0 && res.data.data) {
    // 存储Token
    const token = res.data.data.token;
    const tokenName = res.data.data.tokenName;
    console.log("Token:", token);
    if (token && tokenName) {
      loginStaffStore.setToken(token, tokenName);
    }
    await loginStaffStore.fetchLoginStaff()
    message.success('登录成功')

    // 处理重定向
    const redirectParam = new URLSearchParams(window.location.search).get('redirect') || '/staff'
    let redirectPath = redirectParam

    console.log("Redirect Path:", redirectPath)
    // 如果是完整URL，提取路径部分
    try {
      const url = new URL(redirectParam)
      redirectPath = url.pathname + url.search
    } catch (e) {
      // 不是完整URL，直接使用
    }
    // 检查是否为不需要重定向的路径（登录或引导页）
    const excludedPaths = ['/', '/login', '/register'];
    try {
      const parsedUrl = new URL(redirectPath, window.location.origin);
      if (excludedPaths.includes(parsedUrl.pathname)) {
        redirectPath = '/staff';
      }
    } catch (e) {
      // 如果解析失败，直接检查路径是否在排除列表中
      if (excludedPaths.includes(redirectPath)) {
        redirectPath = '/staff';
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

#staffLoginPage {
  max-width: 50em;
  min-width: 30em;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 16px;
}

desc {
  text-align: center;
  color: #bbb;
  margin-bottom: 16px;
}

tips {
  color: #bbb;
  text-align: right;
  font-size: 13px;
  margin-bottom: 16px;
}
</style>
