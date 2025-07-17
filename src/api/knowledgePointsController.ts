// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addKnowledgePoints POST /api/knowledgePoints/add */
export async function addKnowledgePointsUsingPost(
  body: API.KnowledgePointsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/knowledgePoints/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteKnowledgePoints POST /api/knowledgePoints/delete */
export async function deleteKnowledgePointsUsingPost(
  body: API.KnowledgePointsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/knowledgePoints/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getKnowledgePointsById GET /api/knowledgePoints/get */
export async function getKnowledgePointsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKnowledgePointsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseKnowledgePoints>('/api/knowledgePoints/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getKnowledgePointsVOById GET /api/knowledgePoints/get/vo */
export async function getKnowledgePointsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKnowledgePointsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseKnowledgePointsVO>('/api/knowledgePoints/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listKnowledgePointsByPage POST /api/knowledgePoints/list/page */
export async function listKnowledgePointsByPageUsingPost(
  body: API.KnowledgePointsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageKnowledgePoints>('/api/knowledgePoints/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listKnowledgePointsVOByPage POST /api/knowledgePoints/list/page/vo */
export async function listKnowledgePointsVoByPageUsingPost(
  body: API.KnowledgePointsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageKnowledgePointsVO>('/api/knowledgePoints/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateKnowledgePoints POST /api/knowledgePoints/update */
export async function updateKnowledgePointsUsingPost(
  body: API.KnowledgePointsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/knowledgePoints/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
