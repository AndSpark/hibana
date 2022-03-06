import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes:RouteRecordRaw[] =  [
	{
		name:'Index',
		path: '/',
		component:()=>import('../views/index/index.vue')
	},
	{
		name:"Login",
		path: '/login',
		component:()=>import('../views/login/index.vue')
	},
	{
		name: "Covid19",
		path: '/covid19',
		component:()=>import('../components/covid19/index.vue')
	}
]


const router = createRouter(
	{
		history: createWebHashHistory(),
		routes
	}
)


export default router