// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addCourseChapters POST /api/courseChapters/add */
export async function addCourseChaptersUsingPost(
  body: API.CourseChaptersAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourseChapters_>('/api/courseChapters/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** bindMaterialToChapter POST /api/courseChapters/bindMaterial */
export async function bindMaterialToChapterUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.bindMaterialToChapterUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/courseChapters/bindMaterial', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** deleteCourseChapters POST /api/courseChapters/delete */
export async function deleteCourseChaptersUsingPost(
  body: API.CourseChaptersDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/courseChapters/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getCourseChaptersById GET /api/courseChapters/get */
export async function getCourseChaptersByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseChaptersByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourseChapters_>('/api/courseChapters/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getCourseChaptersVOById GET /api/courseChapters/get/vo */
export async function getCourseChaptersVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseChaptersVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourseChaptersVO_>('/api/courseChapters/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getChapterWithMaterial GET /api/courseChapters/getWithMaterial */
export async function getChapterWithMaterialUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChapterWithMaterialUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourseChaptersVO_>('/api/courseChapters/getWithMaterial', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listCourseChaptersByPage POST /api/courseChapters/list/page */
export async function listCourseChaptersByPageUsingPost(
  body: API.CourseChaptersQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCourseChapters_>('/api/courseChapters/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listCourseChaptersVOByPage POST /api/courseChapters/list/page/vo */
export async function listCourseChaptersVoByPageUsingPost(
  body: API.CourseChaptersQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCourseChaptersVO_>('/api/courseChapters/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getChapterTree GET /api/courseChapters/tree */
export async function getChapterTreeUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChapterTreeUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListCourseChaptersVO_>('/api/courseChapters/tree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getChapterTreeWithProgress GET /api/courseChapters/treeWithProgress */
export async function getChapterTreeWithProgressUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChapterTreeWithProgressUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListCourseChaptersVO_>('/api/courseChapters/treeWithProgress', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** updateCourseChapters POST /api/courseChapters/update */
export async function updateCourseChaptersUsingPost(
  body: API.CourseChaptersUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/courseChapters/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
