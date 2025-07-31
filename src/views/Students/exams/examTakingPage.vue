<template>
  <a-layout class="exam-container">
    <!-- 主内容区域 -->
    <a-layout-content class="exam-content">
      <!-- 顶部导航栏 -->
      <div class="exam-header">
        <h1>{{ examTitle }}</h1>
        <div class="exam-meta">
          <span>考试时间: {{ examTime }}分钟</span>
          <span>总分: {{ totalScore }}分</span>
        </div>
      </div>

      <!-- 题目区域 -->
      <div class="questions-container">
        <div v-for="(question, index) in questions" :key="question.id" :id="`question-${question.id}`"
          class="question-card">
          <div class="question-header">
            <span class="question-number">{{ index + 1 }}.</span>
            <span class="question-type">{{ getQuestionTypeName(question.type) }}</span>
            <span class="question-score">({{ question.score }}分)</span>
            <a-badge :status="question.status === 'completed' ? 'success' : 'processing'"
              :text="question.status === 'completed' ? '已完成' : '未完成'" class="question-status" />
          </div>
          <div class="question-content">
            <p>{{ question.content }}</p>

            <!-- 单选题 -->
            <div v-if="question.type === 'single_choice'">
              <a-radio-group v-model:value="userAnswers[question.id]" @change="handleAnswerChange(question.id)">
                <a-radio :value="option.id" v-for="option in question.options" :key="option.id">{{ option.content
                }}</a-radio>
              </a-radio-group>
            </div>

            <!-- 多选题 -->
            <div v-if="question.type === 'multiple_choice'">
              <a-checkbox-group v-model:value="userAnswers[question.id]" @change="handleAnswerChange(question.id)">
                <a-checkbox :value="option.id" v-for="option in question.options" :key="option.id">{{ option.content
                }}</a-checkbox>
              </a-checkbox-group>
            </div>

            <!-- 填空题 -->
            <div v-if="question.type === 'fill_blank'">
              <a-input v-model:value="userAnswers[question.id]" placeholder="请输入答案"
                @change="handleAnswerChange(question.id)" />
            </div>
          </div>
        </div>
      </div>
    </a-layout-content>

    <!-- 侧边栏 -->
    <a-layout-sider :width="sidebarWidth" :collapsible="true" collapsedWidth="1" v-model:collapsed="sidebarCollapsed"
      class="question-sidebar">
      <div class="sidebar-header">
        <h2>题目导航</h2>
        <div class="exam-timer">
          <a-typography-text strong>剩余时间:</a-typography-text>
          <a-typography-text type="danger" strong>{{ formattedTime }}</a-typography-text>
        </div>
      </div>

      <div class="question-list">
        <div v-for="(question, index) in questions" :key="question.id"
          :class="['question-item', `status-${question.status}`]" @click="scrollToQuestion(question.id)">
          <span class="question-index">{{ index + 1 }}</span>
          <span class="question-type-short">{{ getQuestionTypeShortName(question.type) }}</span>
        </div>
      </div>

      <div class="sidebar-actions">
        <a-button type="primary" danger block @click="handleSubmit">提交试卷</a-button>
        <a-button block @click="scrollToTop" style="margin-top: 8px;">返回顶部</a-button>
      </div>
    </a-layout-sider>

    <!-- 侧边栏切换按钮 -->
    <a-button class="sidebar-toggle"
      :style="{ position: 'fixed', right: sidebarCollapsed ? '20px' : `${sidebarWidth + 20}px`, bottom: '20px', zIndex: 11 }"
      @click="sidebarCollapsed = !sidebarCollapsed"><template v-if="sidebarCollapsed">
        <MenuUnfoldOutlined />
      </template><template v-else>
        <MenuFoldOutlined />
      </template>
    </a-button>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, onUnmounted } from 'vue';
import { Layout, Radio, Checkbox, Input, Button, Badge, Typography } from 'ant-design-vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';

// 类型定义
interface Question {
  id: number;
  type: 'single_choice' | 'multiple_choice' | 'fill_blank';
  content: string;
  score: number;
  options?: Array<{ id: number; content: string }>;
  status: 'completed' | 'incomplete';
}

// 模拟考试数据 - 实际应用中应从API获取
const examTitle = ref('Web前端技术期末考试');
const examTime = ref(60); // 考试时长(分钟)
const totalScore = ref(100);
const questions = ref<Question[]>([
  {
    id: 1,
    type: 'single_choice',
    content: 'Vue.js是什么类型的JavaScript框架?',
    score: 5,
    options: [
      { id: 1, content: '命令式框架' },
      { id: 2, content: '声明式框架' },
      { id: 3, content: '函数式框架' },
      { id: 4, content: '面向对象框架' },
    ],
    status: 'incomplete'
  },
  {
    id: 2,
    type: 'multiple_choice',
    content: '以下哪些是Vue 3的特性?',
    score: 10,
    options: [
      { id: 1, content: 'Composition API' },
      { id: 2, content: 'Options API' },
      { id: 3, content: 'Reactivity System' },
      { id: 4, content: 'Virtual DOM' },
    ],
    status: 'incomplete'
  },
  {
    id: 3,
    type: 'fill_blank',
    content: 'Vue 3中，用于创建响应式数据的API是______。',
    score: 5,
    status: 'incomplete'
  },
  {
    id: 4,
    type: 'single_choice',
    content: '下列哪个不是Vue的生命周期钩子函数?',
    score: 5,
    options: [
      { id: 1, content: 'onMounted' },
      { id: 2, content: 'onUpdated' },
      { id: 3, content: 'onRender' },
      { id: 4, content: 'onUnmounted' },
    ],
    status: 'incomplete'
  },
  {
    id: 5,
    type: 'fill_blank',
    content: 'Vue组件中，用于接收父组件传递数据的选项是______。',
    score: 5,
    status: 'incomplete'
  },
]);

