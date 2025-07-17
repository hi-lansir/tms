<template>
  <a-card id="staffRegisterPage">
    <h2 class="title">教职工注册</h2>
    <div class="desc">教学与仿真实训平台</div>
    <a-form :model="formState" name="basic" autocomplete="off" :label-col="labelCol" @finish="handleSubmit">
      <a-form-item label="用户名" name="staff_number" :rules="rules.staff_number">
        <a-input v-model:value="formState.staff_number" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item label="姓" name="last_name" :rules="rules.last_name">
        <a-input v-model:value="formState.last_name" placeholder="请输入姓" />
      </a-form-item>
      <a-form-item label="名" name="first_name" :rules="rules.first_name">
        <a-input v-model:value="formState.first_name" placeholder="请输入名" />
      </a-form-item>
      <a-form-item label="邮箱" name="email" :rules="rules.email">
        <a-input v-model:value="formState.email" placeholder="请输入邮箱" />
      </a-form-item>
      <a-form-item label="密码" name="password_hash" :rules="rules.password_hash">
        <a-input-password v-model:value="formState.password_hash" placeholder="请输入密码" />
      </a-form-item>
      <a-form-item label="确认密码" name="check_password" :rules="rules.check_password">
        <a-input-password v-model:value="formState.check_password" placeholder="请输入确认密码" />
      </a-form-item>
      <div class="tips">
        已有账号？
        <RouterLink to="/staff/login">立即登录</RouterLink>
      </div>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%">注册</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { message } from 'ant-design-vue'
import router from '@/router'
import { staffRegisterUsingPost as staffRegister } from '@/api/staffController'

// 用于接受表单输入的值
const formState = reactive<API.StaffRegisterRequest>({
  staff_number: '',
  last_name: '',
  first_name: '',
  email: '',
  password_hash: '',
  check_password: ''
})

const rules = {
  staff_number: [{ required: true, message: '请输入用户名' }],
  last_name: [{ required: true, message: '请输入姓' }],
  first_name: [{ required: true, message: '请输入名' }],
  email: [
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '请输入有效的邮箱地址' },
    { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '邮箱格式不正确' }
  ],
  password_hash: [
    { required: true, message: '请输入密码' },
    { min: 6, message: '密码长度不能少于6个字符' },
    { max: 20, message: '密码长度不能超过20个字符' },
    { pattern: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/, message: '密码必须包含字母、数字，只允许@$!%*?&' }
  ],
  check_password: [
    { required: true, message: '请输入确认密码' },
    {
      validator: (rule, value) => {
        return new Promise<void>((resolve, reject) => {
          if (value !== formState.password_hash) {
            reject('两次输入的密码不一致');
          } else {
            resolve();
          }
        });
      }
    }
  ]
}

const labelCol = {
  style: { width: '6em' }
}

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: any) => {
  // 校验两次输入的密码是否一致
  if (values.password_hash !== values.check_password) {
    message.error('两次输入的密码不一致')
    return;
  }
  const res = await staffRegister(values)
  // 注册成功，跳转到登录页面
  if (res.data.code === 0 && res.data.data) {
    message.success('注册成功')
    router.push({
      path: '/staff/login',
      replace: true,
    })
  } else {
    message.error('注册失败，' + res.data.message)
  }
}
</script>

<style>
.content {
  display: flex;
  align-items: center;
}

#staffRegisterPage {
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
