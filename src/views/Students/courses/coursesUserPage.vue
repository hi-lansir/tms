<template>
  <div class="user-courses-page">
    <div class="page-header">
      <h2>我的课程</h2>
    </div>

    <!-- 课程状态标签页 -->
    <a-tabs v-model:activeKey="activeStatus" class="course-status-tabs" @change="handleStatusChange">
      <a-tab-pane key="all" tab="全部课程" />
      <a-tab-pane key="completed" tab="已完成课程" />
      <a-tab-pane key="incomplete" tab="未完成课程" />
    </a-tabs>

    <!-- 课程列表 -->
    <div class="course-list">
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :lg="8" :xl="6" v-for="course in filteredCourses" :key="course.id">
          <div class="course-card" @click="handleCourseClick(course)">
            <div class="course-cover">
              <img :src="course.coverImage" alt="{{ course.title }}" class="cover-img" />
              <span v-if="course.isCompleted" class="completed-badge">已完成</span>
            </div>
            <div class="course-info">
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="course-instructor">讲师: {{ course.instructor }}</p>
              <div class="course-meta">
                <span class="course-rating">{{ course.rating }} ★</span>
                <span class="course-progress">{{ course.progress }}%</span>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- 空状态 -->
    <div v-if="filteredCourses.length === 0" class="empty-state">
      <div class="empty-icon"><sync-outlined spin /></div>
      <p class="empty-text">暂无课程数据</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SyncOutlined } from '@ant-design/icons-vue';
import type { Course } from '@/api/typings';
import router from '@/router';

// 课程状态标签
const activeStatus = ref<string>('all');

// 模拟已选课程数据
const userCourses = ref<Course[]>([
  {
    id: 1,
    title: 'Vue3+TypeScript开发实战',
    description: '掌握Vue3和TypeScript的核心概念及实战应用',
    coverImage: 'https://picsum.photos/seed/course1/400/225',
    instructor: '张教授',
    rating: 4.8,
    progress: 100,
    isCompleted: true,
    category: '前端开发',
    level: '中级',
    studentsCount: 1250
  },
  {
    id: 2,
    title: 'React组件化开发',
    description: '深入学习React组件设计模式和最佳实践',
    coverImage: 'https://picsum.photos/seed/course2/400/225',
    instructor: '李老师',
    rating: 4.7,
    progress: 65,
    isCompleted: false,
    category: '前端开发',
    level: '高级',
    studentsCount: 980
  },
  {
    id: 3,
    title: 'Node.js后端开发',
    description: '从入门到精通Node.js后端开发技术',
    coverImage: 'https://picsum.photos/seed/course3/400/225',
    instructor: '王工程师',
    rating: 4.6,
    progress: 0,
    isCompleted: false,
    category: '后端开发',
    level: '初级',
    studentsCount: 1560
  },
  {
    id: 4,
    title: 'Python数据分析',
    description: '使用Python进行数据处理和可视化分析',
    coverImage: 'https://picsum.photos/seed/course4/400/225',
    instructor: '赵博士',
    rating: 4.9,
    progress: 100,
    isCompleted: true,
    category: '数据科学',
    level: '中级',
    studentsCount: 2100
  }
]);

// 根据状态筛选课程
const filteredCourses = computed<Course[]>(() => {
  switch (activeStatus.value) {
    case 'completed':
      return userCourses.value.filter(course => course.isCompleted);
    case 'incomplete':
      return userCourses.value.filter(course => !course.isCompleted);
    default:
      return userCourses.value;
  }
});

// 处理课程点击事件
const handleCourseClick = (course: Course) => {
  router.push(`/student/courses/study/${course.id}`);
};

// 处理状态切换
const handleStatusChange = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.user-courses-page {
  padding: 20px;
}

.page-header {
  margin-bottom: 24px;
}

.course-status-tabs {
  margin-bottom: 24px;
}

.course-list {
  margin-top: 20px;
}

.course-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
}

.course-card:hover {
  transform: translateY(-4px);
}

.course-cover {
  position: relative;
}

.cover-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.completed-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #52c41a;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.course-info {
  padding: 16px;
}

.course-title {
  font-size: 16px;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.course-instructor {
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.course-rating {
  color: #faad14;
}

.course-progress {
  color: #1890ff;
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: #999;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
</style>
