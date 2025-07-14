<template>
  <a-layout-header class="header">
    <a-row type="flex" align="middle" justify="space-between" style="height: 100%;">
      <!-- 左侧 Logo -->
      <a-col>
        <div class="logo">
          <!-- <img src="@/assets/logo.svg" alt="Logo" /> -->
        </div>
      </a-col>

      <!-- 右侧用户信息 -->
      <a-col v-if="userInfo">
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
          <div class="user-info" style="cursor: pointer;">
            <a-avatar :src="userInfo.avatar || defaultAvatar" />
            <span style="margin-left: 8px;">{{ userInfo.name }}</span>
            <DownOutlined style="margin-left: 4px; font-size: 12px;" />
          </div>
        </a-dropdown>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Layout, Row, Col, Dropdown, Menu, Avatar, Icon } from 'ant-design-vue'
import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons-vue'
import { useLoginStudentStore } from '@/stores/useLoginStudentStore'

const { Header } = Layout
const router = useRouter()
const loginStore = useLoginStudentStore()
const userInfo = ref<any>(null)
const defaultAvatar = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'

onMounted(() => {
  // 获取用户信息，实际项目中应该从store或API获取
  userInfo.value = loginStore.loginStudents
  console.log('userInfo', userInfo.value)
})

const handleMenuClick = (e: any) => {
  if (e.key === 'logout') {
    loginStore.logout()
    router.push('/login')
  } else if (e.key === 'userInfo') {
    router.push('/user/profile')
  }
}
</script>



<style scoped>
.header {
  background: #001529;
  padding: 0 24px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: fixed;
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
  width: 6em;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
</style>
