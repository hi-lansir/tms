// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addForumPosts POST /api/forumPosts/add */
export async function addForumPostsUsingPost(
  body: API.ForumPostsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/forumPosts/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteForumPosts POST /api/forumPosts/delete */
export async function deleteForumPostsUsingPost(
  body: API.ForumPostsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/forumPosts/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getForumPostsById GET /api/forumPosts/get */
export async function getForumPostsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getForumPostsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseForumPosts>('/api/forumPosts/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getForumPostsVOById GET /api/forumPosts/get/vo */
export async function getForumPostsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getForumPostsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseForumPostsVO>('/api/forumPosts/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listForumPostsByPage POST /api/forumPosts/list/page */
export async function listForumPostsByPageUsingPost(
  body: API.ForumPostsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageForumPosts>('/api/forumPosts/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listForumPostsVOByPage POST /api/forumPosts/list/page/vo */
export async function listForumPostsVoByPageUsingPost(
  body: API.ForumPostsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageForumPostsVO>('/api/forumPosts/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateForumPosts POST /api/forumPosts/update */
export async function updateForumPostsUsingPost(
  body: API.ForumPostsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/forumPosts/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
