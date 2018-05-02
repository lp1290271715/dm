// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Layout from './pages/layout'
import IndexPage from './pages/indexPage'
import PersonMsg from './pages/personMsg'
Vue.use(Router)
//Vue.config.productionTip = false

/* eslint-disable no-new */
let router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage,
		},
		{
			path:'/personMsg',
			component:PersonMsg
		},
		{
			path:'/index',
			component:IndexPage
		}
	]
});
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
