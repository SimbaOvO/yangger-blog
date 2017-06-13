import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Blog from '@/components/Blog'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Blogs',
      component: Posts
    },
    {
      path: '/Blog/:index',
      name: 'Blog',
      component: Blog
    }
  ]
})
