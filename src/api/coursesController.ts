// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addCourses POST /api/courses/add */
export async function addCoursesUsingPost(
  body: API.CoursesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/courses/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteCourses POST /api/courses/delete */
export async function deleteCoursesUsingPost(
  body: API.CoursesDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/courses/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getCoursesById GET /api/courses/get */
export async function getCoursesByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCoursesByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourses>('/api/courses/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getKnowledgePointsByCourseTitle POST /api/courses/get/knowledgePoints */
export async function getKnowledgePointsByCourseTitleUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKnowledgePointsByCourseTitleUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListKnowledgePoints>('/api/courses/get/knowledgePoints', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getCoursesVOById GET /api/courses/get/vo */
export async function getCoursesVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCoursesVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCoursesVO>('/api/courses/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listCoursesByPage POST /api/courses/list/page */
export async function listCoursesByPageUsingPost(
  body: API.CoursesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCourses>('/api/courses/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listCoursesVOByPage POST /api/courses/list/page/vo */
export async function listCoursesVoByPageUsingPost(
  body: API.CoursesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCoursesVO>('/api/courses/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateCourses POST /api/courses/update */
export async function updateCoursesUsingPost(
  body: API.CoursesUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/courses/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
