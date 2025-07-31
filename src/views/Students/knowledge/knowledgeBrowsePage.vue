<template>
  <div class="knowledge-browse-page">
    <div class="page-header">
      <h2>知识与资源中心</h2>
      <p>浏览和学习各类教学资源与知识点</p>
    </div>

    <!-- 搜索和筛选区域 -->
    <a-card class="filter-card" :bordered="false" style="margin-bottom: 24px;">
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :sm="12" :md="8">
          <a-input v-model:value="searchText" placeholder="搜索资源名称或关键词">
            <template #prefix>
              <SearchOutlined />
            </template>
          </a-input>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6">
          <a-select v-model:value="selectedCategory" placeholder="资源分类">
            <a-select-option value="">全部分类</a-select-option>
            <a-select-option v-for="category in categories" :key="category.value" :value="category.value">
              {{ category.label }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6">
          <a-select v-model:value="selectedDifficulty" placeholder="难度级别">
            <a-select-option value="">全部级别</a-select-option>
            <a-select-option value="beginner">初级</a-select-option>
            <a-select-option value="intermediate">中级</a-select-option>
            <a-select-option value="advanced">高级</a-select-option>
          </a-select>
        </a-col>
        <a-col :xs="24" :sm="12" :md="4">
          <a-button type="primary" block @click="handleSearch">
            <SearchOutlined /> 搜索
          </a-button>
        </a-col>
      </a-row>
    </a-card>

    <!-- 资源统计卡片 -->
    <a-row :gutter="[16, 16]" style="margin-bottom: 24px;">
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="总资源数" :value="totalResources" desc="个学习资源" :icon="BookOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="已学习" :value="learnedResources" desc="个资源" :icon="CheckCircleOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="收藏资源" :value="favoriteResources" desc="个资源" :icon="StarOutlined" />
      </a-col>
      <a-col :xs="24" :sm="12" :md="6">
        <StatCard label="学习时长" :value="`${learningHours}小时`" desc="累计学习" :icon="ClockCircleOutlined" />
      </a-col>
    </a-row>

    <!-- 资源列表 -->
    <a-card class="resource-list-card" :bordered="false">
      <div class="resource-list-header">
        <h3>推荐学习资源</h3>
        <a-radio-group v-model:value="viewMode" button-style="solid">
          <a-radio-button value="card">卡片视图</a-radio-button>
          <a-radio-button value="list">列表视图</a-radio-button>
        </a-radio-group>
      </div>

      <!-- 卡片视图 -->
      <div v-if="viewMode === 'card'" class="resource-card-grid">
        <a-col :xs="24" :sm="12" :lg="8" :xl="6" v-for="resource in filteredResources" :key="resource.id">
          <div class="resource-item">
            <ExamCard :title="resource.title" :category="getCategoryName(resource.category)"
              :status-tag="{ color: getDifficultyColor(resource.difficulty), text: getDifficultyName(resource.difficulty) }"
              :meta-items="[
                { icon: ClockCircleOutlined, text: resource.duration },
                { icon: StarOutlined, text: resource.isFavorite ? '已收藏' : '未收藏' }
              ]" action-text="开始学习" @action-click="() => startLearning(resource.id)" />
            <a-button shape="circle" @click="toggleFavorite(resource.id)"
              style="position: absolute; top: 8px; right: 8px; z-index: 1;">
              <template #icon>
                <StarOutlined :style="{ color: resource.isFavorite ? '#faad14' : 'inherit' }" />
              </template>
            </a-button>
          </div>
        </a-col>
      </div>

      <!-- 列表视图 -->
      <div v-else class="resource-table-view">
        <a-table :columns="tableColumns" :data-source="filteredResources" row-key="id" :pagination="false">
          <template #bodyCell="{ record, column }">
            <template v-if="column.key === 'action'">
              <a-button type="primary" size="small" @click="startLearning(record.id)">
                开始学习
              </a-button>
              <a-button size="small" @click="toggleFavorite(record.id)" style="margin-left: 8px;">
                <StarOutlined :style="{ color: record.isFavorite ? '#faad14' : 'inherit' }" />
                {{ record.isFavorite ? '取消收藏' : '收藏' }}
              </a-button>
            </template>
            <template v-if="column.key === 'progress'">
              <a-progress :percent="record.progress" size="small" />
            </template>
            <template v-if="column.key === 'difficulty'">
              <a-tag :color="getDifficultyColor(record.difficulty)">
                {{ getDifficultyName(record.difficulty) }}
              </a-tag>
            </template>
          </template>
        </a-table>
      </div>

      <!-- 分页 -->
      <div class="pagination-container">
        <a-pagination v-model:current="currentPage" :page-size="pageSize" :total="filteredResources.length"
          @change="handlePageChange" show-size-changer show-quick-jumper :show-total="(total) => `共 ${total} 个资源`" />
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { SearchOutlined, BookOutlined, CheckCircleOutlined, ClockCircleOutlined, StarOutlined } from '@ant-design/icons-vue';
import StatCard from '@/components/card/StatCard.vue';
import ExamCard from '@/components/card/ExamCard.vue';
import { Card, Input, Select, Button, Row, Col, Radio, Table, Pagination, Progress, Tag } from 'ant-design-vue';

// 路由实例
const router = useRouter();

