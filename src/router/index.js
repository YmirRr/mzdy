import Vue from 'vue'
import Router from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/components/container/index/index')), 'chunkname1')
const detail = r => require.ensure([], () => r(require('@/components/container/detail/detail')), 'chunkname1')
const film = r => require.ensure([], () => r(require('@/components/container/film/film')), 'chunkname2')
const nowplaying = r => require.ensure([], () => r(require('@/components/container/film/now-playing')), 'chunkname2')
const comingsoon = r => require.ensure([], () => r(require('@/components/container/film/coming-soon')), 'chunkname2')
const login = r => require.ensure([], () => r(require('@/components/container/user/login')), 'chunkname3')
const user = r => require.ensure([], () => r(require('@/components/container/user/user')), 'chunkname3')
const district = r => require.ensure([], () => r(require('@/components/container/cinama/district')), 'chunkname4')
const districtItem = r => require.ensure([], () => r(require('@/components/container/cinama/districtItem')), 'chunkname4')



Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
        path: '/district',
        name: 'district',
        component: district,
        children : [
          {
            path: '/district/:pinyin',
            name: 'districtZ',
            component: districtItem,
          }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/user',
        name: 'user',
        component: user,
        meta : {
          login : true
        }
    },
    {
      path: '/film',
      name: 'film',
      component: film,
      redirect : {
        name : "nowplaying"
      },
      children : [
        {
            path:'now-playing',
            name : 'nowplaying',
            component:nowplaying
          },
          {
            path:'coming-soon',
            name : 'coming-soon',
            component:comingsoon
          }
      ]
    },

    {
      path:'/detail/:id',
      name:'detail',
      component:detail,
      props:true,
      meta:{
        login:true
      }
    }
  ]
})

router.beforeEach((to, from, next)=>{
  var flag = to.matched.some((item)=>{

    return item.meta.login;
  })
  if(flag){
    if(sessionStorage.getItem("username")){
      next();
    }
    else{
      router.push({path:'/login'});
    }
  }
  else{
    next();
  }
})
export default router;