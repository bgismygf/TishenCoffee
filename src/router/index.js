import Vue from 'vue';
import Router from 'vue-router';

// 前台
import Layout from '@/views/Layout';
import Home from '@/views/front/Home';
import Products from '@/views/front/Products';
import Signin from '@/views/front/Signin';
import Createorder from '@/views/front/Createorder';
import MoreContent from '@/views/front/MoreContent';

// 後台
import Dashboard from '@/views/admin/Dashboard';
import ProductsManage from '@/views/admin/ProductsManage';
import OrderMessage from '@/views/admin/OrderMessage';
import CouponMessage from '@/views/admin/CouponMessage';

Vue.use(Router);

export default new Router({
  routes: [
    // 前台
    {
      path: '*',
      redirect: '/home',
    },
    {
      name: 'Layout',
      path: '/',
      component: Layout,
      children: [
        {
          name: 'Home',
          path: '/',
          component: Home,
        },
        {
          name: 'Products',
          path: 'products',
          component: Products,
        },
        {
          name: 'Createorder',
          path: 'create_order',
          component: Createorder,
        },
        {
          name: 'MoreContent',
          path: 'more_content/:productId',
          component: MoreContent,
        },
      ],
    },
    {
      name: 'Signin',
      path: '/signin',
      component: Signin,
    },
    // 後台
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          name: 'ProductsManage',
          path: 'products_manage',
          component: ProductsManage,
          meta: { requiresAuth: true },
        },
        {
          name: 'OrderMessage',
          path: 'order_message',
          component: OrderMessage,
          meta: { requiresAuth: true },
        },
        {
          name: 'CouponMessage',
          path: 'coupon_message',
          component: CouponMessage,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
