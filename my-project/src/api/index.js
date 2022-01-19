import axios from 'axios';

const DOMAIN = 'http://localhost:3002'



// const request = axios.create({
//     baseURL: 'http://localhost:3002'
// });

const request = (method,url,data)=>{
    return axios({
        method,
        url:DOMAIN+url,
        data
    }).then(res=>res.data)
    .catch(error=>{
       console.log("axios error => ", error);
        return Promise.reject(error)
    })
}
export const board = {
    fetch() {        
        return request('get','/lists')
    },

    
}

export const card = {
    create(data) {               
        return request('post', '/cards', data )
    },
    fetch(id) {        
        return request('get',`/cards?listId=${id}`)
    },
    update(id,payload){
        return request('put',`/cards/${id}`,payload)
    },
    destroy(data) {
        console.log(data);
        return request('delete',`/cards/${data.id}`)
    }
  }


// request.interceptors.response.use(
//     (response) => {                
//         return response.data
//     },
//     (error) => {
//         console.log("axios error => ", error);
//         return Promise.reject(error)
//     }
// )


//export default request
