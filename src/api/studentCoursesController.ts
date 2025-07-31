// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** dropCourse POST /api/student-courses/drop */
export async function dropCourseUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dropCourseUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/student-courses/drop', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** enrollCourse POST /api/student-courses/enroll */
export async function enrollCourseUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.enrollCourseUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/student-courses/enroll', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listCourses GET /api/student-courses/list */
export async function listCoursesUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListStudentCoursesVO_>('/api/student-courses/list', {
    method: 'GET',
    ...(options || {}),
  })
}

/** updateProgress POST /api/student-courses/update-progress */
export async function updateProgressUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateProgressUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/student-courses/update-progress', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}
