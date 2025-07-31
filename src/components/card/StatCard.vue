<template>
  <a-card class="stat-card" :bordered="false">
    <div class="stat-content">
      <p class="stat-label">{{ label }}</p>
      <p class="stat-value">{{ value }}</p>
      <p class="stat-desc">{{ desc }}</p>
    </div>
    <div class="stat-icon">
      <component :is="icon" />
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Card } from 'ant-design-vue';
import type { IconDefinition } from '@ant-design/icons-vue';

const props = defineProps<{
  label: string;
  value: string | number;
  desc: string;
  icon: IconDefinition;
}>();
</script>

<style scoped>
.stat-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  overflow: hidden;
  position: relative;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.stat-content {
  padding: 16px;
  position: relative;
  z-index: 1;
}

.stat-label {
  color: #666;
  font-size: 14px;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: #1890ff;
}

.stat-desc {
  color: #999;
  font-size: 12px;
  margin: 4px 0 0;
}

.stat-icon {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 60px;
  height: 60px;
  background-color: rgba(24, 144, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1890ff;
  font-size: 24px;
}
</style>
