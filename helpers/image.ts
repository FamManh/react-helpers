import { IAsset } from 'apis/assets'

export const getThumbnailImgUrl = (data: IAsset | null) => {
  if (!data) return null
  return (
    data?.formats?.thumbnails?.url ||
    data?.formats?.small?.url ||
    data?.formats?.medium?.url ||
    data?.formats?.large?.url ||
    data?.url ||
    null
  )
}

export const getSmallImgUrl = (data: IAsset | null) => {
  if (!data) return null
  return (
    data?.formats?.small?.url ||
    data?.formats?.medium?.url ||
    data?.formats?.large?.url ||
    data?.url ||
    null
  )
}

export const getMediumImgUrl = (data: IAsset | null) => {
  if (!data) return null
  return data?.formats?.medium?.url || data?.formats?.large?.url || data?.url || null
}

export const getLargeImgUrl = (data: IAsset | null) => {
  if (!data) return null
  return data?.formats?.large?.url || data?.url || null
}

export const getOrgImgUrl = (data: IAsset | null) => {
  if (!data) return null
  return data?.url || null
}
