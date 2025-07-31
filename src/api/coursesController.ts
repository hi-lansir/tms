// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addCourses POST /api/courses/add */
export async function addCoursesUsingPost(
  body: API.CoursesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/courses/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteCourses POST /api/courses/delete */
export async function deleteCoursesUsingPost(
  body: API.CoursesDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/courses/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getCourseDetailWithChapters GET /api/courses/detail */
export async function getCourseDetailWithChaptersUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseDetailWithChaptersUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCoursesVO_>('/api/courses/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getCoursesById GET /api/courses/get */
export async function getCoursesByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCoursesByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCourses_>('/api/courses/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getKnowledgePointsByCourseTitle POST /api/courses/get/knowledgePoints */
export async function getKnowledgePointsByCourseTitleUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKnowledgePointsByCourseTitleUsingPOSTParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListKnowledgePoints_>('/api/courses/get/knowledgePoints', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getCoursesVOById GET /api/courses/get/vo */
export async function getCoursesVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCoursesVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCoursesVO_>('/api/courses/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listHotCourses GET /api/courses/hot */
export async function listHotCoursesUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListCoursesVO_>('/api/courses/hot', {
    method: 'GET',
    ...(options || {}),
  })
}

/** listCoursesByPage POST /api/courses/list/page */
export async function listCoursesByPageUsingPost(
  body: API.CoursesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCourses_>('/api/courses/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listCoursesVOByPage POST /api/courses/list/page/vo */
export async function listCoursesVoByPageUsingPost(
  body: API.CoursesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCoursesVO_>('/api/courses/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listByPriority GET /api/courses/priority */
export async function listByPriorityUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListCoursesVO_>('/api/courses/priority', {
    method: 'GET',
    ...(options || {}),
  })
}

/** hybridRecommend GET /api/courses/recommend/hybrid */
export async function hybridRecommendUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.hybridRecommendUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListCourses_>('/api/courses/recommend/hybrid', {
    method: 'GET',
    params: {
      // limit has a default value: 10
      limit: '10',
      ...params,
    },
    ...(options || {}),
  })
}

/** recommendByIndex GET /api/courses/recommend/index */
export async function recommendByIndexUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListCourses_>('/api/courses/recommend/index', {
    method: 'GET',
    ...(options || {}),
  })
}

/** updateCourses POST /api/courses/update */
export async function updateCoursesUsingPost(
  body: API.CoursesUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/courses/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateVisit POST /api/courses/view/${param0} */
export async function updateVisitUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateVisitUsingPOSTParams,
  options?: { [key: string]: any }
) {
  const { courseId: param0, ...queryParams } = params
  return request<API.BaseResponseBoolean_>(`/api/courses/view/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  })
}
