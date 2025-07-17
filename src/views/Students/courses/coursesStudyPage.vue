<template>
  <div class="course-study-page">
    <!-- 顶部导航 -->
    <div class="study-header">
      <a-row align="middle">
        <a-col :span="18">
          <h1 class="course-title">{{ currentCourse.title }}</h1>
        </a-col>
        <a-col :span="6" class="text-right">
          <a-button type="primary" @click="goBack">
            <arrow-left-outlined /> 返回课程详情
          </a-button>
        </a-col>
      </a-row>
    </div>

    <!-- 主要内容区 -->
    <a-row class="study-content" :gutter="[24, 24]">
      <!-- 左侧学习资源区 -->
      <a-col :xs="24" :lg="16">
        <a-card class="resource-card">
          <!-- 资源标签页 -->
          <a-tabs v-model:activeKey="activeResourceTab" class="resource-tabs">
            <a-tab-pane key="video" tab="视频学习" />
            <a-tab-pane key="document" tab="文档资料" />
            <a-tab-pane key="assignment" tab="相关练习" />
            <a-tab-pane key="discussion" tab="留言讨论" />
          </a-tabs>

          <!-- 视频学习区 -->
          <div v-if="activeResourceTab === 'video'" class="video-container">
            <div class="video-player">
              <div class="placeholder">视频播放器</div>
              <video-poster :src="currentLesson.videoPoster" alt="课程视频封面"></video-poster>
            </div>
            <div class="video-info">
              <h3>{{ currentLesson.title }}</h3>
              <p class="lesson-desc">{{ currentLesson.description }}</p>
              <div class="video-controls">
                <a-button @click="playPrevious"><step-backward-outlined /> 上一课时</a-button>
                <a-button @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</a-button>
                <a-button @click="playNext">下一课时 <step-forward-outlined /></a-button>
                <a-divider type="vertical" />
                <a-button type="primary" @click="markAsCompleted">\ <check-circle-outlined /> {{
                  currentLesson.isCompleted ? '已完成' : '标记为已完成' }}\ </a-button>
              </div>
            </div>
          </div>

          <!-- 文档资料区 -->
          <div v-if="activeResourceTab === 'document'" class="document-container">
            <a-card title="课程文档">\ <div class="document-content" v-html="currentLesson.documentContent"></div>
              <div class="document-actions" style="margin-top: 20px;">
                <a-button icon={<download-outlined />}>下载文档</a-button>
              </div>
            </a-card>
          </div>

          <!-- 相关练习区 -->
          <div v-if="activeResourceTab === 'assignment'" class="assignment-container">
            <a-list item-layout="vertical" :data-source="currentLesson.assignments" :render-item="(item) => {
              return (
                <a-list - item >
                <a-list - item - meta
        title = {< a href = '#' > { item.title } </>
            }
        description = {`截止日期: ${item.deadline}`}
      />
              < div class='assignment-status' >
                <a-badge : status = 'item.status === " completed" ? "success" : "processing"' :text='item.status === "completed" ? "已完成" : "未完成"'></a-badge>
        <a-button size=' small' style='margin-left: 10px;'>开始做</a-button>
          </div>
          </a-list-item>
          )
          }" />
  </div>

  <!-- 留言讨论区 -->
  <div v-if="activeResourceTab === 'discussion'" class="discussion-container">
    <div class="discussion-input">
      <a-textarea placeholder="写下你的疑问或想法..." v-model:value="newComment" rows="3"></a-textarea>
      <div class="discussion-actions" style="margin-top: 10px; text-align: right;">
        <a-button type="primary" @click="submitComment">发布留言</a-button>
      </div>
    </div>
    <a-divider>讨论区 ({{ comments.length }})</a-divider>
    <a-list item-layout="horizontal" :data-source="comments" :render-item="(item) => {
      return (
        <a-list - item >
        <a-list - item - meta
        avatar = {< a - avatar : src = 'item.avatar' />}
        title = { item.author }
    description = { item.time }
      />
      <div class='comment-content' > { item.content } </div>
        < div class='comment-actions' >
          <a @click='replyToComment(item)' > 回复 </a>
            < a - divider type = 'vertical' />
              <a @click='likeComment(item)' > { item.likes } < like - outlined /> </a>
                </>
                </a-list-item>
  )
}
    </div>
      </a-card>
      </a-col>

      < !--右侧章节导航区 -->
        <a-col : xs =" 24" :lg="8">
      <a-card class="chapters-card" title="课程章节">
        <a-tree v-model:expandedKeys="expandedChapters" v-model:selectedKeys="selectedChapterKey"
          :tree-data="courseChapters" :default-expand-all="true" @select="onChapterSelect" />
      </a-card>

      <!-- 学习进度 -->
      <a-card class="progress-card" style="margin-top: 20px;">
        <div class="progress-info">
          <h3>学习进度</h3>
          <p>{{ completedLessons }}/{{ totalLessons }} 课时 ({{ progressPercentage }}%)</p>
        </div>
        <a-progress :percent="progressPercentage" status="active" />
      </a-card>
      </a-col>
      </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import {
  ArrowLeftOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  CheckCircleOutlined,
  DownloadOutlined,
  LikeOutlined
} from '@ant-design/icons-vue';
import { ARow, ACol, AButton, ATabs, ATabPane, ACard, ATree, AProgress, AList, ABadge, ATextarea, ADivider, AAvatar } from 'ant-design-vue';

