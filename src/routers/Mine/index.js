
export default {
    path:'/mine',
    component:()=>import('@/views/Mine'),
    //二级路由
    children:[
        {
            path:'city',
            component:()=>import('@/components/CiTy')
        },
        {
            path:'comingSoon',
            component:()=>import('@/components/ComingSoon')
        },
        {
            path:'nowPlaying',
            component:()=>import('@/components/NowPlaying')
        },
        {
            path:'search',
            component:()=>import('@/components/Search')
        }
    ]
}
