<template>
    <div class="home">
        <HeadNav>
            <div class="top">
                <div class="time">
                    <div class="msg">{{'倒计时刷新'|_}}</div>
                    <div class="number">{{time_number}}</div>
                </div>
                <table class="button">
                    <tr>
                        <td class="active">{{'查看url'|_}}</td>
                        <td @click="$An_link.to('/Historical')">{{'历史状态'|_}}</td>
                    </tr>
                </table>
            </div>
        </HeadNav>
        <div class="content">
            <table>
                <tr v-for="(v,i) in url_list">
                    <td>{{v}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                url_list:'',
                time_number:6,
            }
        },
        watch: {},
        methods: {},
        created() {},
        mounted() {
            setInterval(()=>{
                if(this.time_number--<2){
                    this.time_number=6;
                    this.$An_data.getUrlList().then(res => {
                        if(res){
                            this.url_list=res;
                            this.$forceUpdate();
                        }
                    });
                }
            },1000);
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
            width:100%;
            height:800px;
            font-size:12px;
            margin:20px auto 0;
            overflow-y:scroll;
            table{
                td{
                    width:25%;
                    border:solid 1px rgb(226,226,226);
                }
            }
        }
    }
</style>