// 状态管理
const sidebarCollapsed = ref(false);
const sidebarWidth = ref(250);
const userAnswers = ref<Record<number, any>>({});
const remainingTime = ref(examTime.value * 60); // 剩余时间(秒)
let timer: NodeJS.Timeout | null = null;

// 格式化时间显示
const formattedTime = computed(() => {
  const minutes = Math.floor(remainingTime.value / 60);
  const seconds = remainingTime.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

// 生命周期钩子
onMounted(() => {
  // 初始化答案对象
  questions.value.forEach(question => {
    userAnswers.value[question.id] = question.type === 'multiple_choice' ? [] : null;
  });

  // 启动计时器
  startTimer();
});

onUnmounted(() => {
  // 清理计时器
  if (timer) clearInterval(timer);
});

// 计时器函数
const startTimer = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--;
    } else {
      handleSubmit();
    }
  }, 1000);
};

// 题目类型名称转换
const getQuestionTypeName = (type: string): string => {
  switch (type) {
    case 'single_choice': return '单选题';
    case 'multiple_choice': return '多选题';
    case 'fill_blank': return '填空题';
    default: return '未知题型';
  }
};

// 题目类型简称转换
const getQuestionTypeShortName = (type: string): string => {
  switch (type) {
    case 'single_choice': return '单';
    case 'multiple_choice': return '多';
    case 'fill_blank': return '填';
    default: return '?';
  }
};

// 滚动到指定题目
const scrollToQuestion = (questionId: number) => {
  const element = document.getElementById(`question-${questionId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // 高亮效果
    element.style.animation = 'none';
    setTimeout(() => {
      element.style.animation = 'questionHighlight 1s ease-in-out';
    }, 10);
  }
};


// 答案变更时更新完成状态：有有效值则为已完成，否则为未完成
const handleAnswerChange = (questionId: number) => {
  const question = questions.value.find(q => q.id === questionId);
  const answer = userAnswers.value[questionId];

  if (question) {
    let isCompleted = false;

    // 根据题型判断答案是否有效
    if (question.type === 'single_choice') {
      isCompleted = answer !== null && answer !== undefined;
    } else if (question.type === 'multiple_choice') {
      isCompleted = Array.isArray(answer) && answer.length > 0;
    } else if (question.type === 'fill_blank') {
      isCompleted = !!answer && answer.trim() !== '';
    }

    // 更新状态
    question.status = isCompleted ? 'completed' : 'incomplete';
  }
};

// 提交试卷
const handleSubmit = () => {
  if (timer) clearInterval(timer);

  // 收集答案数据
  const submissionData = {
    examId: 1, // 实际应用中应从路由或props获取
    answers: userAnswers.value,
    completedQuestions: questions.value.filter(q => q.status === 'completed').length,
    totalQuestions: questions.value.length
  };

  console.log('提交试卷数据:', submissionData);
  // 实际应用中这里会调用API提交答案
  // api.submitExam(submissionData).then(() => {
  //   message.success('试卷提交成功!');
  //   router.push('/student/exams');
  // });

  // 模拟提交成功
  if (confirm('确定要提交试卷吗？提交后将无法修改答案。')) {
    alert('试卷提交成功!');
  } else {
    // 如果取消提交，重新启动计时器
    startTimer();
  }
};

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.exam-container {
  min-height: 100vh;
}

.exam-content {
  margin-right: 250px;
  /* 为侧边栏留出空间 */
  padding: 24px;
}

@media (max-width: 768px) {
  .exam-content {
    margin-right: 0;
  }
}

.exam-header {
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8e8;
}

.exam-meta {
  margin-top: 12px;
  color: #666;
}

.exam-meta span {
  margin-right: 24px;
}

.questions-container {
  max-width: 800px;
  margin: 0 auto;
}

.question-card {
  margin-bottom: 24px;
  padding: 24px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  transition: all 0.3s;
  background-color: #fff;
}

.question-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* 题目高亮动画 */
@keyframes questionHighlight {
  0% {
    background-color: rgba(255, 248, 230, 0);
  }

  50% {
    background-color: rgba(255, 248, 230, 0.5);
  }

  100% {
    background-color: rgba(255, 248, 230, 0);
  }
}

.question-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.question-number {
  font-weight: bold;
  margin-right: 8px;
}

.question-type {
  margin-right: 16px;
  padding: 2px 8px;
  background: #f5f5f5;
  border-radius: 12px;
  font-size: 12px;
}

.question-score {
  color: #666;
  margin-right: 16px;
}

.question-status {
  margin-left: auto;
}

.question-content {
  margin-bottom: 24px;
}

.question-content p {
  margin: 0 0 16px 0;
  line-height: 1.5;
}

.question-actions {
  display: flex;
  justify-content: flex-end;
}

.question-sidebar {
  background: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.06);
  overflow-y: auto;
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  height: 80vh;
  z-index: 10;
  flex: 0 0 250px;
  max-width: 250px;
  min-width: 250px;
  width: 250px;
}

.sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;
}

.exam-timer {
  margin-top: 12px;
  padding: 8px;
  background: #fff1f0;
  border-radius: 4px;
  text-align: center;
}

.question-list {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.question-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.question-item:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.status-completed {
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  color: #52c41a;
}

.status-incomplete {
  background: #fff2e8;
  border: 1px solid #ffccc7;
  color: #fa8c16;
}

.question-index {
  font-weight: bold;
  margin-right: 4px;
}

.sidebar-actions {
  padding: 16px;
  border-top: 1px solid #e8e8e8;
  position: sticky;
  bottom: 0;
  background: #fff;
}

.sidebar-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
