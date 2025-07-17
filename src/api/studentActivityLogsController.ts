// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addStudentActivityLogs POST /api/studentActivityLogs/add */
export async function addStudentActivityLogsUsingPost(
  body: API.StudentActivityLogsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponselong>('/api/studentActivityLogs/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteStudentActivityLogs POST /api/studentActivityLogs/delete */
export async function deleteStudentActivityLogsUsingPost(
  body: API.StudentActivityLogsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/studentActivityLogs/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getStudentActivityLogsById GET /api/studentActivityLogs/get */
export async function getStudentActivityLogsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStudentActivityLogsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseStudentActivityLogs>('/api/studentActivityLogs/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getStudentActivityLogsVOById GET /api/studentActivityLogs/get/vo */
export async function getStudentActivityLogsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStudentActivityLogsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseStudentActivityLogsVO>('/api/studentActivityLogs/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listStudentActivityLogsByPage POST /api/studentActivityLogs/list/page */
export async function listStudentActivityLogsByPageUsingPost(
  body: API.StudentActivityLogsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageStudentActivityLogs>('/api/studentActivityLogs/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listStudentActivityLogsVOByPage POST /api/studentActivityLogs/list/page/vo */
export async function listStudentActivityLogsVoByPageUsingPost(
  body: API.StudentActivityLogsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageStudentActivityLogsVO>(
    '/api/studentActivityLogs/list/page/vo',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  )
}

/** updateStudentActivityLogs POST /api/studentActivityLogs/update */
export async function updateStudentActivityLogsUsingPost(
  body: API.StudentActivityLogsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/studentActivityLogs/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
