// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addRole POST /api/roles/add */
export async function addRoleUsingPost(
  body: API.RolesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/roles/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getCurrentRoles GET /api/roles/current-roles */
export async function getCurrentRolesUsingGet(options?: { [key: string]: any }) {
  return request<string[]>('/api/roles/current-roles', {
    method: 'GET',
    ...(options || {}),
  })
}

/** deleteRole POST /api/roles/delete */
export async function deleteRoleUsingPost(
  body: API.RolesDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/roles/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getRoleById GET /api/roles/get */
export async function getRoleByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRoleByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseRoles_>('/api/roles/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listRolesByPage POST /api/roles/list/page */
export async function listRolesByPageUsingPost(
  body: API.RolesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageRoles_>('/api/roles/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateRole POST /api/roles/update */
export async function updateRoleUsingPost(body: API.Roles, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/roles/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
