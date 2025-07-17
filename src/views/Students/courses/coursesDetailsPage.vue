<template>
  <div class="course-detail-page">
    <!-- 课程头部信息 -->
    <div class="course-header">
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :md="8">
          <div class="course-cover">
            <img :src="course.coverImage" alt="{{ course.title }}" class="cover-img" />
          </div>
        </a-col>
        <a-col :xs="24" :md="16">
          <div class="course-info">
            <h1 class="course-title">{{ course.title }}</h1>
            <div class="course-meta">
              <span class="instructor"><user-outlined /> {{ course.instructor }}</span>
              <span class="rating"><star-outlined /> {{ course.rating }} ({{ course.reviews }} 评价)</span>
              <span class="level"><book-outlined /> {{ course.level }}</span>
              <span class="students"><team-outlined /> {{ course.studentsCount }} 学生</span>
            </div>
            <div class="course-actions">
              <a-button type="primary" size="large" @click="addToMyCourses" :loading="isAdding">
                <plus-outlined /> 添加到我的课程
              </a-button>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- 课程内容标签页 -->
    <a-tabs v-model:activeKey="activeTabKey" class="course-tabs" style="margin-top: 24px;">
      <a-tab-pane key="introduction" tab="课程介绍" />
      <a-tab-pane key="chapters" tab="课程章节" />
      <a-tab-pane key="knowledge" tab="知识点分布" />
    </a-tabs>

    <!-- 课程介绍内容 -->
    <div v-if="activeTabKey === 'introduction'" class="course-introduction">
      <a-card class="intro-card">
        <div class="intro-content">
          <h3>课程简介</h3>
          <p>{{ course.description }}</p>

          <h3>学习目标</h3>
          <ul class="learning-objectives">
            <li v-for="(objective, index) in course.learningObjectives" :key="index">
              <check-circle-outlined /> {{ objective }}
            </li>
          </ul>

          <h3>课程收获</h3>
          <div class="course-benefits">
            <a-col :xs="24" :sm="12" :md="8" v-for="(benefit, index) in course.benefits" :key="index">
              <div class="benefit-item">
                <div class="benefit-icon"><award-outlined /></div>
                <div class="benefit-text">{{ benefit }}</div>
              </div>
            </a-col>
          </div>
        </div>
      </a-card>
    </div>

    <!-- 课程章节内容 -->
    <div v-if="activeTabKey === 'chapters'" class="course-chapters">
      <a-card class="chapters-card">
        <a-collapse v-model:activeKey="openChapters" class="chapters-collapse">
          <a-collapse-panel v-for="chapter in course.chapters" :key="chapter.id"
            :header="`第${chapter.index}章: ${chapter.title} (${chapter.lessons.length}课时)`">
            <ul class="lesson-list">
              <li v-for="lesson in chapter.lessons" :key="lesson.id" class="lesson-item">
                <play-circle-outlined class="lesson-icon" />
                <div class="lesson-info">
                  <div class="lesson-title">{{ lesson.title }}</div>
                  <div class="lesson-duration">{{ lesson.duration }}分钟</div>
                </div>
              </li>
            </ul>
          </a-collapse-panel>
        </a-collapse>
      </a-card>
    </div>

    <!-- 知识点分布内容 -->
    <div v-if="activeTabKey === 'knowledge'" class="course-knowledge">
      <a-card class="knowledge-card">
        <div class="knowledge-content">
          <div class="knowledge-chart">
            <h3>知识点掌握进度</h3>
            <a-progress :percent="65" status="active" />
            <div class="chart-placeholder">知识点分布图表</div>
          </div>
          <div class="knowledge-list">
            <h3>核心知识点</h3>
            <a-list item-layout="horizontal" :data-source="course.knowledgePoints">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta :avatar="h(TagOutlined, { color: item.color })" :title="item.name"
                    :description="item.description" />
                  <a-badge :count="item.mastery" show-zero>掌握度</a-badge>
                </a-list-item>
              </template>
            </a-list>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import {
  UserOutlined,
  StarOutlined,
  BookOutlined,
  TeamOutlined,
  PlusOutlined,
  CheckCircleOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons-vue';
// import { ARow, ACol, AButton, ATabs, ATabPane, ACard, ACollapse, AProgress, AList, ABadge } from 'ant-design-vue';

// 状态管理
const activeTabKey = ref<string>('introduction');
const openChapters = ref<string[]>(['1']); // 默认展开第一章
const isAdding = ref<boolean>(false);
const route = useRoute();
const router = useRouter();

// 模拟课程数据
const course = ref<any>({
  id: 1,
  title: 'Vue3+TypeScript开发实战',
  coverImage: 'https://picsum.photos/seed/course1/800/450',
  instructor: '张教授',
  rating: 4.8,
  reviews: 1240,
  level: '中级',
  studentsCount: 1250,
  description: '本课程将带领学员深入学习Vue3和TypeScript的核心概念及实战应用，从基础语法到高级特性，再到项目实战，全面掌握现代前端开发技能。课程内容包括Composition API、响应式原理、组件设计、状态管理、路由配置等，并通过实际项目案例巩固所学知识，让学员能够独立开发企业级前端应用。',
  learningObjectives: [
    '掌握Vue3的Composition API及响应式原理',
    '熟练使用TypeScript进行类型定义和接口设计',
    '理解并应用组件化开发思想和最佳实践',
    '掌握Vuex/Pinia状态管理和Vue Router路由配置',
    '能够独立开发和部署完整的前端项目'
  ],
  benefits: [
    '系统学习Vue3生态系统的核心技术',
    '掌握TypeScript强类型开发的优势',
    '提升前端代码质量和可维护性',
    '获得企业级项目开发经验',
    '适应现代前端工程化开发流程',
    '提高前端开发效率和解决问题能力'
  ],
  chapters: [
    {
      id: '1',
      index: 1,
      title: 'Vue3基础入门',
      lessons: [
        { id: '1-1', title: 'Vue3简介与环境搭建', duration: 25 },
        { id: '1-2', title: 'Vue3模板语法新特性', duration: 30 },
        { id: '1-3', title: 'Composition API初探', duration: 35 },
        { id: '1-4', title: '响应式系统原理', duration: 40 }
      ]
    },
    {
      id: '2',
      index: 2,
      title: 'TypeScript集成应用',
      lessons: [
        { id: '2-1', title: 'TypeScript基础语法', duration: 30 },
        { id: '2-2', title: 'Vue组件类型定义', duration: 35 },
        { id: '2-3', title: '接口与泛型应用', duration: 40 },
        { id: '2-4', title: '高级类型与工具类型', duration: 45 }
      ]
    },
    {
      id: '3',
      index: 3,
      title: '组件设计与状态管理',
      lessons: [
        { id: '3-1', title: '组件通信方式', duration: 35 },
        { id: '3-2', title: 'Pinia状态管理', duration: 40 },
        { id: '3-3', title: '组件复用策略', duration: 35 },
        { id: '3-4', title: '自定义组合式函数', duration: 40 }
      ]
    },
    {
      id: '4',
      index: 4,
      title: '项目实战开发',
      lessons: [
        { id: '4-1', title: '项目架构设计', duration: 40 },
        { id: '4-2', title: '路由设计与权限控制', duration: 45 },
        { id: '4-3', title: 'API集成与数据处理', duration: 40 },
        { id: '4-4', title: '项目部署与优化', duration: 35 }
      ]
    }
  ],
  knowledgePoints: [
    {
      name: 'Composition API',
      description: 'Vue3新的组合式API，提供更灵活的代码组织方式',
      mastery: 85,
      color: '#f5222d'
    },
    {
      name: 'TypeScript类型系统',
      description: '强类型检查，提升代码质量和可维护性',
      mastery: 75,
      color: '#fa8c16'
    },
    {
      name: '组件设计模式',
      description: '高效复用和组合组件的设计方法',
      mastery: 70,
      color: '#faad14'
    },
    {
      name: '响应式原理',
      description: 'Vue3响应式系统的实现机制',
      mastery: 65,
      color: '#52c41a'
    },
    {
      name: '状态管理',
      description: '使用Pinia进行全局状态管理',
      mastery: 60,
      color: '#1890ff'
    },
    {
      name: '路由配置',
      description: 'Vue Router的高级应用和路由守卫',
      mastery: 55,
      color: '#722ed1'
    }
  ]
});

// 添加课程到我的课程
const addToMyCourses = () => {
  isAdding.value = true;
  // 模拟API请求延迟
  setTimeout(() => {
    message.success('课程添加成功！');
    isAdding.value = false;
    // 可以跳转到我的课程页面
    // router.push('/students/courses/my-courses');
  }, 1500);
};
</script>

<style scoped>
.course-detail-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.course-header {
  margin-bottom: 30px;
}

.course-cover .cover-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.course-info .course-title {
  font-size: 24px;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.course-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-bottom: 24px;
  color: #666;
}

.course-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.course-actions {
  margin-top: 24px;
}

.course-tabs {
  margin-bottom: 24px;
}

.intro-content h3 {
  font-size: 18px;
  margin: 24px 0 12px;
  color: #1a1a1a;
}

.intro-content p {
  line-height: 1.6;
  color: #444;
}

.learning-objectives {
  padding-left: 20px;
}

.learning-objectives li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #444;
}

.course-benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fafafa;
}

.benefit-icon {
  color: #1890ff;
  font-size: 18px;
  margin-top: 2px;
}

.chapters-card,
.knowledge-card {
  margin-top: 16px;
}

.lesson-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px dashed #f0f0f0;
}

.lesson-item:last-child {
  border-bottom: none;
}

.lesson-icon {
  color: #1890ff;
  margin-right: 12px;
  font-size: 16px;
}

.lesson-info {
  flex: 1;
}

.lesson-title {
  font-weight: 500;
  margin-bottom: 4px;
}

.lesson-duration {
  font-size: 12px;
  color: #999;
}

.knowledge-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.knowledge-chart {
  padding: 16px;
  background-color: #fafafa;
  border-radius: 8px;
  text-align: center;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px dashed #e8e8e8;
  border-radius: 4px;
  margin-top: 16px;
  color: #999;
}

@media (min-width: 768px) {
  .knowledge-content {
    flex-direction: row;
  }

  .knowledge-chart,
  .knowledge-list {
    flex: 1;
  }
}
</style>
