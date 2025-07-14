// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 此处后端没有提供注释 POST /staff/get/login */
export async function getLoginStaff(options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginStaffVO>('/staff/get/login', {
    method: 'POST',
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /staff/login */
export async function staffLogin(body: API.StaffLoginRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginStaffVO>('/staff/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /staff/register */
export async function staffRegister(
  body: API.StaffRegisterRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInteger>('/staff/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
