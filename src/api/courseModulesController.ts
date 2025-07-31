// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addCourseModules POST /api/courseModules/add */
export async function addCourseModulesUsingPost(
  body: API.CourseModulesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/courseModules/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteCourseModules POST /api/courseModules/delete */
export async function deleteCourseModulesUsingPost(
  body: API.CourseModulesDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/courseModules/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getCourseModulesById GET /api/courseModules/get */
export async function getCourseModulesByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseModulesByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourseModules_>('/api/courseModules/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getCourseModulesVOById GET /api/courseModules/get/vo */
export async function getCourseModulesVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseModulesVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourseModulesVO_>('/api/courseModules/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listCourseModulesByPage POST /api/courseModules/list/page */
export async function listCourseModulesByPageUsingPost(
  body: API.CourseModulesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCourseModules_>('/api/courseModules/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listCourseModulesVOByPage POST /api/courseModules/list/page/vo */
export async function listCourseModulesVoByPageUsingPost(
  body: API.CourseModulesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCourseModulesVO_>('/api/courseModules/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateCourseModules POST /api/courseModules/update */
export async function updateCourseModulesUsingPost(
  body: API.CourseModulesUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/courseModules/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
