// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import IndexPage from './components/indexPage'
Vue.use(Router)
Vue.config.productionTip = false

/* eslint-disable no-new */
let router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		}
	]
});
new Vue({
  el: '#app',
  router,
  components: { IndexPage },
  template: '<IndexPage/>'
})
