<template>
  <a-layout class="course-study-layout">
    <!-- 左侧学习资源区域 -->
    <a-layout-sider width="70%" :style="{ background: '#fff' }">
      <div class="resource-container">
        <!-- 视频资源 -->
        <a-card class="resource-card" title="课程视频">
          <div class="video-placeholder">
            <a-spin size="large" tip="加载视频中..." />
          </div>
          <div class="resource-info">
            <h3>Vue.js 基础入门 - 组件化开发</h3>
            <p>本节将学习Vue.js的组件化开发思想和实践方法，包括组件通信、生命周期等核心概念。</p>
          </div>
          <!-- 标签 -->
          <div class="resource-tags">
            <a-tag color="blue">Vue.js</a-tag>
            <a-tag color="green">组件化</a-tag>
            <a-tag color="orange">前端开发</a-tag>
          </div>
          <!-- 关联资源 -->
          <div class="related-resources">
            <h4>关联资源</h4>
            <a-list size="small">
              <a-list-item><a href="#">组件化开发文档</a></a-list-item>
              <a-list-item><a href="#">Vue生命周期图解</a></a-list-item>
              <a-list-item><a href="#">组件通信示例代码</a></a-list-item>
            </a-list>
          </div>
        </a-card>

        <!-- 切换区域：讨论区/练习区 -->
        <a-tabs default-active-key="discussion" class="content-tabs">
          <a-tab-pane key="discussion" tab="留言讨论区">
            <a-list item-layout="horizontal" :data-source="discussionList" class="discussion-list">
              <template #renderItem="item">
                <a-list-item>
                  <a-list-item-meta>
                    title={<a>{{ item.author }}</a>}
                    :description="item.content"
                    <template #avatar>
                      <a-avatar :src="item.avatar" />
                    </template>
                  </a-list-item-meta>
                  <div class="discussion-time">{{ item.time }}</div>
                </a-list-item>
              </template>
            </a-list>
            <a-input placeholder="写下你的疑问或想法..." class="discussion-input" />
          </a-tab-pane>
          <a-tab-pane key="exercises" tab="相关练习">
            <a-list :data-source="exercises" class="exercises-list">
              <template #renderItem="item">
                <a-list-item>
                  <a-list-item-meta :description="item.description">
                    <template #title>
                      <a>{{ item.title }}</a>
                    </template>
                  </a-list-item-meta>
                  <a-tag :color="item.status === 'completed' ? 'green' : 'gold'">
                    {{ item.status === 'completed' ? '已完成' : '待完成' }}
                  </a-tag>
                </a-list-item>
              </template>
            </a-list>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-layout-sider>

    <!-- 右侧章节区域 -->
    <a-layout-content :style="{ background: '#f0f2f5', padding: '24px' }">
      <a-card title="课程章节">
        <a-tree v-model:expandedKeys="expandedKeys" :tree-data="chapterData" :default-expand-all="true">
          <template #title="{ title, data }">
            <span class="chapter-title" style="display: flex; align-items: center;">
              <span>{{ title }}</span>
              <template v-if="data.status === 'completed'">
                <a-tag color="green" size="small" style="margin-left: 8px;">已完成</a-tag>
              </template>
              <template v-else-if="data.status === 'in-progress'">
                <a-tag color="gold" size="small" style="margin-left: 8px;">进行中</a-tag>
              </template>
              <template v-else-if="data.status === 'not-started'">
                <a-tag color="gray" size="small" style="margin-left: 8px;">未开始</a-tag>
              </template>
            </span>
          </template>
        </a-tree>
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Layout, Card, Tree, Tabs, List, Input, Tag, Avatar, Spin } from 'ant-design-vue';


// 章节数据
const chapterData = ref([
  {
    title: '第1章：Vue.js基础',
    key: '1',
    children: [
      {
        title: '1.1 Vue.js介绍',
        key: '1-1',
        status: 'completed'
      },
      {
        title: '1.2 环境搭建',
        key: '1-2',
        status: 'completed'
      },
      {
        title: '1.3 基本语法',
        key: '1-3',
        status: 'completed'
      }
    ]
  },
  {
    title: '第2章：组件化开发',
    key: '2',
    children: [
      {
        title: '2.1 组件基础',
        key: '2-1',
        status: 'completed'
      },
      {
        title: '2.2 组件通信',
        key: '2-2',
        status: 'in-progress'
      },
      {
        title: '2.3 组件生命周期',
        key: '2-3',
        status: 'not-started'
      }
    ]
  },
  {
    title: '第3章：路由与状态管理',
    key: '3',
    children: [
      {
        title: '3.1 Vue Router',
        key: '3-1',
        status: 'not-started'
      },
      {
        title: '3.2 Vuex/Pinia',
        key: '3-2',
        status: 'not-started'
      }
    ]
  }
]);

// 展开的节点
const expandedKeys = ref(['1', '2', '3']);

// 讨论区数据
const discussionList = ref([
  {
    author: '张三',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: '请问组件通信除了props和emit还有其他方式吗？',
    time: '2小时前'
  },
  {
    author: '李四',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: '视频里讲的生命周期钩子函数很清晰，谢谢老师！',
    time: '昨天'
  }
]);

// 练习数据
const exercises = ref([
  {
    title: '组件化基础练习',
    description: '创建一个简单的计数器组件，实现加减功能',
    status: 'completed'
  },
  {
    title: '组件通信练习',
    description: '实现父子组件之间的数据传递和事件触发',
    status: 'completed'
  },
  {
    title: '生命周期练习',
    description: '使用生命周期钩子函数实现数据加载和清理',
    status: 'not-started'
  }
]);
</script>

<style scoped>
.course-study-layout {
  min-height: 100vh;
}

.resource-container {
  padding: 24px;
}

.resource-card {
  margin-bottom: 24px;
}

.video-placeholder {
  height: 360px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.resource-info {
  margin-bottom: 16px;
}

.resource-tags {
  margin-bottom: 24px;
}

.related-resources h4 {
  margin-bottom: 8px;
  font-size: 16px;
}

.content-tabs {
  margin-top: 24px;
}

.discussion-list {
  margin-bottom: 16px;
  max-height: 400px;
  overflow-y: auto;
}

.discussion-input {
  width: 100%;
}

.exercises-list {
  max-height: 400px;
  overflow-y: auto;
}

.chapter-title {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