// 路由相关
const router = useRouter();

// 状态管理
const activeResourceTab = ref<string>('video');
const expandedChapters = ref<string[]>(['1', '1-1']); // 默认展开的章节
const selectedChapterKey = ref<string[]>(['1-1-1']); // 默认选中的课时
const isPlaying = ref<boolean>(false);
const newComment = ref<string>('');

// 模拟课程数据
const currentCourse = ref<any>({
  id: 1,
  title: 'Vue3+TypeScript开发实战',
  chapters: [
    {
      key: '1',
      title: 'Vue3基础入门',
      children: [
        {
          key: '1-1',
          title: '第1节：Vue3简介与环境搭建',
          children: [
            {
              key: '1-1-1',
              title: '1.1.1 Vue3新特性介绍',
              isCompleted: true,
              type: 'lesson'
            },
            {
              key: '1-1-2',
              title: '1.1.2 开发环境搭建',
              isCompleted: true,
              type: 'lesson'
            },
            {
              key: '1-1-3',
              title: '1.1.3 Vue CLI使用指南',
              isCompleted: false,
              type: 'lesson'
            }
          ]
        },
        {
          key: '1-2',
          title: '第2节：Vue3模板语法',
          children: [
            {
              key: '1-2-1',
              title: '1.2.1 插值表达式',
              isCompleted: false,
              type: 'lesson'
            },
            {
              key: '1-2-2',
              title: '1.2.2 指令系统',
              isCompleted: false,
              type: 'lesson'
            }
          ]
        }
      ]
    },
    {
      key: '2',
      title: 'TypeScript集成应用',
      children: [
        {
          key: '2-1',
          title: '第1节：TypeScript基础',
          children: [
            {
              key: '2-1-1',
              title: '2.1.1 TypeScript简介',
              isCompleted: false,
              type: 'lesson'
            },
            {
              key: '2-1-2',
              title: '2.1.2 基本类型定义',
              isCompleted: false,
              type: 'lesson'
            }
          ]
        }
      ]
    }
  ]
});

// 当前课时数据
const currentLesson = ref<any>({
  id: '1-1-3',
  title: '1.1.3 Vue CLI使用指南',
  description: '本节介绍Vue CLI的安装、配置和常用命令，帮助你快速搭建Vue项目',
  videoPoster: 'https://picsum.photos/seed/vuecli/1200/675',
  duration: '25:30',
  isCompleted: false,
  documentContent: `<h3>Vue CLI使用指南</h3><p>Vue CLI是一个基于Vue.js进行快速开发的完整系统。</p><h4>安装步骤：</h4><ol><li>安装Node.js</li><li>npm install -g @vue/cli</li><li>vue create my-project</li></ol><h4>常用命令：</h4><ul><li>vue serve</li><li>vue build</li><li>vue ui</li></ul>`,
  assignments: [
    {
      id: 1,
      title: 'Vue CLI安装与项目创建',
      deadline: '2023-12-31',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Vue项目配置练习',
      deadline: '2023-12-31',
      status: 'pending'
    }
  ]
});

// 讨论区数据
const comments = ref<any[]>([
  {
    id: 1,
    author: '张三',
    avatar: 'https://picsum.photos/seed/user1/100/100',
    time: '2小时前',
    content: '请问Vue CLI和Vite有什么区别？',
    likes: 5
  },
  {
    id: 2,
    author: '李四',
    avatar: 'https://picsum.photos/seed/user2/100/100',
    time: '1小时前',
    content: '这节课讲得很详细，谢谢老师！',
    likes: 3
  }
]);

// 计算属性：课程章节树结构
const courseChapters = computed(() => {
  // 格式化章节数据，添加完成状态标记
  const formatChapter = (chapters: any[]) => {
    return chapters.map(chapter => {
      let title = chapter.title;
      // 如果是课时，添加完成状态标记
      if (chapter.type === 'lesson') {
        title = `${title} ${chapter.isCompleted ? '✓' : ''}`;
      }
      return {
        ...chapter,
        title,
        children: chapter.children ? formatChapter(chapter.children) : undefined
      };
    });
  };
  return formatChapter(currentCourse.value.chapters);
});

