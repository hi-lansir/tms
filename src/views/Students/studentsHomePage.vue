<template>
  <div id="studentHomePage" class="home-container">
    <!-- 顶部统计卡片 -->
    <a-row :gutter="[16, 16]" class="stat-cards">
      <a-col :xs="24" :sm="12" :lg="6">
        <a-card class="stat-card" bordered="false">
          <div class="stat-title">已完成课程</div>
          <div class="stat-value">6/12</div>
          <div class="stat-desc">本学期课程进度</div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :lg="6">
        <a-card class="stat-card" bordered="false">
          <div class="stat-title">待参加考试</div>
          <div class="stat-value">2</div>
          <div class="stat-desc">未来两周内</div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :lg="6">
        <a-card class="stat-card" bordered="false">
          <div class="stat-title">平均成绩</div>
          <div class="stat-value">85.5</div>
          <div class="stat-desc">本学期课程</div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :lg="6">
        <a-card class="stat-card" bordered="false">
          <div class="stat-title">待完成作业</div>
          <div class="stat-value">3</div>
          <div class="stat-desc">截止日期本周</div>
        </a-card>
      </a-col>
    </a-row>

    <!-- 中间内容区 -->
    <a-row :gutter="[16, 16]" class="content-row">
      <!-- 课程进度图表 -->
      <a-col :xs="24" :lg="12">
        <a-card title="课程学习进度" class="content-card">
          <div ref="progressChart" class="chart-container"></div>
        </a-card>
      </a-col>

      <!-- 考试倒计时 -->
      <a-col :xs="24" :lg="12">
        <a-card title="近期考试" class="content-card">
          <a-list item-layout="horizontal" :data-source="examList">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar :style="{ backgroundColor: item.color }">{{ item.courseName.charAt(0) }}</a-avatar>
                  </template>
                  <template #title>{{ item.courseName }}</template>
                  <template #description>{{ item.date }}</template>
                </a-list-item-meta>
                <div class="countdown-box">
                  <div class="countdown-title">倒计时</div>
                  <div class="countdown-value">{{ item.countdown }}</div>
                </div>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>

    <!-- 推荐信息 -->
    <a-card title="推荐课程" class="content-card recommend-card">
      <a-carousel :autoplay="true" :dot-position="'bottom'">
        <div v-for="(course, index) in recommendCourses" :key="index" class="course-slide">
          <div class="course-info">
            <h3>{{ course.title }}</h3>
            <p>{{ course.description }}</p>
            <div class="course-meta">
              <span>难度: {{ course.difficulty }}</span>
              <span>时长: {{ course.duration }}</span>
              <span>评分: {{ course.rating }}</span>
            </div>
            <a-button type="primary" size="small" class="enroll-btn">查看详情</a-button>
          </div>
        </div>
      </a-carousel>
    </a-card>

    <!-- 快速查询入口 -->
    <a-card title="快速导航" class="content-card quick-nav-card">
      <a-row :gutter="16">
        <a-col :xs="12" :sm="8" :lg="6" v-for="(item, index) in quickNavItems" :key="index">
          <div class="nav-item">
            <a-icon :type="item.icon" class="nav-icon" />
            <div class="nav-text">{{ item.name }}</div>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import * as echarts from 'echarts'
import { Card, Row, Col, List, Avatar, Carousel, Button, Icon } from 'ant-design-vue'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

// 图表容器
const progressChart = ref<HTMLDivElement | null>(null)

// 伪数据 - 考试倒计时
const examList = reactive([
  {
    courseName: '高等数学',
    date: '2023-12-20 09:00',
    countdown: '15天',
    color: '#f5222d'
  },
  {
    courseName: '大学物理',
    date: '2023-12-25 14:30',
    countdown: '20天',
    color: '#fa8c16'
  }
])

// 伪数据 - 推荐课程
const recommendCourses = reactive([
  {
    title: '数据结构与算法',
    description: '掌握计算机科学的核心基础，提升编程能力',
    difficulty: '中等',
    duration: '8周',
    rating: '4.8'
  },
  {
    title: '人工智能导论',
    description: '了解AI的基本概念和应用场景，入门机器学习',
    difficulty: '中等',
    duration: '6周',
    rating: '4.9'
  },
  {
    title: 'Web前端开发',
    description: '学习现代前端技术栈，构建交互式网页应用',
    difficulty: '初级',
    duration: '10周',
    rating: '4.7'
  }
])

// 伪数据 - 快速导航
const quickNavItems = reactive([
  { name: '课程表', icon: 'schedule' },
  { name: '成绩查询', icon: 'file-text' },
  { name: '图书馆', icon: 'book' },
  { name: '校园地图', icon: 'environment' },
  { name: '校历', icon: 'calendar' },
  { name: '通知公告', icon: 'bell' },
  { name: '教学资源', icon: 'database' },
  {
    name: '联系老师', icon: 'phone'
  }
])

// 初始化课程进度图表
onMounted(() => {
  if (progressChart.value) {
    const chart = echarts.init(progressChart.value)
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: ['已完成', '进行中', '未开始']
      },
      series: [
        {
          name: '课程进度',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '16',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {
              value: 6,
              name: '已完成',
              itemStyle: { color: '#52c41a' }
            },
            {
              value: 3,
              name: '进行中',
              itemStyle: { color: '#faad14' }
            },
            {
              value: 3,
              name: '未开始',
              itemStyle: { color: '#f5222d' }
            }
          ]
        }
      ]
    }
    chart.setOption(option)

    // 响应窗口大小变化
    window.addEventListener('resize', () => {
      chart.resize()
    })
  }
})
</script>

<style scoped>
.home-container {
  padding: 20px;
}

.stat-cards {
  margin-bottom: 20px;
}

.stat-card {
  height: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.stat-title {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  margin-bottom: 8px;
}

.stat-value {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
}

.stat-desc {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
}

.content-row {
  margin-bottom: 20px;
}

.content-card {
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.chart-container {
  width: 100%;
  height: 300px;
}

.countdown-box {
  text-align: center;
}

.countdown-title {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
}

.countdown-value {
  font-size: 18px;
  font-weight: 600;
  color: #f5222d;
}

.course-slide {
  padding: 20px;
  background: #fafafa;
  border-radius: 8px;
  height: 200px;
  display: flex;
  flex-direction: column;
}

.course-info h3 {
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.85);
}

.course-info p {
  margin-bottom: 15px;
  color: rgba(0, 0, 0, 0.65);
  flex-grow: 1;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.55);
}

.enroll-btn {
  align-self: flex-start;
}

.quick-nav-card .ant-card-body {
  padding: 24px 16px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  border-radius: 8px;
  transition: all 0.3s;
  margin: 5px 0;
}

.nav-item:hover {
  background-color: #f0f7ff;
  cursor: pointer;
}

.nav-icon {
  font-size: 24px;
  margin-bottom: 8px;
  color: #1890ff;
}

.nav-text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}
</style>
