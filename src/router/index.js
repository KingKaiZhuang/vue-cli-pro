import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewpageView.vue'),
    children: [
      {
        path: 'a',
        component: import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        component: import("../views/ComponentB.vue")
      },
      {
        path: 'dynamicRouter/:id',
        component: import('../views/DynamicRouter.vue')
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log(route.params.id);
          return {
            id: route.params.id
          }
        }
      },
      {
        path: 'namedview',
        component: import("../views/NamedView.vue"),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue')
            }
          },
          {
            path: 'a2c',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentC.vue')
            }
          }
        ]
      }
    ]
  },
  {
    path: '/namedview',
    component: import('../views/NamedView.vue'),

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
