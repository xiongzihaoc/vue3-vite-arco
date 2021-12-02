import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
// 2. 定义路由配置
const routes = [
    {
        path: "/",
        component: () => import('@/views/login/login.vue'),
    },
    {
        path: "/dashboard",
        component: () => import('@/views/dashboard/dashboard.vue'),
    },
    // {
    //     path: "/listOne",
    //     component: () => import('../views/listOne.vue'),
    // },
    // {
    //     path: "/listTwo",
    //     component: () => import('../views/listTwo.vue'),
    // },
    // 404页面
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/404/404.vue"),
    },
];

// 3. 创建路由实例
const router = createRouter({
    // 4. 采用hash 模式
    // history: createWebHashHistory(),
    // 采用 history 模式
    history: createWebHistory(),
    routes,//使用上方定义的路由配置
});
export default router 