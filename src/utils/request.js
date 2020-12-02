import axios from 'axios';
import qs from 'querystring';
import { resolve } from 'path';

// 状态码

const errorHandle=(status,info)=>{
  switch(status){
      case 400:
          console.log('服务器收到客户端通过put或者post提交请求的标识，标识格式正确，但是服务器不懂它什么意思');
          break;
      case 401:
          console.log('客户端试图对一个受保护 的资源进行操作，但是又没有提供正确的认证证书');
          break;
      case 403:
          console.log('客户端请求的格式正确，但是服务器不想处理它');
           break;
      case 404:
           console.log('网路地址错误');
           break;
      case 500:
          console.log('执行请求代码时遇到了异常');
          break;
      case 503:
          console.log('资源不足，服务器收到太多请求，以至于无法全部处理');
          break;
      default:
          console.log(info);
          break;

  }
}

//创建axios实例对象
const instance=axios.create({
    timeout:5000
})

instance.all=axios.all;
instance.spread=axios.spread;

// 全局配置
// instance.defaults.baseURL = 'http://iwenwiki.com';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截和响应拦截
instance.interceptors.request.use(
    config=>{
        if(config.method === 'post'){
            config.data=qs.stringify(config.data)
          }
          return config;
    },
    error=>Promise.reject(error)
)
instance.interceptors.response.use(
    response=>response.status == 200 ? Promise.resolve(response) : Promise.reject(response),
    error=>{
        const {response} = error;
        if(response){
            errorHandle(response.status,response.data)
            return Promise.reject(response);
        }else{
            console.log('请求被中断');
            
        }
    }
)

export function get(url,params){
    return new Promise((resolve,reject)=>{
        instance.get(url,{
            params
        }).then(res=>{
             resolve(res.data)
        }).catch(err=>{
             reject(err.data)
        })
    })
    
}

export function post(url,params){
    return new Promise((resolve,reject)=>{
        instance.post(url,params).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err.data)
        })
    })
}
export default instance