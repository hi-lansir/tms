// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addAttendance POST /api/attendance/add */
export async function addAttendanceUsingPost(
  body: API.AttendanceAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/attendance/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteAttendance POST /api/attendance/delete */
export async function deleteAttendanceUsingPost(
  body: API.AttendanceDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/attendance/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getAttendanceById GET /api/attendance/get */
export async function getAttendanceByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAttendanceByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAttendance_>('/api/attendance/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getAttendanceVOById GET /api/attendance/get/vo */
export async function getAttendanceVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAttendanceVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAttendanceVO_>('/api/attendance/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listAttendanceByPage POST /api/attendance/list/page */
export async function listAttendanceByPageUsingPost(
  body: API.AttendanceQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAttendance_>('/api/attendance/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listAttendanceVOByPage POST /api/attendance/list/page/vo */
export async function listAttendanceVoByPageUsingPost(
  body: API.AttendanceQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAttendanceVO_>('/api/attendance/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateAttendance POST /api/attendance/update */
export async function updateAttendanceUsingPost(
  body: API.AttendanceUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/attendance/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
