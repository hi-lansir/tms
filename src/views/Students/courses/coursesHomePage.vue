<template>
  <div class="course-home-page">
    <div class="page-header">
      <h1>我的课程</h1>
    </div>

    <!-- 搜索和筛选区域 -->
    <div class="filter-section">
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :md="8" :lg="6">
          <a-input v-model:value="searchText" placeholder="搜索课程名称或讲师" @change="handleSearch">
            <template #prefix>
              <SearchOutlined />
            </template>
          </a-input>
        </a-col>

        <a-col :xs="24" :md="6" :lg="4">
          <a-select v-model:value="selectedCategory" placeholder="课程分类" @change="handleFilterChange">
            <a-select-option value="">全部分类</a-select-option>
            <a-select-option v-for="category in categories" :key="category.value" :value="category.value">
              {{ category.label }}
            </a-select-option>
          </a-select>
        </a-col>

        <a-col :xs="24" :md="6" :lg="4">
          <a-select v-model:value="selectedLevel" placeholder="难度级别" @change="handleFilterChange">
            <a-select-option value="">全部级别</a-select-option>
            <a-select-option value="beginner">初级</a-select-option>
            <a-select-option value="intermediate">中级</a-select-option>
            <a-select-option value="advanced">高级</a-select-option>
          </a-select>
        </a-col>

        <a-col :xs="24" :md="6" :lg="4" v-if="showMoreFilters">
          <a-select v-model:value="selectedRating" placeholder="最低评分" @change="handleFilterChange">
            <a-select-option value="">不限</a-select-option>
            <a-select-option value="3">3分及以上</a-select-option>
            <a-select-option value="4">4分及以上</a-select-option>
            <a-select-option value="4.5">4.5分及以上</a-select-option>
          </a-select>
        </a-col>

        <a-col :xs="24" :md="24" :lg="2" class="filter-toggle-col">
          <a-button type="text" @click="toggleMoreFilters">
            {{ showMoreFilters ? '收起筛选' : '更多筛选' }}
            <caret-down-outlined v-if="!showMoreFilters" />
            <caret-up-outlined v-else />
          </a-button>
        </a-col>
      </a-row>
    </div>

    <!-- 课程标签页 -->
    <a-tabs v-model:activeKey="activeTabKey" class="course-tabs" @change="handleTabChange">
      <a-tab-pane key="recommended" tab="推荐课程" />
      <a-tab-pane key="popular" tab="热门课程" />
    </a-tabs>

    <!-- 课程列表 -->
    <div class="course-list">
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :lg="8" :xl="6" v-for="course in paginatedCourses" :key="course.id">
          <course-card :course="course" />
        </a-col>
      </a-row>

      <!-- 空状态 -->
      <div v-if="filteredCourses.length === 0" class="empty-state">
        <a-empty />
        <p>没有找到符合条件的课程</p>
      </div>
    </div>

    <!-- 分页 -->
    <div class="pagination-container">
      <a-pagination v-model:current="currentPage" :page-size="pageSize" :total="filteredCourses.length"
        @change="handlePageChange" show-size-changer show-quick-jumper :show-total="(total) => `共 ${total} 门课程`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Input, Select, Button, Tabs, Pagination, Row, Col, Empty } from 'ant-design-vue';
import { SearchOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons-vue';
import CourseCard from '@/components/CourseCard.vue';

// 课程接口定义
interface Course {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  instructor: string;
  rating: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  studentsCount: number;
  isRecommended: boolean;
}

// 分类选项
const categories = [
  { label: '前端开发', value: 'frontend' },
  { label: '后端开发', value: 'backend' },
  { label: '移动开发', value: 'mobile' },
  { label: '数据科学', value: 'data' },
  { label: '人工智能', value: 'ai' },
  { label: '云计算', value: 'cloud' },
];

// 状态变量
const searchText = ref('');
const selectedCategory = ref('');
const selectedLevel = ref('');
const selectedRating = ref('');
const showMoreFilters = ref(false);
const activeTabKey = ref('recommended');
const currentPage = ref(1);
const pageSize = ref(12);
const allCourses = ref<Course[]>([]);

// 模拟课程数据
const generateMockCourses = (): Course[] => {
  const mockCourses: Course[] = [];
  const titles = [
    'Vue.js 3 实战开发', 'React 组件化设计', 'TypeScript 高级特性',
    'Node.js 后端开发', 'Python 数据分析', 'Docker 容器化技术',
    'Kubernetes 入门', 'Flutter 跨平台开发', '深度学习基础',
    '微服务架构设计', 'GraphQL API 开发', '大数据处理技术'
  ];

  for (let i = 1; i <= 30; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const levelOptions: ('beginner' | 'intermediate' | 'advanced')[] = ['beginner', 'intermediate', 'advanced'];
    const level = levelOptions[Math.floor(Math.random() * levelOptions.length)];

    mockCourses.push({
      id: i,
      title: titles[(i - 1) % titles.length] + (i > titles.length ? ` ${i - titles.length}` : ''),
      description: '这是一门优质的技术课程，涵盖了从基础到高级的全面内容，适合希望提升技能的学习者。',
      coverImage: `https://picsum.photos/seed/course${i}/400/225`,
      instructor: `讲师${Math.floor(Math.random() * 20) + 1}`,
      rating: Math.floor(Math.random() * 10) / 2 + 3.5, // 3.5-5.0
      category: category.value,
      level: level,
      studentsCount: Math.floor(Math.random() * 1000) + 100,
      isRecommended: i % 5 === 0, // 每5个课程有一个推荐
    });
  }

  return mockCourses;
};

// 计算属性：根据筛选条件过滤课程
// 计算属性：根据筛选条件过滤课程
const filteredCourses = computed<Course[]>(() => {
  let result = [...allCourses.value];

  // 根据标签页筛选
  if (activeTabKey.value === 'recommended') {
    result = result.filter(course => course.isRecommended);
  } else if (activeTabKey.value === 'popular') {
    // 热门课程按学生数量排序
    result = [...result].sort((a, b) => b.studentsCount - a.studentsCount);
  }

  // 搜索文本筛选
  if (searchText.value) {
    const text = searchText.value.toLowerCase();
    result = result.filter(course =>
      course.title.toLowerCase().includes(text) ||
      course.instructor.toLowerCase().includes(text)
    );
  }

  // 分类筛选
  if (selectedCategory.value) {
    result = result.filter(course => course.category === selectedCategory.value);
  }

  // 难度级别筛选
  if (selectedLevel.value) {
    result = result.filter(course => course.level === selectedLevel.value);
  }

  // 评分筛选
  if (selectedRating.value) {
    const minRating = parseFloat(selectedRating.value);
    result = result.filter(course => course.rating >= minRating);
  }

  return result;
});

// 分页处理
const paginatedCourses = computed<Course[]>(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  return filteredCourses.value.slice(startIndex, startIndex + pageSize.value);
});


// 方法
const handleSearch = () => {
  currentPage.value = 1; // 搜索时重置到第一页
};

const handleFilterChange = () => {
  currentPage.value = 1; // 筛选条件变化时重置到第一页
};

const toggleMoreFilters = () => {
  showMoreFilters.value = !showMoreFilters.value;
};

const handleTabChange = () => {
  currentPage.value = 1; // 切换标签页时重置到第一页
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

// 初始化
onMounted(() => {
  allCourses.value = generateMockCourses();
});
</script>

<style scoped>
.course-home-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 24px;
}

.filter-section {
  margin-bottom: 32px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.filter-toggle-col {
  display: flex;
  align-items: flex-end;
}

.course-tabs {
  margin-bottom: 24px;
}

.course-list {
  margin-bottom: 32px;
}

.empty-state {
  text-align: center;
  padding: 64px 0;
  color: #999;
}

.empty-state .anticon {
  font-size: 48px;
  margin-bottom: 16px;
}

.pagination-container {
  text-align: right;
  margin-top: 24px;
}
</style>
