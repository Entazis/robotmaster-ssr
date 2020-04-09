import NotFound from './client/not-found';
import Test from './client/test-page';

import loadData from './helpers/loadData';

const Routes = [
  {
    path: '/:language',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/v6-trial',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/v7-trial',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/about',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/events',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/applications',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/newsroom',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/contact',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/disclaimer',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/eula',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/gdpr',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/partners',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/privacy',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/products',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/whats-new',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/success-stories',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/why-robotmaster',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    component: NotFound
  }
];

export default Routes;