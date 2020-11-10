class data{

    /*获取url数据*/
    getUrlList()
    {
        return new Promise((resolve)=>{
            let state={
                'time':Date.now(), //开始时间
                'load_time':0, //加载时间
                'state':0, //状态
                'msg':'' //消息提示
            };
            this.axios.get('https://api.github.com').then(res=>{
                let r_data = '';
                state['load_time']=Date.now();
                if(res.data){
                    state['state']=1;
                    r_data=res.data;
                }else{
                    state['state']=-1;
                    state['msg']='请求成功但是没有数据';
                    console.error(res);
                }
                this.addLocal_('github_url',state,28800);
                resolve(r_data);
            }).catch((error)=>{
                state['load_time']=Date.now();
                state['state']=-2;
                state['msg']='请求失败';
                this.addLocal_('github_url',state,28800);
                console.error(error);
            });
        });
    }

}

export default data;