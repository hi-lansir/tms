// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addDepartment POST /api/departments/add */
export async function addDepartmentUsingPost(
  body: API.DepartmentsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/departments/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteDepartment POST /api/departments/delete */
export async function deleteDepartmentUsingPost(
  body: API.DepartmentsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/departments/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getAllDepartments GET /api/departments/getAll */
export async function getAllDepartmentsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListDepartments>('/api/departments/getAll', {
    method: 'GET',
    ...(options || {}),
  })
}
