import { createRouter, createWebHistory } from 'vue-router'
import StudentsLoginPage from '@/views/Students/studentsLoginPage.vue'
import StudentsRegisterPage from '@/views/Students/studentsRegisterPage.vue'
import studentsSider from '@/views/Students/studentsSider.vue'
import studentsHomePage from '@/views/Students/studentsHomePage.vue'
import studentsInfoPage from '@/views/Students/studentsInfoPage.vue'
import studentsCoursesHomePage from '@/views/Students/courses/coursesHomePage.vue'
import studentsCoursesUserPage from '@/views/Students/courses/coursesUserPage.vue'
import HomePage from '@/views/HomePage.vue'
// 新增教职工相关组件导入
import staffLoginPage from '@/views/Staff/staffLoginPage.vue'
import staffRegisterPage from '@/views/Staff/staffRegisterPage.vue'
import staffSider from '@/views/Staff/staffSider.vue'
import { useLoginStudentStore } from '@/stores/useLoginStudentStore'
// 新增教职工store导入
import { useLoginStaffStore } from '@/stores/useLoginStaffStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: HomePage,
    },
    // 学生相关路由
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
        {
          path: 'info',
          name: '学生信息',
          component: studentsInfoPage,
        },
        {
          path: 'courses',
          name: '课程',
          component: studentsCoursesHomePage,
        },
        {
          path: 'courses/details/:id',
          name: 'studentCoursesDetails',
          component: () => import('@/views/Students/courses/coursesDetailsPage.vue'),
          meta: {
            title: '课程详情',
          },
        },
        {
          path: 'courses/study/:id',
          name: '课程学习',
          component: () => import('@/views/Students/courses/coursesStudyPage.vue'),
        },
        {
          path: 'courses/user',
          name: '学生课程',
          component: studentsCoursesUserPage,
        },
        {
          path: 'exams/practice',
          name: '练习',
          component: () => import('@/views/Students/exams/examPracticePage.vue'),
        },
        {
          path: 'exams/schedule',
          name: 'studentExamSchedule',
          component: () => import('@/views/Students/exams/examSchedulePage.vue'),
          meta: {
            title: '考试安排',
          },
        },
        {
          path: 'exams/taking/:id',
          name: '考试',
          component: () => import('@/views/Students/exams/examTakingPage.vue'),
        },
        {
          path: 'exams/results',
          name: '考试成绩',
          component: () => import('@/views/Students/exams/examResultsPage.vue'),
        },
        {
          path: 'knowledge',
          name: '知识',
          component: () => import('@/views/Students/knowledge/knowledgeBrowsePage.vue'),
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
    // 新增教职工相关路由
    {
      path: '/staff',
      name: '教职工',
      component: staffSider,
      children: [
        {
          path: '',
          name: '教职工首页',
          component: () => import('@/views/Staff/staffHomePage.vue'),
        },
        {
          path: 'courses/create',
          name: '课程创建',
          component: () => import('@/views/Staff/courses/courseCreatePage.vue'),
        },
      ],
    },
    {
      path: '/staff/login',
      name: '教职工登录',
      component: staffLoginPage,
    },
    {
      path: '/staff/register',
      name: '教职工注册',
      component: staffRegisterPage,
    },
  ],
})

// 修改路由守卫以支持教职工登录检查
// router.beforeEach((to, from, next) => {
//   let isLogin = false
//   const isStudentRoute = to.path.startsWith('/student')
//   const isStaffRoute = to.path.startsWith('/staff')
//   const isLoginPage = to.path.includes('/login')
//   const isRegisterPage = to.path.includes('/register')

//   // 根据路由类型检查对应登录状态
//   if (isStudentRoute) {
//     const studentStore = useLoginStudentStore()
//     isLogin = !!studentStore.token
//   } else if (isStaffRoute) {
//     const staffStore = useLoginStaffStore()
//     isLogin = !!staffStore.token
//   }

//   const requiresAuth = (isStudentRoute || isStaffRoute) && !isLoginPage && !isRegisterPage

//   if (requiresAuth && !isLogin) {
//     // 根据路由类型重定向到对应登录页
//     const loginPath = isStudentRoute ? '/student/login' : '/staff/login'
//     return next(`${loginPath}?redirect=${to.fullPath}`)
//   }
//   next()
// })

export default router
