import axios from 'axios'
import qs from 'qs'//序列化字符串，处理发送请求的参数  axios发送的数据不是json格式，若需要json格式，添加此库
axios.interceptors.response.use(response => { // 对响应数据做点什么
  return response.data
}, function (error) {
  console.log(error);
});
axios.interceptors.request.use(config => { // 对响应错误做点什么
  return config;
}, function (error) {
  return Promise.reject(error)
});

export default {
  // 全局token
  get(url, params) {
    return axios({
      method: 'get',
      url: url,
      params,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }
    })
  },
  post(url, data) {
    return axios({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }
    })
  },
  form(url, formdata) {
    return axios({
      method: 'post',
      url: url,
      data: formdata,
      withCredentials: true,
    })
  },
  getJson(url) {
    return axios({
      method: 'get', 
      url: url
    })
  }
}
