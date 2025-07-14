<template>
  <div id="userLoginPage">
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
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { message } from 'ant-design-vue'
import router from '@/router'
import { useLoginStudentStore } from '@/stores/useLoginStudentStore.ts'
import { studentsLogin } from '@/api/studentsController.ts' // 用于接受表单输入的值

// 用于接受表单输入的值
const formState = reactive<API.StudentsLoginRequest>({
  student_number: '',
  password_hash: '',
})

const loginStudentStore = useLoginStudentStore()

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: any) => {
  const res = await studentsLogin(values)
  // 登录成功，把登录态保存到全局状态中
  if (res.data.code === 0 && res.data.data) {

    // 新增：从响应中提取 Token 并存储
    const token = res.data.data.token; // 假设返回数据结构包含 token 字段
    console.log("Token:", token);
    localStorage.setItem("token", token);

    await loginStudentStore.fetchLoginStudents()
    message.success('登录成功')
    router.push({
      path: '/',
      replace: true,
    })
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
