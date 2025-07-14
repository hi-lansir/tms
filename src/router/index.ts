import { createRouter, createWebHistory } from 'vue-router'
import StudentsLoginPage from '@/views/Students/studentsLoginPage.vue'
import StudentsRegisterPage from '@/views/Students/studentsRegisterPage.vue'
import studentsSider from '@/views/Students/studentsSider.vue'
import studentsHomePage from '@/views/Students/studentsHomePage.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: HomePage,
    },
    {
      path: '/student',
      name: '学生',
      component: studentsSider,
      children: [
        {
          path: '',
          name: '学生主页',
          component: studentsHomePage,
        },
      ],
    },
    {
      path: '/student/login',
      name: '学生登录',
      component: StudentsLoginPage,
    },
    {
      path: '/student/register',
      name: '学生注册',
      component: StudentsRegisterPage,
    },
  ],
})

export default router
