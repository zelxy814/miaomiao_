<template>
    <!--ref属性方便找到dom元素-->
    <div class="movie_body" ref="movie_body">
       <!--  加载loading-->
        <Loading v-if="isLoading"></Loading>
        <Scroll v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
        <ul>
            <li class="pull">{{pullDownMsg}}</li>
            <li  v-for="item in movieList" :key="item.id">
                <!--在web手机端，clikc会有200-300ms的延时，所以要用tap代替click作为点击事件，
                singleTap和doubleTap分别作为单次点击和双击，但是使用tap会带来点透事件(事件穿透)。
                -->
                <div class="pic_show" @tap="handleToDetail"><img :src="item.img | setWH('128.180')"></div>
                <div class="info_list">
                    <h2>{{item.nm}}<img v-if="item.version" src="@/assets/maxs.png" alt=""></h2>
                    <p>观众评 <span class="grade">{{item.sc}}</span></p>
                    <p>主演: {{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li class="pull">{{pullUp}}</li>
        </ul>
        </Scroll>
    </div>
</template>

<script>
    /*better-scroll
    *1.体验像原生：滚动非常流畅，而且没有滚动条。*/
    /*import BScroll from 'better-scroll';*/
    export default {
        name: "NowPlaying",
        data(){
          return {
              movieList:[],
              pullDownMsg:'',
              pullUp:'',
              isLoading:true,
              prevCityId: -1
          }
        },
        // activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等
        activated(){
            // 如果城市不发生变化，不用重新加载数据
            var cityId = this.$store.state.city.id;
            if(this.prevCityId === cityId){
                return ;
            }
            this.isLoading = true;
            this.axios.get('/api/movieOnInfoList?cityId='+cityId).then((res)=>{
                let msg = res.data.msg;
                if(msg === 'ok'){
                    this.movieList = res.data.data.movieList;
                    this.isLoading = false;
                    this.prevCityId = cityId;
                   // 在页面渲染完成后再触发BScroll()
                      /* this.$nextTick(()=>{
                              var scroll = new BScroll(this.$refs.movie_body,{
                               //因为 better-scroll 会阻止原生的 click 事件，我们可以设置 tap 为 true，
                               //它会在区域被点击的时候派发一个 tap 事件 开启tap配置
                                     tap : true,
                                    probeType: 1
                                });
                                // 添加滚动事件
                                scroll.on('scroll',(pos)=>{
                                     if(pos.y > 30){
                                         this.pullDownMsg = '正在更新中';
                                     }else if(pos.y<(scroll.maxScrollY - 30)){
                                         this.pullUp = '加载更多';
                                     }
                                 });
                                 scroll.on('touchEnd',(pos)=> {
                                     if (pos.y > 30) {
                                         this.axios.get('/api/movieOnInfoList?cityId=10')
                                             .then((res) => {
                                                 let msg = res.data.msg;
                                                 if (msg === 'ok') {
                                                     this.movieList = res.data.data.movieList;
                                                 }
                                             });
                                         this.pullDownMsg = '更新成功';
                                     }
                                 })

                          });*/
                }
            });
        },
        methods:{
            handleToDetail(){
                console.log("kkk");
            },
            handleToScroll(pos){
                if(pos.y > 30){
                    this.pullDownMsg = '正在更新中';
                }else if(pos.y<(scroll.maxScrollY - 30)){
                    this.pullUp = '加载更多';
                }
            },
            handleToTouchEnd(pos){
                if( pos.y > 30 ){
                    this.axios.get('/api/movieOnInfoList?cityId=11').then((res)=>{
                        var msg = res.data.msg;
                        if( msg === 'ok' ){
                            this.pullDownMsg = '更新成功';
                            this.movieList = res.data.data.movieList;
                            setTimeout(()=>{
                                this.pullDownMsg = '';
                            },1000);
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>
    #content .movie_body{ flex:1; overflow:auto;}
    .movie_body ul{ margin:0 12px; overflow: hidden;}
    .movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
    .movie_body .pic_show{ width:64px; height: 90px;}
    .movie_body .pic_show img{ width:100%;}
    .movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
    .movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
    .movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
    .movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
    .movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
    .movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
    .movie_body .btn_pre{ background-color: #3c9fe6;}
    .movie_body .pull{margin:0; padding: 0; border:none;}
</style>
