// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addQuizQuestions POST /api/quizQuestions/add */
export async function addQuizQuestionsUsingPost(
  body: API.QuizQuestionsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/quizQuestions/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteQuizQuestions POST /api/quizQuestions/delete */
export async function deleteQuizQuestionsUsingPost(
  body: API.QuizQuestionsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/quizQuestions/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getQuizQuestionsById GET /api/quizQuestions/get */
export async function getQuizQuestionsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuizQuestionsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseQuizQuestions_>('/api/quizQuestions/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getQuizQuestionsVOById GET /api/quizQuestions/get/vo */
export async function getQuizQuestionsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuizQuestionsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseQuizQuestionsVO_>('/api/quizQuestions/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listQuizQuestionsByPage POST /api/quizQuestions/list/page */
export async function listQuizQuestionsByPageUsingPost(
  body: API.QuizQuestionsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuizQuestions_>('/api/quizQuestions/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listQuizQuestionsVOByPage POST /api/quizQuestions/list/page/vo */
export async function listQuizQuestionsVoByPageUsingPost(
  body: API.QuizQuestionsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuizQuestionsVO_>('/api/quizQuestions/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateQuizQuestions POST /api/quizQuestions/update */
export async function updateQuizQuestionsUsingPost(
  body: API.QuizQuestionsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/quizQuestions/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
