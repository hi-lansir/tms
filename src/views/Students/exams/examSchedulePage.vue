<template>
  <div class="exam-schedule-page">
    <div class="page-header">
      <h2>考试安排</h2>
      <p></p>
    </div>

    <a-card class="filter-card" :bordered="false">
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :sm="12" :md="8" :lg="6">
          <a-select v-model:value="statusFilter" placeholder="考试状态">
            <a-select-option value="all">全部状态</a-select-option>
            <a-select-option value="upcoming">未开始</a-select-option>
            <a-select-option value="ongoing">进行中</a-select-option>
            <a-select-option value="completed">已结束</a-select-option>
          </a-select>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="6">
          <a-select v-model:value="courseFilter" placeholder="选择课程">
            <a-select-option value="all">全部课程</a-select-option>
            <a-select-option :value="course.id" v-for="course in courses" :key="course.id">{{ course.name
              }}</a-select-option>
          </a-select>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="10">
          <a-input-search placeholder="搜索考试名称" v-model:value="searchKeyword" enter-button @search="handleSearch" />
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" :lg="2" class="text-right">
          <a-button type="primary" @click="refreshExams">
            <sync-outlined /> 刷新
          </a-button>
        </a-col>
      </a-row>
    </a-card>

    <a-card class="exam-list-card" :bordered="false" style="margin-top: 16px;">
      <a-table :columns="columns" :data-source="filteredExams" row-key="id" :pagination="{ pageSize: 10 }"
        :loading="loading">
        <template #bodyCell="{ record, column }">
          <template v-if="column.key === 'duration'">
            {{ record.duration }} 分钟
          </template>
          <template v-if="column.key === 'score'">
            {{ record.totalScore }} / {{ record.passScore }}
          </template>
          <template v-if="column.key === 'status'">
            <a-tag :color="record.status === 'upcoming' ? 'blue' : record.status === 'ongoing' ? 'orange' : 'green'"
              :spin="record.status === 'ongoing'">
              <template #icon>
                <component :is="getStatusIcon(record.status)" />
              </template>
              {{ record.status === 'upcoming' ? '未开始' : record.status === 'ongoing' ? '进行中' : '已结束' }}
            </a-tag>
          </template>
          <template v-if="column.key === 'action'">
            <a-button type="primary" size="small" @click="handleEnterExam(record)"
              :disabled="record.status !== 'ongoing'">
              {{ record.status === 'upcoming' ? '未开始' : record.status === 'ongoing' ? '进入考试' : '已结束' }}
            </a-button>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { message, PageHeader } from 'ant-design-vue';
import { ClockCircleOutlined, SyncOutlined, CheckCircleOutlined } from '@ant-design/icons-vue';
import type { TableProps } from 'ant-design-vue';
import router from '@/router';

// 定义考试数据类型
interface Exam {
  id: string;
  title: string;
  courseId: string;
  courseName: string;
  startTime: string;
  endTime: string;
  duration: number; // 分钟
  status: 'upcoming' | 'ongoing' | 'completed';
  totalScore: number;
  passScore: number;
}

// 定义课程数据类型
interface Course {
  id: string;
  name: string;
}

// 状态管理
const loading = ref<boolean>(false);
const searchKeyword = ref<string>('');

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'upcoming':
      return ClockCircleOutlined;
    case 'ongoing':
      return SyncOutlined;
    case 'completed':
      return CheckCircleOutlined;
    default:
      return null;
  }
};
const statusFilter = ref<string>('all');
const courseFilter = ref<string>('all');
const exams = ref<Exam[]>([]);
const courses = ref<Course[]>([]);

// 表格列定义
const columns = [
  { title: '考试名称', dataIndex: 'title', key: 'title', ellipsis: true },
  { title: '所属课程', dataIndex: 'courseName', key: 'courseName', ellipsis: true },
  { title: '开始时间', dataIndex: 'startTime', key: 'startTime' },
  { title: '结束时间', dataIndex: 'endTime', key: 'endTime' },
  { title: '考试时长', key: 'duration', dataIndex: 'duration' },
  { title: '总分/及格分', key: 'score' },
  { title: '状态', key: 'status', width: 120 },
  { title: '操作', key: 'action', width: 120 },
] as TableProps<Exam>['columns'];

