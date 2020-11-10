<template>
    <div class="home">
        <div class="time_number">{{time_number}}</div>
        <div @click="$An_link.to('/Historical')" class="historical">{{'历史记录页'|_}}</div>
        <table>
            <tr v-for="(v,i) in url_list">
                <td>{{v}}</td>
            </tr>
        </table>
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
        position:relative;
        width:90%;
        margin:auto;
        .time_number{
            position:absolute;
            top:50px;right:100px;
            z-index: 2;
            width:100px;
            height:100px;
            line-height:100px;
            color:#fff;
            border-radius:10px;
            background:rgba(0,0,0,0.8);
        }
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
                    text-align: left;
                }
            }
        }
    }
</style>
