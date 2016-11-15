require.config({
	paths:{
		"jquery":"lib/jquery-v3.1",
		'backbone':'lib/backbone',
		'underscore':'lib/underscore',
		'text':'lib/text',
		'css':'lib/css',
		'zepto':'lib/zepto',
		'touch':'lib/touch'
	}
})

require(['jquery','backbone'],function ($,Backbone) {
	
	var Router = Backbone.Router.extend({
		
		routes:{
			"home":'homeFn',
			'supermarket':'supermarketFn',
			'fresh':'freshFn',
			'cart':'cartFn',
			'mine':'mineFn',
			'crazybuy':'crazybuyFn',
			'geolocation':'geolocationFn',
			'history':'historyFn',
			'integration':'integrationFn',
			'myorder':'myorderFn',
			'search':'searchFn'
			
			
		},
		
		homeFn:function(){
			require(['./modules/home/home.js','zepto'],function (home,$) {
				home.render();
				home.getData();
				home.swiper();
				home.add();
			})
		},
		supermarketFn:function(){
			require(['./modules/supermarket/supermarket.js'],function (supermarket) {
				supermarket.render();
				supermarket.getData();
				supermarket.addAndMin();
			
			})
		},
		freshFn:function(){
			require(['./modules/fresh/fresh.js'],function (fresh) {
				fresh.render();
				fresh.getData();
				fresh.add();
			})
		},
		cartFn:function(){
			require(['./modules/cart/cart.js'],function (cart) {
				cart.render();
				cart.storage();
				cart.addAndMin();
				cart.allChoose();
			})
		},
		mineFn:function(){
			require(['./modules/mine/mine.js'],function (mine) {
				mine.render();
			})
		},
		crazybuyFn:function () {
			require(['./modules/crazybuy/crazybuy.js'],function (crazybuy) {
				crazybuy.render();
			})
		},
		geolocationFn:function () {
			require(['./modules/geolocation/geolocation.js'],function (geolocation) {
				geolocation.render();
			})
		},
		historyFn:function () {
			require(['./modules/history/history.js'],function (history) {
				history.render();
				history.input();
			})
		},
		integrationFn:function () {
			require(['./modules/integration/integration.js'],function (integration) {
				integration.render();
			})
		},
		myorderFn:function () {
			require(['./modules/myorder/myorder.js'],function (myorder) {
				myorder.render();
			})
		},
		searchFn:function () {
			require(['./modules/search/search.js'],function (search) {
				search.render();
			})
		}
		
		
	});
	
	var router = new Router();
	Backbone.history.start();
})

