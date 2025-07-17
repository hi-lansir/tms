// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** addAnnouncements POST /api/announcements/add */
export async function addAnnouncementsUsingPost(
  body: API.AnnouncementsAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseint>('/api/announcements/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteAnnouncements POST /api/announcements/delete */
export async function deleteAnnouncementsUsingPost(
  body: API.AnnouncementsDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/announcements/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getAnnouncementsById GET /api/announcements/get */
export async function getAnnouncementsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAnnouncementsByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAnnouncements>('/api/announcements/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getAnnouncementsVOById GET /api/announcements/get/vo */
export async function getAnnouncementsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAnnouncementsVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAnnouncementsVO>('/api/announcements/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listAnnouncementsByPage POST /api/announcements/list/page */
export async function listAnnouncementsByPageUsingPost(
  body: API.AnnouncementsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAnnouncements>('/api/announcements/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listAnnouncementsVOByPage POST /api/announcements/list/page/vo */
export async function listAnnouncementsVoByPageUsingPost(
  body: API.AnnouncementsQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAnnouncementsVO>('/api/announcements/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateAnnouncements POST /api/announcements/update */
export async function updateAnnouncementsUsingPost(
  body: API.AnnouncementsUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>('/api/announcements/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
