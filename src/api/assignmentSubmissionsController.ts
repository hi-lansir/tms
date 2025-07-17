// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addAssignmentSubmissions POST /api/assignmentSubmissions/add */
export async function addAssignmentSubmissionsUsingPost(
  body: API.AssignmentSubmissionsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/assignmentSubmissions/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteAssignmentSubmissions POST /api/assignmentSubmissions/delete */
export async function deleteAssignmentSubmissionsUsingPost(
  body: API.AssignmentSubmissionsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/assignmentSubmissions/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getAssignmentSubmissionsById GET /api/assignmentSubmissions/get */
export async function getAssignmentSubmissionsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAssignmentSubmissionsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAssignmentSubmissions>('/api/assignmentSubmissions/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getAssignmentSubmissionsVOById GET /api/assignmentSubmissions/get/vo */
export async function getAssignmentSubmissionsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAssignmentSubmissionsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAssignmentSubmissionsVO>('/api/assignmentSubmissions/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listAssignmentSubmissionsByPage POST /api/assignmentSubmissions/list/page */
export async function listAssignmentSubmissionsByPageUsingPost(
  body: API.AssignmentSubmissionsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAssignmentSubmissions>(
    '/api/assignmentSubmissions/list/page',
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

/** listAssignmentSubmissionsVOByPage POST /api/assignmentSubmissions/list/page/vo */
export async function listAssignmentSubmissionsVoByPageUsingPost(
  body: API.AssignmentSubmissionsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAssignmentSubmissionsVO>(
    '/api/assignmentSubmissions/list/page/vo',
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

/** updateAssignmentSubmissions POST /api/assignmentSubmissions/update */
export async function updateAssignmentSubmissionsUsingPost(
  body: API.AssignmentSubmissionsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/assignmentSubmissions/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
