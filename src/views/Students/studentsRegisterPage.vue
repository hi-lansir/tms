<template>
  <div id="userRegisterPage">
    <h2 class="title">学生注册</h2>
    <div class="desc">教学与仿真实训平台</div>
    <a-form :model="formState" name="basic" autocomplete="off" :label-col="labelCol" @finish="handleSubmit">
      <a-form-item label="学号" name="student_number" :rules="[{ required: true, message: '请输入学号' }]">
        <a-input v-model:value="formState.student_number" placeholder="请输入学号" />
      </a-form-item>
      <a-form-item label="姓" name="last_name" :rules="[{ required: true, message: '请输入姓' }]">
        <a-input v-model:value="formState.last_name" placeholder="请输入姓" />
      </a-form-item>
      <a-form-item label="名" name="first_name" :rules="[{ required: true, message: '请输入名' }]">
        <a-input v-model:value="formState.first_name" placeholder="请输入名" />
      </a-form-item>
      <a-form-item label="学号" name="email" :rules="[{ required: true, message: '请输入邮箱' }]">
        <a-input v-model:value="formState.email" placeholder="请输入邮箱" />
      </a-form-item>
      <a-form-item label="密码" name="password_hash" :rules="[
        { required: true, message: '请输入密码' },
      ]">
        <a-input-password v-model:value="formState.password_hash" placeholder="请输入密码" />
      </a-form-item>
      <a-form-item label="确认密码" name="check_password" :rules="[
        { required: true, message: '请输入确认密码' },
      ]">
        <a-input-password v-model:value="formState.check_password" placeholder="请输入确认密码" />
      </a-form-item>
      <div class="tips">
        已有账号？
        <RouterLink to="/student/login">立即登录</RouterLink>
      </div>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { message } from 'ant-design-vue'
import router from '@/router'
import { useLoginStudentStore } from '@/stores/useLoginStudentStore.ts'
import { studentsRegister } from '@/api/studentsController.ts'

// 用于接受表单输入的值
const formState = reactive<API.StudentsRegisterRequest>({
  student_number: '',
  password_hash: '',
  check_password: ''
})

const loginStudentStore = useLoginStudentStore()

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
  const res = await studentsRegister(values)
  // 注册成功，跳转到登录页面
  if (res.data.code === 0 && res.data.data) {
    message.success('注册成功')
    router.push({
      path: '/user/login',
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

#userRegisterPage {
  max-width: 360px;
  min-width: 25em;
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
