<template>
  <a-card :hoverable="true" class="course-card" @mouseenter="showAddButton = true" @mouseleave="showAddButton = false">
    <div class="course-image">
      <img :src="course.coverImage" alt="Course Cover" class="cover-img" />
    </div>
    <div class="course-info">
      <h3 class="course-title">{{ course.title }}</h3>
      <p class="course-description">{{ course.description }}</p>
      <div class="course-meta">
        <span class="instructor">讲师: {{ course.instructor }}</span>
        <span class="rating">评分: {{ course.rating }}</span>
      </div>
    </div>
    <div v-if="showAddButton" class="add-button-container">
      <a-button type="primary" size="small" @click="handleAddCourse">
        <plus-outlined /> 添加课程
      </a-button>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Card, Button } from 'ant-design-vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import router from '@/router';

interface Course {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  instructor: string;
  rating: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

const props = defineProps<{
  course: Course;
}>();

const showAddButton = ref(false);

const handleAddCourse = () => {
  // 跳转到详情 courses/details:id
  router.push(`/student/courses/details/${props.course.id}`);
};
</script>

<style scoped>
.course-card {
  width: 100%;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.course-card:hover {
  transform: translateY(-5px);
}

.course-image {
  height: 160px;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.course-description {
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;
}

.add-button-container {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
