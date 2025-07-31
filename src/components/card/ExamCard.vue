<template>
  <a-card class="exam-card" :bordered="false" hoverable>
    <div class="exam-card-header">
      <span class="exam-category">{{ category }}</span>
      <template v-if="statusTag">
        <a-tag :color="statusTag.color">{{ statusTag.text }}</a-tag>
      </template>
      <template v-else-if="difficulty">
        <span :class="['exam-difficulty', difficulty]">
          {{ difficulty === 'easy' ? '简单' : difficulty === 'medium' ? '中等' : '困难' }}
        </span>
      </template>
    </div>
    <div class="exam-card-body">
      <h4 class="exam-title">{{ title }}</h4>
      <p class="exam-desc" v-if="description">{{ description }}</p>
      <template v-if="score">
        <div class="exam-score">
          <span class="score-value">{{ score }}</span>
          <span class="score-info">{{ scoreInfo }}</span>
        </div>
      </template>
      <div class="exam-meta">
        <span v-for="(meta, index) in metaItems" :key="index">
          <component :is="meta.icon" />
          {{ meta.text }}
        </span>
      </div>
    </div>
    <div class="exam-card-footer">
      <a-button type="primary" block @click="onActionClick">
        {{ actionText }}
      </a-button>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Card, Button, Tag } from 'ant-design-vue';
import type { IconDefinition } from '@ant-design/icons-vue';

const props = defineProps<{
  title: string;
  category: string;
  actionText: string;
  metaItems: Array<{
    icon: IconDefinition;
    text: string;
  }>;
  description?: string;
  score?: number;
  scoreInfo?: string;
  statusTag?: {
    color: string;
    text: string;
  };
  difficulty?: 'easy' | 'medium' | 'hard';
}>();

const emit = defineEmits<{
  (e: 'action-click'): void;
}>();

const onActionClick = () => {
  emit('action-click');
};
</script>

<style scoped>
.exam-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.exam-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.exam-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #f5f5f5;
}

.exam-category {
  font-size: 12px;
  color: #1890ff;
  background-color: rgba(24, 144, 255, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
}

.exam-difficulty {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
}

.exam-difficulty.easy {
  color: #52c41a;
  background-color: rgba(82, 196, 26, 0.1);
}

.exam-difficulty.medium {
  color: #faad14;
  background-color: rgba(250, 173, 20, 0.1);
}

.exam-difficulty.hard {
  color: #f5222d;
  background-color: rgba(245, 34, 45, 0.1);
}

.exam-card-body {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.exam-title {
  font-size: 16px;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.exam-desc {
  color: #666;
  font-size: 14px;
  margin: 0 0 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.exam-score {
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
}

.score-value {
  font-size: 32px;
  font-weight: bold;
  color: #1890ff;
}

.score-info {
  color: #666;
  margin-left: 8px;
}

.exam-meta {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 12px;
  margin-top: auto;
}

.exam-meta span {
  display: flex;
  align-items: center;
}

.exam-meta span svg {
  margin-right: 4px;
  font-size: 12px;
}

.exam-card-footer {
  padding: 12px 16px;
  border-top: 1px solid #f0f0f0;
}
</style>
