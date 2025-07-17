<template>
  <div id="basicLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer style="background: #001529;" class="footer">
        <div style="text-align: center; color: #fff;">
          <p>Copyright © 2024 智慧校园管理系统</p>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';

</script>

<style scoped>
.header {
  padding-inline: 1em;
}

.content {
  overflow-x: hidden;
  overflow-y: auto;
  /* padding: 1em; */
}

.footer {
  padding: 1em;
}
</style>
