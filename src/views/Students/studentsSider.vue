<template>
  <div id="studentSider">
    <a-layout style="height: 100%">
      <a-layout-sider width="200" style="height: 100%">
        <!-- 侧边栏内容 -->
        <div class="logo" />
        <a-menu mode="inline" style="height: 100%" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="1">
            <HomeOutlined />
            <span>首页</span>
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            <span>用户管理</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <!-- 主内容区域 -->
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';

const selectedKeys = ref(['1']);
// const openKeys = ref(['1']);
</script>

<style scoped>
#studentSider {
  width: 100%;
  height: 100%;
}
</style>
