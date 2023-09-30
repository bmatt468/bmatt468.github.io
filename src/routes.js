import Index from '@/pages/Index.vue';
import NotFound from '@/pages/404.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
