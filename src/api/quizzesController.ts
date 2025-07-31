// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addQuizzes POST /api/quizzes/add */
export async function addQuizzesUsingPost(
  body: API.QuizzesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/quizzes/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteQuizzes POST /api/quizzes/delete */
export async function deleteQuizzesUsingPost(
  body: API.QuizzesDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/quizzes/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getQuizzesById GET /api/quizzes/get */
export async function getQuizzesByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuizzesByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseQuizzes_>('/api/quizzes/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getQuizzesVOById GET /api/quizzes/get/vo */
export async function getQuizzesVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuizzesVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseQuizzesVO_>('/api/quizzes/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listQuizzesByPage POST /api/quizzes/list/page */
export async function listQuizzesByPageUsingPost(
  body: API.QuizzesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuizzes_>('/api/quizzes/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listQuizzesVOByPage POST /api/quizzes/list/page/vo */
export async function listQuizzesVoByPageUsingPost(
  body: API.QuizzesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuizzesVO_>('/api/quizzes/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateQuizzes POST /api/quizzes/update */
export async function updateQuizzesUsingPost(
  body: API.QuizzesUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/quizzes/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
