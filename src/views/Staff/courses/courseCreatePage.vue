<template>
  <div class="course-create-page">
    <a-card title="创建新课程" :bordered="false">
      <a-tabs v-model:activeKey="activeTab" type="card">
        <a-tab-pane key="basic" tab="基础信息"></a-tab-pane>
        <a-tab-pane key="chapters" tab="章节管理"></a-tab-pane>
      </a-tabs>

      <!-- 基础信息表单 -->
      <a-form v-if="activeTab === 'basic'" :model="formState" :rules="formRules" ref="formRef" layout="vertical">
        <a-form-item label="课程代码" name="course_code">
          <a-input v-model:value="formState.course_code" placeholder="请输入课程代码" />
        </a-form-item>
        <a-form-item label="课程名称" name="course_title">
          <a-input v-model:value="formState.course_title" placeholder="请输入课程名称" />
        </a-form-item>
        <a-form-item label="课程介绍" name="description">
          <a-textarea v-model:value="formState.description" placeholder="请输入课程介绍" :rows="4" />
        </a-form-item>
        <a-form-item label="学分" name="credits">
          <a-input-number v-model:value="formState.credits" min="0" placeholder="请输入学分" />
        </a-form-item>
        <a-form-item label="所属院系" name="department">
          <a-select v-model:value="formState.department_id" placeholder="请选择院系"
            :options="departments.map(dept => ({ value: dept.department_id, label: dept.department_name }))">
          </a-select>
        </a-form-item>
        <a-form-item label="标签" name="tags">
          <a-tag-group v-model:value="formState.tags">
            <a-input v-model:value="inputValue" placeholder="输入标签并按回车添加" @pressEnter="handleAddTag"
              style="width: 160px" />
          </a-tag-group>
        </a-form-item>
        <a-form-item label="使用时间范围" name="timeRange">
          <a-range-picker v-model:value="formState.timeRange" format="YYYY-MM-DD" placeholder="请选择课程时间范围" />
        </a-form-item>
        <a-form-item label="课程封面" name="cover">
          <a-upload :showUploadList="false" action="/upload">
            <a-button>上传封面</a-button>
          </a-upload>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="handleSaveBasic">保存基础信息</a-button>
        </a-form-item>
      </a-form>

      <!-- 章节管理 -->
      <div v-else class="chapters-management">
        <div class="chapters-actions">
          <a-button type="primary" @click="showAddChapterModal(null)">+ 添加根章节</a-button>
        </div>
        <a-table :columns="treeColumns" :data-source="chaptersTree" :row-key="record => record.key"
          :tree-default-expand-all="true" :indent-size="20">
          <template #bodyCell="{ record, column }">
            <template v-if="column.key === 'action'">
              <div class="chapter-actions">
                <a-button type="default" size="small" @click="showAddChapterModal(record)">添加下级</a-button>
                <a-button type="primary" size="small" @click="showEditChapterModal(record)">编辑</a-button>
                <a-button type="primary" danger size="small" @click="handleDeleteChapter(record)">删除</a-button>
              </div>
            </template>
          </template>
        </a-table>

      </div>

      <!-- 章节编辑模态框 -->
      <a-modal v-model:visible="chapterModalVisible" :title="isEditChapter ? '编辑章节' : '新增章节'" @ok="handleSaveChapter"
        @cancel="handleCancelChapter">
        <a-form :model="currentChapter" :rules="chapterRules" ref="chapterFormRef" layout="vertical">
          <a-form-item label="章节名称" name="title">
            <a-input v-model:value="currentChapter.title" placeholder="请输入章节名称" />
          </a-form-item>
          <a-form-item label="章节描述" name="description">
            <a-textarea v-model:value="currentChapter.description" placeholder="请输入章节描述" :rows="3" />
          </a-form-item>
          <a-form-item label="排序号" name="sort_order">
            <a-input-number v-model:value="currentChapter.sort_order" min="1" placeholder="请输入排序号" />
          </a-form-item>
          <a-form-item label="章节资料标题" name="course_materials_add_request.title">
            <a-input v-model="currentChapter.course_materials_add_request.title" placeholder="请输入资料标题" />
          </a-form-item>
          <a-form-item label="资料路径/URL" name="course_materials_add_request.file_path_or_url">
            <a-input v-model:value="currentChapter.course_materials_add_request.file_path_or_url"
              placeholder="请输入资料路径或URL" />
          </a-form-item>
          <a-form-item label="资料类型" name="course_materials_add_request.material_type">
            <a-select v-model:value="currentChapter.course_materials_add_request.material_type" placeholder="请选择资料类型">
              <a-select-option value="PDF">PDF</a-select-option>
              <a-select-option value="VIDEO">视频</a-select-option>
              <a-select-option value="DOC">文档</a-select-option>
              <a-select-option value="OTHER">其他</a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-modal>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, h, onMounted, nextTick } from 'vue';
