// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addEnrollments POST /api/enrollments/add */
export async function addEnrollmentsUsingPost(
  body: API.EnrollmentsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/enrollments/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteEnrollments POST /api/enrollments/delete */
export async function deleteEnrollmentsUsingPost(
  body: API.EnrollmentsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/enrollments/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getEnrollmentsById GET /api/enrollments/get */
export async function getEnrollmentsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEnrollmentsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseEnrollments>('/api/enrollments/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getEnrollmentsVOById GET /api/enrollments/get/vo */
export async function getEnrollmentsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEnrollmentsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseEnrollmentsVO>('/api/enrollments/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listEnrollmentsByPage POST /api/enrollments/list/page */
export async function listEnrollmentsByPageUsingPost(
  body: API.EnrollmentsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageEnrollments>('/api/enrollments/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listEnrollmentsVOByPage POST /api/enrollments/list/page/vo */
export async function listEnrollmentsVoByPageUsingPost(
  body: API.EnrollmentsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageEnrollmentsVO>('/api/enrollments/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateEnrollments POST /api/enrollments/update */
export async function updateEnrollmentsUsingPost(
  body: API.EnrollmentsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/enrollments/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
