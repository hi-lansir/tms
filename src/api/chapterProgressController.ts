// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addChapterProgress POST /api/chapterProgress/add */
export async function addChapterProgressUsingPost(
  body: API.ChapterProgressAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/chapterProgress/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** batchUpdateStatus POST /api/chapterProgress/batchUpdate */
export async function batchUpdateStatusUsingPost(
  body: API.ChapterProgressBatchUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/chapterProgress/batchUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getCourseProgress GET /api/chapterProgress/courseProgress */
export async function getCourseProgressUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseProgressUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListChapterProgressVO_>('/api/chapterProgress/courseProgress', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** deleteChapterProgress POST /api/chapterProgress/delete */
export async function deleteChapterProgressUsingPost(
  body: API.ChapterProgressDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/chapterProgress/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getChapterProgressById GET /api/chapterProgress/get */
export async function getChapterProgressByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChapterProgressByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseChapterProgress_>('/api/chapterProgress/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getChapterProgressVOById GET /api/chapterProgress/get/vo */
export async function getChapterProgressVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChapterProgressVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseChapterProgressVO_>('/api/chapterProgress/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getByStudentAndChapter GET /api/chapterProgress/getByStudentAndChapter */
export async function getByStudentAndChapterUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByStudentAndChapterUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseChapterProgressVO_>(
    '/api/chapterProgress/getByStudentAndChapter',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  )
}

/** listChapterProgressByPage POST /api/chapterProgress/list/page */
export async function listChapterProgressByPageUsingPost(
  body: API.ChapterProgressQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageChapterProgress_>('/api/chapterProgress/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listChapterProgressVOByPage POST /api/chapterProgress/list/page/vo */
export async function listChapterProgressVoByPageUsingPost(
  body: API.ChapterProgressQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageChapterProgressVO_>('/api/chapterProgress/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateChapterProgress POST /api/chapterProgress/update */
export async function updateChapterProgressUsingPost(
  body: API.ChapterProgressUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>('/api/chapterProgress/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
