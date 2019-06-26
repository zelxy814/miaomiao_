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
