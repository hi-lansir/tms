// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addClasses POST /api/classes/add */
export async function addClassesUsingPost(
  body: API.ClassesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/classes/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteClasses POST /api/classes/delete */
export async function deleteClassesUsingPost(
  body: API.ClassesDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/classes/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getClassesById GET /api/classes/get */
export async function getClassesByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassesByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseClasses>('/api/classes/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getClassesVOById GET /api/classes/get/vo */
export async function getClassesVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassesVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseClassesVO>('/api/classes/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listClassesByPage POST /api/classes/list/page */
export async function listClassesByPageUsingPost(
  body: API.ClassesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageClasses>('/api/classes/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listClassesVOByPage POST /api/classes/list/page/vo */
export async function listClassesVoByPageUsingPost(
  body: API.ClassesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageClassesVO>('/api/classes/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateClasses POST /api/classes/update */
export async function updateClassesUsingPost(
  body: API.ClassesUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/classes/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
