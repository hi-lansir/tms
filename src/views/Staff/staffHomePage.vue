<template>
  <a-layout class="staff-home-page">
    <a-layout-content class="content">
      <div class="page-header">
        <h1>欢迎使用教学管理系统</h1>
        <p>教职工工作平台</p>
      </div>

      <a-row :gutter="[16, 16]" class="statistics-row">
        <a-col :xs="24" :sm="12" :lg="6">
          <a-card class="stat-card" hoverable>
            <div class="stat-content">
              <div class="stat-title">学生总数</div>
              <div class="stat-value">128</div>
              <div class="stat-desc">较上月增长 12%</div>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="6">
          <a-card class="stat-card" hoverable>
            <div class="stat-content">
              <div class="stat-title">课程数量</div>
              <div class="stat-value">24</div>
              <div class="stat-desc">本学期开设课程</div>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="6">
          <a-card class="stat-card" hoverable>
            <div class="stat-content">
              <div class="stat-title">待处理作业</div>
              <div class="stat-value">16</div>
              <div class="stat-desc">需要批阅的作业</div>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="6">
          <a-card class="stat-card" hoverable>
            <div class="stat-content">
              <div class="stat-title">近期考试</div>
              <div class="stat-value">3</div>
              <div class="stat-desc">未来7天内</div>
            </div>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 16]" class="quick-actions-row">
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card class="action-card" hoverable @click="$router.push('/staff/courses/create')">
            <div class="action-content">
              <BookOutlined class="action-icon" />
              <div class="action-text">
                <div class="action-title">创建新课程</div>
                <div class="action-desc">添加新的课程信息和教学内容</div>
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card class="action-card" hoverable @click="$router.push('/staff/students/list')">
            <div class="action-content">
              <TeamOutlined class="action-icon" />
              <div class="action-text">
                <div class="action-title">学生管理</div>
                <div class="action-desc">查看和管理学生信息</div>
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card class="action-card" hoverable @click="$router.push('/staff/exams')">
            <div class="action-content">
              <FileTextOutlined class="action-icon" />
              <div class="action-text">
                <div class="action-title">考试安排</div>
                <div class="action-desc">创建和管理考试</div>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
import { BookOutlined, TeamOutlined, FileTextOutlined } from '@ant-design/icons-vue';
</script>

<style scoped>
.staff-home-page {
  min-height: 100vh;
}

.content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
}

.page-header {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8e8;
}

.page-header h1 {
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 24px;
}

.page-header p {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

.statistics-row {
  margin-bottom: 24px;
}

.stat-card {
  height: 100%;
  transition: all 0.3s;
}

.stat-content {
  padding: 16px;
}

.stat-title {
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

.stat-value {
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  font-weight: 600;
}

.stat-desc {
  color: #52c41a;
  font-size: 14px;
}

.action-card {
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;
}

.action-card:hover {
  border-color: #1890ff;
}

.action-content {
  display: flex;
  align-items: center;
  padding: 24px;
}

.action-icon {
  margin-right: 16px;
  color: #1890ff;
  font-size: 24px;
}

.action-title {
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
}

.action-desc {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
</style>
