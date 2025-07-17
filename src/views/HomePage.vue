<template>
  <a-layout class="login-layout">
    <a-layout-content class="login-content">
      <a-card class="login-card" title="教学与仿真实训系统">
        <div class="login-buttons">
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="12">
              <a-button type="primary" size="large" class="login-button" @click="$router.push('/student/login')" block>
                <user-outlined class="login-icon" />
                学生登录
              </a-button>
            </a-col>
            <a-col :xs="24" :sm="12">
              <a-button type="default" size="large" class="login-button" @click="$router.push('/staff/login')" block>
                <team-outlined class="login-icon" />
                教职工登录
              </a-button>
            </a-col>
          </a-row>
        </div>
        <div class="system-intro">
          <p>欢迎使用教学与仿真实训系统</p>
          <p>请选择您的身份进行登录</p>
        </div>
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
import { UserOutlined, TeamOutlined } from '@ant-design/icons-vue';
import { Button, Card, Layout, Row, Col } from 'ant-design-vue';
</script>

<style scoped>
.login-layout {
  min-height: 100vh;
  background: #f0f2f5;
}

.login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 24px;
}

.login-card {
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.login-buttons {
  margin: 32px 0;
}

.login-button {
  height: 60px;
  font-size: 18px;
}

.login-icon {
  margin-right: 8px;
  font-size: 24px;
}

.system-intro {
  color: rgba(0, 0, 0, 0.65);
  margin-top: 24px;
}

.system-intro p {
  margin: 4px 0;
}
</style>
