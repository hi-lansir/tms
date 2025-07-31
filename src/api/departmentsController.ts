// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addDepartment POST /api/departments/add */
export async function addDepartmentUsingPost(
  body: API.DepartmentsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/departments/add', {
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
  return request<API.BaseResponseBoolean_>('/api/departments/delete', {
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
  return request<API.BaseResponseListDepartments_>('/api/departments/getAll', {
    method: 'GET',
    ...(options || {}),
  })
}

/** getDeptByName GET /api/departments/getByName */
export async function getDeptByNameUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDeptByNameUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseDepartments_>('/api/departments/getByName', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}
