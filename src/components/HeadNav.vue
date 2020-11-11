<template>
    <div class="HeadNav">
        <div class="aa1">
            <div class="left">{{'定时获取'|_}}url</div>
            <div class="right">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeadNav',
        props: {}
    }
</script>

<style scoped lang="scss">
    .HeadNav{
        position:relative;
        width:100%;
        height:100px;
        line-height:100px;
        .aa1{
            position:fixed;
            top:0;left:0;
            z-index: 2;
            width:100%;
            height:100px;
            border-bottom:solid 1px rgb(243,243,243);
            background:#fff;
            .left{
                position:absolute;
                top:0;left:0;
                width:30%;
                height:100%;
                overflow:hidden;
                color:#F99D3B;
            }
            .right{
                position:absolute;
                top:0;right:0;
                width:50%;
            }
        }
    }
</style>
