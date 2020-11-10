<template>
    <div class="home">
        <div @click="$An_link.to('/')" class="historical">{{'返回'|_}}</div>
        <table>
            <tr style="border:none;">
                <th>{{'调用时间'|_}}</th>
                <th>{{'加载时间'|_}}</th>
                <th>{{'状态'|_}}</th>
                <th>{{'消息提示'|_}}</th>
            </tr>
            <tr v-for="(v,i) in url_state">
                <td>{{v.time}}</td>
                <td>{{v.load_time}}</td>
                <td>{{v.state}}</td>
                <td>{{v.msg}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Historical',
        components: {},
        data() {
            return {
                url_state:'',
            }
        },
        watch: {},
        methods: {},
        created() {},
        mounted() {
            this.url_state=this.$An_data.getLocal_('github_url');
            let new_url_state=0;
            setInterval(()=>{
                new_url_state=this.$An_data.getLocal_('github_url');
                if(new_url_state){
                    document.body.scrollTop += 500;
                    document.documentElement.scrollTop += 500;
                    this.url_state=new_url_state;
                    this.$forceUpdate();
                }
            },5000);
        }
    }
</script>
<style scoped lang="scss">
    .home{
        position:relative;
        width:90%;
        margin:auto;
        .historical{
            position:absolute;
            top:200px;right:100px;
            z-index: 2;
            height:40px;
            line-height:40px;
            padding:10px 20px;
            color:#fff;
            border-radius:10px;
            background: linear-gradient(135deg, #FE6702 0%, #FF1307 100%);
        }
        table{
            tr{
                border-bottom:solid 3px #666;
                td{
                    height:40px;
                    text-align: center;
                }
            }
        }
    }
</style>
