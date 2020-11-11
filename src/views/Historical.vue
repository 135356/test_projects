<template>
    <div class="home">
        <HeadNav>
            <div class="top">
                <table class="button">
                    <tr>
                        <td @click="$An_link.to('/')">{{'查看url'|_}}</td>
                        <td class="active">{{'历史状态'|_}}</td>
                    </tr>
                </table>
            </div>
        </HeadNav>
        <div class="content">
            <div class="thead">
                <table>
                    <thead>
                    <tr>
                        <th>{{'调用时间'|_}}</th>
                        <th>{{'加载时间'|_}}</th>
                        <th>{{'状态'|_}}</th>
                        <th>{{'消息提示'|_}}</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div class="tbody">
                <table>
                    <tbody>
                    <tr v-for="(v,i) in url_state">
                        <td>{{v.time}}</td>
                        <td>{{v.load_time}}</td>
                        <td>{{v.state}}</td>
                        <td>{{v.msg}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
        }
    }
</script>
<style scoped lang="scss">
    .home{
        .top{
            position:relative;
            font-size:14px;
            .time{
                position:absolute;
                top:0;left:0;
                width:100px;
                height:20px;
                padding-top:20px;
                line-height:20px;
                background:rgb(89,203,18);
                .msg{
                    color:#fff;
                }
                .number{
                    width:100%;
                    height:60px;
                    line-height:60px;
                    color:#fff;
                    background:rgb(89,203,18);
                }
            }
            .button{
                position:absolute;
                top:0;left:160px;
                width:40%;
                color:rgba(89,203,18,0.6);
                tr{
                    td.active{
                        color:rgb(89,203,18);
                        border-bottom:solid 2px rgb(89,203,18);
                    }
                }
            }
        }
        .content{
            position:relative;
            width:90%;
            margin:auto;
            .thead{
                font-size:14px;
                margin:20px auto;
                border-bottom:solid 1px rgb(226,226,226);
                td{
                    border:solid 1px rgb(226,226,226);
                }
            }
            .tbody{
                width:100%; height:600px;
                font-size:12px;
                overflow-y:scroll;
                td{
                    width:25%;
                    border:solid 1px rgb(226,226,226);
                }
            }
        }
    }
</style>
