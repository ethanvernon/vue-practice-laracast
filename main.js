Vue.component('practice-component', {

	template: '<li><slot></slot></li>'

});


new Vue({
	el: '#component'
})