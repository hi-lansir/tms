// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 此处后端没有提供注释 POST /student/get/login */
export async function getLoginStudents(options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginStudentsVO>('/student/get/login', {
    method: 'POST',
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /student/login */
export async function studentsLogin(
  body: API.StudentsLoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLoginStudentsVO>('/student/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /student/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/student/logout', {
    method: 'POST',
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /student/register */
export async function studentsRegister(
  body: API.StudentsRegisterRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInteger>('/student/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
