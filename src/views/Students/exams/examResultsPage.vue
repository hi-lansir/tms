<template>
  <div class="exam-results-page">
    <div class="page-header">
      <h2>成绩查询</h2>
      <p>查看和管理您的所有考试成绩，了解学习进度和表现</p>
    </div>

    <!-- 搜索和筛选区域 -->
    <a-card class="filter-card" :bordered="false" style="margin-bottom: 24px;">
      <a-row :gutter="[16, 16]" type="flex" justify="start">
        <a-col :xs="24" :sm="12" :md="8">
          <a-input v-model:value="searchText" placeholder="搜索考试名称或课程">
            <template #prefix>
              <SearchOutlined />
            </template>
          </a-input>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6">
          <a-select v-model:value="selectedCourse" placeholder="选择课程">
            <a-select-option value="">全部课程</a-select-option>
            <a-select-option v-for="course in courses" :key="course.id" :value="course.id">
              {{ course.name }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6">
          <a-select v-model:value="selectedStatus" placeholder="成绩状态">
            <a-select-option value="">全部状态</a-select-option>
            <a-select-option value="passed">已通过</a-select-option>
            <a-select-option value="failed">未通过</a-select-option>
          </a-select>
        </a-col>
        <a-col :xs="24" :sm="12" :md="4">
          <a-button type="primary" block @click="handleSearch">
            <SearchOutlined /> 搜索
          </a-button>
        </a-col>
      </a-row>
    </a-card>

    <!-- 成绩统计卡片 -->
    <a-row :gutter="[16, 16]" style="margin-bottom: 24px;">
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="总平均分" :value="averageScore" desc="所有考试平均分" :icon="LineChartOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="已通过" :value="`${passedCount}/${totalExams}`" desc="考试通过率" :icon="CheckCircleOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="最高分" :value="highestScore" desc="最高分课程" :icon="TrophyOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="最低分" :value="lowestScore" desc="最低分课程" :icon="AlertOutlined" />
      </a-col>
    </a-row>

    <!-- 成绩列表 -->
    <a-card class="exam-list-card" :bordered="false">
      <div class="exam-list-header">
        <h3>考试成绩列表</h3>
        <a-radio-group v-model:value="viewMode" button-style="solid">
          <a-radio-button value="card">卡片视图</a-radio-button>
          <a-radio-button value="list">列表视图</a-radio-button>
        </a-radio-group>
      </div>

      <!-- 卡片视图 -->
      <div v-if="viewMode === 'card'" class="exam-card-grid">
        <a-col :xs="24" :sm="12" :lg="8" :xl="6" v-for="result in filteredResults" :key="result.id">
          <ExamCard :title="result.examName" :category="result.courseName"
            :status-tag="{ color: result.passed ? 'green' : 'red', text: result.passed ? '已通过' : '未通过' }"
            :score="result.score" :score-info="`/${result.totalScore}分`" :meta-items="[
              { icon: ClockCircleOutlined, text: formatDate(result.examDate) },
              { icon: CheckCircleOutlined, text: result.passed ? '通过' : '未通过' }
            ]" action-text="查看详情" @action-click="() => viewDetails(result.id)" />
        </a-col>
      </div>

      <!-- 列表视图 -->
      <div v-else class="exam-table-view">
        <a-table :columns="tableColumns" :data-source="filteredResults" row-key="id" :pagination="false">
          <template #bodyCell="{ record, column }">
            <template v-if="column.key === 'score'">
              <div class="score-cell">
                <span :class="record.passed ? 'passed-score' : 'failed-score'">{{ record.score }}</span>
                <span class="total-score">/{{ record.totalScore }}</span>
              </div>
            </template>
            <template v-if="column.key === 'status'">
              <a-tag :color="record.passed ? 'green' : 'red'">{{ record.passed ? '已通过' : '未通过' }}</a-tag>
            </template>
            <template v-if="column.key === 'action'">
              <a-button type="primary" size="small" @click="viewDetails(record.id)">
                查看详情
              </a-button>
            </template>
          </template>
        </a-table>
      </div>

      <!-- 分页 -->
      <div class="pagination-container">
        <a-pagination v-model:current="currentPage" :page-size="pageSize" :total="filteredResults.length"
          @change="handlePageChange" show-size-changer show-quick-jumper :show-total="(total) => `共 ${total} 条成绩记录`" />
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { SearchOutlined, LineChartOutlined, CheckCircleOutlined, TrophyOutlined, AlertOutlined, ClockCircleOutlined } from '@ant-design/icons-vue';
import StatCard from '@/components/card/StatCard.vue';
import ExamCard from '@/components/card/ExamCard.vue';
import { Card, Input, Select, Button, Row, Col, Radio, Table, Pagination, Tag } from 'ant-design-vue';

