// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** getLoginStaff POST /api/staff/get/login */
export async function getLoginStaffUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginStaffVO>('/api/staff/get/login', {
    method: 'POST',
    ...(options || {}),
  })
}

/** staffLogin POST /api/staff/login */
export async function staffLoginUsingPost(
  body: API.StaffLoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLoginStaffVO>('/api/staff/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** logout POST /api/staff/logout */
export async function logoutUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseboolean>('/api/staff/logout', {
    method: 'POST',
    ...(options || {}),
  })
}

/** staffRegister POST /api/staff/register */
export async function staffRegisterUsingPost(
  body: API.StaffRegisterRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/staff/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
