<template>
  <div class="staff-home">
    <!-- 页面标题 -->
    <h1>教师首页</h1>

    <!-- 统计卡片区域 -->
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="课程管理" bordered>
          <a-statistic title="课程总数" :value="courseCount" />
          <a-button type="primary" style="margin-top: 16px">查看详情</a-button>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="学生管理" bordered>
          <a-statistic title="学生总数" :value="studentCount" />
          <a-button type="primary" style="margin-top: 16px">查看详情</a-button>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="考试管理" bordered>
          <a-statistic title="考试总数" :value="examCount" />
          <a-button type="primary" style="margin-top: 16px">查看详情</a-button>
        </a-card>
      </a-col>
    </a-row>

    <!-- 图表区域 -->
    <a-row :gutter="16" style="margin-top: 20px">
      <a-col :span="12">
        <a-card title="课程学生分布" bordered>
          <ECharts :option="courseStudentOption" style="height: 300px" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="考试通过率趋势" bordered>
          <ECharts :option="examPassRateOption" style="height: 300px" />
        </a-card>
      </a-col>
    </a-row>

    <!-- 快速访问入口 -->
    <div style="margin-top: 20px">
      <h2>快速访问</h2>
      <a-row :gutter="16" style="margin-top: 10px">
        <a-col :span="4">
          <a-button type="primary" block>创建课程</a-button>
        </a-col>
        <a-col :span="4">
          <a-button type="primary" block>添加学生</a-button>
        </a-col>
        <a-col :span="4">
          <a-button type="primary" block>创建考试</a-button>
        </a-col>
        <a-col :span="4">
          <a-button type="primary" block>查看考勤</a-button>
        </a-col>
        <a-col :span="4">
          <a-button type="primary" block>发布公告</a-button>
        </a-col>
        <a-col :span="4">
          <a-button type="primary" block>课程资料</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Row as ARow, Col as ACol, Card as ACard, Statistic as AStatistic, Button as AButton } from 'ant-design-vue';
import ECharts from 'vue-echarts';
import { use } from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// 注册echarts组件
use([BarChart, LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

// 模拟数据
const courseCount = ref(12);
const studentCount = ref(245);
const examCount = ref(8);

// 课程学生分布图表配置
const courseStudentOption = ref({
  xAxis: {
    type: 'category',
    data: ['数学', '物理', '化学', '生物', '英语', '历史']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [32, 45, 28, 36, 52, 24],
      type: 'bar'
    }
  ]
});

// 考试通过率趋势图表配置
const examPassRateOption = ref({
  xAxis: {
    type: 'category',
    data: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周']
  },
  yAxis: {
    type: 'value',
    max: 100
  },
  series: [
    {
      data: [85, 92, 78, 90, 88, 95],
      type: 'line'
    }
  ]
});
</script>

<style scoped>
.staff-home {
  padding: 20px;
}

h1,
h2 {
  margin-bottom: 16px;
}
</style>