// 计算属性：学习进度
const totalLessons = computed(() => {
  // 递归计算总课时数
  const countLessons = (chapters: any[]) => {
    let count = 0;
    chapters.forEach(chapter => {
      if (chapter.type === 'lesson') {
        count++;
      } else if (chapter.children) {
        count += countLessons(chapter.children);
      }
    });
    return count;
  };
  return countLessons(currentCourse.value.chapters);
});

// 计算属性：已完成课时数
const completedLessons = computed(() => {
  // 递归计算已完成课时数
  const countCompleted = (chapters: any[]) => {
    let count = 0;
    chapters.forEach(chapter => {
      if (chapter.type === 'lesson' && chapter.isCompleted) {
        count++;
      } else if (chapter.children) {
        count += countCompleted(chapter.children);
      }
    });
    return count;
  };
  return countCompleted(currentCourse.value.chapters);
});

// 计算属性：进度百分比
const progressPercentage = computed(() => {
  return Math.round((completedLessons.value / totalLessons.value) * 100);
});

// 方法：章节选择
const onChapterSelect = (selectedKeys: string[], info: any) => {
  if (info.node.dataRef.type === 'lesson') {
    // 这里可以根据选择的课时key加载对应的课时数据
    console.log('选择课时:', selectedKeys[0]);
    // 在实际应用中，这里会调用API获取课时详情
    // 这里仅做演示，不改变当前课时
  }
};

// 方法：播放/暂停视频
const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};

// 方法：上一课时
const playPrevious = () => {
  message.info('播放上一课时');
  // 实际应用中这里会切换到上一课时
};

// 方法：下一课时
const playNext = () => {
  message.info('播放下一课时');
  // 实际应用中这里会切换到下一课时
};

// 方法：标记为已完成
const markAsCompleted = () => {
  currentLesson.value.isCompleted = !currentLesson.value.isCompleted;
  message.success(currentLesson.value.isCompleted ? '标记成功' : '取消标记成功');
};

// 方法：提交评论
const submitComment = () => {
  if (!newComment.value.trim()) {
    message.warning('请输入评论内容');
    return;
  }
  // 添加新评论
  comments.value.unshift({
    id: comments.value.length + 1,
    author: '当前用户',
    avatar: 'https://picsum.photos/seed/currentuser/100/100',
    time: '刚刚',
    content: newComment.value,
    likes: 0
  });
  // 清空输入框
  newComment.value = '';
  message.success('评论发布成功');
};

// 方法：回复评论
const replyToComment = (comment: any) => {
  message.info(`回复 ${comment.author}`);
  // 实际应用中这里会打开回复框
};

// 方法：点赞评论
const likeComment = (comment: any) => {
  comment.likes++;
};

// 方法：返回课程详情
const goBack = () => {
  router.push('/students/courses/details');
};
</script>

<style scoped>
.course-study-page {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.study-header {
  margin-bottom: 20px;
}

.course-title {
  margin: 0;
  font-size: 24px;
  color: #1a1a1a;
}

.study-content {
  margin-top: 20px;
}

.resource-card,
.chapters-card,
.progress-card {
  height: 100%;
}

.video-container {
  padding: 10px 0;
}

.video-player {
  width: 100%;
  height: 400px;
  background-color: #000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
}

.placeholder {
  color: #fff;
  font-size: 18px;
}

.video-info h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.lesson-desc {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.video-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.document-container,
.assignment-container,
.discussion-container {
  padding: 10px;
}

.document-content {
  line-height: 1.8;
  color: #333;
}

.document-content h3,
.document-content h4 {
  margin: 16px 0 8px;
}

.document-content ol,
.document-content ul {
  padding-left: 24px;
  margin-bottom: 16px;
}

.discussion-input {
  margin-bottom: 20px;
}

.comment-content {
  margin-bottom: 8px;
  flex: 1;
}

.comment-actions {
  display: flex;
  gap: 16px;
  color: #999;
  font-size: 14px;
}

.comment-actions a {
  color: #999;
  transition: color 0.2s;
}

.comment-actions a:hover {
  color: #1890ff;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.progress-info h3 {
  margin: 0;
  font-size: 16px;
}

.progress-info p {
  margin: 0;
  color: #666;
}

/* 章节树样式 */
.ant-tree-node-content-wrapper {
  padding: 4px 0;
}

.ant-tree-node-selected .ant-tree-node-content-wrapper {
  background-color: #f0f7ff;
  color: #1890ff;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .video-player {
    height: 300px;
  }
}

@media (max-width: 576px) {
  .video-player {
    height: 200px;
  }

  .video-controls {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
