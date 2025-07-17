<template>
  <div class="student-info-container">
    <h2 class="page-title">个人信息管理</h2>
    <a-card class="info-card">
      <a-form :model="studentInfo" layout="vertical" @finish="handleSubmit">
        <a-form-item label="学号" name="student_number" :rules="[{ required: true, message: '学号不能为空' }]">
          <a-input v-model:value="studentInfo.student_number" disabled />
        </a-form-item>

        <a-form-item label="姓名" name="name" :rules="[{ required: true, message: '姓名不能为空' }]">
          <a-input v-model:value="studentInfo.name" />
        </a-form-item>

        <a-form-item label="邮箱" name="email" :rules="[{ type: 'email', message: '请输入有效的邮箱地址' }]">
          <a-input v-model:value="studentInfo.email" />
        </a-form-item>

        <a-form-item label="联系电话" name="phone">
          <a-input v-model:value="studentInfo.phone" />
        </a-form-item>

        <a-form-item label="专业" name="major">
          <a-input v-model:value="studentInfo.major" />
        </a-form-item>

        <a-form-item label="班级" name="class_name">
          <a-input v-model:value="studentInfo.class_name" disabled />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">保存修改</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { useLoginStudentStore } from '@/stores/useLoginStudentStore'
import { getLoginStudentsUsingPost as getLoginStudents } from '@/api/studentsController'

const loginStore = useLoginStudentStore()
const studentInfo = reactive<API.StudentInfoVO>({
  student_number: '',
  name: '',
  email: '',
  phone: '',
  major: '',
  class_name: ''
})

onMounted(async () => {
  // 获取用户信息
  await fetchStudentInfo()
})

// 获取学生详细信息
const fetchStudentInfo = async () => {
  try {
    const res = await getLoginStudents()
    if (res.data.code === 0 && res.data.data) {
      Object.assign(studentInfo, res.data.data)
    }
  } catch (error) {
    message.error('获取用户信息失败')
    console.error('获取用户信息失败:', error)
  }
}

// 提交修改
const handleSubmit = async () => {
}
</script>

<style scoped>
.student-info-container {
  padding: 24px;
}

.page-title {
  margin-bottom: 24px;
  color: #1890ff;
}

.info-card {
  max-width: 800px;
  margin: 0 auto;
}
</style>
