<template>
    <div id="main">
        <HeaderVue title="喵喵电影"></HeaderVue>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/movie/city" class="city_name">
                    <span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <div class="hot_swtich">
                    <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
                    <router-link tag="div" to="/movie/comingSoon" class="hot_item ">即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search_entry">
                    <i class="iconfont icon-sousuo"></i>
                </router-link>
            </div>
            <!--二级路由-->
            <!--keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。-->
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <TabBarVue></TabBarVue>
        <!--视图路由-->
        <router-view name="detail"></router-view>
    </div>
</template>

<script>
    import HeaderVue from '@/components/Header'
    import TabBarVue from '@/components/TabBar'
    export default {
        name: "Movie",
        components:{
            HeaderVue,
            TabBarVue,
        }
    }
</script>

<style scoped>
    #content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
    .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
    .movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
    .movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
    .movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
    .movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry i{  font-size:24px; color:red;}


</style>