import { Form, Input, Select, Textarea, Tag, Button as AButton, Tree, Modal, DatePicker, InputNumber } from 'ant-design-vue';
import type { FormInstance, FormRules } from 'ant-design-vue';
import type { TableProps } from 'ant-design-vue';
import { getAllDepartmentsUsingGet } from '@/api/departmentsController'
import { addCoursesUsingPost } from '@/api/coursesController'
import { message } from 'ant-design-vue';

// 表单和状态定义
const formRef = ref<FormInstance>();
const chapterFormRef = ref<FormInstance>();
const activeTab = ref<string>('basic');
const inputValue = ref<string>('');
const chapterModalVisible = ref<boolean>(false);
const isEditChapter = ref<boolean>(false);
const expandedKeys = ref<string[]>([]);

// 课程基础信息表单数据
const formState = reactive<{
  course_code: string;
  course_title: string;
  description: string;
  credits: number;
  department_id: number;
  tags: string[];
  timeRange: [Date | null, Date | null];
}>({
  course_code: '',
  course_title: '',
  description: '',
  credits: 0,
  department_id: 0,
  tags: [],
  timeRange: [null, null],
});

// 表单验证规则
const formRules = reactive<FormRules>({
  course_code: [{ required: true, message: '请输入课程代码', trigger: 'blur' }],
  course_title: [{ required: true, message: '请输入课程名称', trigger: 'blur' }],
  description: [{ required: true, message: '请输入课程介绍', trigger: 'blur' }],
  credits: [{ required: true, message: '请输入学分', trigger: 'blur' }],
  department_id: [{ required: true, message: '请选择院系', trigger: 'change' }],
  timeRange: [{ message: '请选择时间范围', trigger: 'change' }],
});

// 章节数据结构
interface Chapter {
  key: string;
  title: string;
  description: string;
  sort_order: number;
  children?: Chapter[];
  parentKey?: string;
  course_materials_add_request: {
    title: string;
    file_path_or_url: string;
    material_type: string;
  };
}

// 初始化数据

// 章节树形数据
const chaptersTree = ref<Chapter[]>([]);

// 当前编辑的章节
const currentChapter = reactive<Chapter>({
  key: '',
  title: '',
  description: '',
  sort_order: 1,
  course_materials_add_request: {
    title: '',
    file_path_or_url: '',
    material_type: ''
  }
});

// 章节表单验证规则
const chapterRules = reactive<FormRules>({
  title: [{ required: true, message: '请输入章节名称', trigger: 'blur' }],
  sort_order: [{ required: true, message: '请输入排序号', trigger: 'blur' }],
  'course_materials_add_request.title': [
    { required: true, message: '请输入章节资料标题', trigger: ['blur', 'change'] }
  ],
  'course_materials_add_request.file_path_or_url': [
    { required: true, message: '请输入资料路径或URL', trigger: ['blur', 'change'] }
  ],
  'course_materials_add_request.material_type': [
    { required: true, message: '请选择资料类型', trigger: ['blur', 'change'] }
  ],
});

const departments = ref<API.Departments>([])

onMounted(() => {
  getAllDepartmentsUsingGet().then(res => {
    departments.value = res.data.data
    console.log(departments.value)
  })
})

// 树形表格列定义
const treeColumns = ref<TableProps['columns']>([
  {
    title: '章节名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '排序号',
    dataIndex: 'sortOrder',
    key: 'sortOrder',
  },
  {
    title: '操作',
    key: 'action',
    width: 220
  },
]);

// 处理标签添加
const handleAddTag = () => {
  if (inputValue.value && !formState.tags.includes(inputValue.value)) {
    formState.tags.push(inputValue.value);
  }
  inputValue.value = '';
};

// 显示添加章节模态框
const showAddChapterModal = (parentNode?: Chapter) => {
  isEditChapter.value = false;
  Object.assign(currentChapter, {
    key: Date.now().toString(),
    title: '',
    description: '',
    sort_order: 1,
    parentKey: parentNode?.key,
    course_materials_add_request: {
      title: '',
      file_path_or_url: '',
      material_type: ''
    }
  });
  chapterFormRef.value?.resetFields();
  chapterModalVisible.value = true;
  // nextTick(() => {
  //   chapterFormRef.value?.validateFields();
  // });
};

