import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AccountBook from '@/pages/AccountBook'
import AccountBookDetail from '@/pages/AccountBookDetail'
import MainPage from '@/pages/Main'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MainPage
    },
    {
      path: '/account_book',
      name: 'AccountBook',
      component: AccountBook,
    },
    {
      path: '/account_book/:bookID',
      name: 'AccountBookDetail',
      component: AccountBookDetail,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ],
  mode: 'history',
})
