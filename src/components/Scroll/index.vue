<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>

    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name: "scroll",
        props:{
            handleToScroll:{
                type:Function,
                default: function(){}
            },
            handleToTouchEnd:{
                type:Function,
                default: function(){}
            }
        },
        mounted(){
            var scroll = new BScroll(this.$refs.wrapper,{
                //因为 better-scroll 会阻止原生的 click 事件，我们可以设置 tap 为 true，
                //它会在区域被点击的时候派发一个 tap 事件 开启tap配置
                tap : true,
                probeType: 1
            });
            // 将scroll添加到属性中，在方法中使用。
            this.scroll = scroll;
            scroll.on('scroll',(pos)=>{
                this.handleToScroll(pos);
            });
            scroll.on('touchEnd',(pos)=>{
                this.handleToTouchEnd(pos);
            })
        },
        methods:{
            toScroll(y){
                this.scroll.scrollTo(0,y);
            }
        }
    }
</script>

<style scoped>
    .wrapper{ height:100%;}
</style>
