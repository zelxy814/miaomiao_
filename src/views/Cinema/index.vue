<template>
    <div id="main">
        <HeaderVue title="喵喵影院"></HeaderVue>

        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="brand_swtich">
                    品牌 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="feature_switch">
                    特色 <i class="iconfont icon-lower-triangle"></i>
                </div>
            </div>
            <CityList/>
        </div>
        <TabBarVue></TabBarVue>
    </div>
</template>

<script>
    import HeaderVue from '@/components/Header'
    import TabBarVue from '@/components/TabBar'
    import CityList from "@/components/CityList"
    import City from "../../components/CiTy/index";
    export default {
        name: "Cinema",
        components:{
            City,
            HeaderVue,
            TabBarVue,
            CityList
        }
    }
</script>

<style scoped>
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
