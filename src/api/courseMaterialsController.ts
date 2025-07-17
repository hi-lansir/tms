// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addCourseMaterials POST /api/courseMaterials/add */
export async function addCourseMaterialsUsingPost(
  body: API.CourseMaterialsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/courseMaterials/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteCourseMaterials POST /api/courseMaterials/delete */
export async function deleteCourseMaterialsUsingPost(
  body: API.CourseMaterialsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/courseMaterials/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getCourseMaterialsById GET /api/courseMaterials/get */
export async function getCourseMaterialsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseMaterialsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourseMaterials>('/api/courseMaterials/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getCourseMaterialsVOById GET /api/courseMaterials/get/vo */
export async function getCourseMaterialsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseMaterialsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourseMaterialsVO>('/api/courseMaterials/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listCourseMaterialsByPage POST /api/courseMaterials/list/page */
export async function listCourseMaterialsByPageUsingPost(
  body: API.CourseMaterialsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCourseMaterials>('/api/courseMaterials/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listCourseMaterialsVOByPage POST /api/courseMaterials/list/page/vo */
export async function listCourseMaterialsVoByPageUsingPost(
  body: API.CourseMaterialsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCourseMaterialsVO>('/api/courseMaterials/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateCourseMaterials POST /api/courseMaterials/update */
export async function updateCourseMaterialsUsingPost(
  body: API.CourseMaterialsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/courseMaterials/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
