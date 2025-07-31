// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** generateCaptcha GET /api/student/captcha */
export async function generateCaptchaUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseMapStringString_>('/api/student/captcha', {
    method: 'GET',
    ...(options || {}),
  })
}

/** getLoginStudents POST /api/student/get/login */
export async function getLoginStudentsUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginStudentsVO_>('/api/student/get/login', {
    method: 'POST',
    ...(options || {}),
  })
}

/** studentsLogin POST /api/student/login */
export async function studentsLoginUsingPost(
  body: API.StudentsLoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLoginStudentsVO_>('/api/student/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** logout POST /api/student/logout */
export async function logoutUsingPost1(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/student/logout', {
    method: 'POST',
    ...(options || {}),
  })
}

/** studentsRegister POST /api/student/register */
export async function studentsRegisterUsingPost(
  body: API.StudentsRegisterRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/student/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