// 筛选考试数据
const filteredExams = computed<Exam[]>(() => {
  return exams.value.filter(exam => {
    // 搜索关键词筛选
    const matchesSearch = exam.title.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
      exam.courseName.toLowerCase().includes(searchKeyword.value.toLowerCase());
    // 状态筛选
    const matchesStatus = statusFilter.value === 'all' || exam.status === statusFilter.value;
    // 课程筛选
    const matchesCourse = courseFilter.value === 'all' || exam.courseId === courseFilter.value;

    return matchesSearch && matchesStatus && matchesCourse;
  });
});

// 模拟获取考试数据
const fetchExams = async () => {
  loading.value = true;
  try {
    // 实际项目中这里会调用API
    // const response = await examsController.getStudentExams();
    // exams.value = response.data;

    // 模拟数据
    exams.value = [
      {
        id: '1',
        title: 'Vue3基础知识点测试',
        courseId: '101',
        courseName: 'Vue3+TypeScript开发实战',
        startTime: '2023-12-10 09:00:00',
        endTime: '2023-12-10 10:30:00',
        duration: 90,
        status: 'upcoming',
        totalScore: 100,
        passScore: 60
      },
      {
        id: '2',
        title: 'TypeScript类型系统测试',
        courseId: '101',
        courseName: 'Vue3+TypeScript开发实战',
        startTime: '2023-12-05 14:00:00',
        endTime: '2023-12-05 15:00:00',
        duration: 60,
        status: 'completed',
        totalScore: 100,
        passScore: 60
      },
      {
        id: '3',
        title: 'React Hooks应用测试',
        courseId: '102',
        courseName: 'React生态系统开发',
        startTime: '2023-12-08 10:00:00',
        endTime: '2023-12-08 11:30:00',
        duration: 90,
        status: 'ongoing',
        totalScore: 100,
        passScore: 60
      },
      {
        id: '4',
        title: 'Node.js后端基础测试',
        courseId: '103',
        courseName: '全栈开发实战',
        startTime: '2023-12-12 15:00:00',
        endTime: '2023-12-12 16:30:00',
        duration: 90,
        status: 'upcoming',
        totalScore: 100,
        passScore: 60
      }
    ];
  } catch (error) {
    message.error('获取考试安排失败，请重试');
    console.error('Failed to fetch exams:', error);
  } finally {
    loading.value = false;
  }
};

// 模拟获取课程数据
const fetchCourses = async () => {
  try {
    // 实际项目中这里会调用API
    // const response = await coursesController.getStudentCourses();
    // courses.value = response.data;

    // 模拟数据
    courses.value = [
      { id: '101', name: 'Vue3+TypeScript开发实战' },
      { id: '102', name: 'React生态系统开发' },
      { id: '103', name: '全栈开发实战' },
      { id: '104', name: '数据结构与算法' }
    ];
  } catch (error) {
    message.error('获取课程列表失败');
    console.error('Failed to fetch courses:', error);
  }
};

// 搜索考试
const handleSearch = () => {
  console.log('Search exams with keyword:', searchKeyword.value);
  // 这里可以添加防抖处理
};

// 刷新考试列表
const refreshExams = () => {
  fetchExams();
  message.success('已刷新考试列表');
};

// 进入考试
const handleEnterExam = (exam: Exam) => {
  // 实际项目中这里会跳转到考试页面
  message.info(`进入考试：${exam.title}`);
  router.push(`/student/exams/taking/${exam.id}`);
};

// 页面加载时获取数据
onMounted(() => {
  fetchCourses();
  fetchExams();
});
</script>

<style scoped>
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

.exam-schedule-page {
  padding: 20px;
}

.filter-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 16px;
}

.exam-list-card {
  min-height: 500px;
}

.ant-table-tbody>tr>td {
  vertical-align: middle;
}
</style>