// 路由实例
const router = useRouter();

// 状态变量
const searchText = ref('');
const selectedCourse = ref('');
const selectedStatus = ref('');
const viewMode = ref('card');
const currentPage = ref(1);
const pageSize = ref(12);

// 课程选项
const courses = [
  { id: '101', name: 'Vue3+TypeScript开发实战' },
  { id: '102', name: 'React生态系统开发' },
  { id: '103', name: '全栈开发实战' },
  { id: '104', name: '数据结构与算法' },
  { id: '105', name: '数据库原理与应用' },
];

// 考试成绩数据接口
interface ExamResult {
  id: number;
  courseId: string;
  courseName: string;
  examName: string;
  score: number;
  totalScore: number;
  passed: boolean;
  examDate: string;
  rank?: number;
  duration: number;
}

// 模拟成绩数据
const examResults = ref<ExamResult[]>([
  {
    id: 1,
    courseId: '101',
    courseName: 'Vue3+TypeScript开发实战',
    examName: 'Vue3基础知识点测试',
    score: 85,
    totalScore: 100,
    passed: true,
    examDate: '2023-12-10',
    rank: 3,
    duration: 90
  },
  {
    id: 2,
    courseId: '101',
    courseName: 'Vue3+TypeScript开发实战',
    examName: 'TypeScript类型系统测试',
    score: 78,
    totalScore: 100,
    passed: true,
    examDate: '2023-12-15',
    rank: 5,
    duration: 60
  },
  {
    id: 3,
    courseId: '102',
    courseName: 'React生态系统开发',
    examName: 'React Hooks应用测试',
    score: 62,
    totalScore: 100,
    passed: true,
    examDate: '2023-12-08',
    rank: 12,
    duration: 90
  },
  {
    id: 4,
    courseId: '103',
    courseName: '全栈开发实战',
    examName: 'Node.js后端基础测试',
    score: 58,
    totalScore: 100,
    passed: false,
    examDate: '2023-12-12',
    rank: 20,
    duration: 90
  },
  {
    id: 5,
    courseId: '104',
    courseName: '数据结构与算法',
    examName: '数据结构基础测试',
    score: 92,
    totalScore: 100,
    passed: true,
    examDate: '2023-12-05',
    rank: 1,
    duration: 120
  },
  {
    id: 6,
    courseId: '105',
    courseName: '数据库原理与应用',
    examName: 'SQL查询优化测试',
    score: 88,
    totalScore: 100,
    passed: true,
    examDate: '2023-12-01',
    rank: 2,
    duration: 90
  },
  {
    id: 7,
    courseId: '102',
    courseName: 'React生态系统开发',
    examName: 'Redux状态管理测试',
    score: 75,
    totalScore: 100,
    passed: true,
    examDate: '2023-11-28',
    rank: 7,
    duration: 60
  },
  {
    id: 8,
    courseId: '103',
    courseName: '全栈开发实战',
    examName: 'RESTful API设计测试',
    score: 65,
    totalScore: 100,
    passed: true,
    examDate: '2023-11-25',
    rank: 15,
    duration: 75
  },
]);