// 显示编辑章节模态框
const showEditChapterModal = (record: Chapter) => {
  isEditChapter.value = true;
  currentChapter.title = record.title;
  currentChapter.description = record.description;
  currentChapter.sort_order = record.sort_order;
  Object.assign(currentChapter.course_materials_add_request, record.course_materials_add_request);
  chapterModalVisible.value = true;
  nextTick(() => {
    chapterFormRef.value?.validateFields();
  });
};

// 保存章节信息
const handleSaveChapter = async () => {
  if (!chapterFormRef.value) return;
  const valid = await chapterFormRef.value.validate();
  if (valid) {
    if (isEditChapter.value) {
      // 编辑现有章节
      updateChapterInTree(chaptersTree.value, currentChapter);
    } else {
      // 添加新章节
      if (currentChapter.parentKey) {
        // 添加为子章节
        const parentNode = findChapterInTree(chaptersTree.value, currentChapter.parentKey);
        if (parentNode) {
          if (!parentNode.children) parentNode.children = [];
          parentNode.children.push({ ...currentChapter });
        }
      } else {
        // 添加为根章节
        chaptersTree.value.push({ ...currentChapter });
      }
    }
    chapterModalVisible.value = false;
    // 清空表单
    chapterFormRef.value.resetFields();
  }
};

// 取消章节编辑
const handleCancelChapter = () => {
  chapterModalVisible.value = false;
  chapterFormRef.value?.resetFields();
};

// 删除章节
const handleDeleteChapter = (record: Chapter) => {
  chaptersTree.value = chaptersTree.value.filter(chapter => chapter.key !== record.key);
  // 递归删除子章节
  removeChildrenFromTree(chaptersTree.value, record.key);
};

// 在树中查找章节
const findChapterInTree = (tree: Chapter[], key: string): Chapter | null => {
  for (const node of tree) {
    if (node.key === key) return node;
    if (node.children) {
      const found = findChapterInTree(node.children, key);
      if (found) return found;
    }
  }
  return null;
};

// 更新树中的章节
const updateChapterInTree = (tree: Chapter[], updatedNode: Chapter): boolean => {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].key === updatedNode.key) {
      tree[i] = { ...updatedNode, children: tree[i].children };
      return true;
    }
    if (tree[i].children && updateChapterInTree(tree[i].children, updatedNode)) {
      return true;
    }
  }
  return false;
};

// 从树中移除子章节
const removeChildrenFromTree = (tree: Chapter[], parentKey: string): void => {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].parentKey === parentKey) {
      const childKey = tree[i].key;
      tree.splice(i, 1);
      i--; // 调整索引
      removeChildrenFromTree(tree, childKey); // 递归删除子章节
    }
    if (tree[i].children) {
      removeChildrenFromTree(tree[i].children, parentKey);
    }
  }
};

// 保存基础信息
const handleSaveBasic = async () => {
  if (!formRef.value) return;
  const valid = await formRef.value.validate();
  if (valid) {
    // 转换章节数据结构
    const convertChapters = (chapters: Chapter[]): any[] => {
      return chapters.map(chapter => {
        const converted: any = {
          title: chapter.title,
          sort_order: chapter.sort_order,
          description: chapter.description,
          course_materials_add_request: chapter.course_materials_add_request
        };

        // 如果有子章节，递归转换
        if (chapter.children && chapter.children.length > 0) {
          converted.children = convertChapters(chapter.children);
        }

        return converted;
      });
    };

    // 准备请求数据
    const requestData = {
      course_code: formState.course_code,
      course_title: formState.course_title,
      description: formState.description,
      credits: formState.credits,
      department_id: formState.department_id,
      chapters: convertChapters(chaptersTree.value),
      tags: formState.tags
    };

    try {
      console.log(requestData)
      // 调用后端接口
      // const response = await addCoursesUsingPost(requestData);
      // if (response.data.code === 200) {
      //   message.success('课程创建成功');
      //   // 可以在这里添加路由跳转或其他操作
      // } else {
      //   message.error(`课程创建失败: ${response.data.message || '未知错误'}`);
      // }
    } catch (error) {
      message.error('调用接口失败，请重试');
      console.error('创建课程失败:', error);
    }
  }
};
</script>

<style scoped>
.course-create-page {
  padding: 20px;
}

.chapters-management {
  margin-top: 20px;
}

.chapters-actions {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.chapter-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
}
</style>
