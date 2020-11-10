import Axios from 'axios'
import Qs from 'qs'

class Ajax {
    axios;
    api = ''; //api头
    asset = 'https://api.github.com'; //资源路径头
    debug = 0;
    this__ = '';
    price = ''; //app交互
    language=''; //语言
    load = {
        model: 1,
        request: 0,
        is_repeat: {},
    }

    constructor() {
        this.axios = Axios.create({
            baseURL: this.api,
            headers: {'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded'}, //请求头信息XMLHttpRequest是Ajax异步请求方式，为null则传统同步请求
            timeout: 5000,
            responseType: 'json',
            transformRequest: [function (data) {
                return Qs.stringify(data) //对json数据转成&字符拼接的形式
            }],
        });
    }

    /*请求拦截器*/
    request(fun) {
        this.axios.interceptors.request.use((config) => {
            this.load.request++;
            fun && fun(this.load.request);
            return config;
        }, function (error) {
            console.error(error);
        });
    }

    /*响应拦截器*/
    response(fun) {
        this.axios.interceptors.response.use((response) => {
            this.load.request--;
            if (!this.load.request) {
                fun && fun();
            }
            return response;
        }, function (error) {
            console.error(error);
        });
    }

    setAuth_(access_token) {
        if (access_token) {
            this.axios.interceptors.request.use(function (config) {
                /*会生成一个Authorization: Bearer token头信息*/
                config.headers['Authorization'] = 'Bearer ' + access_token;
                return config;
            }, function (error) {
                return Promise.reject(error);
            });
        }
    }

    /*上传图片，原生api*/
    uploadMedia(){
        return new Promise((resolve)=> {
            this.price.getPhoto ({
                type:"all",
                totalcount: 1, //上传总数，每调用一次上传一张
                iscroppic:this.isIOS(), //是否ios终端
                from:"AddInfo", //未发现作用
                onSuccess: function(data){
                    let type = data.photos[0].split('.')[1];
                    if (type==='png' || type==='gif' || type==='jpeg' || type==='jpg' || type==='bmp'){
                        type='img';
                    }else if (type==='mp4'){
                        type='video';
                    }else if(type==='mp3'){
                        type='music';
                    }
                    resolve({'address':data.photos[0],'code':1,'type':type});
                }, onError:function(){
                    resolve({'address':null,'code':0,'type':null});
                }
            });
        });
    }

    /*上传图片常用，返回的是图片地址*/
    uploadMedia1()
    {
        return new Promise((resolve)=> {
            let file = event.target.files;
            let createObjectURL = function(blob){
                return window[window.webkitURL?'webkitURL':'URL']['createObjectURL'](blob);
            };
            if(file[0]){
                let type = file[0]['type'];
                let code = 1;
                if (type==='image/png' || type==='image/gif' || type==='image/jpeg' || type==='image/bmp'){
                    type='img';
                }else if (type==='mp4'){
                    type='video';
                }else if(type==='mp3'){
                    type='music';
                }else{
                    code=0;
                }
                resolve({'address':createObjectURL(file[0]),'code':code,'type':type});
            }
        });
    }

    /*上传图片，返回的是资源码*/
    uploadMedia2()
    {
        return new Promise((resolve)=> {
            let file = event.target.files;
            let reader = new FileReader();
            for(let i = 0;i<file.length;i++){
                //上传类型判断
                let name = file[i].name;
                let place = name.lastIndexOf(".");
                if (place !== -1){
                    let postfix = name.substr(place+1).toLowerCase();
                    if (postfix=='jpg' || postfix=='jpeg' || postfix=='png' || postfix=='bmp' || postfix=='gif'){
                        reader.onload = (e)=>{
                            resolve({'media':reader.result,'code':1,'type':postfix});
                        }
                    }
                }else{
                    resolve({'media':place,'code':0,'type':null});
                }
            }
        });
    }
}

export default Ajax;