// 状态变量
const searchText = ref('');
const selectedCategory = ref('');
const selectedDifficulty = ref('');
const viewMode = ref('card');
const currentPage = ref(1);
const pageSize = ref(12);

// 资源分类选项
const categories = [
  { label: '视频教程', value: 'video' },
  { label: '文档资料', value: 'document' },
  { label: '练习题', value: 'exercise' },
  { label: '案例分析', value: 'case' },
  { label: '代码示例', value: 'code' },
  { label: '思维导图', value: 'mindmap' },
];

// 模拟资源数据
const resources = ref([
  {
    id: 1,
    title: 'Vue3组件化开发实战',
    category: 'video',
    difficulty: 'intermediate',
    duration: '45分钟',
    progress: 65,
    isFavorite: true,
    description: '详细讲解Vue3组件化开发的核心概念和实战技巧'
  },
  {
    id: 2,
    title: 'TypeScript类型系统详解',
    category: 'document',
    difficulty: 'advanced',
    duration: '30分钟',
    progress: 20,
    isFavorite: false,
    description: '深入理解TypeScript的类型系统和高级特性'
  },
  {
    id: 3,
    title: '前端性能优化实践',
    category: 'case',
    difficulty: 'intermediate',
    duration: '60分钟',
    progress: 0,
    isFavorite: true,
    description: '通过实际案例学习前端性能优化的各种技巧和方法'
  },
  {
    id: 4,
    title: 'React Hooks完全指南',
    category: 'video',
    difficulty: 'beginner',
    duration: '50分钟',
    progress: 100,
    isFavorite: false,
    description: '从入门到精通React Hooks的使用方法和最佳实践'
  },
  {
    id: 5,
    title: 'JavaScript异步编程模式',
    category: 'document',
    difficulty: 'advanced',
    duration: '40分钟',
    progress: 80,
    isFavorite: true,
    description: '详细介绍JavaScript中的各种异步编程模式和应用场景'
  },
  {
    id: 6,
    title: 'CSS Grid布局实战',
    category: 'code',
    difficulty: 'beginner',
    duration: '25分钟',
    progress: 0,
    isFavorite: false,
    description: '通过实例学习CSS Grid布局的使用方法和技巧'
  }
]);

// 计算属性 - 筛选后的资源
const filteredResources = computed(() => {
  return resources.value.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchText.value.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchText.value.toLowerCase());
    const matchesCategory = !selectedCategory.value || resource.category === selectedCategory.value;
    const matchesDifficulty = !selectedDifficulty.value || resource.difficulty === selectedDifficulty.value;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });
});

// 统计数据
const totalResources = computed(() => resources.value.length);
const learnedResources = computed(() => resources.value.filter(r => r.progress > 0).length);
const favoriteResources = computed(() => resources.value.filter(r => r.isFavorite).length);
const learningHours = computed(() => (resources.value.reduce((sum, r) => sum + parseInt(r.duration) * r.progress / 100 / 60, 0)).toFixed(1));

// 表格列定义
const tableColumns = [
  {
    title: '资源名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
    customRender: ({ record }) => {
      const categoryMap: Record<string, string> = {
        'video': '视频教程',
        'document': '文档资料',
        'exercise': '练习题',
        'case': '案例分析',
        'code': '代码示例',
        'mindmap': '思维导图'
      };
      return categoryMap[record.category] || record.category;
    }
  },
  {
    title: '难度',
    dataIndex: 'difficulty',
    key: 'difficulty',
  },
  {
    title: '时长',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: '学习进度',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
    title: '操作',
    key: 'action',
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

const startLearning = (resourceId: number) => {
  // 实际应用中这里会导航到学习页面
  console.log('开始学习资源:', resourceId);
  // router.push(`/student/knowledge/learn/${resourceId}`);
};

const toggleFavorite = (resourceId: number) => {
  const resource = resources.value.find(r => r.id === resourceId);
  if (resource) {
    resource.isFavorite = !resource.isFavorite;
  }
};

const getDifficultyName = (difficulty: string): string => {
  const difficultyMap: Record<string, string> = {
    'beginner': '初级',
    'intermediate': '中级',
    'advanced': '高级'
  };
  return difficultyMap[difficulty] || difficulty;
};

// 获取分类名称
const getCategoryName = (category: string): string => {
  const categoryMap: Record<string, string> = {
    'video': '视频教程',
    'document': '文档资料',
    'exercise': '练习题',
    'case': '案例分析',
    'code': '代码示例',
    'mindmap': '思维导图'
  };
  return categoryMap[category] || category;
};

// 获取难度颜色
const getDifficultyColor = (difficulty: string): string => {
  const colorMap: Record<string, string> = {
    'beginner': 'green',
    'intermediate': 'blue',
    'advanced': 'orange'
  };
  return colorMap[difficulty] || 'default';
};
</script>

<style scoped>
.knowledge-browse-page {
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

.resource-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.resource-card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  margin-bottom: 24px;
}

.resource-card-grid>div {
  padding: 0.5em;
}

.resource-table-view {
  margin-bottom: 24px;
}

.pagination-container {
  text-align: right;
  margin-top: 16px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-item:hover {
  background: #e6f7ff;
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 24px;
  margin-bottom: 8px;
  color: #1890ff;
}

.nav-text {
  font-size: 14px;
}

.resource-item {
  position: relative;
}
</style>
