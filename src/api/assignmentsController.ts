// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addAssignments POST /api/assignments/add */
export async function addAssignmentsUsingPost(
  body: API.AssignmentsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/assignments/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteAssignments POST /api/assignments/delete */
export async function deleteAssignmentsUsingPost(
  body: API.AssignmentsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/assignments/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getAssignmentsById GET /api/assignments/get */
export async function getAssignmentsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAssignmentsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAssignments>('/api/assignments/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getAssignmentsVOById GET /api/assignments/get/vo */
export async function getAssignmentsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAssignmentsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAssignmentsVO>('/api/assignments/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listAssignmentsByPage POST /api/assignments/list/page */
export async function listAssignmentsByPageUsingPost(
  body: API.AssignmentsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAssignments>('/api/assignments/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listAssignmentsVOByPage POST /api/assignments/list/page/vo */
export async function listAssignmentsVoByPageUsingPost(
  body: API.AssignmentsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAssignmentsVO>('/api/assignments/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateAssignments POST /api/assignments/update */
export async function updateAssignmentsUsingPost(
  body: API.AssignmentsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/assignments/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