// 筛选成绩数据
const filteredResults = computed<ExamResult[]>(() => {
  return examResults.value.filter(result => {
    // 搜索文本过滤
    const matchesSearch = result.courseName.toLowerCase().includes(searchText.value.toLowerCase()) ||
      result.examName.toLowerCase().includes(searchText.value.toLowerCase());
    // 课程筛选
    const matchesCourse = !selectedCourse.value || result.courseId === selectedCourse.value;
    // 状态筛选
    const matchesStatus = !selectedStatus.value ||
      (selectedStatus.value === 'passed' && result.passed) ||
      (selectedStatus.value === 'failed' && !result.passed);

    return matchesSearch && matchesCourse && matchesStatus;
  });
});

// 统计数据计算
const totalExams = computed(() => examResults.value.length);
const passedCount = computed(() => examResults.value.filter(r => r.passed).length);
const averageScore = computed(() => {
  if (examResults.value.length === 0) return 0;
  const sum = examResults.value.reduce((acc, result) => acc + result.score, 0);
  return Math.round(sum / examResults.value.length);
});
const highestScore = computed(() => {
  if (examResults.value.length === 0) return 0;
  return Math.max(...examResults.value.map(r => r.score));
});
const lowestScore = computed(() => {
  if (examResults.value.length === 0) return 0;
  return Math.min(...examResults.value.map(r => r.score));
});
const highestScoreCourse = computed(() => {
  if (examResults.value.length === 0) return '';
  const maxScore = highestScore.value;
  const result = examResults.value.find(r => r.score === maxScore);
  return result ? result.courseName : '';
});
const lowestScoreCourse = computed(() => {
  if (examResults.value.length === 0) return '';
  const minScore = lowestScore.value;
  const result = examResults.value.find(r => r.score === minScore);
  return result ? result.courseName : '';
});

// 列表视图列定义
const tableColumns = [
  {
    title: '课程名称',
    dataIndex: 'courseName',
    key: 'courseName',
    ellipsis: true
  },
  {
    title: '考试名称',
    dataIndex: 'examName',
    key: 'examName',
    ellipsis: true
  },
  {
    title: '考试日期',
    dataIndex: 'examDate',
    key: 'examDate',
    render: (date: string) => formatDate(date)
  },
  {
    title: '成绩',
    key: 'score',
    width: 100
  },
  {
    title: '状态',
    key: 'status',
    width: 100
  },
  {
    title: '操作',
    key: 'action',
    width: 120
  },
];

// 工具方法
const handleSearch = () => {
  currentPage.value = 1; // 重置到第一页
};

const handlePageChange = (page: number, pageSize: number) => {
  currentPage.value = page;
  pageSize.value = pageSize;
};

const viewDetails = (examId: number) => {
  // 导航到成绩详情页面
  router.push(`/students/exams/results/${examId}`);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN');
};
</script>

<style scoped>
.exam-results-page {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: calc(100vh - 64px);
}

.page-header {
  margin-bottom: 24px;
}

.page-header h2 {
  margin-bottom: 8px;
  color: #1890ff;
}

.page-header p {
  color: #666;
  margin: 0;
}

.filter-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 16px;
}

.exam-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.exam-card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  margin-bottom: 24px;
}

.exam-card-grid>div {
  padding: 0.5em;
}

.exam-table-view {
  margin-bottom: 24px;
}

.score-cell {
  display: flex;
  align-items: baseline;
}

.score-value {
  font-size: 16px;
  font-weight: bold;
}

.passed-score {
  color: #52c41a;
}

.failed-score {
  color: #f5222d;
}

.total-score {
  color: #666;
  margin-left: 8px;
  font-size: 12px;
}

.pagination-container {
  margin-top: 24px;
  text-align: right;
}
</style>
