<template>
  <div id="studentSider">
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
import { HomeOutlined, UserOutlined, AlignLeftOutlined, EditOutlined, ThunderboltOutlined, CommentOutlined, ReadOutlined } from '@ant-design/icons-vue';

const selectedKeys = ref(['1']);

// 侧边栏菜单数据集合
const menuItems = [
  {
    key: '1',
    icon: HomeOutlined,
    label: '首页',
    path: '/student'
  },
  {
    key: '2',
    icon: ThunderboltOutlined,
    label: '考勤',
    path: '/student'
  },
  {
    key: '3',
    icon: AlignLeftOutlined,
    label: '课程',
    path: '/student/courses',
    children: [
      { key: '3-1', label: '课程列表', path: '/student/courses' },
      { key: '3-2', label: '我的课程', path: '/student/courses/user' }
    ]
  },
  {
    key: '4',
    icon: EditOutlined,
    label: '练习与考核',
    path: '/student/exams',
    children: [
      { key: '4-1', label: '练习', path: '/student/exams/practice' },
      { key: '4-2', label: '考试安排', path: '/student/exams/schedule' },
      { key: '4-3', label: '我的成绩', path: '/student/exams/results' }
    ]
  },
  {
    key: '5',
    icon: ReadOutlined,
    label: '知识与资源',
    path: '/student/knowledge'
  },
  {
    key: '6',
    icon: CommentOutlined,
    label: '讨论互动',
    path: '/student'
  },
  {
    key: '7',
    icon: UserOutlined,
    label: '个人中心',
    path: '/student',
    children: [
      { key: '7-1', label: '个人信息', path: '/student/profile' },
      { key: '7-2', label: '设置', path: '/student/settings' },
      { key: '7-3', label: '行为日志', path: '/student/logs' }
    ]
  },
];
</script>

<style scoped>
#studentSider {
  width: 100%;
  height: 100%;
}

.content-area {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
