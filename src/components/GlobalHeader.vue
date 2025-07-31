<template>
  <div class="header-container">
    <a-row type="flex" align="middle" justify="space-between" style="height: 100%;">
      <!-- 左侧 Logo -->
      <a-col>
        <div class="logo">
          <!-- <img src="@/assets/logo.svg" alt="Logo" /> -->
        </div>
      </a-col>

      <!-- 右侧用户信息 -->
      <a-col v-if="isLoggedIn">
        <a-dropdown placement="bottomRight">
          <template #overlay>
            <a-menu style="width: 8em;" @click="handleMenuClick">
              <a-menu-item key="userInfo">
                <UserOutlined /> 用户信息
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="logout">
                <LogoutOutlined /> 退出登录
              </a-menu-item>
            </a-menu>
          </template>
          <div class="user-info" style="cursor: pointer;color: #fff;">
            <!-- <a-avatar :src="userInfo?.avatar || defaultAvatar" /> -->
            <span style="margin-left: 8px;">{{ userInfo?.staff_number || userInfo?.student_number }}</span>
            <DownOutlined style="margin-left: 4px; font-size: 12px;" />
          </div>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Layout, Row, Col, Dropdown, Menu, Avatar, Icon, message } from 'ant-design-vue'
import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons-vue'
import { useLoginStudentStore } from '@/stores/useLoginStudentStore'
import { useLoginStaffStore } from '@/stores/useLoginStaffStore'

const { Header } = Layout
const router = useRouter()
const loginStudentStore = useLoginStudentStore()
const loginStaffStore = useLoginStaffStore()
const userInfo = computed(() => {
  const isStaffRoute = router.currentRoute.value.path.includes('/staff')
  return isStaffRoute ? loginStaffStore.staffInfo : loginStudentStore.studentInfo
})
const isLoggedIn = computed(() => {
  return loginStaffStore.token || loginStudentStore.token
})
const defaultAvatar = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'

// 用户信息通过computed从store实时获取，无需onMounted初始化

const handleMenuClick = (e: any) => {
  if (e.key === 'logout') {
    const isStaff = router.currentRoute.value.path.includes('/staff')
    if (isStaff) {
      loginStaffStore.logout()
      message.success('退出登录成功')
      router.push('/staff/login')
    } else {
      loginStudentStore.logoutLoginStudents()
      message.success('退出登录成功')
      router.push('/student/login')
    }
  } else if (e.key === 'userInfo') {
    const path = router.currentRoute.value.path.includes('/staff') ? '/staff/info' : '/student/info'
    router.push(path)
  }
}
</script>



<style scoped>
.header-container {
  background: #001529;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  /* position: fixed; */
  width: 100%;
  z-index: 10;
}

.logo {
  height: 40px;
  overflow: hidden;
}

.logo img {
  height: 100%;
}

.user-info {
  display: flex;
  padding: 0 1em;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
</style>
