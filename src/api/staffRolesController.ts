// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** assignRole POST /api/staff-roles/assign */
export async function assignRoleUsingPost(
  body: API.StaffRolesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/staff-roles/assign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getRolesByStaffId GET /api/staff-roles/get-by-staff */
export async function getRolesByStaffIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRolesByStaffIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListRoles_>('/api/staff-roles/get-by-staff', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** removeRole POST /api/staff-roles/remove */
export async function removeRoleUsingPost(body: API.StaffRoles, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/staff-roles/remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateStaffRoles POST /api/staff-roles/update-roles */
export async function updateStaffRolesUsingPost(
  body: API.StaffRolesUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/staff-roles/update-roles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
