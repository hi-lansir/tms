<template>
  <div class="exam-practice-page">
    <div class="page-header">
      <h2>考试练习</h2>
      <p>在这里进行各类考试科目的练习，提升你的技能水平</p>
    </div>

    <!-- 搜索和筛选区域 -->
    <a-card class="filter-card" :bordered="false" style="margin-bottom: 24px;">
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :sm="12" :md="8">
          <a-input v-model:value="searchText" placeholder="搜索考试名称或科目">
            <template #prefix>
              <SearchOutlined />
            </template>
          </a-input>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6">
          <a-select v-model:value="selectedCategory" placeholder="选择考试类别">
            <a-select-option value="">全部类别</a-select-option>
            <a-select-option v-for="category in categories" :key="category.value" :value="category.value">
              {{ category.label }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6">
          <a-select v-model:value="selectedDifficulty" placeholder="选择难度级别">
            <a-select-option value="">全部难度</a-select-option>
            <a-select-option value="easy">简单</a-select-option>
            <a-select-option value="medium">中等</a-select-option>
            <a-select-option value="hard">困难</a-select-option>
          </a-select>
        </a-col>
        <a-col :xs="24" :sm="12" :md="4">
          <a-button type="primary" block @click="handleSearch">
            <SearchOutlined /> 搜索
          </a-button>
        </a-col>
      </a-row>
    </a-card>

    <!-- 考试统计卡片 -->
    <a-row :gutter="[16, 16]" style="margin-bottom: 24px;">
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="可用练习" :value="totalExams" desc="个考试科目" :icon="BookOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="已完成" :value="completedExams" desc="次练习" :icon="CheckCircleOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="平均得分" :value="`${averageScore}分`" desc="满分100分" :icon="LineChartOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="练习时长" :value="`${practiceHours}小时`" desc="累计练习" :icon="ClockCircleOutlined" />
      </a-col>
    </a-row>

    <!-- 考试列表 -->
    <a-card class="exam-list-card" :bordered="false">
      <div class="exam-list-header">
        <h3>可用练习考试</h3>
        <a-radio-group v-model:value="viewMode" button-style="solid">
          <a-radio-button value="card">卡片视图</a-radio-button>
          <a-radio-button value="list">列表视图</a-radio-button>
        </a-radio-group>
      </div>

      <!-- 卡片视图 -->
      <div v-if="viewMode === 'card'" class="exam-card-grid">
        <a-col :xs="24" :sm="12" :lg="8" :xl="6" v-for="exam in filteredExams" :key="exam.id">
          <ExamCard :title="exam.title" :category="getCategoryName(exam.category)" :difficulty="exam.difficulty"
            :description="exam.description" :meta-items="[
              { icon: QuestionCircleOutlined, text: `${exam.questionCount}题` },
              { icon: ClockCircleOutlined, text: `${exam.duration}分钟` },
              { icon: StarOutlined, text: `${exam.passScore}分通过` }
            ]" action-text="开始练习" @action-click="() => startPractice(exam.id)" />
        </a-col>
      </div>

      <!-- 列表视图 -->
      <div v-else class="exam-table-view">
        <a-table :columns="tableColumns" :data-source="filteredExams" row-key="id" :pagination="false">
          <template #bodyCell="{ record, column }">
            <template v-if="column.key === 'action'">
              <a-button type="primary" size="small" @click="startPractice(record.id)">
                开始练习
              </a-button>
            </template>
            <template v-if="column.key === 'difficulty'">
              <span :class="'exam-difficulty-tag ' + record.difficulty">
                {{ record.difficulty === 'easy' ? '简单' : record.difficulty === 'medium' ? '中等' : '困难' }}
              </span>
            </template>
          </template>
        </a-table>
      </div>

      <!-- 分页 -->
      <div class="pagination-container">
        <a-pagination v-model:current="currentPage" :page-size="pageSize" :total="filteredExams.length"
          @change="handlePageChange" show-size-changer show-quick-jumper :show-total="(total) => `共 ${total} 个练习`" />
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { SearchOutlined, BookOutlined, CheckCircleOutlined, LineChartOutlined, ClockCircleOutlined, QuestionCircleOutlined, StarOutlined } from '@ant-design/icons-vue';
import StatCard from '@/components/card/StatCard.vue';
import ExamCard from '@/components/card/ExamCard.vue';
import { Card, Input, Select, Button, Row, Col, Radio, Table, Pagination } from 'ant-design-vue';

// 路由实例
const router = useRouter();

// 状态变量
const searchText = ref('');
const selectedCategory = ref('');
const selectedDifficulty = ref('');
const viewMode = ref('card');
const currentPage = ref(1);
const pageSize = ref(12);

// 考试类别选项
const categories = [
  { label: '前端开发', value: 'frontend' },
  { label: '后端开发', value: 'backend' },
  { label: '移动开发', value: 'mobile' },
  { label: '数据结构', value: 'datastructure' },
  { label: '算法', value: 'algorithm' },
  { label: '数据库', value: 'database' },
];

