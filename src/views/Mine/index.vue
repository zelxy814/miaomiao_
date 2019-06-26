<template>
    <div>
        <HeaderVue title="我的喵喵"></HeaderVue>
        <Login/>
        <TabBarVue></TabBarVue>
    </div>
</template>

<script>
    import HeaderVue from '@/components/Header'
    import TabBarVue from '@/components/TabBar'
    import Login from "@/components/LoginIn"
    export default {
        name: "Mine",
        components:{
            HeaderVue,
            TabBarVue,
            Login
        }
    }
</script>

<style scoped>

</style>
