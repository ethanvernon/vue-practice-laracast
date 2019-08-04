Vue.component('practice-component', {

	template: '<li><slot></slot></li>',

	data() {
		return {
			message: 'in a component data has to be function that returns an object'
		}
	}

});


new Vue({
	el: '#component'
})