<template>
        <div class="city_body">
            <div class="city_list">
                <Loading v-if="isLoading"></Loading>
                <Scroll ref="city_list">
                    <div>
                        <div class="city_hot">
                            <h2>热门城市</h2>
                            <ul class="clearfix">
                                <li v-for="city in hotList" :key="city.id" @tap="handleToCity(city.nm,city.id)">{{city.nm}}</li>
                            </ul>
                        </div>
                        <div class="city_sort" ref="city_sort">
                            <div v-for="item in cityList" :key="item.index">
                                <h2>{{item.index}}</h2>
                                <ul>
                                    <li v-for="itemList in item.list" @tap="handleToCity(itemList.nm,itemList.id)">{{itemList.nm}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Scroll>
            </div>
            <div class="city_index">
                <ul>           <!--index下标0,1,2...-->                                      <!-- 移动端的触摸事件 -->
                    <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{ item.index }}</li>
                </ul>
            </div>
        </div>
</template>

<script>
    /*
    * AOP将共用的属性方法提取出来*/
    export default {
        name: "City",
        data(){
          return {
              cityList:[],
              hotList:[],
              isLoading: true
          }
        },
        //mounted: 通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
        mounted(){
            let cityList = window.localStorage.getItem('cityList');
            let hotList = window.localStorage.getItem('hotItem');
            if(cityList && hotList){
                this.cityList = JSON.parse(cityList);
                this.hotList = JSON.parse(hotList);
                this.isLoading = false;
            }else{
                this.axios.get('/api/cityList').then((res)=>{
                    let msg = res.data.msg;
                    if(msg ==='ok'){
                        let cities = res.data.data.cities;
                       // console.log(res);
                        let {cityList,hotList} = this.formatCityList(cities);
                        this.cityList = cityList;
                        this.hotList = hotList;
                        this.isLoading = false;
                        // 本地存储
                        window.localStorage.setItem('cityList',JSON.stringify(cityList));
                        window.localStorage.setItem('hotList',JSON.stringify(hotList));
                    }
                });
            }
        },
        methods: {
            formatCityList(cities) {
            /*
                *    cityList =[
                *           {index:A,list:[{nm:"北京",id:1},{},{},......]}
                *           {index:A,list:[{},{},{},......]}
                *           ....
                *    ]
                * */
                let cityList = [];
                let hotList = [];
                for (let i = 0; i < cities.length; i++) {
                    let firstLetter = cities[i].py.substring(0,1).toUpperCase();
                    if (toCom(firstLetter)) {
                        // 新添
                        cityList.push({index: firstLetter,list:[{nm: cities[i].nm,id:cities[i].id}]});
                    } else {
                        // 累加
                        for (let j = 0; j < cityList.length; j++) {
                            if (cityList[j].index === firstLetter) {
                                cityList[j].list.push({nm: cities[i].nm,id:cities[i].id});
                            }
                        }
                    }
                }
                // 排序 A-Z
                cityList.sort((n1, n2)=>{
                    if(n1.index>n2.index){
                        return 1;
                    }else if(n1.index<n2.index){
                        return -1;
                    }else{
                        return 0;
                    }
                });
                // 热门城市
                for(let i=0; i<cities.length; i++){
                    if(cities[i].isHot === 1){
                        hotList.push(cities[i]);
                    }
                }

                // 判断是否累加还是新增
                function toCom(firstLetter) {
                    for (let j = 0; j < cityList.length; j++) {
                        if (firstLetter === cityList[j].index) {
                            // 累加
                            return false;
                        }
                    }
                    // 新添
                    return true;
                }
                return {
                    cityList,
                    hotList
                }
            },
            // 跳转到相应index
            handleToIndex(index){
                let h2 = this.$refs.city_sort.getElementsByTagName('h2');
                //this.$refs.city_sort.parentNode.scrollTop =  h2[index].offsetTop;
                this.$refs.city_list.toScroll(-h2[index].offsetTop);
            },
            handleToCity(nm,id){
                window.localStorage.setItem('nowNm',nm);
                window.localStorage.setItem('nowId',id);
                this.$store.commit('city/CITY_INFO',{nm,id});
            }
        },
    }
</script>

<style scoped>
    #content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
    .city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
    .city_body .city_list::-webkit-scrollbar{
        background-color:transparent;
        width:0;
    }
    .city_body .city_hot{ margin-top: 20px;}
    .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
    .city_body .city_sort div{ margin-top: 20px;}
    .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
    .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
    .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>
