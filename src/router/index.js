import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ProjectsShow from '../views/ProjectsShow.vue';
import ProjectsIndex from '../views/ProjectsIndex.vue';
import ResumesShow from '../views/ResumesShow.vue';
import Services from '../views/Services.vue';
import BlogsIndex from '../views/BlogsIndex.vue';
import BlogsShow from '../views/BlogsShow.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects/:id',
    name: 'projects-show',
    component: ProjectsShow
  },
  {
    path: '/projects',
    name: 'projects-index',
    component: ProjectsIndex
  },
  {
    path: '/resumes/:id',
    name: 'resumes-show',
    component: ResumesShow
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/blog/:id',
    name: 'blogs-show',
    component: BlogsShow
  },
  {
    path: '/blogs',
    name: 'blogs-index',
    component: BlogsIndex
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
