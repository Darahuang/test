import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import All from '../views/All.vue';
// import Card from '../components/Card.vue';
// import Hello from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/newPage',
    name: 'newPage',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../components/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../components/ComponentB.vue'),
      },
      {
        path: 'dynamic/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        path: 'router',
        component: () => import('../views/Router.vue'),
      },
      {
        path: 'dynamicByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'namedview',
        name: 'namedview',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'a2b',
            components: {
              left: () => import('../components/ComponentA.vue'),
              right: () => import('../components/ComponentB.vue'),
            },
          },
        ],
      },

    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (to.fullPath.match('newPage')) {
      return {
        top: 0,
      };
    }
    return {};
  },
});

export default router;
