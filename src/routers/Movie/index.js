// @ 表示src目录,按需加载
export default{
    path:'/movie',
    component:()=>import('@/views/Movie'),
    //二级路由
    children:[
        {
            path:'comingSoon',
            component:()=>import('@/components/ComingSoon')
        },
        {
            path:'city',
            component:()=>import('@/components/CiTy')
        },
        {
            path:'nowPlaying',
            component:()=>import('@/components/NowPlaying')
        },
        {
            path:'search',
            component:()=>import('@/components/Search')
        },
        {    // 视图路由
            path: 'detail/:id',
            components: {
                detail: () => import('@/views/Movie/detail')
            },
            // 多个显示区域
            props: {
                detail: true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}


/*
* import MovieRouter from '@/views/Movie'
* export default{
    path:'/movie',
    component:MovieRouter
}
* */