// 模拟考试数据
const examData = ref([
  {
    id: 1,
    title: 'HTML基础语法练习',
    description: '测试HTML基本标签和属性的使用能力，包括文本格式化、列表、链接等基础知识点',
    category: 'frontend',
    difficulty: 'easy',
    questionCount: 20,
    duration: 30,
    passScore: 60,
    lastPractice: '2023-11-15',
    score: 85
  },
  {
    id: 2,
    title: 'CSS选择器与样式练习',
    description: '考核CSS选择器优先级、盒模型、浮动布局等核心概念的理解和应用',
    category: 'frontend',
    difficulty: 'medium',
    questionCount: 25,
    duration: 40,
    passScore: 60,
    lastPractice: null,
    score: null
  },
  {
    id: 3,
    title: 'JavaScript函数与作用域',
    description: '深入测试JavaScript函数特性、闭包、作用域链和this绑定等高级概念',
    category: 'frontend',
    difficulty: 'hard',
    questionCount: 30,
    duration: 50,
    passScore: 65,
    lastPractice: '2023-11-20',
    score: 78
  },
  {
    id: 4,
    title: 'Vue组件通信练习',
    description: '测试Vue组件间各种通信方式的掌握程度，包括props、emit、vuex等',
    category: 'frontend',
    difficulty: 'medium',
    questionCount: 25,
    duration: 45,
    passScore: 60,
    lastPractice: '2023-11-18',
    score: 92
  },
  {
    id: 5,
    title: 'React Hooks实战',
    description: '考核React常用Hooks的使用场景和实现原理，包括useState、useEffect、useContext等',
    category: 'frontend',
    difficulty: 'hard',
    questionCount: 30,
    duration: 50,
    passScore: 65,
    lastPractice: null,
    score: null
  },
  {
    id: 6,
    title: 'Node.js异步编程',
    description: '测试Node.js事件循环、回调函数、Promise和async/await等异步编程模式',
    category: 'backend',
    difficulty: 'medium',
    questionCount: 25,
    duration: 45,
    passScore: 60,
    lastPractice: '2023-11-10',
    score: 75
  },
  {
    id: 7,
    title: 'SQL查询优化',
    description: '考核SQL语句编写能力和查询优化技巧，包括索引使用、连接查询和子查询等',
    category: 'database',
    difficulty: 'hard',
    questionCount: 30,
    duration: 60,
    passScore: 70,
    lastPractice: '2023-11-05',
    score: 82
  },
  {
    id: 8,
    title: '数据结构基础',
    description: '测试数组、链表、栈和队列等基本数据结构的实现和应用能力',
    category: 'datastructure',
    difficulty: 'medium',
    questionCount: 25,
    duration: 45,
    passScore: 60,
    lastPractice: null,
    score: null
  },
]);

// 过滤考试数据
const filteredExams = computed(() => {
  return examData.value.filter(exam => {
    // 搜索文本过滤
    const matchesSearch = exam.title.toLowerCase().includes(searchText.value.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchText.value.toLowerCase());
    // 类别过滤
    const matchesCategory = !selectedCategory.value || exam.category === selectedCategory.value;
    // 难度过滤
    const matchesDifficulty = !selectedDifficulty.value || exam.difficulty === selectedDifficulty.value;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });
});

// 统计数据
const totalExams = computed(() => examData.value.length);
const completedExams = computed(() => examData.value.filter(exam => exam.score !== null).length);
const averageScore = computed(() => {
  const scores = examData.value.filter(exam => exam.score !== null).map(exam => exam.score);
  if (scores.length === 0) return 0;
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
});
const practiceHours = computed(() => {
  const totalMinutes = examData.value.filter(exam => exam.score !== null)
    .reduce((sum, exam) => sum + exam.duration, 0);
  return (totalMinutes / 60).toFixed(1);
});

// 列表视图列定义
const tableColumns = [
  {
    title: '考试名称',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
    render: (title: string, record: any) => h('div', { class: 'exam-table-title' }, [
      h('h4', null, title),
      h('p', { class: 'exam-table-desc' }, record.description)
    ])
  },
  {
    title: '类别',
    dataIndex: 'category',
    key: 'category',
    width: 120,
    render: (category: string) => getCategoryName(category)
  },
  {
    title: '难度',
    dataIndex: 'difficulty',
    key: 'difficulty',
    width: 100,
    render: (difficulty: string) => h('span',
      { class: `exam-difficulty-tag ${difficulty}` },
      difficulty === 'easy' ? '简单' : difficulty === 'medium' ? '中等' : '困难'
    )
  },
  {
    title: '题目数量',
    dataIndex: 'questionCount',
    key: 'questionCount',
    width: 100,
    render: (count: number) => `${count}题`
  },
  {
    title: '时长',
    dataIndex: 'duration',
    key: 'duration',
    width: 80,
    render: (duration: number) => `${duration}分钟`
  },
  {
    title: '上次练习',
    dataIndex: 'lastPractice',
    key: 'lastPractice',
    width: 120,
    render: (lastPractice: string | null) => lastPractice || '未练习'
  },
  {
    title: '操作',
    key: 'action',
    width: 120,
    render: (_: any, record: any) => h(AButton,
      {
        type: 'primary',
        size: 'small',
        onClick: () => startPractice(record.id)
      },
      '开始练习'
    )
  },
];

// 方法
const handleSearch = () => {
  currentPage.value = 1; // 重置到第一页
};

const handlePageChange = (page: number, pageSize: number) => {
  currentPage.value = page;
  pageSize.value = pageSize;
};

const startPractice = (examId: number) => {
  // 导航到具体的考试练习页面
  router.push(`/student/exams/practice/${examId}`);
};

const getCategoryName = (categoryValue: string) => {
  const category = categories.find(c => c.value === categoryValue);
  return category ? category.label : '其他';
};
</script>

<style scoped>
.exam-practice-page {
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

.exam-table-title h4 {
  margin: 0 0 4px 0;
}

.exam-table-desc {
  color: #666;
  font-size: 12px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pagination-container {
  margin-top: 24px;
  text-align: right;
}
</style>
