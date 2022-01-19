import request from "./index"



export const getList = (param) => {
    return request({
        url: `/lists`,
        method: 'get',
        param
    })
}

export const postList = (data) => {
  return request({
    url: `/lists`,
    method: 'post',
    data,
  })
}

export const putList = (id, data) => {    
  return request({
    url: `/lists/${id.id}`,
    method: 'put',
    data,
  })
}

export const deleteList = (id) => {
  return request({
    url: `/lists/${id}`,
    method: 'delete',
  })
}

export const getCard = (id) => {
  
  return request({
    url: `/cards?listId=${id}`,
    method: 'get',    
  })
}

export const card = {

}
export const postCard = (data) => {
  
  return request({
    url: `/cards`,
    method: 'post',
    data,
  })
}

export const deleteCard = (id) => {
  return request({
    url: `/cards/${id}`,
    method: 'delete'
  })
}