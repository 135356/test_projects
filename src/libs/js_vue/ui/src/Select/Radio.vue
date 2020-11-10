<template>
    <div class="container" @click="selectF()">
        <div v-if="style==='img'" class="select_img">
            <img v-if="select" src="./assets/img/radio.png" />
            <div v-else src="./assets/img/radio.png" />
        </div>
        <div v-else class="select_icon" :class="{'active':select}"><i class="an1_iconfont">&#xe61c;</i></div>
    </div>
</template>

<script>
    export default {
        name:'AnSelectRadio',
        props: {index_:Number,value_:String|Number,select_:String|Number,style_:String},
        data() {
            return {
                select:0,
                value:this.value_,
                style:this.style_||''
            }
        },
        watch: {
            select_(val)
            {
                if(val===this.value){
                    this.select=true;
                }else{
                    this.select=false;
                }
            },
            value_(val)
            {
                this.value=val;
                if(val===this.select_){
                    this.select=true;
                }else{
                    this.select=false;
                }
            }
        },
        methods: {
            selectF() {
                this.select=!this.select;
                this.$emit('AnSelectRadioF', {'index':this.index_,'val':this.value});
            }
        },
        created() {
            if(this.select_===this.value){
                this.select=true;
            }
        },
        mounted() {
        },
        destroyed() {}
    }
</script>

<style scoped lang="scss">
    .container {
        display:inline-block;
        .select_icon{
            width:21px;
            height:21px;
            line-height: 21px;
            border-radius:40%;
            display:inline-block;
            text-align: center;
            border:solid 1px #eee;
            background:#fff;
            i{
                color:#fff;
                visibility: hidden;
            }
        }
        .select_icon.active{
            border:solid 1px #2299ff;
            background:#3399ff;
            i{
                color:#fff;
                visibility: visible;
            }
        }
        .select_img{
            img{
                width:20px;
                height:20px;
                line-height: 20px;
            }
            div{
                width:19px;
                height:19px;
                line-height: 19px;
                border-radius:50%;
                border:solid 1px #eee;
            }
        }
    }
</style>