<template>
  <div id="staffSider">
    <a-layout style="height: 100%">
      <a-layout-sider width="200" style="height: 100%">
        <!-- 侧边栏内容 -->
        <div class="logo" />
        <a-menu mode="inline" style="height: 100%" v-model:selectedKeys="selectedKeys">
          <template v-for="item in menuItems" :key="item.key">
            <a-sub-menu v-if="item.children" :key="item.key">
              <template #title>
                <component :is="item.icon" />
                <span>{{ item.label }}</span>
              </template>
              <a-menu-item v-for="child in item.children" :key="child.key" @click="$router.push(child.path)">
                {{ child.label }}
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :key="item.key" @click="$router.push(item.path)">
              <component :is="item.icon" />
              <span>{{ item.label }}</span>
            </a-menu-item>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="content-area">
        <!-- 主内容区域 -->
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { HomeOutlined, UserOutlined, TeamOutlined, BookOutlined, FileTextOutlined, SettingFilled } from '@ant-design/icons-vue';

const selectedKeys = ref(['1']);

// 侧边栏菜单数据集合
const menuItems = [
  {
    key: '1',
    icon: HomeOutlined,
    label: '首页',
    path: '/staff'
  },
  {
    key: '2',
    icon: TeamOutlined,
    label: '学生管理',
    path: '/staff/students',
    children: [
      { key: '2-1', label: '学生列表', path: '/staff/students/list' },
      { key: '2-2', label: '成绩管理', path: '/staff/students/grades' },
      { key: '2-3', label: '考勤记录', path: '/staff/students/attendance' }
    ]
  },
  {
    key: '3',
    icon: BookOutlined,
    label: '课程管理',
    path: '/staff/courses',
    children: [
      { key: '3-1', label: '课程列表', path: '/staff/courses/list' },
      { key: '3-2', label: '课程创建', path: '/staff/courses/create' },
      { key: '3-3', label: '教学资源', path: '/staff/courses/resources' }
    ]
  },
  {
    key: '4',
    icon: FileTextOutlined,
    label: '作业管理',
    path: '/staff/assignments'
  },
  {
    key: '5',
    icon: FileTextOutlined,
    label: '考试管理',
    path: '/staff/exams'
  },
  {
    key: '6',
    icon: SettingFilled,
    label: '系统设置',
    path: '/staff/settings'
  }
];
</script>

<style scoped>
#staffSider {
  width: 100%;
  height: 100%;
}

.content-area {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
