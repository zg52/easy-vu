<template>
    <div>
        <div class="toolTip">
            <div class="msgs">
                <p>系统提示</p>
                <span>登录过期</span>
                <div>
                    <button>取消</button>
                    <button>确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    @import "../.././assets/css/public.less";
    .toolTip {
        .w100;
        height: 100%;
        position: fixed;
        top:0;
        background: rgba(0,0,0,.7);
    }
    .msgs {
        .w-h(300,200);
        padding:20px;
        background: #fff;
        position: fixed;
        transform: translate(-50%,-50%);
        top:50%;
        left:50%;
           
    }
</style>